import Banner from "@/components/Home/Banner";
import Banner1 from "@/components/Home/Banner1";
import CardSection from "@/components/Home/CardSection";
import ProgressBanner from "@/components/Home/ProgressBanner";
import { getCurrentCampaign } from "@/store/campaign/campaign.service";
import { getCampainer } from "@/store/campaigners/campaigners.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { currentCampaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentCampaign());
  }, [dispatch]);

  useEffect(() => {
    if (!currentCampaign?._id) return;

    dispatch(getCampainer({ id: currentCampaign?._id, status: "active" }));
  }, [currentCampaign?._id, dispatch]);

  return (
    <div className="container mx-auto px-3">
      <Banner1 />
      <ProgressBanner />
      <Banner />
      <CardSection />
    </div>
  );
};

export default Home;
