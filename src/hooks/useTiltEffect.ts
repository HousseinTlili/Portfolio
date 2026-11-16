import { useRef, useEffect } from "react";

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
  disabled?: boolean;
}

export function useTiltEffect<T extends HTMLElement>(options: TiltOptions = {}) {
  const { maxTilt = 10, scale = 1.02, speed = 350, disabled = false } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    // Skip on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    let isHovering = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const py = Math.max(0, Math.min(100, (y / rect.height) * 100));

      element.style.setProperty("--mouse-x", `${px}%`);
      element.style.setProperty("--mouse-y", `${py}%`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      if (!isHovering) {
        element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
        isHovering = true;
      } else {
        element.style.transition = "transform 80ms ease-out";
      }

      element.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      element.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [maxTilt, scale, speed, disabled]);

  return ref;
}
