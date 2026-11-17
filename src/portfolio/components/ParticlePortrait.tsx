import { useEffect, useRef, type RefObject } from "react";

interface Orb {
  tx: number;
  ty: number;
  sx: number;
  sy: number;
  cx: number;
  cy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  delay: number;
  duration: number;
  radius: number;
  color: string;
}

interface Spark {
  angle: number;
  dist: number;
  speed: number;
  radius: number;
  alpha: number;
  pulse: number;
}

const ORB_BUDGET = 3200;
const ASSEMBLE_START = 0.4;
const ASSEMBLE_LENGTH = 1.35;
const HOVER_RADIUS = 95;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Full-section canvas: tiny orbs fly in from all around the hero, gather on the
 * anchor element, then hand over to the full-resolution cut-out portrait.
 * When scrolled into view on mobile or desktop, the gathering animation plays.
 * Tapping or clicking the portrait re-triggers the particle assembly.
 */
export default function ParticlePortrait({
  imageSrc,
  containerRef,
  anchorRef,
}: {
  imageSrc: string;
  containerRef: RefObject<HTMLElement | null>;
  anchorRef: RefObject<HTMLElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const container = containerRef.current;
    const anchor = anchorRef.current;
    if (!canvas || !ctx || !container || !anchor) return;

    const image = new Image();
    image.crossOrigin = "anonymous";

    let width = 0;
    let height = 0;
    let dpr = 1;
    const box = { x: 0, y: 0, w: 0, h: 0 };
    let builtFor = "";
    let orbs: Orb[] = [];
    const sparks: Spark[] = [];
    let loaded = false;
    let started = false;
    let startTime = 0;
    let frame = 0;
    let visible = true;
    let isAnchorInView = false;
    let hover = 0;
    const mouse = { x: -9999, y: -9999, inside: false };

    // Initialize 28 subtle ambient orbiting sparks around the portrait
    for (let i = 0; i < 28; i += 1) {
      sparks.push({
        angle: Math.random() * Math.PI * 2,
        dist: 0.85 + Math.random() * 0.35,
        speed: (Math.random() - 0.5) * 0.015,
        radius: 1.0 + Math.random() * 1.5,
        alpha: 0.25 + Math.random() * 0.45,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const measure = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const c = container.getBoundingClientRect();
      const a = anchor.getBoundingClientRect();
      box.x = a.left - c.left;
      box.y = a.top - c.top;
      box.w = a.width;
      box.h = a.height;
    };

    const build = (force = false) => {
      const key = `${Math.round(box.w)}x${Math.round(box.h)}`;
      if (!loaded || (!force && key === builtFor) || box.w < 10) return;
      builtFor = key;

      const sampleW = Math.round(box.w);
      const sampleH = Math.round(box.h);
      const offscreen = document.createElement("canvas");
      offscreen.width = sampleW;
      offscreen.height = sampleH;
      const off = offscreen.getContext("2d", { willReadFrequently: true });
      if (!off) return;
      off.drawImage(image, 0, 0, sampleW, sampleH);
      const { data } = off.getImageData(0, 0, sampleW, sampleH);

      let opaque = 0;
      for (let i = 3; i < data.length; i += 16) if ((data[i] ?? 0) > 140) opaque += 4;
      const budget = width < 768 ? 1600 : ORB_BUDGET;
      const stride = Math.max(2, Math.sqrt(opaque / budget));

      // Keep spread constrained within visible viewport on mobile
      const maxSpread = Math.min(Math.max(sampleW, sampleH) * 2.2, Math.max(width, 420));
      const centerX = sampleW / 2;
      const centerY = sampleH / 2;
      const next: Orb[] = [];

      for (let y = stride / 2; y < sampleH; y += stride) {
        for (let x = stride / 2; x < sampleW; x += stride) {
          const px = Math.min(sampleW - 1, Math.round(x + (Math.random() - 0.5) * stride * 0.8));
          const py = Math.min(sampleH - 1, Math.round(y + (Math.random() - 0.5) * stride * 0.8));
          const index = (py * sampleW + px) * 4;
          if ((data[index + 3] ?? 0) < 140) continue;

          const angle = Math.random() * Math.PI * 2;
          const distance = maxSpread * (0.35 + Math.random() * 0.65);
          const sx = centerX + Math.cos(angle) * distance;
          const sy = centerY + Math.sin(angle) * distance;
          const swirl = (Math.random() - 0.5) * distance * 0.7;
          const r = data[index] ?? 0;
          const g = data[index + 1] ?? 0;
          const b = data[index + 2] ?? 0;

          next.push({
            tx: px,
            ty: py,
            sx,
            sy,
            cx: (sx + px) / 2 - Math.sin(angle) * swirl,
            cy: (sy + py) / 2 + Math.cos(angle) * swirl,
            x: sx,
            y: sy,
            vx: 0,
            vy: 0,
            delay: Math.random() * 0.45,
            duration: 0.85 + Math.random() * 0.5,
            radius: 0.65 + Math.random() * 0.9,
            color: `rgb(${Math.min(255, r + 18)},${Math.min(255, g + 22)},${Math.min(255, b + 34)})`,
          });
        }
      }
      orbs = next;
    };

    const draw = (time: number) => {
      const t = startTime ? (time - startTime) / 1000 : 0;
      const assembly = easeOutCubic(clamp01((t - ASSEMBLE_START) / ASSEMBLE_LENGTH));
      const orbAlpha = 1 - assembly;
      // Keep animation alive during assembly, hover, or for ambient sparks
      let active = assembly < 1 || hover > 0.002 || (assembly >= 1 && visible);

      hover += ((mouse.inside ? 1 : 0) - hover) * 0.12;
      if (hover < 0.002) hover = 0;
      const localMouseX = mouse.x - box.x;
      const localMouseY = mouse.y - box.y;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Crisp portrait, drawn from full-resolution source
      if (assembly > 0) {
        ctx.save();
        ctx.imageSmoothingQuality = "high";
        ctx.globalAlpha = assembly;
        ctx.drawImage(image, box.x, box.y, box.w, box.h);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "destination-out";
        const fade = ctx.createLinearGradient(0, box.y + box.h * 0.72, 0, box.y + box.h);
        fade.addColorStop(0, "rgba(0,0,0,0)");
        fade.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = fade;
        ctx.fillRect(box.x - 2, box.y + box.h * 0.72, box.w + 4, box.h * 0.28 + 2);

        if (hover > 0) {
          const hole = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            HOVER_RADIUS,
          );
          hole.addColorStop(0, `rgba(0,0,0,${hover})`);
          hole.addColorStop(0.55, `rgba(0,0,0,${hover * 0.85})`);
          hole.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = hole;
          ctx.fillRect(
            mouse.x - HOVER_RADIUS,
            mouse.y - HOVER_RADIUS,
            HOVER_RADIUS * 2,
            HOVER_RADIUS * 2,
          );
        }
        ctx.restore();
      }

      // Draw assembling particles
      if (assembly < 1 || hover > 0) {
        for (const orb of orbs) {
          const progress = clamp01((t - orb.delay) / orb.duration);
          let alpha = orbAlpha;

          if (progress < 1) {
            const e = easeInOutCubic(progress);
            const inv = 1 - e;
            orb.x = inv * inv * orb.sx + 2 * inv * e * orb.cx + e * e * orb.tx;
            orb.y = inv * inv * orb.sy + 2 * inv * e * orb.cy + e * e * orb.ty;
            alpha = Math.min(1, progress * 3.5) * orbAlpha;
          } else {
            if (hover > 0) {
              const dx = orb.x - localMouseX;
              const dy = orb.y - localMouseY;
              const distance = Math.hypot(dx, dy);
              if (distance < HOVER_RADIUS * 0.8 && distance > 0.01) {
                const force = ((HOVER_RADIUS * 0.8 - distance) / (HOVER_RADIUS * 0.8)) * hover;
                orb.vx += (dx / distance) * force * 1.6;
                orb.vy += (dy / distance) * force * 1.6;
              }
              const hole = clamp01(
                1 - Math.hypot(orb.tx - localMouseX, orb.ty - localMouseY) / HOVER_RADIUS,
              );
              alpha = Math.max(alpha, hole * hover * 1.4);
            }
            orb.vx = (orb.vx + (orb.tx - orb.x) * 0.08) * 0.8;
            orb.vy = (orb.vy + (orb.ty - orb.y) * 0.08) * 0.8;
            orb.x += orb.vx;
            orb.y += orb.vy;
            const displacement = Math.abs(orb.x - orb.tx) + Math.abs(orb.y - orb.ty);
            if (displacement > 0.3) {
              active = true;
              alpha = Math.max(alpha, Math.min(1, displacement / 5));
            }
          }

          if (alpha < 0.03) continue;
          ctx.globalAlpha = Math.min(1, alpha);
          ctx.fillStyle = orb.color;
          ctx.beginPath();
          ctx.arc(
            box.x + orb.x,
            box.y + orb.y,
            progress < 1 ? orb.radius * 1.3 : orb.radius,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      }

      // Draw subtle ambient sparks around the portrait halo
      if (assembly >= 0.8 && box.w > 10) {
        const cX = box.x + box.w / 2;
        const cY = box.y + box.h * 0.45;
        const baseR = box.w * 0.52;

        for (const spark of sparks) {
          spark.angle += spark.speed;
          spark.pulse += 0.03;
          const currentR = baseR * spark.dist + Math.sin(spark.pulse) * 6;
          const sX = cX + Math.cos(spark.angle) * currentR;
          const sY = cY + Math.sin(spark.angle) * currentR * 0.95;
          const a = spark.alpha * (0.6 + 0.4 * Math.sin(spark.pulse));

          ctx.globalAlpha = Math.min(1, a);
          ctx.fillStyle = spark.angle > Math.PI ? "rgba(88,166,255,0.85)" : "rgba(201,168,76,0.85)";
          ctx.beginPath();
          ctx.arc(sX, sY, spark.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      return active;
    };

    const loop = (time: number) => {
      frame = 0;
      if (!visible) return;
      if (draw(time)) frame = requestAnimationFrame(loop);
    };

    const kick = () => {
      if (!frame && loaded && visible) frame = requestAnimationFrame(loop);
    };

    const checkAndStart = () => {
      if (loaded && isAnchorInView && !started) {
        started = true;
        startTime = performance.now();
      }
      kick();
    };

    const onResize = () => {
      measure();
      build();
      kick();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      const pad = 10;
      mouse.inside =
        mouse.x > box.x - pad &&
        mouse.x < box.x + box.w + pad &&
        mouse.y > box.y - pad &&
        mouse.y < box.y + box.h * 0.85;
      if (mouse.inside || hover > 0) kick();
    };

    const onPointerLeave = () => {
      mouse.inside = false;
      kick();
    };

    // Clicking / tapping portrait re-scatters and gathers particles
    const onClickAnchor = () => {
      build(true);
      startTime = performance.now();
      kick();
    };

    const onImageReady = () => {
      loaded = true;
      measure();
      build();
      checkAndStart();
    };

    image.onload = onImageReady;
    image.src = imageSrc;
    if (image.complete) {
      onImageReady();
    }

    measure();
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);
    resizeObserver.observe(anchor);

    // Section visibility
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible) kick();
    });
    intersection.observe(container);

    // Anchor visibility: trigger the dot-gathering animation when user reaches the portrait!
    const anchorIntersection = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        isAnchorInView = true;
        checkAndStart();
      }
    }, { threshold: 0.1 });
    anchorIntersection.observe(anchor);

    anchor.addEventListener("click", onClickAnchor);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerLeave, { passive: true });
    window.addEventListener("pointercancel", onPointerLeave, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      anchorIntersection.disconnect();
      anchor.removeEventListener("click", onClickAnchor);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("pointerup", onPointerLeave);
      window.removeEventListener("pointercancel", onPointerLeave);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [imageSrc, containerRef, anchorRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
