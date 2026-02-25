import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { MapPin } from "lucide-react";

const CustomCard = ({ campainer, index }) => {
  const today = new Date();

  const diffDays = campainer?.campaignId?.endDate
    ? Math.max(
        Math.ceil(
          (new Date(campainer.campaignId.endDate) - today) /
            (1000 * 60 * 60 * 24),
        ),
        0,
      )
    : 0;

  const sevaBadges = [
    "SEVA SHIROMANI", // Top 1
    "SEVA RATNA", // Top 2
    "SEVA BHUSHAN", // Top 3
    "SEVA VIBHUSHAN", // Top 4
    "SEVA VIBHAVA", // Top 5
    "SEVA SHRESHTA", // Top 6
    "SEVA PRAMUKH", // Top 7
    "SEVA SAMARPIT", // Top 8
    "SEVA SADHAK", // Top 9
    "SEVA BANDHU", // Top 10
  ];

  return (
    <Link to={"/campaigner/1/new"}>
      <Card
        className="
        relative 
        flex 
        flex-col 
        rounded-2xl 
        bg-card 
        shadow-md 
        transition-all 
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        py-0
      "
      >
        {/* {index < 3 && (
          <span
            className={`
      pointer-events-none
      absolute inset-0
      rounded-2xl
      glow-border
      ${index === 0 ? "glow-gold" : ""}
      ${index === 1 ? "glow-silver" : ""}
      ${index === 2 ? "glow-bronze" : ""}
    `}
          />
        )} */}

        <div className="relative w-[96%] mx-auto mt-3 h-80 rounded-xl overflow-hidden bg-secondary">
          {index < 10 && (
            <div className="absolute top-3 left-4 z-10 h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-lg font-bold">
                {index + 1}
              </span>
            </div>
          )}
          {index < 10 && (
            <div
              className="
      absolute 
      top-3 
      right-3 
      z-10
      rounded-full 
      bg-linear-to-r 
      from-primary 
      to-secondary
      px-4 
      py-1.5 
      text-xs 
      font-bold 
      text-primary-foreground 
      shadow-md
    "
            >
              {sevaBadges[index]}
            </div>
          )}

          <img
            src={campainer?.image?.url}
            alt="Campaigner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent" />
        </div>

        <CardContent className="flex-1 px-5 py-1 space-y-2">
          <h3 className="text-sm font-medium leading-relaxed text-foreground">
            <span className="font-bold uppercase tracking-wide">
              {campainer?.name}&apos;S
            </span>{" "}
            campaign to build a magnificent{" "}
            <span className="text-primary font-semibold">
              Sri Srinivasa Govinda Temple
            </span>{" "}
            and cultural complex in Visakhapatnam
          </h3>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-secondary">ISKCON Vizag</span>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Gambiram
            </div>
          </div>
        </CardContent>

        <CardFooter className="relative px-5 py-5 overflow-hidden rounded-b-2xl border-t border-border">
          <div
            className="
      absolute inset-0
      bg-linear-to-br
      from-secondary
      via-secondary/85
      to-secondary/70
    "
          />

          <div
            className="
      absolute inset-0
      bg-linear-to-t
      from-black/10
      via-transparent
      to-white/10
    "
          />
          <div className="relative z-10 space-y-6 w-full text-primary-foreground">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs uppercase tracking-wide opacity-80">
                  Raised
                </div>
                <div className="text-2xl font-bold">
                  ₹{campainer?.raisedAmount?.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs uppercase tracking-wide opacity-80">
                  Goal
                </div>
                <div className="text-xl font-semibold opacity-90">
                  ₹{campainer?.targetAmount?.toLocaleString("en-IN")}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-3 rounded-full bg-white/30 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${campainer?.percentage}%` }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span
                  className="
            px-4 py-1.5
            rounded-lg
            bg-white/20
            text-sm font-bold
            backdrop-blur-sm
          "
                >
                  {campainer?.percentage?.toFixed(2)}%
                </span>

                <span
                  className="
            px-4 py-1.5
            rounded-lg
            bg-white/20
            text-sm font-bold
            backdrop-blur-sm
          "
                >
                  {diffDays} Days
                </span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CustomCard;
