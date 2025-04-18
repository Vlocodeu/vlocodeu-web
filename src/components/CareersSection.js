"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const openings = [
  {
    role: "Frontend Developer",
    dept: "Web & UI",
    type: "Full Time · Remote",
  },
  {
    role: "AI Product Manager",
    dept: "AI & Innovation",
    type: "Full Time · Hybrid",
  },
  {
    role: "DevOps Engineer",
    dept: "Infrastructure",
    type: "Full Time · Onsite",
  },
];

export default function CareersSection() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    description: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.resume) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const payload = {
        ...form,
        fileName: form.resume.name,
        fileData: reader.result,
      };

      const res = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowModal(false);
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            experience: "",
            description: "",
            resume: null,
          });
        }, 2500);
      } else {
        alert("Something went wrong. Please try again.");
      }
    };

    reader.readAsDataURL(form.resume);
  };

  return (
    <section id="careers" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
          Join Our Team
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We’re always looking for passionate developers, creatives, and
          visionaries who are ready to shape the future of digital products.
          Explore open roles and grow with us at Vlocodeu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition duration-300 shadow hover:shadow-purple-500/20 flex flex-col justify-between"
              whileHover={{ y: -4 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {job.role}
                </h3>
                <p className="text-sm text-purple-400">{job.dept}</p>
                <p className="text-sm text-gray-400 mt-2">{job.type}</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="mt-6 inline-block px-4 py-2 text-sm font-medium text-purple-400 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 w-full max-w-xl rounded-lg p-6 shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            {submitted ? (
              <div className="text-center text-green-400 text-lg font-medium py-12">
                ✅ Your application has been submitted!
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4 text-purple-400">
                  Apply for the Role
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      className="p-2 rounded bg-gray-800 text-white w-full"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      className="p-2 rounded bg-gray-800 text-white w-full"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="p-2 rounded bg-gray-800 text-white w-full"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="p-2 rounded bg-gray-800 text-white w-full"
                    required
                  />
                  <input
                    type="number"
                    name="experience"
                    placeholder="Years of Experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="p-2 rounded bg-gray-800 text-white w-full"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Tell us about yourself..."
                    value={form.description}
                    onChange={handleChange}
                    className="p-2 rounded bg-gray-800 text-white w-full"
                    rows="3"
                  ></textarea>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="text-gray-300"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 px-6 py-2 rounded text-white hover:bg-purple-700 transition"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
