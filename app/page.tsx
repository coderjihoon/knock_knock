import { AboutMetricsSection } from "@/components/about-metrics-section";
import { BottomCtaSection } from "@/components/bottom-cta-section";
import { BrandFeaturesSection } from "@/components/brand-features-section";
import { CommunityValuesSection } from "@/components/community-values-page";
import { FaqSection } from "@/components/faq-section";
import { FloatingJoinCta } from "@/components/floating-join-cta";
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
      <FaqSection />
      <BottomCtaSection />
      <FloatingJoinCta />
    </main>
  );
}
