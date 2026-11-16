import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useMediaQuery";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?█▓░";

function scramble(text: string, resolved: number) {
  let output = text.slice(0, resolved);
  for (let i = resolved; i < text.length; i += 1) {
    const char = text[i];
    output += char === " " ? " " : CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }
  return output;
}

interface ScrambleOptions {
  speed?: number;
  enabled?: boolean;
  delay?: number;
  maxDuration?: number;
}

export function useTextScramble<T extends HTMLElement = HTMLSpanElement>(
  finalText: string,
  { speed = 40, enabled = true, delay = 0, maxDuration = 600 }: ScrambleOptions = {},
) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const active = enabled && !reduced;
  const [visible, setVisible] = useState(false);
  const [displayText, setDisplayText] = useState(finalText);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      setDisplayText(finalText);
      return;
    }
    if (!visible) {
      setDisplayText(scramble(finalText, 0));
      return;
    }

    // Resolve several characters per tick for long strings so the decode stays short.
    const ticks = Math.max(1, Math.floor(maxDuration / speed));
    const step = Math.max(1, Math.ceil(finalText.length / ticks));
    let resolved = 0;
    let interval = 0;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        resolved += step;
        if (resolved >= finalText.length) {
          setDisplayText(finalText);
          window.clearInterval(interval);
        } else {
          setDisplayText(scramble(finalText, resolved));
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [active, visible, finalText, speed, delay, maxDuration]);

  return { ref, displayText };
}
