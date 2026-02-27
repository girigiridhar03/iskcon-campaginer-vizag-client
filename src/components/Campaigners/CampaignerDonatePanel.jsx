import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DonationDialog } from "./DonationDialog";
import { useState } from "react";

const CampaignDonatePanel = ({ details }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const today = new Date();

  const diffDays = details?.campaginers?.campaignId?.endDate
    ? Math.max(
        Math.ceil(
          (new Date(details?.campaginers?.campaignId.endDate) - today) /
            (1000 * 60 * 60 * 24),
        ),
        0,
      )
    : 0;

  return (
    <>
      <div
        id="donation-card"
        className="
        h-full w-full
        flex flex-col
        rounded-3xl
        overflow-hidden
        bg-card
        shadow-xl
        border border-border
      "
      >
        <div
          className="
          relative
          px-6 py-8
          bg-linear-to-br
          from-secondary
          via-secondary/90
          to-secondary/80
          text-secondary-foreground
        "
        >
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          <div className="relative space-y-6">
            {/* Amounts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wide text-emerald-300">
                  Amount Raised
                </p>
                <p className="text-2xl font-bold mt-1">
                  ₹{details?.campaginers?.raisedAmount?.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 px-5 py-4 text-right backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Campaign Goal
                </p>
                <p className="text-xl font-semibold mt-1">
                  ₹{details?.campaginers?.targetAmount?.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <Progress
                value={details?.campaginers?.percentage}
                className="h-3 bg-white/30"
              />
              <p className="text-xs text-white/70">
                {details?.campaginers?.percentage?.toFixed(2)}% achieved
              </p>
            </div>

            {/* Days / Funders */}
            <div className="rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-sm">
              <div className="grid grid-cols-2 divide-x divide-white/20 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    Days Left
                  </p>
                  <p className="text-3xl font-bold mt-2">{diffDays}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    Funders
                  </p>
                  <p className="text-3xl font-bold mt-2">{details?.count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DONATE ================= */}
        <div className="flex flex-col gap-5 px-6 py-8 mt-auto">
          <div className="rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground bg-muted/40">
            🇮🇳 Accepts funds from Indian Passport / ID holders only
          </div>

          <Input
            type="number"
            placeholder="Enter Amount (Min ₹100)"
            className="h-12 text-base"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button
            onClick={() => setOpen(true)}
            size="lg"
            disabled={inputValue < 100}
            className="
            w-full h-14
            text-lg font-semibold
            rounded-xl
            bg-linear-to-r
            from-primary
            to-primary/90
            text-primary-foreground
            shadow-md
            hover:shadow-lg
            transition
          "
          >
            🙏 Contribute Now
          </Button>
        </div>
      </div>
      {open && (
        <DonationDialog
          open={open}
          onOpenChange={setOpen}
          inputValue={inputValue}
        />
      )}
    </>
  );
};

export default CampaignDonatePanel;
