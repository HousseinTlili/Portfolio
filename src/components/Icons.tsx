import React from "react";

export function IconGithub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function IconLinkedin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function IconMail({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function IconExternalLink({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function IconDownload({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function IconMenu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconLayers({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// ── Country Flag SVGs (works 100% on Windows, Mac, Linux, Mobile) ───────────

export function FlagTN({ className = "w-6 h-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-white/10 shrink-0 inline-block`} aria-label="Tunisia Flag">
      <rect width="36" height="24" fill="#E70013" />
      <circle cx="18" cy="12" r="6" fill="#FFFFFF" />
      <circle cx="19" cy="12" r="4.8" fill="#E70013" />
      <circle cx="20.2" cy="12" r="4.2" fill="#FFFFFF" />
      <polygon points="19.2,9.6 20,11.3 21.8,11.3 20.4,12.3 20.9,14 19.5,12.9 18.1,14 18.6,12.3 17.2,11.3 19,11.3" fill="#E70013" />
    </svg>
  );
}

export function FlagGB({ className = "w-6 h-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-white/10 shrink-0 inline-block`} aria-label="United Kingdom Flag">
      <rect width="36" height="24" fill="#012169" />
      <path d="M0 0 L36 24 M36 0 L0 24" stroke="#FFFFFF" strokeWidth="4.8" />
      <path d="M0 0 L36 24 M36 0 L0 24" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M18 0 V24 M0 12 H36" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M18 0 V24 M0 12 H36" stroke="#C8102E" strokeWidth="4.8" />
    </svg>
  );
}

export function FlagFR({ className = "w-6 h-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-white/10 shrink-0 inline-block`} aria-label="France Flag">
      <rect width="12" height="24" fill="#002654" />
      <rect x="12" width="12" height="24" fill="#FFFFFF" />
      <rect x="24" width="12" height="24" fill="#ED2939" />
    </svg>
  );
}

export function FlagJP({ className = "w-6 h-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-white/10 shrink-0 inline-block`} aria-label="Japan Flag">
      <rect width="36" height="24" fill="#FFFFFF" />
      <circle cx="18" cy="12" r="7.2" fill="#BC002D" />
    </svg>
  );
}

export function FlagES({ className = "w-6 h-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-white/10 shrink-0 inline-block`} aria-label="Spain Flag">
      <rect width="36" height="6" fill="#AA151B" />
      <rect y="6" width="36" height="12" fill="#F1BF00" />
      <rect y="18" width="36" height="6" fill="#AA151B" />
      <g transform="translate(9.5, 7.5)">
        <rect x="1" y="2" width="5" height="5.5" rx="1" fill="#AA151B" stroke="#8B0000" strokeWidth="0.5" />
        <rect x="2" y="3" width="3" height="3" fill="#F1BF00" />
        <circle cx="3.5" cy="1.2" r="1" fill="#AA151B" />
        <line x1="-0.5" y1="2" x2="-0.5" y2="7.5" stroke="#8B0000" strokeWidth="0.7" />
        <line x1="7.5" y1="2" x2="7.5" y2="7.5" stroke="#8B0000" strokeWidth="0.7" />
      </g>
    </svg>
  );
}

export function IconGlobe({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}


