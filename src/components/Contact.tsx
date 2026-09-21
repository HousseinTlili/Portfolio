import React, { useState } from "react";
import { IconGithub, IconLinkedin, IconMail, IconCheck } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS } from "../data/translations";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].contact;

  const sendingLabel = lang === "ar" ? "جاري الإرسال..." : lang === "fr" ? "Envoi en cours..." : "Sending...";
  const errorLabel = lang === "ar" ? "تعذر الإرسال، حاول مجدداً" : lang === "fr" ? "Échec de l'envoi, réessayez" : "Failed to send, please try again";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || errorLabel);
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMessage(errorLabel);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-28 scroll-mt-16 relative overflow-hidden"
      style={{ background: "#0D1117" }}
      aria-label="Contact Section"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 70% 50%, rgba(46,95,163,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="mb-3">
            <span className="font-mono-tech text-xs tracking-wider" style={{ color: "#58A6FF" }}>
              {t.tag}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
              color: "#E6EDF3",
            }}
          >
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 reveal-left space-y-8">
            <p className="text-sm sm:text-base leading-relaxed text-[#8B949E]">
              {t.intro}
            </p>

            {/* Email card with one-click copy */}
            <div
              className="p-5 rounded-xl border flex flex-col gap-3"
              style={{ background: "rgba(22, 27, 34, 0.6)", borderColor: "rgba(48, 54, 61, 0.8)" }}
            >
              <span className="text-xs font-mono-tech text-[#8B949E]">{t.directInbox}</span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono-tech text-[#58A6FF] hover:underline flex items-center gap-2"
                >
                  <IconMail size={16} />
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono-tech flex items-center gap-1.5 transition-colors border border-[#30363D] hover:border-[#58A6FF]/50 bg-[#0D1117] text-[#E6EDF3] cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <IconCheck size={12} />
                      <span className="text-emerald-400">{t.copied}</span>
                    </>
                  ) : (
                    <span>{t.copyEmail}</span>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability status */}
            <div className="space-y-3 text-sm text-[#8B949E]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3FB950] pulse-dot" />
                <span>{t.locationValue}</span>
              </div>
            </div>

            {/* Social links row */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <IconGithub size={20} />, href: PERSONAL_INFO.github, label: "GitHub Profile" },
                { icon: <IconLinkedin size={20} />, href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile" },
                { icon: <IconMail size={20} />, href: `mailto:${PERSONAL_INFO.email}`, label: "Send Direct Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(22, 27, 34, 0.8)",
                    border: "1px solid rgba(48, 54, 61, 0.8)",
                    color: "#8B949E",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#58A6FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(88,166,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#8B949E";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(48,54,61,0.8)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7 reveal-right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
              style={{
                background: "rgba(22, 27, 34, 0.75)",
                border: "1px solid rgba(48, 54, 61, 0.8)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium mb-2 font-mono-tech text-[#8B949E]"
                  >
                    {t.formName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t.formNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(13, 17, 23, 0.7)",
                      border: "1px solid rgba(48, 54, 61, 0.8)",
                      color: "#E6EDF3",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(88, 166, 255, 0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(48, 54, 61, 0.8)")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium mb-2 font-mono-tech text-[#8B949E]"
                  >
                    {t.formEmail}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder={t.formEmailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(13, 17, 23, 0.7)",
                      border: "1px solid rgba(48, 54, 61, 0.8)",
                      color: "#E6EDF3",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(88, 166, 255, 0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(48, 54, 61, 0.8)")}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium mb-2 font-mono-tech text-[#8B949E]"
                >
                  {t.formMessage}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={t.formMessagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(13, 17, 23, 0.7)",
                    border: "1px solid rgba(48, 54, 61, 0.8)",
                    color: "#E6EDF3",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(88, 166, 255, 0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(48, 54, 61, 0.8)")}
                  required
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded-xl text-xs font-mono-tech border border-red-500/40 bg-red-500/10 text-red-300 text-center">
                  {errorMessage || errorLabel}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                  status === "sending" ? "opacity-75 cursor-not-allowed" : "hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                }`}
                style={{
                  background: status === "success"
                    ? "linear-gradient(135deg, #2E5FA3, #3FB950)"
                    : status === "error"
                    ? "linear-gradient(135deg, #991B1B, #DC2626)"
                    : "linear-gradient(135deg, #C9A84C, #a8893e)",
                  color: (status === "success" || status === "error" || status === "sending") ? "#E6EDF3" : "#0D1117",
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                  boxShadow: status === "success"
                    ? "0 0 24px rgba(63,185,80,0.3)"
                    : "0 0 24px rgba(201,168,76,0.25)",
                }}
              >
                {status === "sending" && (
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {status === "success" && <IconCheck size={16} />}
                <span>
                  {status === "sending"
                    ? sendingLabel
                    : status === "success"
                    ? t.messageSent
                    : status === "error"
                    ? errorLabel
                    : t.sendMessage}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
