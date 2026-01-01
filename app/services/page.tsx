import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B3C5D]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Engineering Services for Systems That Cannot Fail.
          </h1>

          <p className="mt-6 max-w-2xl text-white/85">
            We design, install and commission critical systems across security,
            energy resilience and smart infrastructure — built for real operating
            conditions in South Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/request-quote"
              className="rounded-xl px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: brand.yellow, color: brand.blue }}
            >
              Request a Site Assessment
            </Link>

            <a
              href="tel:+27733061438"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Speak to an Engineer
            </a>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
              Our Core Capabilities
            </h2>
            <p className="mt-4 text-gray-600">
              We focus on a small number of engineering disciplines where failure
              has real consequences — and we execute them properly.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* SECURITY */}
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: brand.blue }}
              >
                Access Control & Security Systems
              </h3>
              <p className="mt-4 text-gray-600">
                Design and installation of integrated security systems for
                residential, commercial and operational environments.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Biometric and card-based access control</li>
                <li>• CCTV and surveillance systems</li>
                <li>• Perimeter and intrusion detection</li>
                <li>• Centralised monitoring and handover</li>
              </ul>
            </div>

            {/* SMART TECH */}
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: brand.blue }}
              >
                Smart Technology Integration
              </h3>
              <p className="mt-4 text-gray-600">
                Smart systems that improve visibility, control and operational
                efficiency across buildings and sites.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Smart lighting and automation</li>
                <li>• Remote monitoring and control</li>
                <li>• Integrated system dashboards</li>
                <li>• Energy usage visibility</li>
              </ul>
            </div>

            {/* ENERGY */}
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: brand.blue }}
              >
                Renewable Energy & Battery Systems
              </h3>
              <p className="mt-4 text-gray-600">
                Energy resilience solutions designed for unreliable grids and
                high-load environments.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Solar PV installations</li>
                <li>• Battery backup and hybrid systems</li>
                <li>• Load protection and continuity</li>
                <li>• Monitoring and system support</li>
              </ul>
            </div>

            {/* SELECTIVE WORK */}
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: brand.blue }}
              >
                Selective Mechanical & Specialist Work
              </h3>
              <p className="mt-4 text-gray-600">
                Mechanical and specialist services are delivered on a
                project-by-project basis where they align with our core
                capability.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• HVAC and mechanical installations</li>
                <li>• Equipment integration support</li>
                <li>• Specialist lifting (on request)</li>
                <li>• Controlled scope delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="bg-[#F3F4F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            How We Deliver
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We assess site conditions, risks and requirements before proposing a solution.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Systems are designed for compliance, reliability and long-term operation.",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Work is executed safely, cleanly and to engineering standards.",
              },
              {
                step: "04",
                title: "Commissioning",
                desc: "Systems are tested, documented and handed over correctly.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <div
                  className="text-sm font-semibold"
                  style={{ color: brand.yellow }}
                >
                  {s.step}
                </div>
                <div
                  className="mt-2 text-lg font-semibold"
                  style={{ color: brand.blue }}
                >
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-gray-200 p-10">
            <h2
              className="text-3xl font-semibold"
              style={{ color: brand.blue }}
            >
              Engage Us for a Properly Scoped Solution
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              If your system matters, it deserves proper engineering — not
              shortcuts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/request-quote"
                className="rounded-xl px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: brand.yellow, color: brand.blue }}
              >
                Request a Quote
              </Link>

              <a
                href="tel:+27733061438"
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold"
              >
                Call to Discuss
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
