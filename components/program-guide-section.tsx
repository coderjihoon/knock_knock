import Image from "next/image";

type ProgramBook = {
  title: string;
  author: string;
  coverSrc: string;
};

type ProgramWeek = {
  label: string;
  title: string;
  book?: string;
  description: string;
  continuation?: string;
};

type Program = {
  id: string;
  displayId: string;
  theme: string;
  intro: string;
  books: readonly [ProgramBook, ProgramBook, ProgramBook];
  weeks: readonly [ProgramWeek, ProgramWeek, ProgramWeek, ProgramWeek];
};

const bookPositionClasses = [
  "left-0 top-10 -rotate-[8deg]",
  "left-1/2 top-0 -translate-x-1/2 rotate-[-1deg]",
  "right-0 top-10 rotate-[8deg]",
] as const;

const programs = [
  {
    id: "02",
    displayId: "Happiness",
    theme: "행복",
    intro:
      "일상 속 작은 기쁨과 상실의 의미를 함께 읽으며, 오래 남는 행복이 어떤 모양으로 남는지 천천히 완성합니다.",
    books: [
      {
        title: "행복의 기원",
        author: "서은국",
        coverSrc: "/books/k012930648_2.jpg",
      },
      {
        title: "비터스위트",
        author: "수전 케인",
        coverSrc: "/books/8925577984_1.jpg",
      },
      {
        title: "어린 왕자",
        author: "앙투안 드 생텍쥐베리",
        coverSrc: "/books/8932917248_2.jpg",
      },
    ],
    weeks: [
      {
        label: "Week1",
        title: "행복의 발견",
        book: "행복의 기원, 서은국",
        description:
          "일상 속에 숨어있던 크고 작은 기쁨을 발견합니다.",
      },
      {
        label: "Week2",
        title: "상실의 의미",
        book: "비터스위트, 수전 케인",
        description:
          "슬픔과 상실을 마주하여, 나의 열망과 바램을 이해합니다.",
      },
      {
        label: "Week3",
        title: "오래 남는 행복",
        book: "어린 왕자, 앙투안 드 생텍쥐베리",
        description:
          "시간과 마음을 쌓아가 만든, 오래 머무는 행복에 대해 알아갑니다.",
      },
      {
        label: "Week4",
        title: "행복의 모양",
        description:
          "지나온 순간과 마음 속 의미를 돌아보며, 내 행복의 모양을 완성합니다.",
        continuation:
          "4주 오프라인 모임 후 4주 온라인 프로그램으로 이어집니다.",
      },
    ],
  },
] as const satisfies readonly Program[];

function ProgramBookStack({ books }: { books: Program["books"] }) {
  return (
    <figure className="mt-9">
      <div className="relative h-[16.5rem]">
        {books.map((book, index) => (
          <div
            key={book.title}
            className={`absolute flex h-[13.25rem] w-[10.25rem] touch-manipulation items-center justify-center transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] active:-translate-y-[2px] active:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none ${bookPositionClasses[index]}`}
          >
            <Image
              src={book.coverSrc}
              alt={`${book.title} 표지`}
              width={500}
              height={742}
              sizes="(max-width: 640px) 164px, 180px"
              className="h-full w-auto rounded-[0.6rem] object-contain shadow-[0_20px_40px_rgba(72,85,58,0.12)]"
            />
          </div>
        ))}
      </div>

      <figcaption className="mt-6 text-center text-[0.88rem] leading-6 tracking-[-0.01em] text-secondary-text">
        {books.map((book) => book.title).join(" | ")}
      </figcaption>
    </figure>
  );
}

function ProgramWeekList({ weeks }: { weeks: Program["weeks"] }) {
  return (
    <ol className="mt-6 ml-2 space-y-4 border-l border-dark-olive/12 pl-4">
      {weeks.map((week) => (
        <li key={week.label} className="relative">
          <span className="absolute -left-[1.34rem] top-7 h-2.5 w-2.5 rounded-full bg-deep-olive" />

          <article className="rounded-[1.6rem] border border-dark-olive/10 bg-card-white/85 px-5 py-5 backdrop-blur-[2px]">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-deep-olive">
              {week.label}
            </p>
            <h4 className="mt-3 font-title text-[1.38rem] leading-[1.38] tracking-[-0.04em] text-primary-text">
              {week.title}
            </h4>
            {week.book ? (
              <p className="mt-3 text-[0.92rem] leading-6 tracking-[-0.01em] text-accent-brown">
                책 · {week.book}
              </p>
            ) : null}
            <p
              className={`text-[0.97rem] leading-7 tracking-[-0.02em] text-secondary-text ${
                week.book ? "mt-3" : "mt-4"
              }`}
            >
              {week.description}
            </p>
          </article>
            {week.continuation ? (
              <p className="mt-4 rounded-full border border-main-olive/35 bg-light-olive px-4 py-2 text-[0.84rem] leading-6 tracking-[-0.01em] text-dark-olive">
                * {week.continuation}
              </p>
            ) : null}
        </li>
      ))}
    </ol>
  );
}

function ProgramWeekDisclosure({ weeks }: { weeks: Program["weeks"] }) {
  return (
    <details className="group mt-10">
      <summary className="flex items-center gap-2 cursor-pointer list-none text-left text-primary-text [&::-webkit-details-marker]:hidden">
        <span className="text-[1rem] leading-6 tracking-[-0.02em]">
          <span className="group-open:hidden">자세히 보기</span>
          <span className="hidden group-open:inline">테마 접기</span>
        </span>

        <span className="flex text-dark-olive transition-transform duration-300 ease-out group-open:rotate-180">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L10 13L15 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <ProgramWeekList weeks={weeks} />
        </div>
      </div>
    </details>
  );
}

export function ProgramGuideSection() {
  return (
    <section
      aria-labelledby="program-guide-heading"
      className="border-t border-dark-olive/10 bg-bg-main px-5 pb-24 pt-18"
    >
      <div className="mx-auto w-full max-w-[32rem]">
        <header className="space-y-5">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-deep-olive">
            Program Guide
          </p>
          <h2
            id="program-guide-heading"
            className="font-title text-[clamp(2.05rem,7vw,2.55rem)] leading-[1.28] tracking-[-0.055em] text-primary-text"
          >
            노크노크는
            <br />
            어떻게 진행될까요?
          </h2>
          <p className="max-w-[30ch] text-[1rem] leading-7 tracking-[-0.02em] text-secondary-text">
            각 프로그램은 하나의 질문에서 시작해 4주 오프라인 모임을 지나,
            이후 4주 온라인 프로그램으로 생각을 자기 언어로 이어갑니다.
          </p>
          <p className="text-[0.94rem] leading-7 tracking-[-0.02em] text-secondary-text">
            * 매 기수마다 테마가 변경됩니다.
          </p>
        </header>

        <div className="mt-14">
          {programs.map((program, index) => (
            <article
              key={program.id}
              aria-labelledby={`program-theme-${program.id}`}
              className={`relative ${
                index === 0
                  ? "pt-0"
                  : "border-t border-dark-olive/10 pt-14"
              } pb-14`}
            >
              <span className="pointer-events-none absolute right-0 top-4 font-title text-[3.35rem] leading-none tracking-[-0.06em] text-main-olive/14 sm:text-[4.25rem]">
                {program.displayId}
              </span>

              <div className="relative z-10">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-deep-olive">
                  THEME
                </p>
                <h3
                  id={`program-theme-${program.id}`}
                  className="mt-4 max-w-[7ch] font-title text-[2rem] leading-[1.28] tracking-[-0.05em] text-primary-text"
                >
                  {program.theme}
                </h3>
                <p className="mt-4 max-w-[29ch] text-[0.98rem] leading-7 tracking-[-0.02em] text-secondary-text">
                  {program.intro}
                </p>

                <ProgramBookStack books={program.books} />
                <ProgramWeekDisclosure weeks={program.weeks} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
