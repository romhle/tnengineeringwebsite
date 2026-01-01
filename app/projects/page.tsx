import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
};

const projects = [
  {
    title: "Smart Access Control Deployment",
    problem:
      "Uncontrolled access points created security risks and limited visibility over who was entering and exiting the premises.",
    solution:
      "We designed and installed a structured access control system using controlled entry points, credential-based access and centralised management.",
    outcome:
      "The client achieved improved site security, controlled movement and a clear audit trail of access activity.",
    image: "/images/projects/project-access.jpg",
  },
  {
    title: "CCTV & Surveillance Systems",
    problem:
      "The client required improved monitoring and evidence capture across key operational areas.",
    solution:
      "We deployed a CCTV and surveillance solution designed for visibility, recording reliability and operational oversight.",
    outcome:
      "The system provided continuous monitoring, improved incident response and reliable footage when required.",
    image: "/images/projects/project-cctv.jpg",
  },
  {
    title: "Solar PV Installation",
    problem:
      "Grid instability and rising energy costs were impacting daily operations and productivity.",
    solution:
      "We installed a grid-tied solar PV system designed to offset energy consumption during peak usage periods.",
    outcome:
      "The client reduced reliance on grid power and improved energy cost predictability.",
    image: "/images/projects/project-solar.jpg",
  },
  {
    title: "Battery Backup Systems",
    problem:
      "Critical systems were vulnerable to outages during load shedding and power interruptions.",
    solution:
      "We implemented a battery backup system to protect essential loads and ensure continuity.",
    outcome:
      "The client gained energy resilience and operational continuity during outages.",
    image: "/images/projects/project-battery.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      {/* HERO */}
      <section className="bg-[#0B3C5D] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Engineering Projects Delivered with Purpose.
          </h1>

          <p className="mt-6 max-w-2xl text-white/85">
            Each project begins with a real operational challenge and ends with
            a system designed to work reliably in the real world.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-12 lg:grid-cols-2 ${
                i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* TEXT */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: brand.blue }}
                >
                  {p.title}
                </h2>

                <div className="mt-6 space-y-4 text-sm text-gray-600">
                  <p>
                    <strong>Challenge:</strong> {p.problem}
                  </p>
                  <p>
                    <strong>Our Approach:</strong> {p.solution}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {p.outcome}
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-10">
            <h2
              className="text-3xl font-semibold"
              style={{ color: brand.blue }}
            >
              Your Project Should Be Engineered — Not Improvised
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              If you are planning a security, energy or smart infrastructure
              project, engage us early for a properly scoped solution.
            </p>

            <div className="mt-8">
              <Link
                href="/request-quote"
                className="rounded-xl px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: brand.yellow, color: brand.blue }}
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
