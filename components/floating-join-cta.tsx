"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { joinCtaLink } from "@/components/join-cta-link";

export function FloatingJoinCta() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const trigger = document.getElementById("brand-features-section");

    if (!trigger) {
      return;
    }

    const updateVisibility = () => {
      const triggerTop = trigger.getBoundingClientRect().top + window.scrollY;
      setIsVisible(window.scrollY + 88 >= triggerTop);
    };

    const frameId = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  if (pathname !== "/") {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-40 flex justify-center px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <Link
        href="https://whattime.co.kr/knock_books/interview2"
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
        className={`inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-main-olive bg-main-olive px-6 text-[0.95rem] font-medium tracking-[-0.02em] text-bg-main shadow-[0_18px_38px_rgba(111,125,78,0.28)] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-deep-olive hover:bg-deep-olive hover:shadow-[0_22px_46px_rgba(72,85,58,0.24)] ${
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <span aria-hidden="true" className="relative flex h-4 w-4 shrink-0">
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 text-bg-main"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1.5L11.9 8.1L18.5 10L11.9 11.9L10 18.5L8.1 11.9L1.5 10L8.1 8.1L10 1.5Z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 12 12"
            className="absolute -right-1 -top-0.5 h-2.5 w-2.5 text-bg-main/75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0.9L6.95 5.05L11.1 6L6.95 6.95L6 11.1L5.05 6.95L0.9 6L5.05 5.05L6 0.9Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>{joinCtaLink.label}</span>
      </Link>
    </div>
  );
}
