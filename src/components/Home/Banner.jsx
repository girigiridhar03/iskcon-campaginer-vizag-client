import React from "react";

const Banner = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden my-2.5 flex items-center justify-center">
      <img
        className="max-h-full max-w-full object-cover"
        src="https://campaigns.iskconmangalore.org/static/media/mandir_nirman_seva_banner.4e65693c624cb9cc49cc.png"
        alt="banner"
        loading="lazy"
      />
    </div>
  );
};

export default Banner;
