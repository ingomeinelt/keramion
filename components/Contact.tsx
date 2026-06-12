"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            Ready to elevate your business presence?
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-4 bg-green-900/30 border border-green-600 rounded-lg">
            <p className="text-green-400 font-semibold">
              ✓ Thank you! We'll be in touch within 24 hours.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
          />

          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-16 pt-16 border-t border-gray-800 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Email</p>
            <a href="mailto:ingo@keramion.com" className="text-amber-600 hover:text-amber-500">
              ingo@keramion.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-2">Phone</p>
            <p className="text-white">+49 (0) 30 XXXX XXXX</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-white">Berlin, Germany</p>
          </div>
        </div>
      </div>
    </section>
  );
}
