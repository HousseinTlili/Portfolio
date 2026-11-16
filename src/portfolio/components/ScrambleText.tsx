import { useTextScramble } from "../hooks/useTextScramble";

export default function ScrambleText({
  text,
  enabled = true,
  speed = 40,
  delay = 0,
  className = "",
}: {
  text: string;
  enabled?: boolean;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const { ref, displayText } = useTextScramble<HTMLSpanElement>(text, { enabled, speed, delay });
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
