import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Progress } from "../ui/progress";
import { MapPin } from "lucide-react";

const CustomCard = () => {
  const raised = 80002;
  const goal = 1000000;
  const percent = Math.round((raised / goal) * 100);

  return (
    <Card className="relative flex flex-col overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition py-0 ">
      {/* ================= HEADER ================= */}
      <div className="relative w-[97%] mx-auto h-80 bg-secondary flex items-end justify-center py-2">
        {/* Rank Pill */}
        <div className="absolute top-2 left-6 h-16 w-12 rounded-bl-lg rounded-br-lg bg-primary/90 flex items-center justify-center shadow-md">
          <span className="text-primary-foreground text-xl font-bold">1</span>
        </div>

        {/* Badge */}
        <div
          className="absolute top-3 right-2 rounded-full bg-primary px-4 py-1.5 
  text-xs font-semibold text-primary-foreground tracking-wide shadow-md
  animate-soft-bounce"
        >
          SEVA SHIROMANI
        </div>

        {/* Image */}
        <img
          src="https://iskconmangalore.s3.ap-south-1.amazonaws.com/crowdfunding/Gunakara+Rama+Dasa.png"
          alt="Campaigner"
          className="h-full w-full object-cover overflow-hidden rounded-2xl"
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 h-20 w-full bg-linear-to-t from-card to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <CardContent className="flex-1 px-4 md:px-6 py-1 space-y-4">
        <h3 className="text-[15px] font-semibold leading-relaxed text-foreground">
          <span className="font-bold uppercase tracking-wide">
            GUNAKARA RAMA DASA&apos;S
          </span>{" "}
          campaign to build a{" "}
          <span className="text-primary font-bold">
            Sri Radha Krishna Temple
          </span>{" "}
          and Centre for culture and education in Mangalore, Karnataka.
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-primary">ISKCON Vizag</span>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Gambiram
          </div>
        </div>
      </CardContent>

      {/* ================= FOOTER ================= */}
      <CardFooter className="relative px-4 md:px-6 py-2 border-t border-border overflow-hidden">
        {/* VISIBLE, PREMIUM GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-muted/70 to-muted" />

        {/* Content */}
        <div className="relative z-10 space-y-3 w-full">
          {/* Amounts */}
          <div className="flex justify-between items-end w-full">
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                Raised
              </div>
              <div className="text-xl font-bold text-foreground">
                ₹{raised.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                Goal
              </div>
              <div className="text-lg font-semibold text-muted-foreground">
                ₹{goal.toLocaleString("en-IN")}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-4">
            <Progress value={percent} className="h-3 rounded-full" />

            <div className="flex justify-center">
              <span className="px-4 py-1 text-xs font-bold tracking-wide rounded-full bg-primary/15 text-primary">
                {percent.toFixed(2)}% ACHIEVED
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
