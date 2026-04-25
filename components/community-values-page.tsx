import Image from "next/image";
import type { ElementType } from "react";

import { AmbientVideo } from "@/components/ambient-video";

type ValueItem = {
  title: string;
  body: string;
  iconSrc: string;
};

type CommunityValuesSectionProps = {
  headingAs?: ElementType;
};

const valueItems: ValueItem[] = [
  {
    title: "깊은 대화",
    body: "세상의 답보다, 자기 삶의 기준을 고민해 본 사람들을 모읍니다.",
    iconSrc: "/icon/customer-service.png",
  },
  {
    title: "존중과 경청",
    body:
      "깊은 대화는 판단이 아니라, 타인의 맥락을 들으려는 태도에서 시작된다고 믿습니다.",
    iconSrc: "/icon/deaf.png",
  },
  {
    title: "좋은 질문",
    body:
      "좋은 질문 앞에서 스스로를 다시 바라볼 수 있을 때, 사람도 관계도 더 깊어진다고 믿습니다.",
    iconSrc: "/icon/lamp.png",
  },
];

function ValueListItem({ item }: { item: ValueItem }) {
  return (
    <article className="flex items-start gap-5 sm:gap-6">
      <div className="relative mt-1 h-[5.5rem] w-[5.5rem] shrink-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={item.iconSrc}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="h-[2rem] w-[2rem] object-contain"
          />
        </div>
      </div>

      <div className="min-w-0">
        <h3 className="font-title text-[1.78rem] leading-[1.18] tracking-[-0.05em] text-card-white sm:text-[1.95rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[24ch] text-[1.02rem] leading-[1.7] tracking-[-0.02em] text-light-olive/88 sm:max-w-none sm:text-[1.08rem]">
          {item.body}
        </p>
      </div>
    </article>
  );
}

export function CommunityValuesSection({
  headingAs: Heading = "h2",
}: CommunityValuesSectionProps) {
  return (
    <section
      aria-labelledby="community-values-heading"
      className="relative overflow-hidden bg-black px-5 py-18 sm:px-6 lg:px-8"
    >
      <AmbientVideo
        className="absolute inset-0 h-full w-full object-cover"
        desktopSrc="/video/4K 5.mp4"
        preload="none"
        loadWhenVisible
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[48rem]">
        <header className="mx-auto max-w-[34rem] text-center">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-main-olive">
            Knock Knock Community
          </p>
          <Heading
            id="community-values-heading"
            className="mt-5 font-title text-[clamp(2.3rem,6vw,3.7rem)] leading-[1.16] tracking-[-0.06em] text-card-white"
          >
            서로의 삶을
            <br />
            더 빛나게 하는 사람들
          </Heading>
          <p className="mx-auto mt-5 max-w-[31ch] text-[1rem] leading-7 tracking-[-0.02em] text-light-olive/86 sm:text-[1.05rem]">
            노크노크는 삶을 오래 사유해 온 사람들, 타인을 존중할 줄 아는
            사람들, 질문 앞에서 진심으로 멈출 수 있는 사람들이 함께 만드는
            곳입니다.
          </p>
        </header>

        <div className="mx-auto mt-14 max-w-[35rem] space-y-10 sm:space-y-12">
          {valueItems.map((item) => (
            <ValueListItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommunityValuesPage() {
  return (
    <main className="flex-1 bg-bg-main">
      <CommunityValuesSection headingAs="h1" />
    </main>
  );
}
