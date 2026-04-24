import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { joinCtaLink } from "@/components/join-cta-link";

const closingPoints = [
  {
    number: "01",
    title: "인터뷰를 통해 모인, 생각이 깊은 사람들",
  },
  {
    number: "02",
    title: "12시간 오프라인 모임 (4회, 3시간)",
  },
  {
    number: "03",
    title: "8주 온라인 프로그램",
  },
] as const;

const photoRows = [
  [
    {
      src: "/features/thoughtful-people.jpg",
      alt: "테이블에 모여 대화하는 노크노크 멤버들",
      caption: "생각이 깊은 사람들과의 대화",
    },
    {
      src: "/features/gentle-guide.jpg",
      alt: "가이드와 함께 차분하게 이야기를 나누는 장면",
      caption: "질문이 좋은 모임의 분위기",
    },
    {
      src: "/features/aligned-people.jpg",
      alt: "나란히 앉아 이야기를 듣고 있는 멤버들",
      caption: "서로의 결을 오래 듣는 시간",
    },
    {
      src: "/features/deep-structure.jpg",
      alt: "노트와 책을 펼쳐두고 모임에 참여하는 장면",
      caption: "읽기에서 끝나지 않는 구조",
    },
  ],
  [
    {
      src: "/features/features-1.png",
      alt: "함께 걷고 대화하는 멤버들의 순간",
      caption: "가볍지 않게 가까워지는 사람들",
    },
    {
      src: "/features/features-2.png",
      alt: "야외에서 웃으며 대화하는 멤버들",
      caption: "인터뷰로 시작되는 연결",
    },
    {
      src: "/features/features-3.png",
      alt: "실내에서 토론을 이어가는 독서모임 풍경",
      caption: "한 사람의 세계를 읽는 시간",
    },
    {
      src: "/features/features-4.png",
      alt: "가이드를 중심으로 원형으로 앉아 대화하는 장면",
      caption: "편안하게 깊어지는 대화",
    },
  ],
] as const;

function PhotoMarqueeRow({
  photos,
  reverse = false,
  duration,
}: {
  photos: (typeof photoRows)[number];
  reverse?: boolean;
  duration: string;
}) {
  const marqueeStyle = {
    "--marquee-duration": duration,
  } as CSSProperties;

  return (
    <div className="member-marquee-shell overflow-hidden">
      <div
        className={`member-marquee-track flex w-max ${
          reverse ? "member-marquee-track-reverse" : ""
        }`}
        style={marqueeStyle}
      >
        {[0, 1].map((groupIndex) => (
          <ul
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex min-w-max gap-3.5 pr-3.5"
          >
            {photos.map((photo) => (
              <li key={`${groupIndex}-${photo.src}`}>
                <figure className="relative h-[11.75rem] w-[15.25rem] overflow-hidden rounded-[1.55rem] border border-main-olive/12 bg-light-olive/40 shadow-[0_16px_36px_rgba(90,74,60,0.08)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="244px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(43,42,38,0)_0%,rgba(43,42,38,0.74)_100%)] px-4 pb-4 pt-9">
                    <figcaption className="text-[0.9rem] leading-6 tracking-[-0.02em] text-card-white">
                      {photo.caption}
                    </figcaption>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function BottomCtaSection() {
  return (
    <section
      id="bottom-cta-section"
      className="bg-bg-main px-5 py-18"
      aria-labelledby="bottom-cta-heading"
    >
      <div className="mx-auto w-full max-w-[32rem]">
        <div className="relative overflow-hidden rounded-[2rem] border border-card-white/8 bg-[linear-gradient(160deg,#48553a_0%,#6f7d4e_56%,#a3ae7c_100%)] px-6 py-7 shadow-[0_18px_48px_rgba(90,74,60,0.14)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-card-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-bg-main/10 blur-3xl" />
          </div>

          <div className="relative">
            <header className="space-y-5">
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-light-olive/78">
                Final Invitation
              </p>
              <h2
                id="bottom-cta-heading"
                className="max-w-[11ch] font-title text-[clamp(2.05rem,7.4vw,2.8rem)] leading-[1.28] tracking-[-0.055em] text-card-white"
              >
                결이 맞는 사람들과
                <br />
                노크노크에서
                <br />
                함께하세요.
              </h2>
              <p className="text-[0.98rem] leading-7 tracking-[-0.02em] text-light-olive/84">
                노크노크는 빠르게 소비되는 만남보다,
                <br />
                오래 남는 대화와 태도를 더 중요하게 생각합니다.
                <br />
                프로그램을 먼저 살펴본 뒤 편하게 문을 두드려 주세요.
              </p>
            </header>

            <ul className="mt-8 space-y-3">
              {closingPoints.map((point) => (
                <li
                  key={point.number}
                  className="rounded-[1.4rem] border border-card-white/10 bg-card-white/10 px-4 py-4 backdrop-blur-[2px]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-title text-[1rem] tracking-[-0.04em] text-light-olive/75">
                      {point.number}
                    </span>
                    <div>
                      <h3 className="font-title text-[1.2rem] leading-[1.35] tracking-[-0.035em] text-card-white">
                        {point.title}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="https://whattime.co.kr/knock_books/interview2"
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-bg-main px-6 text-[0.98rem] font-medium tracking-[-0.02em] text-dark-olive shadow-[0_18px_40px_rgba(43,42,38,0.18)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-card-white hover:shadow-[0_22px_48px_rgba(43,42,38,0.2)]"
              >
                {joinCtaLink.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="px-1">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-deep-olive">
              Moments
            </p>
            <p className="mt-3 max-w-[24ch] font-title text-[1.45rem] leading-[1.4] tracking-[-0.04em] text-primary-text">
              노크노크가 오래 기억에 남는 장면들
            </p>
          </div>

          <div className="mt-5 space-y-3.5">
            <PhotoMarqueeRow photos={photoRows[0]} duration="29s" />
            <PhotoMarqueeRow photos={photoRows[1]} duration="31s" reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
