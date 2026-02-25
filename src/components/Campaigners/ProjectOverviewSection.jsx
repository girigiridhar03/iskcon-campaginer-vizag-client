import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProjectOverviewSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto  space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Dakshina Dwaraka Dham:
            <br />
            <span className="text-primary">Inspiration & Aspiration</span>
          </h2>
        </div>
        <div className="w-full">
          <p className="text-muted-foreground leading-relaxed">
            Nestled along the scenic seashore of the Bay of Bengal in
            Thiruvanmiyur, Chennai, the Dakshina Dwaraka Dham Cultural Complex
            is envisioned as a magnificent center to preserve India’s timeless
            spiritual and cultural heritage.
          </p>

          {expanded && (
            <p className="text-muted-foreground leading-relaxed">
              Designed in the traditional Pallava style of architecture, the
              temple complex includes divine altars, a cultural hall,
              classrooms, and a prasadam hall—serving devotion, education, and
              heritage for generations.
            </p>
          )}

          <Button
            variant="link"
            className="text-primary font-semibold mx-auto block"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read less" : "Read more"}
          </Button>
        </div>
      </div>
    </section>
  );
}
