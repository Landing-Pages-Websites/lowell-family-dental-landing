/**
 * Inline copy of the Lowell Family Dental Practice & Implant Center wordmark logo.
 * Source: https://lowellfamilydentalpractice.com/wp-content/uploads/2023/12/Lowell-Family-Dental-Practive-Implant-Center.svg
 *
 * Two versions: `mark` (just the leaf-with-eyes mark, ~45px square) and `wordmark`
 * (full lock-up with text). On scrolled/condensed header, render `mark`; on top
 * header, render `wordmark` so the brand reads at-a-glance per Standing Rule #7.
 */

interface LogoProps {
  className?: string;
  variant?: "wordmark" | "mark";
  /** When true, all paths render in white (for dark backgrounds). */
  inverse?: boolean;
}

export function Logo({ className = "h-12", variant = "wordmark", inverse = false }: LogoProps) {
  const blue = inverse ? "#FFFFFF" : "#1E4288";
  const grey = inverse ? "#FFFFFF" : "#888A89";

  if (variant === "mark") {
    return (
      <svg
        className={className}
        width={45}
        height={45}
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lowell Family Dental Practice & Implant Center"
      >
        <path
          d="M40.3517 32.0281C36.5893 37.4922 30.2902 41.0743 23.1545 41.0743C11.631 41.0743 2.28939 31.7327 2.28939 20.2092C2.28939 10.4848 8.94178 2.31423 17.944 0C11.4918 3.24916 7.06582 9.93228 7.06582 17.6492C7.06582 28.556 15.9075 37.3978 26.8145 37.3978C32.0537 37.3978 36.8166 35.3575 40.3517 32.0281Z"
          fill={blue}
        />
        <path
          d="M22.4131 42.5571C28.9312 42.5571 34.7747 39.6704 38.7353 35.108C35.0391 41.0469 28.4524 45 20.9422 45C9.3762 45 0 35.6238 0 24.0577C0 21.6944 0.391339 19.4225 1.11302 17.3034C0.911555 18.489 0.80657 19.7075 0.80657 20.9506C0.80657 32.8835 10.4802 42.5571 22.4131 42.5571Z"
          fill={grey}
        />
        <path
          d="M31.2728 10.1181C28.3588 5.0709 17.9672 11.1416 17.9672 11.1416C17.9672 11.1416 26.7707 8.93697 26.0657 11.5681C25.7436 12.7701 21.9548 13.9871 20.3553 13.9871C17.967 13.9871 16.8608 10.2387 12.679 11.5681C5.07012 13.9871 14.2306 31.9736 17.967 30.9724C20.0114 30.4246 18.48 25.7695 22.7447 25.7695C24.1104 25.7695 25.7549 26.5029 27.3505 29.2665C28.946 32.0301 31.2728 22.3929 29.1843 18.7754C27.729 16.2547 33.1122 13.304 31.2728 10.1181Z"
          fill={grey}
        />
        <path
          d="M23.4253 21.7368C25.1684 18.7176 31.3846 22.3491 31.3846 22.3491C31.3846 22.3491 26.1184 21.0303 26.5401 22.6042C26.7328 23.3232 28.9992 24.0512 29.9561 24.0512C31.3847 24.0512 32.0465 21.8089 34.548 22.6042C39.0995 24.0512 33.6198 34.8106 31.3847 34.2117C30.1618 33.884 31.0778 31.0993 28.5268 31.0993C27.7098 31.0993 26.7261 31.5381 25.7716 33.1912C24.8172 34.8444 23.4253 29.0795 24.6746 26.9155C25.5452 25.4077 22.325 23.6426 23.4253 21.7368Z"
          fill={blue}
        />
      </svg>
    );
  }

  // Wordmark: mark + name set
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo variant="mark" className="h-full w-auto" inverse={inverse} />
      <div className="flex flex-col leading-tight">
        <span
          className="font-[var(--font-manrope)] font-bold tracking-tight text-[15px] sm:text-[17px] uppercase"
          style={{ color: blue }}
        >
          Lowell Family Dental
        </span>
        <span
          className="font-[var(--font-inter)] font-medium tracking-[0.18em] text-[10px] sm:text-[11px] uppercase"
          style={{ color: grey }}
        >
          Practice &amp; Implant Center
        </span>
      </div>
    </div>
  );
}
