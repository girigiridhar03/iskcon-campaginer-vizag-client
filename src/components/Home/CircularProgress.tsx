import React from "react";

const CircularProgress = ({ value = 0 }) => {
  const radius = 60; // base size (mobile)
  const strokeWidth = 12;

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className="
        relative flex items-center justify-center
        w-40 h-40
        md:w-48 md:h-48
        lg:w-130 lg:h-60
        xl:w-130 xl:h-72
      "
    >
      <svg
        viewBox="0 0 200 200"
        className="
          w-full h-full -rotate-90
          lg:scale-110
          xl:scale-125
        "
      >
        {/* Background */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          className="fill-none stroke-primary/30"
        />

        {/* Progress */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="
            fill-none stroke-primary
            transition-all duration-[1600ms] ease-out
            progress-glow
          "
        />
      </svg>

      {/* Center text */}
      <span
        className="
          absolute font-bold text-primary
          text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
        "
      >
        {value}%
      </span>
    </div>
  );
};

export default CircularProgress;
