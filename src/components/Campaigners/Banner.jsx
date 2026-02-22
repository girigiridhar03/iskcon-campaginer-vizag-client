import templeMainImage from "../../assets/Temple-Images/VIZAG-B_8 - Photo.jpg";

const Banner = () => {
  const handleDonateClick = () => {
    const el = document.getElementById("donation-card");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      className="
        relative 
        w-full 
        h-[70vh] sm:h-[78vh]
        overflow-hidden
      "
    >
      {/* Image */}
      <img
        src={templeMainImage}
        alt="Temple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className="
            container 
            mx-auto 
            px-4 sm:px-6 
            max-w-5xl
          "
        >
          {/* Badge */}
          <span
            className="
              inline-block 
              mb-4 
              px-4 py-1 
              rounded-full 
              bg-primary/20 
              text-primary 
              text-xs sm:text-sm 
              font-medium 
              tracking-wide
            "
          >
            Divine Opportunity
          </span>

          {/* Title */}
          <h1
            className="
              text-white 
              text-3xl sm:text-4xl md:text-6xl 
              font-bold 
              leading-tight
            "
          >
            Support the Construction of <br />
            <span className="text-primary">ISKCON Vizag Temple</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-4 sm:mt-5 
              max-w-2xl 
              text-white/80 
              text-sm sm:text-base md:text-lg 
              leading-relaxed
            "
          >
            Your contribution helps build a spiritual landmark for generations.
            Every donation lays a brick in devotion.
          </p>

          {/* CTA */}
          <div
            className="
              mt-6 sm:mt-8 
              flex flex-col sm:flex-row 
              gap-3 sm:gap-4
            "
          >
            <button
              onClick={handleDonateClick}
              className="
                px-6 sm:px-7 
                py-3 
                rounded-xl 
                bg-primary 
                text-primary-foreground 
                font-semibold 
                shadow-lg 
                hover:opacity-90 
                transition
              "
            >
              Donate Now
            </button>

            <button
              className="
                px-6 sm:px-7 
                py-3 
                rounded-xl 
                border border-white/30 
                text-white 
                hover:bg-white/10 
                transition
              "
            >
              Learn More
            </button>
          </div>

          {/* Meta Info */}
          <div
            className="
              mt-8 sm:mt-10 
              flex flex-wrap 
              gap-x-6 gap-y-2 
              text-xs sm:text-sm 
              text-white/70
            "
          >
            <span>📍 Visakhapatnam</span>
            <span>👥 5,000+ Supporters</span>
            <span>🧾 80G Tax Benefit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
