import { Card } from "@/components/ui/card";

const privileges = [
  {
    title: "Gift & Mahaprasadam",
    desc: "Donate and receive blessed Mahaprasadam and a spiritual gift as divine blessings.",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696",
    bg: "bg-blue-50",
  },
  {
    title: "80G Tax Exemption",
    desc: "Donors will receive an 80G certificate for tax exemption.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    bg: "bg-amber-50",
  },
  {
    title: "Special Puja",
    desc: "A special puja will be offered in your name at the temple inauguration.",
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0",
    bg: "bg-blue-50",
  },
  {
    title: "Vedic Literatures",
    desc: "A special gift set of spiritual books delivered to your doorstep.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    bg: "bg-amber-50",
  },
];

export default function DonorPrivileges() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Donor <span className="text-primary">Privileges</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Each respected contributor receives these blessings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {privileges.map((p, i) => (
            <Card key={i} className={`p-6 rounded-3xl shadow-md ${p.bg}`}>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
