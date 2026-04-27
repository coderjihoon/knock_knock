"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { joinCtaLink } from "@/components/join-cta-link";

const headerJoinCtaHref = "/#bottom-cta-section";
const headerJoinCtaTargetId = "bottom-cta-section";
const profileHref = "https://knock-books.vercel.app/profile";

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

  const handleJoinCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    const target = document.getElementById(headerJoinCtaTargetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", `/#${headerJoinCtaTargetId}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

          <nav aria-label="주요 이동" className="flex shrink-0 items-center gap-2">
            <a
              href={headerJoinCtaHref}
              onClick={handleJoinCtaClick}
              className={`block rounded-full px-4 py-2.5 text-[0.82rem] font-medium tracking-[-0.02em] transition-[background-color,border-color,box-shadow,color] duration-300 ${
                isOverlay
                  ? "border border-card-white/15 bg-card-white/10 text-card-white shadow-[0_10px_28px_rgba(43,42,38,0.12)] backdrop-blur-sm hover:bg-card-white/16"
                  : "border border-main-olive bg-main-olive text-bg-main shadow-[0_8px_20px_rgba(111,125,78,0.18)] hover:border-deep-olive hover:bg-deep-olive"
              }`}
            >
              {joinCtaLink.label}
            </a>
            <a
              href={profileHref}
              aria-label="프로필"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-[background-color,border-color,box-shadow] duration-300 ${
                isOverlay
                  ? "border border-card-white/15 bg-card-white/10 shadow-[0_10px_28px_rgba(43,42,38,0.12)] backdrop-blur-sm hover:bg-card-white/16"
                  : "border border-main-olive bg-main-olive shadow-[0_8px_20px_rgba(111,125,78,0.18)] hover:border-deep-olive hover:bg-deep-olive"
              }`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0011 14C9.17915 14 7.19342 14.9939 5.81072 16.8767C5.08339 17.8745 4.9905 18.7305 5.0008 20H18.9896C19.0003 18.7249 18.9139 17.8718 18.1932 16.8869C16.8067 14.9921 14.8171 14 12.0011 14ZM4.19624 15.7042C6.00965 13.2362 8.6292 12 12.0011 12C15.3715 12 17.9974 13.2325 19.8072 15.7058C20.9434 17.2585 21.0055 18.6839 20.9885 20.1229C20.9766 21.1291 20.1816 22 19.111 22H4.89112C3.83777 22 3.01406 21.1466 3.00194 20.1229C2.98483 18.6779 3.05747 17.254 4.19624 15.7042L5.00209 16.2963L4.19624 15.7042Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5ZM8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>
      {needsOffset ? <div aria-hidden className="h-[72px] shrink-0" /> : null}
    </>
  );
}
