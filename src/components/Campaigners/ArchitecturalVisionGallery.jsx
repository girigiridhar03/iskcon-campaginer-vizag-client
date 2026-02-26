import { Card } from "@/components/ui/card";

export default function ArchitecturalVisionGallery() {
  return (
    <section className="py-14 px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Architectural <span className="text-primary">Vision</span>
        </h2>
        <p className="text-muted-foreground mt-3">
          A fusion of Pallava craftsmanship and modern engineering.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 overflow-hidden rounded-3xl">
          <img
            src="/images/front-view.jpg"
            className="w-full h-full object-cover"
          />
          <p className="p-4 font-semibold">Grand Front View</p>
        </Card>

        <div className="grid gap-6">
          <Card className="overflow-hidden rounded-3xl">
            <img src="/images/aerial.jpg" />
            <p className="p-4 font-semibold">Aerial Perspective</p>
          </Card>
          <Card className="overflow-hidden rounded-3xl">
            <img src="/images/side.jpg" />
            <p className="p-4 font-semibold">Side View</p>
          </Card>
        </div>
      </div>
    </section>
  );
}