import React from "react";

const CircularProgress = ({ value = 0 }) => {
  const radius = 65;
  const strokeWidth = 14;

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>

        {/* Background ring */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          className="fill-none stroke-yellow-500/20"
        />

        {/* Progress ring */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="url(#goldRing)"
          className="fill-none transition-all duration-[1400ms] ease-out"
          style={{
            filter: "drop-shadow(0 0 8px rgba(180,83,9,0.6))",
          }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute text-center">
        <div className="text-2xl sm:text-3xl font-bold text-[#b45309]">
          {value}%
        </div>
        <div className="text-[10px] sm:text-xs tracking-widest text-[#555] uppercase">
          Completed
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
