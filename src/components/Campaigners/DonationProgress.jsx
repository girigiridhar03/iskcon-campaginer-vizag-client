import { Progress } from "@/components/ui/progress";

export function DonationProgress() {
  return (
    <div className="max-w-2xl mx-auto space-y-4 text-center">
      <p className="text-sm text-muted-foreground tracking-wide">
        FUNDING PROGRESS
      </p>

      <Progress value={20} className="w-full h-4" />

      <p className="text-2xl font-medium">
        <span className="text-primary font-semibold">20%</span> raised —{" "}
        <span className="text-muted-foreground">20 sq.ft of 100 sq.ft</span>
      </p>
    </div>
  );
}
