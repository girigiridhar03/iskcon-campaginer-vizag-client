import ArchitecturalVisionGallery from "@/components/Campaigners/ArchitecturalVisionGallery";
import Banner from "@/components/Campaigners/Banner";
import CampaignSideBySide from "@/components/Campaigners/CampaignSideBySide";
import DidYouKnowBanner from "@/components/Campaigners/DidYouKnowBanner";
import DonorPrivileges from "@/components/Campaigners/DonorPrivileges";
import Footer from "@/components/Campaigners/Footer";
import MajesticAltarsBanner from "@/components/Campaigners/MajesticAltarsBanner";
import PowerOfGivingSection from "@/components/Campaigners/PowerOfGivingSection";
import ProjectOverviewSection from "@/components/Campaigners/ProjectOverviewSection";
import RecentContributors from "@/components/Campaigners/RecentContributors";
import TempleHighlights from "@/components/Campaigners/TempleHighlights";
import TempleSpacesSection from "@/components/Campaigners/TempleSpacesSection";
import TestimonialsSection from "@/components/Campaigners/TestimonialsSection";
import YoutubeIframe from "@/components/Campaigners/YoutubeIframe";
import { useEffect } from "react";

const CampaignerDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Banner />
      <div className="container mx-auto px-2 pt-8 space-y-2">
        <CampaignSideBySide />
        <RecentContributors />
        <YoutubeIframe />
        <TempleHighlights />
        <ProjectOverviewSection />
        <DidYouKnowBanner />
        <TempleSpacesSection />
        <ArchitecturalVisionGallery />
        <TestimonialsSection />
        <MajesticAltarsBanner />
        <DonorPrivileges />
        <PowerOfGivingSection />
        <Footer />
      </div>
    </>
  );
};

export default CampaignerDetails;
