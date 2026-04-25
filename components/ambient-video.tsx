"use client";

import { useEffect, useRef, useState } from "react";

type ConnectionLike = {
  effectiveType?: string;
  saveData?: boolean;
};

type AmbientVideoProps = {
  className: string;
  desktopSrc: string;
  mobileSrc?: string;
  poster?: string;
  preload?: "auto" | "metadata" | "none";
  loadWhenVisible?: boolean;
};

function pickVideoSource(desktopSrc: string, mobileSrc?: string) {
  if (!mobileSrc) {
    return desktopSrc;
  }

  const connection = (navigator as Navigator & { connection?: ConnectionLike })
    .connection;
  const prefersMobileViewport = window.matchMedia("(max-width: 767px)").matches;
  const prefersReducedData =
    connection?.saveData ||
    ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

  return prefersMobileViewport || prefersReducedData ? mobileSrc : desktopSrc;
}

export function AmbientVideo({
  className,
  desktopSrc,
  mobileSrc,
  poster,
  preload = "metadata",
  loadWhenVisible = false,
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!loadWhenVisible);

  useEffect(() => {
    if (!loadWhenVisible) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "240px 0px",
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [loadWhenVisible]);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextSrc = pickVideoSource(desktopSrc, mobileSrc);

    if (video.currentSrc.endsWith(nextSrc) || video.src.endsWith(nextSrc)) {
      return;
    }

    video.src = nextSrc;
    video.load();
    void video.play().catch(() => {});
  }, [desktopSrc, mobileSrc, shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={shouldLoad ? preload : "none"}
      poster={poster}
      aria-hidden="true"
    />
  );
}
