import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 60;
const LINK_DISTANCE = 150;
const MOUSE_RADIUS = 200;

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

      const targetCount = width < 768 ? 28 : NODE_COUNT;
      if (nodes.length < targetCount) {
        for (let i = nodes.length; i < targetCount; i += 1) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.2 + Math.random() * 0.3;
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

      for (const node of nodes) {
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.hypot(dx, dy);
          if (distance < MOUSE_RADIUS && distance > 40) {
            const pull = 0.01 * (1 - distance / MOUSE_RADIUS);
            node.x += dx * pull;
            node.y += dy * pull;
          }
        }
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -10) node.x = width + 10;
        if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        if (node.y > height + 10) node.y = -10;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]!;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(88,166,255,${(1 - distance / LINK_DISTANCE) * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const distance = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (distance < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(201,168,76,${(1 - distance / MOUSE_RADIUS) * 0.18})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(88,166,255,0.55)";
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
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
