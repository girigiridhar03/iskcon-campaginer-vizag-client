import React from "react";
import { Sparkles } from "lucide-react";

const Banner1 = () => {
  return (
    <section className="w-full px-4 md:px-8 my-8">
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        p-6 md:p-10
        shadow-2xl
        transition-all duration-500
        hover:shadow-3xl
        bg-gradient-to-r 
        from-[#1fa2ff] 
        via-[#12d8fa] 
        to-[#f5af19]
      "
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Glow Effect */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Logo Card */}
          <div className="flex-shrink-0">
            <div
              className="
              bg-white
              rounded-2xl
              p-5
              shadow-xl
              transition-transform duration-500
              hover:scale-105
            "
            >
              <img
                src="https://storage.googleapis.com/campaigners-images/Temple%20Images/hkm%20logo%20png%20-%20black%20font.jpg"
                alt="HARE KRISHNA MOMMENT VIZAG"
                className="h-28 md:h-32 object-contain"
              />
            </div>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block w-[3px] h-28 bg-white/40 rounded-full" />

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm tracking-wider">
              <Sparkles className="h-4 w-4" />
              DIVINE PROMISE
            </div>

            {/* Main Heading */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug text-white">
              If you build a temple of Lord Krishna in this world,
            </h2>

            {/* Highlight Line */}
            <h3
              className="
              text-lg md:text-2xl lg:text-3xl 
              font-extrabold
              bg-gradient-to-r from-yellow-300 to-yellow-500
              bg-clip-text text-transparent
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
            "
            >
              Krishna will build a palace for you in the spiritual world –
              Vaikuntha
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
