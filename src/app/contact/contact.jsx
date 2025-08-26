"use client";

import React, { useState } from "react";
import data from "../../helper/data.json";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setUploading(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Information */}
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">
          <h3 className="text-2xl font-bold mb-6">📬 Contact Information</h3>
          <p className="text-zinc-400 mb-6">
            Let’s connect! Reach out through any of the platforms below.
          </p>

          <div className="space-y-4">
            {data.profiles
              .filter((p) => p.id !== "profile1" && p.id !== "profile3")
              .map((profile) => (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 duration-300  flex items-center gap-4 bg-zinc-800 p-4 rounded-xl border border-transparent hover:border-zinc-500 hover:bg-zinc-700 transition-all"
                >
                  <img
                    src={`/assets/svg/${profile.name}.svg`}
                    width="28"
                    alt={profile.name}
                  />
                  <span className="font-medium">{profile.name}</span>
                </a>
              ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">
          <h3 className="text-2xl font-bold mb-6">✉️ Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-1 focus:ring-zinc-500 outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-1 focus:ring-zinc-500 outline-none"
                required
              />
            </div>
            <div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-1 focus:ring-zinc-500 outline-none resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="border border-zinc-700 w-full bg-indigo-400 hover:bg-indigo-400/50 text-white font-semibold py-3 rounded-xl hover:scale-105 transition duration-300  disabled:opacity-50"
              disabled={uploading}
            >
              {uploading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
