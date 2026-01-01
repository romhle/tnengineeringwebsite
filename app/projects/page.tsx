import Image from "next/image";

const brand = {
  blue: "#0B3C5D",
};

const projects = [
  {
    src: "/images/projects/project-access.jpg",
    label: "Smart Access Control",
  },
  {
    src: "/images/projects/project-cctv.jpg",
    label: "CCTV & Surveillance",
  },
  {
    src: "/images/projects/project-solar.jpg",
    label: "Solar PV Installation",
  },
  {
    src: "/images/projects/project-battery.jpg",
    label: "Battery Backup System",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold" style={{ color: brand.blue }}>
            Projects
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            A selection of real installations delivered across security and
            energy systems.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div
                key={p.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-[#0B3C5D]">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
