import React from "react";
import CircularProgress from "./CircularProgress";

const Banner1 = () => {
  return (
    <div className="w-full bg-secondary rounded-xl my-2 p-5 flex items-center gap-3">
      <div className="h-40 w-md rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://campaigns.iskconmangalore.org/static/media/logo.511aeddb3df0cfb1bb79.png"
        />
      </div>
      <div className="w-1 rounded-2xl bg-primary self-stretch"></div>
      <div className="text-2xl text-primary font-semibold">
        IF YOU BUILD A TEMPLE OF LORD KRISHNA IN THIS WORLD, KRISHNA WILL BUILD
        A PALACE FOR YOU IN THE SPIRITUAL WORLD - VAIKUNTHA
      </div>
    </div>
  );
};

export default Banner1;
