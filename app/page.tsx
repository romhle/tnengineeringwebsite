import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1F2933]">

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-solar.png"
            alt="Solar and engineering installation by T.N Engineering"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3C5D]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Integrated Engineering Solutions for a
            <span className="text-[#F5B700]"> Smarter, Safer </span>
            and
            <span className="text-[#3FA34D]"> Sustainable </span>
            Future
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/90">
            T.N Engineering Pty Ltd delivers end-to-end engineering services
            across security systems, smart technology, renewable energy,
            mechanical engineering and heavy equipment installations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#F5B700] px-6 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-yellow-400"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+27733061438"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              Call (+27) 73 306 1438
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-[#0B3C5D]">
            Our Core Services
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            We provide integrated engineering solutions backed by certified
            expertise, modern technology and uncompromising safety standards.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Service Card */}
            {[
              {
                title: "Access Control & Security Systems",
                image: "/images/services/security.jpg",
                desc: "Biometric access, CCTV, intrusion detection and centralized security management.",
              },
              {
                title: "Smart Technology Integration",
                image: "/images/services/smart-tech.jpg",
                desc: "Smart lighting, automation, intelligent circuit breakers and remote control systems.",
              },
              {
                title: "Renewable Energy Systems",
                image: "/images/services/renewable.jpg",
                desc: "Grid-tied, hybrid and off-grid solar solutions with battery storage.",
              },
              {
                title: "Mechanical Engineering",
                image: "/images/services/mechanical.jpg",
                desc: "HVAC systems, plant installations, fabrication and mechanical optimisation.",
              },
              {
                title: "Rigging & Heavy Equipment Services",
                image: "/images/services/rigging.jpg",
                desc: "Certified lifting, machinery relocation and complex industrial rigging.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-[#0B3C5D]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-[#0B3C5D]">
            Why Choose T.N Engineering
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Integrated mechanical & electronic solutions",
              "Certified engineers and technicians",
              "Strict safety and quality compliance",
              "Modern, future-ready technologies",
              "Client-centric and customised delivery",
              "Proven installations across sectors",
            ].map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <span className="text-[#3FA34D] font-semibold">✓</span>
                <span className="ml-2 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0B3C5D]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <h2 className="text-3xl font-semibold">
            Let’s Engineer Your Success
          </h2>

          <p className="mt-4 max-w-2xl text-white/80">
            Whether you need security systems, solar energy, automation or
            heavy-duty engineering support, our team is ready to deliver.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#F5B700] px-6 py-3 text-sm font-semibold text-[#0B3C5D]"
            >
              Get in Touch
            </Link>

            <a
              href="mailto:info@tnengineering.co.za"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm"
            >
              info@tnengineering.co.za
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
