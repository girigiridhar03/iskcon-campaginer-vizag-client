import { Card, CardContent, CardFooter } from "../ui/card";
import { MapPin } from "lucide-react";

const CustomCard = () => {
  const raised = 80002;
  const goal = 1000000;
  const percent = (raised / goal) * 100;

  return (
    <Card
      className="
        relative 
        flex 
        flex-col 
        overflow-hidden 
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
      <div className="relative w-[96%] mx-auto mt-3 h-80 rounded-xl overflow-hidden bg-secondary">
        <div className="absolute top-3 left-4 z-10 h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
          <span className="text-primary-foreground text-lg font-bold">1</span>
        </div>
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
          SEVA SHIROMANI
        </div>

        <img
          src="https://iskconmangalore.s3.ap-south-1.amazonaws.com/crowdfunding/Gunakara+Rama+Dasa.png"
          alt="Campaigner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent" />
      </div>

      <CardContent className="flex-1 px-5 py-1 space-y-2">
        <h3 className="text-sm font-medium leading-relaxed text-foreground">
          <span className="font-bold uppercase tracking-wide">
            GUNAKARA RAMA DASA&apos;S
          </span>{" "}
          campaign to build a{" "}
          <span className="text-primary font-semibold">
            Sri Radha Krishna Temple
          </span>{" "}
          and Centre for culture and education in Mangalore, Karnataka.
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
                ₹{raised.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs uppercase tracking-wide opacity-80">
                Goal
              </div>
              <div className="text-xl font-semibold opacity-90">
                ₹{goal.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-3 rounded-full bg-white/30 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${percent}%` }}
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
                {percent.toFixed(2)}%
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
                37 Days
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
