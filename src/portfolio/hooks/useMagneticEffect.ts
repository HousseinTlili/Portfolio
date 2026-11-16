import { useEffect, useRef } from "react";
import { useRichMotion } from "./useMediaQuery";

interface MagneticOptions {
  strength?: number;
  radius?: number;
  ease?: number;
  maxOffset?: number;
}

export function useMagneticEffect<T extends HTMLElement = HTMLElement>({
  strength = 0.3,
  radius = 60,
  ease = 0.15,
  maxOffset = 8,
}: MagneticOptions = {}) {
  const ref = useRef<T>(null);
  const enabled = useRichMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const clamp = (value: number) => Math.max(-maxOffset, Math.min(maxOffset, value));

    const tick = () => {
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      element.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;

      if (Math.abs(targetX - x) > 0.05 || Math.abs(targetY - y) > 0.05) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        if (targetX === 0 && targetY === 0) element.style.transform = "";
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      // Measure from the untransformed center to avoid feedback while moving.
      const centerX = rect.left + rect.width / 2 - x;
      const centerY = rect.top + rect.height / 2 - y;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const reach = radius + Math.max(rect.width, rect.height) / 2;

      if (Math.hypot(dx, dy) < reach) {
        targetX = clamp(dx * strength);
        targetY = clamp(dy * strength);
      } else {
        targetX = 0;
        targetY = 0;
      }
      schedule();
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
      element.style.transform = "";
    };
  }, [enabled, strength, radius, ease, maxOffset]);

  return { ref };
}
