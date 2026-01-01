"use client";

import { useState } from "react";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

export default function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2
        className="text-2xl font-semibold"
        style={{ color: brand.blue }}
      >
        Request a Quote
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        Tell us about your project and we’ll get back to you promptly.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-2xl bg-green-50 p-6 text-green-800">
          <strong>Thank you.</strong> Your request has been received.
          <br />
          Our team will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Full Name"
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Phone Number"
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
            />

            <select
              required
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2"
            >
              <option value="">Select Service</option>
              <option>Access Control & Security</option>
              <option>Smart Technology Integration</option>
              <option>Solar & Battery Systems</option>
              <option>General Electrical</option>
            </select>
          </div>

          <textarea
            required
            rows={4}
            placeholder="Briefly describe your requirements"
            className="rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
          />

          <button
            type="submit"
            className="mt-4 inline-flex w-fit items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition"
            style={{
              backgroundColor: brand.yellow,
              color: brand.blue,
            }}
          >
            Submit Quote Request
          </button>
        </form>
      )}
    </div>
  );
}
