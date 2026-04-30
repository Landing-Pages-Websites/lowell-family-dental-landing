import { ADDRESS_LINE1, ADDRESS_LINE2, PHONE, PHONE_HREF } from "./Brand";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <Logo className="h-9" variant="wordmark" inverse />
          </div>
          <div className="text-xs sm:text-sm leading-relaxed text-center sm:text-right space-y-1.5">
            <div className="text-white/85">
              {ADDRESS_LINE1} · {ADDRESS_LINE2}
            </div>
            <div>
              <a href={PHONE_HREF} className="text-white/85 font-semibold hover:underline">
                {PHONE}
              </a>
            </div>
            <div className="text-white/55 mt-2">
              © {new Date().getFullYear()} Lowell Family Dental Practice &amp; Implant Center. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
