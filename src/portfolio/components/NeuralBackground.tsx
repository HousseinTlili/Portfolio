import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 60;
const LINK_DISTANCE = 160;
const MOUSE_RADIUS = 210;

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const parent = canvas?.parentElement;
    if (!canvas || !ctx || !parent) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const mouse = { x: 0, y: 0, active: false };
    const nodes: Node[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = width < 768 ? 32 : NODE_COUNT;
      if (nodes.length < targetCount) {
        for (let i = nodes.length; i < targetCount; i += 1) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.35 + Math.random() * 0.45;
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          });
        }
      } else if (nodes.length > targetCount) {
        nodes.length = targetCount;
      }
    };

    const step = () => {
      frame = 0;
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);

      const tSec = performance.now() * 0.001;
      const autoX = width * (0.5 + 0.38 * Math.sin(tSec * 0.45));
      const autoY = height * (0.5 + 0.38 * Math.cos(tSec * 0.32));
      const focalX = mouse.active ? mouse.x : autoX;
      const focalY = mouse.active ? mouse.y : autoY;

      for (const node of nodes) {
        const dx = focalX - node.x;
        const dy = focalY - node.y;
        const distance = Math.hypot(dx, dy);
        if (distance < MOUSE_RADIUS && distance > 30) {
          const pull = (mouse.active ? 0.012 : 0.006) * (1 - distance / MOUSE_RADIUS);
          node.x += dx * pull;
          node.y += dy * pull;
        }

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -15) node.x = width + 15;
        if (node.x > width + 15) node.x = -15;
        if (node.y < -15) node.y = height + 15;
        if (node.y > height + 15) node.y = -15;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]!;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < LINK_DISTANCE) {
            const alpha = (1 - distance / LINK_DISTANCE) * 0.35;
            ctx.strokeStyle = `rgba(88,166,255,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const focalDist = Math.hypot(a.x - focalX, a.y - focalY);
        if (focalDist < MOUSE_RADIUS) {
          const goldAlpha = (1 - focalDist / MOUSE_RADIUS) * (mouse.active ? 0.32 : 0.22);
          ctx.strokeStyle = `rgba(201,168,76,${goldAlpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(focalX, focalY);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(88,166,255,0.85)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.0, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = mouse.y >= 0 && mouse.y <= rect.height;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible) start();
    });
    intersection.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onLeave, { passive: true });
    window.addEventListener("pointercancel", onLeave, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    start();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onLeave);
      window.removeEventListener("pointercancel", onLeave);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
  );
}
