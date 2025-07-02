"use client";

import { useState } from "react";

export default function SevaiContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-sevai-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send request. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto mt-30">
        <h1 className="text-3xl font-bold mb-4 text-purple-400">
          Sevai Network – Delete Account Request
        </h1>
        <p className="mb-8 text-gray-400">
          If you're a registered user and wish to delete your account, please
          submit this form. The Sevai Network team will process your request
          within 48 hours or contact you if needed.
        </p>

        {submitted ? (
          <div className="text-green-400 text-lg font-medium">
            ✅ Your request has been submitted. We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Describe your request or reason for deletion"
              value={form.message}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white w-full"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 px-6 py-2 rounded text-white hover:bg-purple-700 transition"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
