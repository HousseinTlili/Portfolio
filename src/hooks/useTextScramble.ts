import { useState, useEffect, useRef } from "react";

interface ScrambleOptions {
  speed?: number;
  charset?: string;
  enabled?: boolean;
}

const DEFAULT_CHARSET = "0123456789ABCDEF!@#$%&*?/";

export function useTextScramble(text: string, options: ScrambleOptions = {}) {
  const {
    speed = 35,
    charset = DEFAULT_CHARSET,
    enabled = true,
  } = options;

  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayText(text);
      return;
    }

    const element = elementRef.current;
    if (!element) {
      setDisplayText(text);
      return;
    }

    let intervalId: number | null = null;

    const startScramble = () => {
      let iteration = 0;
      const totalIterations = text.length;

      if (intervalId) clearInterval(intervalId);

      intervalId = window.setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              if (index < iteration) {
                return text[index];
              }
              return charset[Math.floor(Math.random() * charset.length)];
            })
            .join("")
        );

        iteration += 1 / 2;

        if (iteration >= totalIterations) {
          if (intervalId) clearInterval(intervalId);
          setDisplayText(text);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startScramble();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, charset, enabled]);

  return { displayText, elementRef };
}
