import Image from "next/image";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

const services = [
  {
    title: "Access Control & Security Systems",
    desc: "Design, supply and installation of access control, CCTV and perimeter security systems for residential, commercial and industrial environments.",
    bullets: [
      "Biometric & card access control",
      "CCTV & surveillance systems",
      "Perimeter & intrusion detection",
      "System commissioning & handover",
    ],
    image: "/images/services/security.jpg",
  },
  {
    title: "Smart Technology Integration",
    desc: "Smart systems that improve control, visibility and efficiency across buildings and sites.",
    bullets: [
      "Smart lighting & automation",
      "Remote system monitoring",
      "Integrated control platforms",
      "Energy visibility & optimisation",
    ],
    image: "/images/services/smart-tech.jpg",
  },
  {
    title: "Renewable Energy & Battery Systems",
    desc: "Energy resilience solutions designed for South African operating conditions.",
    bullets: [
      "Solar PV installations",
      "Battery backup systems",
      "Hybrid & grid-tied solutions",
      "System monitoring & support",
    ],
    image: "/images/services/renewable.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      {/* Header */}
      <section className="bg-[#F3F4F6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold" style={{ color: brand.blue }}>
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Integrated engineering services focused on security, energy resilience
            and smart infrastructure.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-10 lg:grid-cols-2 ${
                i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: brand.blue }}
                >
                  {s.title}
                </h2>
                <p className="mt-4 text-gray-600">{s.desc}</p>

                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>

              <div className="relative h-64 rounded-3xl overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
