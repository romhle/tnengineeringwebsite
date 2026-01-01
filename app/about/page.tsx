import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      {/* HERO */}
      <section className="bg-[#0B3C5D] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            An Engineering Firm Built Around Reliability.
          </h1>

          <p className="mt-6 max-w-2xl text-white/85">
            T.N Engineering exists because poorly designed and incorrectly
            installed systems fail when they are needed most.
          </p>
        </div>
      </section>

      {/* EXISTENCE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
              Why We Exist
            </h2>

            <p className="mt-6 text-gray-600">
              Security breaches, power interruptions and system failures are not
              inconveniences — they are risks. We established T.N Engineering to
              deliver systems that work correctly, safely and consistently from
              day one.
            </p>

            <p className="mt-4 text-gray-600">
              Our focus is not volume or speed. It is correctness, reliability
              and long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="bg-[#F3F4F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
            How We Operate
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Engineering First",
                desc: "Every system is assessed, designed and installed with engineering fundamentals at the core.",
              },
              {
                title: "Safety Is Non-Negotiable",
                desc: "We follow safety-first installation practices and comply with applicable standards and regulations.",
              },
              {
                title: "No Over-Promising",
                desc: "We do not install systems we cannot support or maintain properly.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: brand.blue }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUTH AFRICAN CONTEXT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold" style={{ color: brand.blue }}>
              Built for South African Conditions
            </h2>

            <p className="mt-6 text-gray-600">
              Our systems are designed with local operating realities in mind —
              power instability, security risks and infrastructure constraints.
            </p>

            <p className="mt-4 text-gray-600">
              We design for continuity, resilience and compliance, not ideal
              conditions.
            </p>
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
              Engage an Engineering Partner — Not a Vendor
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              If reliability matters, engage us for a properly scoped solution.
            </p>

            <div className="mt-8">
              <Link
                href="/request-quote"
                className="rounded-xl px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: brand.yellow, color: brand.blue }}
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
