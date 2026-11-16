import { useRef, useEffect } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
  disabled?: boolean;
}

export function useMagneticEffect<T extends HTMLElement>(options: MagneticOptions = {}) {
  const { strength = 0.35, disabled = false } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    if (window.matchMedia("(hover: none)").matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;

      el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
      el.style.transition = "transform 100ms ease-out";
    };

    const handlePointerLeave = () => {
      el.style.transform = "translate3d(0px, 0px, 0)";
      el.style.transition = "transform 400ms cubic-bezier(0.2, 0.9, 0.3, 1)";
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [strength, disabled]);

  return ref;
}
