import { AboutMetricsSection } from "@/components/about-metrics-section";
import { BrandFeaturesSection } from "@/components/brand-features-section";
import { CommunityValuesSection } from "@/components/community-values-page";
import { MemberKeywordSection } from "@/components/member-keyword-section";
import { MemberIntroSection } from "@/components/member-intro-section";
import { ProgramGuideSection } from "@/components/program-guide-section";
import { VideoHeroSection } from "@/components/video-hero-section";

export default function Home() {
  return (
    <main className="flex-1 bg-bg-soft">
      <VideoHeroSection />
      <AboutMetricsSection />
      <BrandFeaturesSection />
      <MemberKeywordSection />
      <MemberIntroSection headingId="member-intro-heading-bottom" />
      <ProgramGuideSection />
      <CommunityValuesSection />
    </main>
  );
}
