import { Card } from "@/components/ui/card";

export default function ConstructionStatusSection() {
  return (
    <section className="py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Construction <span className="text-primary">Status</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          As on September 2025
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="overflow-hidden rounded-3xl">
          <img
            src="/images/construction-main.jpg"
            className="w-full h-[420px] object-cover"
          />
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card><img src="/images/c1.jpg" /></Card>
          <Card><img src="/images/c2.jpg" /></Card>
          <Card><img src="/images/c3.jpg" /></Card>
        </div>
      </div>
    </section>
  );
}