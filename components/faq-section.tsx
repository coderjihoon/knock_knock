type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: readonly FaqItem[] = [
  {
    question: "어떤 사람이 노크노크와 잘 맞나요?",
    answer:
      "정답을 빠르게 내리기보다, 좋은 질문 앞에서 한 번 더 멈출 수 있는 사람에게 잘 맞습니다. 스펙보다 태도와 결을 더 중요하게 생각하는 분들이 오래 남아요.",
  },
  {
    question: "책은 꼭 다 읽고 가야 하나요?",
    answer:
      "완독이 가장 중요한 기준은 아니에요. 핵심 질문과 가이드가 함께 제공되기 때문에, 책을 전부 읽지 못했더라도 자신의 생각을 가져오면 충분히 깊은 대화를 나눌 수 있습니다.",
  },
  {
    question: "모임은 어떤 방식으로 진행되나요?",
    answer:
      "한 기수는 4주 오프라인 모임으로 시작해 이후 4주 온라인 프로그램으로 이어집니다. 오프라인에서 함께 읽고 나눈 이야기를, 온라인에서 자기 언어로 천천히 정리해 가는 흐름입니다. 오프라인 모임은 매주 다른 요일/시간을 선택할 수 있습니다.",
  },
  {
    question: "혼자 신청해도 어색하지 않을까요?",
    answer:
      "대부분 혼자 참여합니다. 인터뷰와 가이드 진행 덕분에 처음 만나는 자리에서도 억지로 친해지기보다, 차분하게 서로를 알아갈 수 있도록 분위기를 설계하고 있어요.",
  },
  {
    question: "참여 전 인터뷰는 왜 진행하나요?",
    answer:
      "노크노크는 사람을 많이 모으기보다, 오래 대화할 수 있는 사람들을 모으고 싶습니다. 인터뷰는 누군가를 평가하는 과정이라기보다 서로의 기대와 태도를 맞춰보는 시간에 가깝습니다.",
  },
];

function FaqDisclosure({
  item,
  index,
  defaultOpen = false,
}: {
  item: FaqItem;
  index: number;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group border-b border-dark-olive/10 py-5"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 text-left [&::-webkit-details-marker]:hidden">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-main-olive/20 bg-main-olive/14 text-[0.68rem] tracking-[0.12em] text-deep-olive">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <span className="font-title text-[1.28rem] leading-[1.48] tracking-[-0.035em] text-primary-text">
            {item.question}
          </span>
        </div>

        <span className="mt-1 flex shrink-0 text-dark-olive transition-transform duration-300 ease-out group-open:rotate-180">
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
          <div className="pl-11 pt-4">
            <p className="max-w-[30ch] whitespace-pre-line text-[0.98rem] leading-7 tracking-[-0.02em] text-secondary-text">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden border-t border-main-olive/18 bg-bg-soft px-5 pb-24 pt-18"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(163,174,124,0.08)_0%,rgba(242,237,227,0)_100%)]" />

      <div className="relative mx-auto w-full max-w-[32rem]">
        <header className="space-y-5">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-deep-olive">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="max-w-[10ch] font-title text-[clamp(2.05rem,7vw,2.55rem)] leading-[1.3] tracking-[-0.055em] text-primary-text"
          >
            노크노크가
            <br />
            처음이신가요?
          </h2>
        </header>

        <div className="mt-10 border-t border-dark-olive/10">
          {faqItems.map((item, index) => (
            <FaqDisclosure
              key={item.question}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
