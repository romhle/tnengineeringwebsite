import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/tn-engineering-logo.JPG"
            alt="T.N Engineering Pty Ltd"
            width={40}
            height={40}
          />
          <span className="font-semibold tracking-tight">
            T.N Engineering
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+27733061438"
            className="rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Call
          </a>
          <Link
            href="/contact"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
