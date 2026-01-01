import QuoteRequestForm from "@/components/QuoteRequestForm";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
};

export default function RequestQuotePage() {
  return (
    <main className="bg-[#F3F4F6]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h1
              className="text-4xl font-bold leading-tight"
              style={{ color: brand.blue }}
            >
              Let’s Quote Your Project
            </h1>

            <p className="mt-4 max-w-xl text-gray-600">
              Whether you need access control, smart systems or solar battery
              solutions, T.N Engineering delivers safe, compliant and reliable
              installations.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✔ Certified technicians</li>
              <li>✔ Safety-first execution</li>
              <li>✔ Residential & commercial projects</li>
              <li>✔ Clean handover & documentation</li>
            </ul>
          </div>

          {/* Form */}
          <QuoteRequestForm />
        </div>
      </section>
    </main>
  );
}
