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
    id: "01",
    theme: "꿈",
    intro:
      "서둘러 정해둔 목표를 내려놓고, 가능성과 기쁨, 선택의 결을 따라 나만의 꿈의 형태를 발견해갑니다.",
    books: [
      {
        title: "늦깎이 천재들의 비밀",
        author: "데이비드 엡스타인",
        coverSrc: "/books/8932920303_1.jpg",
      },
      {
        title: "두 번째 산",
        author: "데이비드 브룩스",
        coverSrc: "/books/8960517771_1.jpg",
      },
      {
        title: "싯다르타",
        author: "헤르만 헤세",
        coverSrc: "/books/s062934786_1.jpg",
      },
    ],
    weeks: [
      {
        label: "Week1",
        title: "가능성의 발견",
        book: "늦깎이 천재들의 비밀, 데이비드 엡스타인",
        description:
          "서둘러 정하는 목표에서 꿈을 내려놓고, 나만의 가능성을 알아갑니다.",
      },
      {
        label: "Week2",
        title: "기쁨의 방향",
        book: "두 번째 산, 데이비드 브룩스",
        description:
          "기쁨이 머무는 곳을 따라, 내가 기꺼이 헌신할 수 있는 대상을 발견합니다.",
      },
      {
        label: "Week3",
        title: "선택의 흐름",
        book: "싯다르타, 헤르만 헤세",
        description:
          "과거와 오늘의 선택을 이해하며, 일상이 만들어가는 꿈을 이해합니다.",
      },
      {
        label: "Week4",
        title: "꿈의 형태",
        description:
          "오늘을 살아가는 이유를 발견하며, 나만의 꿈의 형태를 완성합니다.",
        continuation:
          "4주 오프라인 모임 후 4주 온라인 프로그램으로 이어집니다.",
      },
    ],
  },
  {
    id: "02",
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
  {
    id: "03",
    theme: "자기 이해",
    intro:
      "비교의 기준에서 벗어나 삶의 의미와 자기 수용을 차례로 만나며, 결국 나만의 이야기로 돌아오는 시간입니다.",
    books: [
      {
        title: "평균의 종말",
        author: "토드 로즈",
        coverSrc: "/books/8950995875_1.jpg",
      },
      {
        title: "죽음의 수용소에서",
        author: "빅터 프랭클",
        coverSrc: "/books/8936812629_1.jpg",
      },
      {
        title: "데미안",
        author: "헤르만 헤세",
        coverSrc: "/books/k042535550_2.jpg",
      },
    ],
    weeks: [
      {
        label: "Week1",
        title: "기준의 발견",
        book: "평균의 종말, 토드 로즈",
        description:
          "주변과의 비교를 내려놓고, 흔들림 없는 나만의 기준을 세웁니다.",
      },
      {
        label: "Week2",
        title: "삶의 의미",
        book: "죽음의 수용소에서, 빅터 프랭클",
        description:
          "나의 이야기를 이해하며, 자신을 지탱해 줄 이유와 의미를 발견합니다.",
      },
      {
        label: "Week3",
        title: "자기 수용",
        book: "데미안, 헤르만 헤세",
        description:
          "나의 여러 모습을 모두 받아들여, 온전한 자신을 알아갑니다.",
      },
      {
        label: "Week4",
        title: "나의 이야기",
        description:
          "고유한 자신의 모습을 발견하며, 나만의 이야기를 완성합니다.",
        continuation:
          "4주 오프라인 모임 후 4주 온라인 프로그램으로 이어집니다.",
      },
    ],
  },
  {
    id: "04",
    theme: "관계",
    intro:
      "타인을 바라보는 시선을 다시 세우고, 사람과 관계의 무게를 이해하며 더 빛나는 관계의 태도로 나아갑니다.",
    books: [
      {
        title: "타인의 해석",
        author: "말콤 글래드웰",
        coverSrc: "/books/8934985747_2.jpg",
      },
      {
        title: "사람을 안다는 것",
        author: "데이비드 브룩스",
        coverSrc: "/books/8901280779_1.jpg",
      },
      {
        title: "참을 수 없는 존재의 가벼움",
        author: "밀란 쿤데라",
        coverSrc: "/books/8937404664_1.jpg",
      },
    ],
    weeks: [
      {
        label: "Week1",
        title: "시선의 전환",
        book: "타인의 해석, 말콤 글래드웰",
        description:
          "타인을 쉽게 단정하던 나의 시선을 바로잡아, 관계의 첫걸음을 새롭게 세웁니다.",
      },
      {
        label: "Week2",
        title: "사람의 이해",
        book: "사람을 안다는 것, 데이비드 브룩스",
        description:
          "말과 행동에 있는 한 사람의 세상과 이야기를 이해할 수 있는 관점을 갖게 됩니다.",
      },
      {
        label: "Week3",
        title: "관계의 무게",
        book: "참을 수 없는 존재의 가벼움, 밀란 쿤데라",
        description:
          "관계가 깊어지기 위해 필요한 무게와 선택의 의미를 깨닫습니다.",
      },
      {
        label: "Week4",
        title: "빛나는 관계",
        description:
          "자신과 관계의 여정을 되돌아보며, 빛나는 관계의 태도를 완성합니다.",
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
              <span className="pointer-events-none absolute right-0 top-4 font-title text-[4.9rem] leading-none tracking-[-0.06em] text-main-olive/14">
                {program.id}
              </span>

              <div className="relative z-10">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-deep-olive">
                  Theme {program.id}
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
