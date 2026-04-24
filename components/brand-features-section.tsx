import Image from "next/image";
import type { ReactNode } from "react";

type Story = {
  id: string;
  title: ReactNode;
  imageSrc: string;
  imageAlt: string;
  body: string[];
  meta: [string, string];
};

const stories: Story[] = [
  {
    id: "01",
    title: (
      <>
        생각이 깊은
        <br />
        사람들과 함께
      </>
    ),
    imageSrc: "/features/features-1.png",
    imageAlt: "공원에서 함께 대화하는 멤버들의 모습",
    body: [
      "\"노크노크에 모여있는 사람들이 기억에 남아요. 인터뷰에서 만났던, 가이드와 멤버분들, 노크챗을 통해 만났던, 우연히 같이 대화를 나눴던 다른 모임분들까지 모두 생각이 깊고 뚜렷하면서 유연한 분들이었어요.",
      "자신에 대한 이해가 높고 세상과 주변을 둘러보는 관점에서 배울 점이 많았어요.\"",
    ],
    meta: ["노크노크 6기 멤버", "AI 인프라 엔지니어"],
  },
  {
    id: "02",
    title: (
      <>
        결이 맞는 사람들을
        <br />
        만나기 위한 인터뷰
      </>
    ),
    imageSrc: "/features/features-2.png",
    imageAlt: "야외에서 함께 웃으며 시간을 보내는 멤버들의 모습",
    body: [
      "\"인터뷰 뒤엔, 독서모임에 이토록 진심인 사람들이 있다는 사실에 놀랐고, 이 과정을 거친 사람들을 더 만나보고 싶어졌다.",
      "노크노크는 존중과 태도를 중요하게 보는 모임이었고, 이후 모임에서도 실제로 주관이 있으면서도 유연한 사람들이 모여 있었다.\"",
    ],
    meta: ["노크노크 9기 멤버", "통번역가"],
  },
  {
    id: "03",
    title: (
      <>
        가까워질 수 밖에
        <br />
        없는 구조
      </>
    ),
    imageSrc: "/features/features-3.png",
    imageAlt: "실내에서 진지하게 토론을 이어가는 독서모임 장면",
    body: [
      "\"처음엔 나이, 직업, MBTI 같은 사회적 배경 없이 만난다는 점이 특히 인상적이었다. 그 덕분에 사람을 조건보다 삶의 결로 보게 됐다.",
      "주차가 쌓일수록 각자가 중요하게 여기는 가치와 삶의 패턴이 또렷해졌고, 세심한 질문 덕분에 혼자서는 닿지 못했을 생각까지 나아갈 수 있었다.\"",
    ],
    meta: ["노크노크 5기 멤버", "치과 의사"],
  },
  {
    id: "04",
    title: (
      <>
        깊은 대화를 위한
        <br />
        노크노크 가이드
      </>
    ),
    imageSrc: "/features/features-4.png",
    imageAlt: "가이드를 중심으로 차분하게 대화를 이어가는 모임 장면",
    body: [
      "\"리더를 ‘호스트’가 아닌 ‘가이드’라 부른 이유를, 모임 내내 자연스럽게 느낄 수 있었어요.",
      "말주변 없는 사람도 부담 없이 자기 생각을 꺼낼 수 있을 만큼, 모두를 편안히 이끄는 분위기가 인상적이었습니다.\"",
    ],
    meta: ["노크노크 7기 멤버", "NGO 마케터"],
  },
];

export function BrandFeaturesSection() {
  return (
    <section
      id="brand-features-section"
      aria-labelledby="brand-features-heading"
      className="bg-bg-main px-5 pb-20 pt-12"
    >
      <div className="mx-auto w-full max-w-[32rem]">
        <header className="space-y-5">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-deep-olive">
            Knock Knock Features
          </p>
          <h1
            id="brand-features-heading"
            className="max-w-[11ch] font-title text-[2.1rem] leading-[1.35] tracking-[-0.035em] text-primary-text"
          >
            결국 중요한 건,
            <br />
            ‘함께하는 사람들’
            <br />
            이니까요.
          </h1>
          <p className="max-w-[28ch] text-[1rem] leading-7 text-secondary-text">
            같은 책을 읽는 시간보다 더 오래 남는 건, 어떤 사람들과 어떤
            태도로 마주했는지에 대한 기억입니다.
          </p>
        </header>

        <div className="mt-12">
          {stories.map((story, index) => (
            <article
              key={story.id}
              aria-labelledby={`feature-story-${story.id}`}
              className={`${
                index === 0
                  ? "pt-0"
                  : "border-t border-dark-olive/10 pt-14"
              } pb-14`}
            >
              <div className="space-y-4">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent-brown">
                  Story {story.id}
                </p>
                <h3
                  id={`feature-story-${story.id}`}
                  className="max-w-[14ch] font-title text-[1.72rem] leading-[1.46] tracking-[-0.03em] text-primary-text"
                >
                  {story.title}
                </h3>
              </div>

              <div className="relative mt-7 h-[300px] overflow-hidden rounded-[2rem] bg-bg-soft">
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 32rem"
                  loading={index === 0 ? "eager" : undefined}
                  className="object-cover"
                />
              </div>

              <div className="mt-7 space-y-4 text-[1rem] leading-8 text-secondary-text">
                {story.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-6 text-right text-[0.95rem] leading-7 text-accent-brown">
                <span className="block">{story.meta[0]}</span>
                <span className="block">{story.meta[1]}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
