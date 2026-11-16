import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { CornerDownLeft, Search } from "lucide-react";
import type { Dict } from "../content";

export interface PaletteCommand {
  id: string;
  group: string;
  label: string;
  hint?: string;
  keywords?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  run: () => void;
}

export default function CommandPalette({
  open,
  onClose,
  commands,
  t,
}: {
  open: boolean;
  onClose: () => void;
  commands: PaletteCommand[];
  t: Dict;
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.keywords ?? ""} ${command.group}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  const run = (command?: PaletteCommand) => {
    if (!command) return;
    onClose();
    window.setTimeout(command.run, 10);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filtered.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      run(filtered[activeIndex]);
    } else if (event.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = "";

  return (
    <div className="pf-palette-backdrop" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.command}
        className="pf-palette"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5">
          <Search size={17} className="text-white/40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.palette.placeholder}
            className="h-14 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/35"
            aria-label={t.palette.placeholder}
          />
          <kbd className="pf-kbd">ESC</kbd>
        </div>
        <div ref={listRef} className="max-h-[min(60vh,420px)] overflow-y-auto p-2" role="listbox">
          {filtered.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-white/40">{t.palette.empty}</p>
          )}
          {filtered.map((command, index) => {
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            const Icon = command.icon;
            return (
              <div key={command.id}>
                {showGroup && (
                  <p className="px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {command.group}
                  </p>
                )}
                <button
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  data-index={index}
                  onMouseMove={() => setActiveIndex(index)}
                  onClick={() => run(command)}
                  className={`pf-palette-item ${index === activeIndex ? "is-active" : ""}`}
                >
                  <span className="pf-palette-icon">
                    <Icon size={15} />
                  </span>
                  <span className="flex-1 text-start">{command.label}</span>
                  {command.hint && (
                    <span className="font-mono text-[11px] text-white/35">{command.hint}</span>
                  )}
                  {index === activeIndex && <CornerDownLeft size={14} className="text-white/40" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
