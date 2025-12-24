import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: brand.blue,
        borderColor: "rgba(255,255,255,0.15)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 text-white">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <div className="text-lg font-semibold">T.N Engineering Pty Ltd</div>
            <p className="mt-3 text-sm text-white/75">
              Integrated engineering solutions spanning security systems, smart
              technology, renewable energy, mechanical engineering and heavy
              equipment services.
            </p>

            <p className="mt-4 text-sm text-white/75">
              <strong>Address:</strong><br />
              1 Platinum Close, Albertsdal
            </p>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: brand.yellow }}
            >
              Services
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Access Control & Security</li>
              <li>Smart Technology Integration</li>
              <li>Renewable Energy Systems</li>
              <li>Mechanical Engineering</li>
              <li>Rigging & Heavy Equipment</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: brand.yellow }}
            >
              Company
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: brand.yellow }}
            >
              Contact
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p>
                <strong>Phone:</strong><br />
                <a
                  href="tel:+27733061438"
                  className="hover:text-white"
                >
                  (+27) 73 306 1438
                </a>
              </p>

              <p>
                <strong>Email:</strong><br />
                <a
                  href="mailto:info@tnengineering.co.za"
                  className="hover:text-white"
                >
                  info@tnengineering.co.za
                </a>
              </p>

              <Link
                href="/contact"
                className="inline-block rounded-xl px-4 py-2 text-sm font-semibold transition"
                style={{
                  backgroundColor: brand.yellow,
                  color: brand.blue,
                }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} T.N Engineering Pty Ltd. All rights
            reserved.
          </p>

          <p className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: brand.green }}
            />
            Engineering a Smarter, Safer, More Sustainable Future
          </p>
        </div>
      </div>
    </footer>
  );
}
