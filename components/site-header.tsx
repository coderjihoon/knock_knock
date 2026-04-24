"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { joinCtaLink } from "@/components/join-cta-link";

const headerJoinCtaHref = "/#bottom-cta-section";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 16);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [pathname]);

  const isOverlay = pathname === "/" && !isScrolled;
  const needsOffset = pathname !== "/";
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          isOverlay
            ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-none"
            : "border-b border-dark-olive/10 bg-bg-main/95 shadow-[0_10px_32px_rgba(72,85,58,0.08)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/"
            className={`shrink-0 font-title text-[1.1rem] tracking-[-0.05em] transition-[color,opacity,text-shadow] duration-300 hover:opacity-75 ${
              isOverlay
                ? "text-card-white [text-shadow:0_1px_12px_rgba(43,42,38,0.28)]"
                : "text-dark-olive"
            }`}
          >
            Knock Knock
          </Link>

          <nav aria-label="주요 이동" className="shrink-0">
            <Link
              href={headerJoinCtaHref}
              className={`block rounded-full px-4 py-2.5 text-[0.82rem] font-medium tracking-[-0.02em] transition-[background-color,border-color,box-shadow,color] duration-300 ${
                isOverlay
                  ? "border border-card-white/15 bg-card-white/10 text-card-white shadow-[0_10px_28px_rgba(43,42,38,0.12)] backdrop-blur-sm hover:bg-card-white/16"
                  : "border border-main-olive bg-main-olive text-bg-main shadow-[0_8px_20px_rgba(111,125,78,0.18)] hover:border-deep-olive hover:bg-deep-olive"
              }`}
            >
              {joinCtaLink.label}
            </Link>
          </nav>
        </div>
      </header>
      {needsOffset ? <div aria-hidden className="h-[72px] shrink-0" /> : null}
    </>
  );
}
