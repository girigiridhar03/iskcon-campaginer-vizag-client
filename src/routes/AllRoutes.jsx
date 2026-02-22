import CampaignerDetails from "@/pages/Campaigners/CampaignerDetails";;
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/campaigner/:id/:campaignername"
        element={<CampaignerDetails />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
