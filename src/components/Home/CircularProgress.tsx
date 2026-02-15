import React from "react";

const CircularProgress = ({ value = 0 }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        {/* Background Ring */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth="16"
          className="fill-none stroke-primary/20"
        />

        {/* Progress Ring */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth="16"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="fill-none stroke-primary transition-all duration-[1600ms] ease-out progress-glow"
        />
      </svg>

      {/* Center Text */}
      <span className="absolute text-3xl font-bold text-primary">{value}%</span>
    </div>
  );
};

export default CircularProgress;
