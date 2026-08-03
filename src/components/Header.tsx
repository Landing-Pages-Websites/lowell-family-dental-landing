"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PHONE, PHONE_HREF } from "./Brand";

interface HeaderProps {
  /**
   * Visual tone. `light` (default) is white-bg, primary-colored logo — used on the
   * implants page where the hero is dark blue and the header sits on white. `dark`
   * is a solid deep-blue header with an inverse (white) logo — used on the
   * new-patients page where the hero is light-blue and the header needs stronger
   * contrast.
   */
  tone?: "light" | "dark";
}

export function Header({ tone = "light" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = tone === "dark";

  const headerCls = isDark
    ? scrolled
      ? "bg-[var(--color-primary-dark)] shadow-lg border-b border-white/10"
      : "bg-[var(--color-primary)] border-b border-white/5"
    : scrolled
      ? "bg-white/95 backdrop-blur shadow-sm border-b border-[var(--color-border)]"
      : "bg-white border-b border-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${headerCls}`}
    >
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <a href="#hero" className="shrink-0" aria-label="Lowell Family Dental Practice — home">
          <Logo className="h-10 sm:h-12" variant="wordmark" inverse={isDark} />
        </a>
        <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className={
              isDark
                ? "hidden sm:inline-flex items-center gap-2 border-2 border-white/50 text-white rounded-lg px-3 py-2 font-semibold text-sm hover:bg-white hover:text-[var(--color-primary)] transition"
                : "hidden sm:inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg px-3 py-2 font-semibold text-sm hover:bg-[var(--color-primary)] hover:text-white transition"
            }
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            {PHONE}
          </a>
          <a href="#contact" className="btn-primary whitespace-nowrap sm:whitespace-normal text-[12.5px] min-[360px]:text-[13px] sm:text-base px-[12px]! min-[360px]:px-[14px]! sm:px-[1.6rem]! py-[10px]! sm:py-[0.95rem]!">
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
