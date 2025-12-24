import React from "react";
import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9.2 12.3l1.8 1.8 3.8-4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCog(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19.4 15a8.3 8.3 0 000-6l-2.1.3a6.6 6.6 0 00-1.2-1.2L16.4 6a8.3 8.3 0 00-6 0l.3 2.1a6.6 6.6 0 00-1.2 1.2L7.4 9a8.3 8.3 0 000 6l2.1-.3a6.6 6.6 0 001.2 1.2L10.4 18a8.3 8.3 0 006 0l-.3-2.1a6.6 6.6 0 001.2-1.2l2.1.3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.5 7.5a4.5 4.5 0 01-6.2 4.2L4 16l4 4 4.3-4.3A4.5 4.5 0 0016.5 9l-2 2-2-2 2-1.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCrane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M6 20V5h8l4 4v11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 5v4h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 9h4l-2 3h-2l2-3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Access Control & Security Systems",
    desc: "Biometrics, mobile credentials, CCTV, perimeter protection and centralized management.",
    icon: IconShield,
    image: "/images/services/security.png",
    accent: brand.yellow,
  },
  {
    title: "Smart Technology Integration",
    desc: "Smart lighting, intelligent breakers, automation scenarios and unified control platforms.",
    icon: IconCog,
    image: "/images/services/smart-tech.png",
    accent: brand.blue,
  },
  {
    title: "Renewable Energy Systems",
    desc: "Grid-tied, hybrid and off-grid solar with battery storage and monitoring.",
    icon: IconBolt,
    image: "/images/services/renewable.png",
    accent: brand.green,
  },
  {
    title: "Mechanical Engineering",
    desc: "HVAC, fabrication, plant maintenance, machining and mechanical optimization.",
    icon: IconWrench,
    image: "/images/services/mechanical.png",
    accent: brand.blue,
  },
  {
    title: "Rigging & Heavy Equipment",
    desc: "Certified lifting, machine relocation, complex lift planning and safe execution.",
    icon: IconCrane,
    image: "/images/services/rigging.png",
    accent: brand.yellow,
  },
];

const highlights = [
  { label: "Integrated solutions", value: "Mechanical + Digital" },
  { label: "Safety-first delivery", value: "Quality & compliance" },
  { label: "Modern technology", value: "AI CCTV • Smart energy" },
  { label: "Multi-sector experience", value: "Residential to industrial" },
];

const projects = [
  { src: "/images/projects/project-1.png", alt: "Battery bank installation" },
  { src: "/images/projects/project-2.png", alt: "Inverter & distribution boards" },
  { src: "/images/projects/project-3.png", alt: "Industrial renewable setup" },
  { src: "/images/projects/project-4.png", alt: "Rooftop solar installation" },
];

const faqs = [
  {
    q: "Do you do residential and commercial installations?",
    a: "Yes. We support homes, offices, retail sites and industrial environments—tailoring the solution to your load profile, security needs and compliance requirements.",
  },
  {
    q: "Can you design a system and supply equipment too?",
    a: "Yes. We offer end-to-end delivery—site assessment, design, supply, installation, testing and handover documentation.",
  },
  {
    q: "Do you provide maintenance and support?",
    a: "Yes. We provide maintenance plans, inspections and fault response depending on the system and service level required.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-[#1F2933]">
      {/* Top background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-240px] h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{
          background:
            `radial-gradient(closest-side, ${brand.yellow} 0%, transparent 55%),` +
            `radial-gradient(closest-side, ${brand.green} 0%, transparent 60%)`,
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-solar.png"
            alt="T.N Engineering installation hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3C5D]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 text-white md:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: brand.green }} />
            Integrated Engineering • Security • Energy • Industrial
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Engineering a{" "}
                <span style={{ color: brand.yellow }}>Smarter</span>,{" "}
                <span style={{ color: brand.green }}>Safer</span> Future —
                Built to Perform.
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-white/90">
                T.N Engineering Pty Ltd delivers robust, certified solutions across
                access control & security, smart technology integration, renewable energy,
                mechanical engineering and heavy equipment services.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-[#0B3C5D]"
                  style={{ backgroundColor: brand.yellow }}
                >
                  Request a Quote
                </Link>

                <a
                  href="tel:+27733061438"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
                >
                  Call (+27) 73 306 1438
                </a>

                <Link
                  href="/services"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Hero proof panel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-semibold">What you get with us</div>
                <div className="mt-4 grid gap-3">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-start justify-between gap-6 rounded-2xl bg-black/20 p-4"
                    >
                      <div className="text-sm text-white/80">{h.label}</div>
                      <div className="text-sm font-semibold">{h.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xs text-white/70">Response</div>
                    <div className="mt-1 text-lg font-semibold">Fast</div>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xs text-white/70">Delivery</div>
                    <div className="mt-1 text-lg font-semibold">Certified</div>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xs text-white/70">Focus</div>
                    <div className="mt-1 text-lg font-semibold">Safety</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid gap-3 md:grid-cols-4">
            {[
              "Single-provider integrated engineering",
              "Quality workmanship & compliance",
              "Modern tech + robust mechanical base",
              "Residential • Commercial • Industrial",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/85 backdrop-blur"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
                Core Services
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                End-to-end engineering delivery — from design and supply to installation,
                testing and handover.
              </p>
            </div>
            <Link href="/services" className="text-sm font-semibold underline">
              Explore all services
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative h-44">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1F2933]">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.accent }} />
                      Service
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${s.accent}1A` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: s.accent }} />
                      </div>
                      <div>
                        <div className="text-base font-semibold" style={{ color: brand.blue }}>
                          {s.title}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: brand.blue }}
                      >
                        Get a quote <span className="transition group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            How We Work
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            A simple, professional delivery process that keeps your site safe, compliant and on schedule.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              { n: "01", t: "Site Assessment", d: "We evaluate requirements, risks and constraints." },
              { n: "02", t: "Design & Proposal", d: "We propose a solution aligned to budget & compliance." },
              { n: "03", t: "Installation", d: "Certified team executes with safety and quality controls." },
              { n: "04", t: "Testing & Handover", d: "Commissioning, documentation and support options." },
            ].map((step) => (
              <div key={step.n} className="rounded-3xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-semibold" style={{ color: brand.yellow }}>
                  {step.n}
                </div>
                <div className="mt-2 text-lg font-semibold" style={{ color: brand.blue }}>
                  {step.t}
                </div>
                <div className="mt-2 text-sm text-gray-600">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS / GALLERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
                Real Installations
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                A snapshot of real work delivered by our team — clean workmanship, safe execution.
              </p>
            </div>
            <Link href="/contact" className="text-sm font-semibold underline">
              Ask for a site visit
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { k: "Security", v: "Access control • CCTV • Intrusion" },
                { k: "Energy", v: "Solar • Batteries • Monitoring" },
                { k: "Industry", v: "Mechanical • Rigging • Installations" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-sm font-semibold" style={{ color: brand.blue }}>
                    {s.k}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#0B3C5D]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <h2 className="text-3xl font-semibold">Industries We Serve</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Solutions designed for real operational environments — from homes and offices to heavy industry.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Residential", "Commercial", "Industrial", "Construction Sites"].map((i) => (
              <div key={i} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <div className="text-sm font-semibold" style={{ color: brand.yellow }}>
                  {i}
                </div>
                <div className="mt-2 text-sm text-white/80">
                  Custom design, safe installation, clean handover.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            FAQs
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-gray-200 p-6">
                <div className="font-semibold" style={{ color: brand.blue }}>
                  {f.q}
                </div>
                <div className="mt-2 text-sm text-gray-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-10">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: brand.green }}
            />
            <div
              className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full blur-3xl opacity-25"
              style={{ backgroundColor: brand.yellow }}
            />

            <div className="relative">
              <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
                Contact Us Today to Engineer Your Success
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                1 Platinum Close, Albertsdal • Phone: (+27) 73 306 1438 • Email: info@tnengineering.co.za
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-[#0B3C5D]"
                  style={{ backgroundColor: brand.yellow }}
                >
                  Request a Quote
                </Link>
                <a
                  href="mailto:info@tnengineering.co.za"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold"
                >
                  Email Us
                </a>
                <a
                  href="tel:+27733061438"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold"
                >
                  Call Now
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Engineering a Smarter, Safer, More Sustainable Future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
