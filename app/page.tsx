import React from "react";
import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

/* ================= ICONS ================= */

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.2 12.3l1.8 1.8 3.8-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconCog(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19.4 15a8.3 8.3 0 000-6l-2.1.3a6.6 6.6 0 00-1.2-1.2L16.4 6a8.3 8.3 0 00-6 0l.3 2.1a6.6 6.6 0 00-1.2 1.2L7.4 9a8.3 8.3 0 000 6l2.1-.3a6.6 6.6 0 001.2 1.2L10.4 18a8.3 8.3 0 006 0l-.3-2.1a6.6 6.6 0 001.2-1.2l2.1.3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14.5 7.5a4.5 4.5 0 01-6.2 4.2L4 16l4 4 4.3-4.3A4.5 4.5 0 0016.5 9l-2 2-2-2 2-1.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconCrane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 20V5h8l4 4v11" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 5v4h4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 9h4l-2 3h-2l2-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

/* ================= SERVICES ================= */

const services = [
  {
    title: "Access Control & Security Systems",
    desc: "Biometrics, access cards, CCTV, perimeter protection and centralised monitoring.",
    icon: IconShield,
    image: "/images/services/security.jpg",
    accent: brand.yellow,
  },
  {
    title: "Smart Technology Integration",
    desc: "Automation, smart lighting, intelligent breakers and unified control platforms.",
    icon: IconCog,
    image: "/images/services/smart-tech.jpg",
    accent: brand.blue,
  },
  {
    title: "Renewable Energy & Battery Systems",
    desc: "Solar PV, hybrid systems, battery backup and energy monitoring solutions.",
    icon: IconBolt,
    image: "/images/services/renewable.jpg",
    accent: brand.green,
  },
  {
    title: "Mechanical Engineering",
    desc: "HVAC, fabrication and mechanical services available for selected projects.",
    icon: IconWrench,
    image: "/images/services/mechanical.jpg",
    accent: brand.blue,
  },
  {
    title: "Rigging & Heavy Equipment",
    desc: "Specialist lifting and equipment relocation services on request.",
    icon: IconCrane,
    image: "/images/services/rigging.jpg",
    accent: brand.yellow,
  },
];

/* ================= PAGE ================= */

export default function HomePage() {
  return (
    <main className="bg-white text-[#1F2933]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-solar.jpg"
            alt="T.N Engineering installation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3C5D]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            We Engineer Systems That Must Work.
          </h1>

          <p className="mt-4 max-w-xl text-white/85">
            Integrated engineering solutions for security, energy resilience
            and smart infrastructure.
          </p>

          <p className="mt-3 text-sm text-white/80">
            Smart Access • CCTV • Solar PV • Battery Backup
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: brand.yellow, color: brand.blue }}
            >
              Request a Quote
            </Link>

            <a
              href="tel:+27733061438"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Call (+27) 73 306 1438
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            Why T.N Engineering
          </h2>

          <p className="mt-4 max-w-3xl text-gray-600">
            We exist because failure in security and energy systems has real consequences.
            Our focus is delivering solutions that work reliably, safely and correctly
            from day one.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Honest, capability-based delivery",
              "Safety-first installations",
              "Real solutions for real problems",
              "Built for South African conditions",
            ].map((t) => (
              <div key={t} className="rounded-3xl border border-gray-200 bg-white p-6">
                <div className="font-semibold" style={{ color: brand.blue }}>
                  {t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F3F4F6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            Core Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-3xl bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-3">
                      <Icon className="h-6 w-6" style={{ color: s.accent }} />
                      <div>
                        <div className="font-semibold" style={{ color: brand.blue }}>
                          {s.title}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            Recent Installations
          </h2>

          <p className="mt-2 max-w-2xl text-gray-600">
            A selection of real systems installed by our team across security
            and energy solutions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/projects/project-access.jpg", label: "Smart Access Control" },
              { src: "/images/projects/project-cctv.jpg", label: "CCTV & Surveillance" },
              { src: "/images/projects/project-solar.jpg", label: "Solar PV Installation" },
              { src: "/images/projects/project-battery.jpg", label: "Battery Backup System" },
            ].map((p) => (
              <div key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={p.src} alt={p.label} fill className="object-cover" />
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
