import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

export default function DidYouKnowBanner({ image }) {
  return (
    <section className="px-4 pb-14">
      <div
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.hkmchennai.org/cdn-files/cultural_hall_bg.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 py-15 text-center text-white">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm">
            🎵 DID YOU KNOW?
          </span>

          <h3 className="text-2xl md:text-3xl font-bold leading-14">
            Dakshina Dwaraka Dham is built with a<br />
            <span className="text-primary"> 300-Seater Cultural Hall</span>
          </h3>

          <p className="mt-4 text-white/80">
            To host divine programs, heritage arts, and festivals.
          </p>

          <Badge className="mt-8">
           Contribute to sustain our culture.
          </Badge>
        </div>
      </div>
    </section>
  );
}
