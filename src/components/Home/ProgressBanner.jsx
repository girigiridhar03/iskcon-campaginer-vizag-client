import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import { useSelector } from "react-redux";

const ProgressBanner = () => {
  const { currentCampaign } = useSelector((state) => state.campaign);

  const [progress, setProgress] = useState(0);
  const [animatedAmount, setAnimatedAmount] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);

      setProgress(Math.floor(eased * (currentCampaign?.percentage || 0)));
      setAnimatedAmount(
        Math.floor(eased * (currentCampaign?.raisedAmount || 0)),
      );

      if (ratio < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [currentCampaign]);

  return (
    <section className="px-4 my-6">
      <div
        className="
        relative
        rounded-3xl
        p-6 sm:p-8
        bg-gradient-to-br 
        from-[#f3e6c0] 
        via-[#e8d7a3] 
        to-[#d9c27c]
        border border-yellow-500/40
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        overflow-hidden
      "
      >
        {/* Soft gold glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full" />

        {/* Inner glass layer for readability */}
        <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-6">
          {/* HEADER */}
          <div>
            <p className="uppercase text-xs tracking-widest text-[#555] font-medium">
              Fundraising Goal
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">
              ₹{currentCampaign?.targetAmount?.toLocaleString("en-IN")}
            </h2>

            <div className="mt-4 text-[#b45309] text-2xl sm:text-3xl font-bold">
              ₹{animatedAmount.toLocaleString("en-IN")}
            </div>

            <p className="text-sm text-[#444] mt-1 font-medium">
              Raised so far
            </p>
          </div>

          {/* PROGRESS */}
          <CircularProgress value={progress} />

          {/* TITLE */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#d4a017] drop-shadow-sm">
              Mandir Nirmana Seva
            </h3>

            <p className="text-base text-[#3a3a3a] font-medium mt-3 px-2">
              Become part of a sacred mission to build a divine legacy.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
            mt-4
            px-8 py-3
            rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-500
            text-black font-bold
            shadow-lg
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
          "
          >
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgressBanner;
