import type { Metadata } from "next";
import { CommunityValuesPage } from "@/components/community-values-page";

export const metadata: Metadata = {
  title: "깊이 있는 사람들 | Knock Knock",
  description:
    "깊은 대화, 존중과 경청, 좋은 질문을 바탕으로 사람들이 서로의 삶을 더 빛나게 하는 노크노크 커뮤니티 페이지",
};

export default function CommunityPage() {
  return <CommunityValuesPage />;
}
