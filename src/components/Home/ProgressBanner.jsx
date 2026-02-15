import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";

const ProgressBanner = () => {
  const GOAL = 250000000; // ₹25 Cr
  const ACHIEVED = 10000000; // ₹1 Cr
  const PERCENT = Math.round((ACHIEVED / GOAL) * 100);

  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const ratio = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - ratio, 3);

      setCount(Math.floor(eased * ACHIEVED));
      setProgress(Math.floor(eased * PERCENT));

      if (ratio < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative w-full rounded-2xl drake-glow p-[6px]">
      <div className="relative bg-secondary rounded-xl px-16 py-8 flex items-center justify-between drake-inner">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="text-4xl font-semibold text-foreground">
            GOAL: ₹{GOAL.toLocaleString("en-IN")}
          </div>

          <div className="text-4xl font-bold text-primary">
            ₹{count.toLocaleString("en-IN")}
            <span className="text-2xl ml-2">ACHIEVED</span>
          </div>
        </div>

        {/* CENTER */}
        <CircularProgress value={progress} />

        {/* RIGHT */}
        <div className="flex flex-col gap-3 text-primary font-semibold text-4xl">
          <span>Mandir Nirmana Seva</span>
          <span className="text-muted-foreground">
            Be a Part of This Legacy
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBanner;
