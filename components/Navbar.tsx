import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: `${brand.blue}F2`, // slightly transparent
        borderColor: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/logo/tn-engineering-logo.png"
              alt="T.N Engineering"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">T.N Engineering</div>
            <div className="text-[11px] text-white/70">Pty Ltd</div>
          </div>
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-white/85 transition hover:text-white"
            >
              {l.label}
              {/* underline accent */}
              <span
                className="absolute -bottom-2 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: brand.green }}
              />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+27733061438"
            className="hidden rounded-xl border px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 md:inline-flex"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            Call
          </a>

          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-95"
            style={{ backgroundColor: brand.yellow, color: brand.blue }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
