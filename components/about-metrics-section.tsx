import { AboutMetricItem } from "@/components/about-metric-item";

const metrics = [
  {
    label: "참여 멤버 수",
    value: "1,000명 +",
    description: "노크노크는 1년 반 넘게 운영된 믿을 수 있는 커뮤니티예요.",
  },
  {
    label: "한 기수에 함께 하는 멤버 수",
    value: "200명 +",
    description: "다양한 직업군과 상황, 생각이 깊은 사람들과 함께해요.",
  },
  {
    label: "추천 지수",
    value: "96%",
    description:
      "‘주변 사람들에게 노크노크를 추천하고 싶다’고 말한 멤버 비율이에요.",
  },
] as const;

export function AboutMetricsSection() {
  return (
    <section className="bg-bg-soft px-5 pb-12 pt-[42px]">
      <div className="mx-auto w-full max-w-[32rem]">
        <p className="text-[12px] font-medium leading-none tracking-[-0.02em] text-dark-olive">
          About
        </p>

        <header className="mt-[15px]">
          <h1 className="max-w-[290px] font-title text-[33.6px] leading-[1.26] tracking-[-0.055em] text-dark-olive">
            왜 사람들은
            <br />
            가장 비싼 독서모임에
            <br />
            올까요?
          </h1>
          <p className="mt-[18px] text-[15px] leading-[1.55] tracking-[-0.02em] text-primary-text">
            1년 반 이상 함께 해온 멤버들을 만나보세요.
          </p>
        </header>

        <div className="mt-[46px]">
          {metrics.map((metric, index) => (
            <AboutMetricItem
              key={metric.label}
              label={metric.label}
              value={metric.value}
              description={metric.description}
              isLast={index === metrics.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
