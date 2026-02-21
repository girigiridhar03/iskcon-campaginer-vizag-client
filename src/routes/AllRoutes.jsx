import CampaignerDetails from "@/pages/Campaigners/CampaignerDetails";
import Campaigners from "@/pages/Campaigners/Campaigners";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigners" element={<Campaigners />} />
      <Route
        path="/campaigner/:id/:campaignername"
        element={<CampaignerDetails />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
