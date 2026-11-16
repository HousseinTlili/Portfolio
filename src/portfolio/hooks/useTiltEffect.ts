import { useEffect, useRef } from "react";
import { useRichMotion } from "./useMediaQuery";

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export function useTiltEffect<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 8,
  scale = 1.015,
  speed = 400,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const enabled = useRichMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rotateY = (px - 0.5) * 2 * maxTilt;
        const rotateX = -(py - 0.5) * 2 * maxTilt;
        element.style.transition = "transform 90ms linear";
        element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`;
        element.style.setProperty("--mouse-x", `${px * 100}%`);
        element.style.setProperty("--mouse-y", `${py * 100}%`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      element.style.transition = `transform ${speed}ms cubic-bezier(0.2, 0.8, 0.2, 1)`;
      element.style.transform = "";
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
      element.style.transform = "";
      element.style.transition = "";
    };
  }, [enabled, maxTilt, scale, speed]);

  return { ref };
}
