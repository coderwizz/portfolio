"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
      } else {
        const { error } = await res.json();
        setStatus(`Failed to send message: ${error}`);
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-300 transform transition-all hover:scale-105"
    >
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-6">Let's Connect!</h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Or email me directly at{" "}
        <a href="mailto:ez26@stanford.edu" className="text-blue-500 hover:underline">
          your.email@example.com
        </a>
      </p>

      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 block w-full p-4 border-2 border-gray-300 bg-transparent text-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 block w-full p-4 border-2 border-gray-300 bg-transparent text-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-2 block w-full p-4 border-2 border-gray-300 bg-transparent text-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-medium rounded-md hover:from-blue-600 hover:to-teal-600 focus:ring-2 focus:ring-blue-400 transition-all"
      >
        Send Message
      </button>

      {status && <p className="mt-6 text-center text-sm text-gray-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
