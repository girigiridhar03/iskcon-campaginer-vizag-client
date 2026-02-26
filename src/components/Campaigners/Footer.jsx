// Footer.jsx
import {
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071f2f] text-white mt-10">
      {/* Top accent line */}
      <div className="h-1 w-full bg-primary" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* ===== LEFT ===== */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dakshina Dwaraka Dham</h3>

            <p className="text-sm text-white/80 leading-relaxed">
              Sri Sri Rukmini Dwarakadisha Temple <br />
              Dakshina Dwaraka Dham <br />
              63, 1st Seaward Road, Valmiki Nagar, <br />
              Thiruvanmiyur <br />
              Chennai – 600041, Tamil Nadu
            </p>
          </div>

          {/* ===== CENTER ===== */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>

            <p className="text-sm text-white/80">
              Phone / WhatsApp:
              <br />
              <a
                href="tel:+919150044121"
                className="text-white hover:text-primary transition"
              >
                +91-9150044121
              </a>
            </p>

            <p className="text-sm text-white/80">
              Email:
              <br />
              <a
                href="mailto:connect@hkmchennai.org"
                className="text-white hover:text-primary transition"
              >
                connect@hkmchennai.org
              </a>
            </p>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Connected</h3>

            <div className="flex gap-4">
              {[
                { icon: Youtube, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Facebook, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: MessageCircle, link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="
                    h-10 w-10
                    flex items-center justify-center
                    rounded-full
                    bg-white/10
                    hover:bg-primary
                    hover:text-black
                    transition
                  "
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom */}
        <p className="text-center text-sm text-white/60 mt-6">
          © 2026 Dakshina Dwaraka Dham — ISKCON Thiruvanmiyur. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
