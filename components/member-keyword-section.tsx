import type { CSSProperties } from "react";

const keywordRows = [
  ["공간 디자이너", "파일럿", "전문의", "회계사", "연극 배우"],
  [
    "반도체 설계 엔지니어",
    "변호사",
    "식품 연구원",
    "수의사",
    "게임 시나리오 기획자",
  ],
  ["대학생", "간호사", "초등학교 교사", "물리 치료사", "컨텐츠 마케터"],
] as const;

const keywordChipStyles = [
  "border-dark-olive/10 bg-card-white text-primary-text",
  "border-main-olive/50 bg-main-olive/28 text-dark-olive",
  "border-deep-olive/80 bg-deep-olive text-bg-main",
] as const;

function KeywordRow({
  keywords,
  reverse = false,
  duration,
  styleOffset = 0,
}: {
  keywords: readonly string[];
  reverse?: boolean;
  duration: string;
  styleOffset?: number;
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
            className="flex min-w-max items-center gap-3 pr-3"
          >
            {keywords.map((keyword, keywordIndex) => (
              <li key={`${groupIndex}-${keyword}`}>
                <span
                  className={`inline-flex min-h-12 items-center rounded-full border px-5 py-3 text-[0.95rem] leading-none tracking-[-0.02em] ${
                    keywordChipStyles[
                      (keywordIndex + styleOffset) % keywordChipStyles.length
                    ]
                  }`}
                >
                  {keyword}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function MemberKeywordSection() {
  return (
    <section
      aria-labelledby="member-intro-heading"
      className="overflow-hidden border-t border-dark-olive/10 bg-light-olive pb-24 pt-16"
    >
      <div className="mx-auto w-full max-w-[32rem] px-5 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-deep-olive">
          Members
        </p>
        <h2
          id="member-intro-heading"
          className="mx-auto mt-5 max-w-[12ch] font-title text-[2.05rem] leading-[1.34] tracking-[-0.05em] text-primary-text"
        >
          노크노크에는
          <br />
          <span className="whitespace-nowrap">이런 사람들이 모여요.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[30ch] text-[0.98rem] leading-7 tracking-[-0.02em] text-secondary-text">
          하는 일은 달라도, 대화를 대하는 태도는 닮아 있는 사람들입니다.
          서로 다른 일상과 관점을 가진 멤버들이 차분하게 연결됩니다.
        </p>
      </div>

      <div className="mt-11 space-y-4">
        <KeywordRow keywords={keywordRows[0]} duration="22s" styleOffset={0} />
        <KeywordRow
          keywords={keywordRows[1]}
          reverse
          duration="28s"
          styleOffset={1}
        />
        <KeywordRow keywords={keywordRows[2]} duration="24s" styleOffset={2} />
      </div>
    </section>
  );
}
