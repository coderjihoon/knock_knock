import type { CSSProperties } from "react";
import {
  NotionFaceAvatar,
  type NotionFaceAvatarVariant,
} from "@/components/notion-face-avatar";

type MemberCard = {
  name: string;
  role: string;
  summary: string;
  tag: string;
  avatar: NotionFaceAvatarVariant;
  surfaceClass: string;
  highlighted?: boolean;
};

const memberRows: MemberCard[][] = [
  [
    {
      name: "몽글",
      role: "브랜드 디자이너",
      summary:
        "좋은 문장보다, 좋은 질문이 오래 남는다고 믿는 사람. 조용한 대화 속에서 결을 먼저 읽어요.",
      tag: "6기",
      avatar: "monggeul",
      surfaceClass: "bg-card-white",
    },
    {
      name: "포근",
      role: "응급의학과 의사",
      summary:
        "빠르게 판단하는 일을 하지만, 사람을 이해할 때만큼은 서두르지 않으려는 태도를 갖고 있어요.",
      tag: "8기",
      avatar: "pogeun",
      surfaceClass: "bg-bg-main",
    },
    {
      name: "두근",
      role: "에디터",
      summary:
        "한 사람의 세계가 문장과 침묵 사이에서 드러나는 순간을 좋아해요. 읽고 나누는 시간이 꼭 필요합니다.",
      tag: "5기",
      avatar: "dugeun",
      surfaceClass: "bg-deep-olive",
      highlighted: true,
    },
    {
      name: "소복",
      role: "프로덕트 매니저",
      summary:
        "효율을 다루는 직업을 가졌지만, 사람 사이에서는 효율보다 맥락이 중요하다고 생각해요.",
      tag: "11기",
      avatar: "sobok",
      surfaceClass: "bg-card-white",
    },
  ],
  [
    {
      name: "반짝",
      role: "통번역가",
      summary:
        "단어 하나의 온도를 오래 고민하는 사람. 그래서 누군가의 말투와 숨결에도 쉽게 마음이 갑니다.",
      tag: "4기",
      avatar: "banjjak",
      surfaceClass: "bg-bg-main",
    },
    {
      name: "조각",
      role: "건축가",
      summary:
        "공간이 사람의 태도를 바꾸듯, 대화의 구조도 관계를 바꾼다고 믿어요. 그래서 구조가 좋은 모임을 찾습니다.",
      tag: "9기",
      avatar: "jogak",
      surfaceClass: "bg-card-white",
    },
    {
      name: "물결",
      role: "사업가",
      summary:
        "빠른 성장보다 오래 가는 기준을 더 중요하게 여겨요. 삶의 우선순위를 자주 다시 정리하는 편입니다.",
      tag: "7기",
      avatar: "mulgyeol",
      surfaceClass: "bg-deep-olive",
      highlighted: true,
    },
    {
      name: "여울",
      role: "연구원",
      summary:
        "단정한 답보다 열린 질문이 편안해요. 생각이 다른 사람을 만날 때 오히려 더 또렷해지는 것이 있습니다.",
      tag: "10기",
      avatar: "yeoul",
      surfaceClass: "bg-bg-main",
    },
  ],
  [
    {
      name: "다랑",
      role: "다큐멘터리 PD",
      summary:
        "누군가의 서사를 오래 듣는 일을 합니다. 그래서 짧게 말해도 깊은 사람들에게 자연히 시선이 가요.",
      tag: "3기",
      avatar: "darang",
      surfaceClass: "bg-card-white",
    },
    {
      name: "스밈",
      role: "변호사",
      summary:
        "논리와 설득이 익숙한 직업이지만, 모임에서는 판단보다 이해가 먼저인 시간을 더 귀하게 여겨요.",
      tag: "6기",
      avatar: "seubim",
      surfaceClass: "bg-deep-olive",
      highlighted: true,
    },
    {
      name: "온기",
      role: "포토그래퍼",
      summary:
        "사람의 표정보다 분위기를 먼저 보는 편이에요. 그래서 말보다 태도가 드러나는 자리에 끌립니다.",
      tag: "8기",
      avatar: "ongi",
      surfaceClass: "bg-bg-main",
    },
    {
      name: "별빛",
      role: "교육 기획자",
      summary:
        "사람이 스스로를 설명할 수 있게 돕는 일을 해요. 읽고 나누는 시간도 결국 같은 방향에 있다고 느낍니다.",
      tag: "11기",
      avatar: "byeolbit",
      surfaceClass: "bg-card-white",
    },
  ],
];

function getMemberSurfaceKey(member: MemberCard) {
  return member.highlighted ? "bg-deep-olive" : member.surfaceClass;
}

function arrangeMembersForMarquee(members: MemberCard[]) {
  const arranged: MemberCard[] = [];
  const used = new Array(members.length).fill(false);

  function placeNext() {
    if (arranged.length === members.length) {
      if (arranged.length < 2) {
        return true;
      }

      return (
        getMemberSurfaceKey(arranged[0]) !==
        getMemberSurfaceKey(arranged[arranged.length - 1])
      );
    }

    const previousKey =
      arranged.length > 0
        ? getMemberSurfaceKey(arranged[arranged.length - 1])
        : null;

    for (let index = 0; index < members.length; index += 1) {
      if (used[index]) {
        continue;
      }

      const member = members[index];
      const surfaceKey = getMemberSurfaceKey(member);

      if (surfaceKey === previousKey) {
        continue;
      }

      used[index] = true;
      arranged.push(member);

      if (placeNext()) {
        return true;
      }

      arranged.pop();
      used[index] = false;
    }

    return false;
  }

  return placeNext() ? arranged : members;
}

function MarqueeRow({
  members,
  reverse = false,
  duration,
}: {
  members: MemberCard[];
  reverse?: boolean;
  duration: string;
}) {
  const marqueeStyle = {
    "--marquee-duration": duration,
  } as CSSProperties;
  const arrangedMembers = arrangeMembersForMarquee(members);

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
            className="flex min-w-max gap-4 pr-4"
          >
            {arrangedMembers.map((member) => (
              <li key={`${groupIndex}-${member.name}`}>
                <article
                  className={`flex w-[16.75rem] shrink-0 flex-col rounded-[1.8rem] border p-5 ${
                    member.highlighted
                      ? "border-deep-olive/80 bg-deep-olive"
                      : `border-dark-olive/10 ${member.surfaceClass}`
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <NotionFaceAvatar
                          variant={member.avatar}
                          className="h-11 w-11 shrink-0"
                        />
                        <div>
                          <p
                            className={`text-[0.68rem] tracking-[0.18em] ${
                              member.highlighted
                                ? "text-bg-main/80"
                                : "text-deep-olive"
                            }`}
                          >
                            {member.role}
                          </p>
                          <h3
                            className={`mt-1 font-title text-[1.35rem] leading-[1.24] tracking-[-0.04em] ${
                              member.highlighted
                                ? "text-bg-main"
                                : "text-primary-text"
                            }`}
                          >
                            {member.name}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`rounded-full border px-3 py-1 text-[0.72rem] ${
                          member.highlighted
                            ? "border-bg-main/15 bg-bg-main/10 text-bg-main"
                            : "border-dark-olive/10 bg-bg-main/80 text-deep-olive"
                        }`}
                      >
                        {member.tag}
                      </p>
                    </div>

                    <p
                      className={`mt-6 text-[0.97rem] leading-7 tracking-[-0.02em] ${
                        member.highlighted
                          ? "text-bg-main"
                          : "text-primary-text"
                      }`}
                    >
                      {member.summary}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function MemberIntroSection({
  headingId = "member-intro-heading",
}: {
  headingId?: string;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="overflow-hidden border-t border-dark-olive/10 bg-light-olive/70 pb-24 pt-16"
    >
      <div className="mx-auto w-full max-w-[32rem] px-5 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-deep-olive">
          Members
        </p>
        <h2
          id={headingId}
          className="mx-auto mt-5 w-fit whitespace-nowrap font-title text-[2.05rem] leading-[1.34] tracking-[-0.05em] text-primary-text"
        >
          노크노크에는
          <br />
          이런 사람들이 모입니다.
        </h2>
        <p className="mx-auto mt-4 max-w-[29ch] text-[0.98rem] leading-7 tracking-[-0.02em] text-secondary-text">
          비슷한 스펙보다 비슷한 태도를 먼저 보는 사람들. 각자의 속도와 깊이를
          지닌 멤버들이 차분하게 서로를 알아갑니다.
        </p>
      </div>

      <div className="mt-11 space-y-4">
        <MarqueeRow members={memberRows[0]} duration="31s" />
        <MarqueeRow members={memberRows[1]} reverse duration="36s" />
        <MarqueeRow members={memberRows[2]} duration="34s" />
      </div>
    </section>
  );
}
