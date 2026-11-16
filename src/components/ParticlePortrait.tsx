import React, { useEffect, useRef, useState } from "react";

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

interface ParticlePortraitProps {
  imageSrc: string;
  className?: string;
  onLoaded?: () => void;
}

export default function ParticlePortrait({
  imageSrc,
  className = "",
  onLoaded,
}: ParticlePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      const width = rect.width || 320;
      const height = rect.height || 416;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Render image onto offscreen canvas to sample pixel data
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      // Fit image cover
      const scale = Math.max(width / img.width, height / img.height);
      const scaledW = img.width * scale;
      const scaledH = img.height * scale;
      const offsetX = (width - scaledW) / 2;
      const offsetY = (height - scaledH) / 2;

      offCtx.drawImage(img, offsetX, offsetY, scaledW, scaledH);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const step = 6; // Grid sampling step for optimal density & 60fps performance
      const newParticles: Particle[] = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];

          // Filter out fully transparent pixels
          if (a > 60) {
            // Disperse initially around canvas
            const angle = Math.random() * Math.PI * 2;
            const distance = 150 + Math.random() * 250;
            const startX = width / 2 + Math.cos(angle) * distance;
            const startY = height / 2 + Math.sin(angle) * distance;

            newParticles.push({
              originX: x,
              originY: y,
              x: startX,
              y: startY,
              vx: (Math.random() - 0.5) * 4,
              vy: (Math.random() - 0.5) * 4,
              color: `rgb(${r},${g},${b})`,
              size: Math.random() > 0.4 ? 2.2 : 1.7,
            });
          }
        }
      }

      particles = newParticles;
      setIsReady(true);
      if (onLoaded) onLoaded();

      const repelRadius = 75;
      const spring = 0.075;
      const friction = 0.86;

      const render = () => {
        ctx.clearRect(0, 0, width, height);

        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Spring towards target origin
          const dx = p.originX - p.x;
          const dy = p.originY - p.y;
          p.vx += dx * spring;
          p.vy += dy * spring;

          // Mouse repulsion
          if (mouse.active) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const dist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (dist < repelRadius && dist > 0) {
              const force = (repelRadius - dist) / repelRadius;
              const angle = Math.atan2(mdy, mdx);
              const push = force * 6.5;
              p.vx += Math.cos(angle) * push;
              p.vy += Math.sin(angle) * push;
            }
          }

          p.vx *= friction;
          p.vy *= friction;
          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc, onLoaded]);

  // Handle pointer interactions for repulsion and click shockwave
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current = {
      x: -9999,
      y: -9999,
      active: false,
    };
  };

  const handleClick = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // Pulse scatter burst
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    mouseRef.current = {
      x: clickX,
      y: clickY,
      active: true,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        className={`w-full h-full block cursor-crosshair transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
