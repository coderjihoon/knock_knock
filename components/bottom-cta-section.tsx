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
                href={joinCtaLink.href}
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-bg-main px-6 text-[0.98rem] font-medium tracking-[-0.02em] text-dark-olive shadow-[0_18px_40px_rgba(43,42,38,0.18)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-card-white hover:shadow-[0_22px_48px_rgba(43,42,38,0.2)]"
              >
                {joinCtaLink.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
