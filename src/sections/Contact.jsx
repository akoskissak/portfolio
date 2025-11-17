import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle, XCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovybkvo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT_HERE") {
      console.error(
        "Configuration Error: Please replace 'YOUR_FORMSPREE_ENDPOINT_HERE' with your actual Formspree URL."
      );
      setStatus("config_error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      setStatus("error");
    }
  };

  const statusText = {
    idle: "Send Message",
    loading: "Sending...",
    success: "Sent! Thank you.",
    error: "Failed to Send",
    config_error: "Configuration Error",
  }[status];

  const isFormDisabled =
    status === "loading" || status === "success" || status === "config_error";

  return (
    <div className="max-width py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[rgb(var(--color-text))]">
          Contact
        </h2>
        <p className="text-gray-500 mb-6">
          Let’s connect - email, LinkedIn or GitHub.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="mailto:akos@example.com"
          >
            Email
          </a>
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="https://linkedin.com/in/akoskissak"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="https://github.com/akoskissak"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="w-full max-w-xl p-6 rounded-xl border border-[rgba(var(--color-text),0.2)] bg-transparent shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-[rgb(var(--color-text))]">
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[rgb(var(--color-text))] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent text-[rgb(var(--color-text))] border border-[rgba(var(--color-text),0.2)] rounded-lg focus:ring-1 focus:ring-[rgb(var(--color-text))] focus:border-[rgb(var(--color-text))] transition duration-150 placeholder-gray-500"
                placeholder="Your Name"
                disabled={isFormDisabled}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[rgb(var(--color-text))] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent text-[rgb(var(--color-text))] border border-[rgba(var(--color-text),0.2)] rounded-lg focus:ring-1 focus:ring-[rgb(var(--color-text))] focus:border-[rgb(var(--color-text))] transition duration-150 placeholder-gray-500"
                placeholder="you@example.com"
                disabled={isFormDisabled}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[rgb(var(--color-text))] mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent text-[rgb(var(--color-text))] border border-[rgba(var(--color-text),0.2)] rounded-lg focus:ring-1 focus:ring-[rgb(var(--color-text))] focus:border-[rgb(var(--color-text))] transition duration-150 placeholder-gray-500"
                placeholder="What can I help you with?"
                disabled={isFormDisabled}
              />
            </div>

            {status === "success" && (
              <div className="flex items-center p-3 bg-green-50/10 border border-green-500 text-green-500 rounded-lg text-sm font-medium">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Your message was delivered successfully! I'll reply soon.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center p-3 bg-red-50/10 border border-red-500 text-red-500 rounded-lg text-sm font-medium">
                <XCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  There was an issue sending the message. <br />
                  Please check your Formspree settings or try again.
                </span>
              </div>
            )}

            {status === "config_error" && (
              <div className="flex items-center p-3 bg-yellow-50/10 border border-yellow-500 text-yellow-500 rounded-lg text-sm font-medium">
                <XCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Error: Form endpoint not configured. <br />
                  Please update the FORMSPREE_ENDPOINT variable.
                </span>
              </div>
            )}

            <button
              type="submit"
              className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-[1.005] 
                border border-[rgba(var(--color-text),0.5)] text-[rgb(var(--color-text))]
                hover:bg-[rgba(var(--color-text),0.05)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-text))] focus:ring-opacity-50
                ${isFormDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isFormDisabled}
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : status === "success" ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
              <span>{statusText}</span>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
