import Banner from "@/components/Campaigners/Banner";
import CampaignSideBySide from "@/components/Campaigners/CampaignSideBySide";
import RecentContributors from "@/components/Campaigners/RecentContributors";
import TempleHighlights from "@/components/Campaigners/TempleHighlights";
import YoutubeIframe from "@/components/Campaigners/YoutubeIframe";

const CampaignerDetails = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-8 space-y-2">
        <CampaignSideBySide />
        <RecentContributors />
        <YoutubeIframe />
        <TempleHighlights />
      </div>
    </>
  );
};

export default CampaignerDetails;
