import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile, type Dict, type Lang } from "../content";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { GithubIcon, LinkedinIcon, MagneticButton } from "./ui";

export default function Contact({
  t,
  lang,
  onCopyEmail,
}: {
  t: Dict;
  lang: Lang;
  onCopyEmail: () => Promise<boolean>;
}) {
  const c = t.contact;
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copy = async () => {
    if (await onCopyEmail()) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5e5e8c47-b75e-4a99-a22b-f4be4ed8760f",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          from_name: `${form.name} (Portfolio)`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        window.setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send");
        window.setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send, please check connection");
      window.setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const links = [
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: c.location },
    { icon: LinkedinIcon, label: profile.linkedinLabel, href: profile.linkedin },
    { icon: GithubIcon, label: profile.githubLabel, href: profile.github },
  ];

  return (
    <section id="contact" className="pf-section relative overflow-hidden">
      <div className="pf-contact-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="pf-kicker">
            <span className="text-[var(--color-gold)]">06</span>
            <span className="h-px w-8 bg-white/20" />
            {c.kicker}
          </p>
          <h2 className="pf-contact-title mt-6">
            <ScrambleText text={c.title[0]} enabled={lang !== "ar"} className="block" />
            <ScrambleText
              text={c.title[1]}
              enabled={lang !== "ar"}
              delay={120}
              className="pf-display-accent block"
            />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-6">
            <p className="max-w-lg text-lg leading-relaxed text-[var(--color-muted)]">{c.text}</p>

            <div className="pf-card flex flex-wrap items-center justify-between gap-4 p-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-3 text-white"
              >
                <span className="pf-project-icon">
                  <Mail size={18} />
                </span>
                <span className="truncate text-lg font-medium">{profile.email}</span>
              </a>
              <button type="button" onClick={copy} className="pf-btn-ghost h-10 px-4 text-sm">
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? c.copied : c.copy}
              </button>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {links.map(({ icon: Icon, label, href }) => {
                const inner = (
                  <>
                    <Icon width={16} height={16} size={16} className="shrink-0 text-white/45" />
                    <span className="truncate" dir={href ? "ltr" : undefined}>
                      {label}
                    </span>
                    {href?.startsWith("http") && (
                      <ArrowUpRight size={14} className="ms-auto text-white/30" />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="pf-contact-link"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="pf-contact-link">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/[0.06] px-5 py-4">
              <span className="pf-live-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">
                {c.status}
              </span>
              <span className="text-sm text-white/85">{c.statusText}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={submit} className="pf-card pf-form grid gap-4 p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="pf-field">
                  <span>{c.name}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                  />
                </label>
                <label className="pf-field">
                  <span>{c.email}</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                    dir="ltr"
                  />
                </label>
              </div>
              <label className="pf-field">
                <span>{c.message}</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              {status === "error" && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-center text-xs text-red-300">
                  {errorMessage}
                </div>
              )}
              {status === "success" && (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                  <Check size={16} />
                  <span>{lang === "ar" ? "تم إرسال رسالتك بنجاح!" : lang === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}</span>
                </div>
              )}
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-white/40">
                  {status === "success" ? "" : c.note}
                </p>
                <MagneticButton
                  type="submit"
                  disabled={status === "sending"}
                  strength={0.25}
                  className={`pf-btn-primary h-12 px-6 transition-all ${
                    status === "sending" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "sending"
                    ? (lang === "ar" ? "جاري الإرسال..." : lang === "fr" ? "Envoi en cours..." : "Sending...")
                    : status === "success"
                    ? (lang === "ar" ? "تم الإرسال" : lang === "fr" ? "Envoyé" : "Sent")
                    : c.send}
                  {status === "sending" ? (
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  ) : status === "success" ? (
                    <Check size={16} />
                  ) : (
                    <Send size={16} className="rtl:-scale-x-100" />
                  )}
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
