import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Heart, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const contributors = [
  { name: "Rajalakshmi Rangarajan", amount: "10 Sq. Ft.", time: "54 days ago" },
  { name: "Manikandan P S", amount: "10 Sq. Ft.", time: "54 days ago" },
  { name: "Sameer Kumar Epari", amount: "8 Sq. Ft.", time: "21 days ago" },
  { name: "Mageswari Guruswamy", amount: "5 Sq. Ft.", time: "46 days ago" },
  { name: "Sarangan Muthukrishnan", amount: "5 Sq. Ft.", time: "39 days ago" },
];

const podium = [
  {
    icon: Medal,
    accent: "bg-yellow-400",
    ring: "ring-yellow-400/40",
    gradient: "from-yellow-50 to-transparent",
  },
  {
    icon: Medal,
    accent: "bg-gray-300",
    ring: "ring-gray-300/40",
    gradient: "from-gray-50 to-transparent",
  },
  {
    icon: Medal,
    accent: "bg-amber-600",
    ring: "ring-amber-600/40",
    gradient: "from-amber-50 to-transparent",
  },
];

export default function RecentContributors() {
  const [tab, setTab] = useState("top");

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-4xl font-bold">
          Recent <span className="text-primary">Contributors</span>
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground">
          Join the growing community of devotees building this spiritual legacy.
          Your name belongs here.
        </p>

        <div className="flex justify-center mt-6">
          <div className="flex rounded-full bg-muted p-1 shadow-inner">
            <button
              onClick={() => setTab("latest")}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition",
                tab === "latest"
                  ? "bg-background shadow"
                  : "text-muted-foreground",
              )}
            >
              <Clock className="h-4 w-4" />
              Latest
            </button>

            <button
              onClick={() => setTab("top")}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition",
                tab === "top"
                  ? "bg-background shadow"
                  : "text-muted-foreground",
              )}
            >
              <Trophy className="h-4 w-4 text-primary" />
              Top Donors
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
        <Card className="p-3 sm:p-6 space-y-3 bg-muted shadow-inner gap-2">
          {contributors.map((item, index) => {
            const isTop = index < 3;
            const style = podium[index];

            return (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col gap-4 rounded-2xl p-4 bg-background shadow-sm transition hover:shadow-md",
                  "sm:flex-row sm:items-center sm:justify-between",
                  isTop && `bg-linear-to-r ${style.gradient}`,
                )}
              >
                {isTop && (
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 rounded-l-2xl",
                      style.accent,
                    )}
                  />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "relative h-12 w-12 rounded-full flex items-center justify-center bg-muted font-semibold ring-1 shrink-0",
                      isTop ? style.ring : "ring-border",
                    )}
                  >
                    {isTop ? (
                      <style.icon className="h-6 w-6 text-primary" />
                    ) : (
                      item.name.charAt(0)
                    )}
                  </div>

                  <div>
                    <p className="font-semibold leading-tight">{item.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Heart className="h-4 w-4 text-primary" />
                      Donated{" "}
                      <span className="font-medium text-foreground">
                        {item.amount}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground sm:text-right">
                  {item.time}
                </p>
              </div>
            );
          })}
        </Card>

        <p className="text-xs mt-7 text-muted-foreground text-center">
          Every Square Feet You Donate Lives Forever
        </p>
      </div>
    </section>
  );
}
