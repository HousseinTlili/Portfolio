import { useRef } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
  ease?: number;
  maxOffset?: number;
}

export function useMagneticEffect<T extends HTMLElement = HTMLElement>(_options: MagneticOptions = {}) {
  const ref = useRef<T>(null);
  return { ref };
}
