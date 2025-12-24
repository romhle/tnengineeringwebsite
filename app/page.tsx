import Link from "next/link";

const services = [
  {
    title: "Access Control & Security Systems",
    desc: "Biometrics, mobile credentials, CCTV, intrusion detection and centralized management.",
  },
  {
    title: "Smart Technology Integration",
    desc: "Smart lighting, intelligent breakers, automated door systems and unified control platforms.",
  },
  {
    title: "Renewable Energy Systems",
    desc: "Grid-tied, hybrid and off-grid solar with monitoring and commercial-scale installations.",
  },
  {
    title: "Mechanical Engineering",
    desc: "HVAC, steelwork, plant installation, machining and mechanical optimization.",
  },
  {
    title: "Rigging & Heavy Equipment Services",
    desc: "Certified lifting, relocation, complex lift planning and industrial positioning.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm text-gray-600">
          Integrated Engineering • Security • Automation • Renewable Energy • Industrial Services
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Integrated Engineering Solutions for a Smarter, Safer Future
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          T.N Engineering Pty Ltd blends proven mechanical expertise with modern digital technology
          to deliver security, automation, renewable energy and heavy industrial support — built for reliability,
          safety and performance.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+27733061438"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium"
          >
            Call (+27) 73 306 1438
          </a>
          <Link
            href="/services"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium"
          >
            View Services
          </Link>
        </div>

        <div className="mt-10 grid gap-3 text-sm text-gray-700 md:grid-cols-4">
          <div className="rounded-2xl border p-4">Single-provider integrated solutions</div>
          <div className="rounded-2xl border p-4">Certified expertise & safe delivery</div>
          <div className="rounded-2xl border p-4">Smart systems & modern tooling</div>
          <div className="rounded-2xl border p-4">Tailored installs for any site</div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Core Services</h2>
              <p className="mt-2 text-gray-600">
                End-to-end solutions across security, smart integration, energy and industry.
              </p>
            </div>
            <Link href="/services" className="text-sm font-medium underline">
              Explore all services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-6">
                <div className="font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Why Choose T.N Engineering</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Integrated Solutions (single-provider advantage)",
            "Certified Expertise (qualified engineers & technicians)",
            "Quality Assurance (stringent safety and standards)",
            "Innovation Focus (modern tech implementation)",
            "Client-Centric Approach (tailored solutions)",
            "Proven Track Record (multi-sector delivery)",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-6">
              <div className="font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl bg-black p-10 text-white">
            <h2 className="text-3xl font-semibold">Contact us to engineer your success.</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Tell us what you need — security, automation, solar, mechanical work or rigging — and we’ll propose
              a practical, compliant solution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black">
                Request a Quote
              </Link>
              <a href="mailto:info@tnengineering.co.za" className="rounded-xl border border-white/30 px-5 py-3 text-sm font-medium">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
