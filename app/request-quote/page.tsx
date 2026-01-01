"use client";

import { useState } from "react";

const brand = {
  blue: "#0B3C5D",
  yellow: "#F5B700",
  green: "#3FA34D",
};

export default function RequestQuotePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/request-quote", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);
    if (res.ok) setSuccess(true);
  }

  return (
    <main className="bg-[#F3F4F6] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold" style={{ color: brand.blue }}>
          Request a Quote
        </h1>

        <p className="mt-3 text-gray-600">
          Tell us what you need and our team will get back to you.
        </p>

        {success ? (
          <div className="mt-10 rounded-2xl bg-white p-6 text-green-700">
            ✅ Thank you — your request has been sent to our sales team.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-3xl bg-white p-8 shadow-sm"
          >
            <input
              required
              name="name"
              placeholder="Full name"
              className="w-full rounded-xl border p-3"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full rounded-xl border p-3"
            />

            <input
              required
              name="phone"
              placeholder="Phone number"
              className="w-full rounded-xl border p-3"
            />

            <select
              required
              name="service"
              className="w-full rounded-xl border p-3"
            >
              <option value="">Select service</option>
              <option>Access Control & Security</option>
              <option>Smart Technology Integration</option>
              <option>Solar & Battery Systems</option>
              <option>Mechanical Engineering</option>
              <option>Rigging & Heavy Equipment</option>
            </select>

            <textarea
              required
              name="message"
              placeholder="Briefly describe your requirements"
              rows={5}
              className="w-full rounded-xl border p-3"
            />

            <button
              disabled={loading}
              className="rounded-xl px-6 py-3 text-sm font-semibold"
              style={{
                backgroundColor: brand.yellow,
                color: brand.blue,
              }}
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
