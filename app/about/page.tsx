const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[#1F2933]">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold" style={{ color: brand.blue }}>
            About T.N Engineering
          </h1>

          <p className="mt-6 max-w-3xl text-gray-600">
            T.N Engineering Pty Ltd exists because failure in security and energy
            systems has real consequences. We focus on delivering engineering
            solutions that work reliably, safely and correctly from day one.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-lg font-semibold"
                style={{ color: brand.blue }}
              >
                Our Approach
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                We deliver capability-based solutions rooted in solid engineering
                principles, not overpromises. Every system is designed for real
                operating conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3
                className="text-lg font-semibold"
                style={{ color: brand.blue }}
              >
                Local Focus
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our solutions are built for South African environments, power
                conditions and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
