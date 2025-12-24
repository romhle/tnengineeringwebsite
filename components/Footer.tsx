export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold">T.N Engineering Pty Ltd</div>
          <p className="mt-2 text-sm text-gray-600">
            Engineering a Smarter, Safer, More Sustainable Future.
          </p>
        </div>

        <div className="text-sm text-gray-600">
          <div className="font-medium text-gray-900">Address</div>
          <p className="mt-2">1 Platinum Close, Albertsdal</p>
        </div>

        <div className="text-sm text-gray-600">
          <div className="font-medium text-gray-900">Contact</div>
          <p className="mt-2">
            Phone: <a className="underline" href="tel:+27733061438">(+27) 73 306 1438</a><br />
            Email: <a className="underline" href="mailto:info@tnengineering.co.za">info@tnengineering.co.za</a>
          </p>
        </div>
      </div>

      <div className="border-t py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} T.N Engineering Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
