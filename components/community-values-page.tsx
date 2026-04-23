import type { ComponentType, ElementType } from "react";

type ValueItem = {
  title: string;
  body: string;
  accentTone: string;
  Icon: ComponentType;
};

type CommunityValuesSectionProps = {
  headingAs?: ElementType;
};

function DialogueIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      className="h-[3.35rem] w-[3.35rem] fill-dark-olive"
    >
      <path d="M29.259 41.016 28.458 35.547C28.145 33.425 27.82 31.661 27.481 30.254 27.143 28.848 26.726 27.709 26.231 26.836 25.737 25.964 25.105 25.28 24.337 24.786 23.581 24.278 22.631 23.867 21.485 23.555 20.352 23.229 18.965 22.904 17.325 22.578L14.22 21.973V19.043L17.325 18.438C18.965 18.112 20.352 17.793 21.485 17.481 22.631 17.155 23.581 16.745 24.337 16.251 25.105 15.742 25.737 15.052 26.231 14.18 26.726 13.308 27.143 12.168 27.481 10.762 27.82 9.356 28.145 7.592 28.458 5.469L29.258 0H32.228L33.028 5.47C33.341 7.591 33.666 9.356 34.005 10.762 34.343 12.168 34.76 13.308 35.255 14.18 35.75 15.052 36.375 15.743 37.13 16.25 37.898 16.745 38.848 17.155 39.981 17.48 41.127 17.793 42.521 18.112 44.161 18.438L47.266 19.043V21.973L44.161 22.578C42.521 22.904 41.127 23.229 39.981 23.555 38.848 23.868 37.898 24.278 37.13 24.785 36.375 25.28 35.75 25.964 35.255 26.836 34.76 27.709 34.343 28.848 34.005 30.254 33.666 31.647 33.341 33.412 33.028 35.547L32.228 41.016H29.258ZM7.716 41.016 6.993 37.754C6.707 36.465 6.453 35.482 6.231 34.805 6.01 34.141 5.691 33.653 5.274 33.34 4.858 33.015 4.22 32.735 3.36 32.5L0 31.563V28.555L3.36 27.617C4.22 27.37 4.858 27.09 5.274 26.777 5.691 26.465 6.01 25.977 6.231 25.313 6.453 24.636 6.707 23.653 6.993 22.363L7.716 19.102H10.802L11.524 22.364C11.811 23.653 12.064 24.636 12.286 25.313 12.507 25.977 12.826 26.465 13.243 26.778 13.66 27.09 14.298 27.37 15.157 27.618L18.517 28.555V31.563L15.157 32.5C14.297 32.735 13.66 33.015 13.243 33.34 12.826 33.653 12.507 34.14 12.286 34.805 12.065 35.482 11.811 36.465 11.524 37.755L10.802 41.015H7.716Z" />
    </svg>
  );
}

function ListeningIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      className="h-[3.2rem] w-[3.2rem] fill-dark-olive"
    >
      <path d="M22.265 41.016C17.135 37.096 12.93 33.464 9.648 30.118 6.368 26.771 3.938 23.581 2.363 20.548.788 17.512 0 14.511 0 11.542 0 9.889.28 8.359.84 6.952 1.388 5.585 2.197 4.338 3.223 3.281 4.257 2.236 5.493 1.412 6.855.86 8.249.287 9.765 0 11.406 0 12.969 0 14.46.287 15.879.86 17.299 1.42 18.561 2.207 19.668 3.223 20.763 4.222 21.646 5.431 22.266 6.778 22.894 5.437 23.776 4.229 24.863 3.223 25.969 2.208 27.254 1.407 28.653.86 30.072.287 31.563 0 33.125 0 34.765 0 36.283.287 37.675.86 39.034 1.41 40.264 2.234 41.289 3.282 42.323 4.332 43.134 5.581 43.672 6.953 44.245 8.36 44.532 9.89 44.532 11.543 44.532 14.512 43.744 17.513 42.168 20.547 40.592 23.581 38.164 26.771 34.883 30.117 31.602 33.464 27.396 37.097 22.266 41.016Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      className="h-[3.15rem] w-[3.15rem] fill-dark-olive"
    >
      <path d="M20.702 41.016C17.734 41.016 14.986 40.502 12.46 39.473 9.947 38.457 7.76 37.025 5.898 35.176 4.036 33.327 2.584 31.159 1.542 28.672.514 26.172 0 23.451 0 20.508 0 17.565.514 14.851 1.542 12.364 2.584 9.864 4.036 7.689 5.898 5.84 7.76 3.991 9.948 2.559 12.46 1.543 14.987.515 17.734 0 20.703 0 23.671 0 26.413.515 28.925 1.543 31.451 2.559 33.645 3.991 35.507 5.84 37.369 7.69 38.815 9.864 39.843 12.364 40.885 14.851 41.406 17.565 41.406 20.508 41.406 23.451 40.885 26.172 39.843 28.672 38.815 31.159 37.369 33.327 35.507 35.176 33.645 37.026 31.451 38.457 28.925 39.473 26.412 40.502 23.671 41.016 20.703 41.016ZM20.704 32.09C18.23 32.09 15.71 31.016 13.145 28.868L14.512 27.227C16.7 29.037 18.764 29.942 20.704 29.942 22.644 29.942 24.708 29.037 26.895 27.227L28.262 28.867C25.697 31.016 23.178 32.09 20.704 32.09ZM10.136 19.961 8.535 18.536C9.915 16.934 11.549 16.133 13.437 16.133 15.325 16.133 16.959 16.933 18.339 18.535L16.738 19.961C15.748 18.841 14.648 18.281 13.437 18.281 12.227 18.281 11.126 18.841 10.137 19.961ZM24.667 19.961 23.066 18.534C24.446 16.933 26.08 16.132 27.968 16.132 29.856 16.132 31.49 16.932 32.871 18.534L31.269 19.96C30.279 18.84 29.179 18.28 27.969 18.28 26.757 18.28 25.657 18.84 24.667 19.96Z" />
    </svg>
  );
}

const valueItems: ValueItem[] = [
  {
    title: "깊은 대화",
    body: "세상의 답보다, 자기 삶의 기준을 고민해 본 사람들을 모읍니다.",
    accentTone:
      "bg-[radial-gradient(circle_at_50%_20%,rgba(232,237,225,0.88)_0%,rgba(255,255,255,0.84)_48%,rgba(255,255,255,0)_76%)]",
    Icon: DialogueIcon,
  },
  {
    title: "존중과 경청",
    body:
      "깊은 대화는 판단이 아니라, 타인의 맥락을 들으려는 태도에서 시작된다고 믿습니다.",
    accentTone:
      "bg-[radial-gradient(circle_at_50%_20%,rgba(242,237,227,0.96)_0%,rgba(255,255,255,0.84)_48%,rgba(255,255,255,0)_76%)]",
    Icon: ListeningIcon,
  },
  {
    title: "좋은 질문",
    body:
      "좋은 질문 앞에서 스스로를 다시 바라볼 수 있을 때, 사람도 관계도 더 깊어진다고 믿습니다.",
    accentTone:
      "bg-[radial-gradient(circle_at_50%_20%,rgba(163,174,124,0.16)_0%,rgba(255,255,255,0.84)_46%,rgba(255,255,255,0)_76%)]",
    Icon: QuestionIcon,
  },
];

function ValueGridItem({ item }: { item: ValueItem }) {
  const { Icon } = item;

  return (
    <article className="flex flex-col items-center">
      <div className="relative flex h-[14.5rem] w-[14.5rem] items-center justify-center rounded-full border border-dark-olive/10 bg-card-white shadow-[0_22px_60px_rgba(72,85,58,0.08)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.96)_0%,rgba(251,248,243,0.86)_58%,rgba(242,237,227,0.9)_100%)]" />
        <div className={`absolute inset-0 rounded-full ${item.accentTone}`} />
        <div className="absolute inset-6 rounded-full border border-white/90" />
        <div className="absolute inset-10 rounded-full border border-dark-olive/8" />
        <div className="absolute inset-[3.35rem] rounded-full border border-dark-olive/8" />
        <div className="absolute inset-[4.6rem] rounded-full border border-dark-olive/8" />
        <div className="absolute left-1/2 top-[3.65rem] -translate-x-1/2 font-title text-[1.05rem] tracking-[0.16em] text-main-olive">
          {item.title}
        </div>
        <div className="relative mt-7">
          <Icon />
        </div>
      </div>

      <div className="mt-7 max-w-[18.5rem] text-center">
        <h3 className="font-title text-[2rem] leading-[1.22] tracking-[-0.05em] text-primary-text">
          {item.title}
        </h3>
        <p className="mt-4 text-[1rem] leading-8 tracking-[-0.02em] text-secondary-text">
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
      className="relative overflow-hidden bg-bg-main px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-main-olive/10 blur-3xl" />
        <div className="absolute left-[-5rem] top-40 h-52 w-52 rounded-full bg-light-olive/70 blur-3xl" />
        <div className="absolute bottom-24 right-[-4rem] h-60 w-60 rounded-full bg-main-olive/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[76rem] rounded-[2.7rem] border border-dark-olive/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(251,248,243,0.98)_42%,rgba(242,237,227,0.98)_100%)] px-5 py-14 shadow-[0_28px_90px_rgba(72,85,58,0.08)] sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <header className="mx-auto max-w-[44rem] text-center">
          <p className="text-[0.74rem] uppercase tracking-[0.36em] text-deep-olive">
            Knock Knock Community
          </p>
          <Heading
            id="community-values-heading"
            className="mx-auto mt-5 max-w-[9ch] font-title text-[clamp(2.5rem,8vw,4.7rem)] leading-[1.1] tracking-[-0.07em] text-primary-text"
          >
            깊이 있는 사람들은,
            <br />
            서로의 삶을 더 빛나게 합니다.
          </Heading>
          <p className="mx-auto mt-6 max-w-[34ch] text-[1rem] leading-8 tracking-[-0.02em] text-secondary-text sm:text-[1.05rem]">
            노크노크는 삶을 오래 사유해 온 사람들, 타인을 존중할 줄 아는
            사람들, 질문 앞에서 진심으로 멈출 수 있는 사람들이 함께 만드는
            곳입니다.
          </p>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {valueItems.map((item) => (
            <ValueGridItem key={item.title} item={item} />
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
