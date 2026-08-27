"use client";

import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myklvdrj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto bg-gray-900 py-10 sm:py-12 text-white border border-orange-500/20 rounded-3xl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <MessageSquare size={20} />
              <span className="uppercase tracking-widest text-sm font-bold">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 break-words">
              Ready to Optimize Your Technology?
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-8">
              Whether you need urgent IT support in Surrey or a new business website in Langley,
              we are here to help. Reach out for a{" "}
              <span className="text-white font-semibold">free consultation</span>.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:erandairushan98@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-orange-500 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <Mail size={24} className="text-orange-500 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium break-all">erandairushan98@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+12368635178"
                className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-orange-500 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <Phone size={24} className="text-orange-500 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Call or Text</p>
                  <p className="text-white font-medium">+1 (236) 863-5178</p>
                </div>
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-6">
              Serving Langley, Surrey, and surrounding areas. Remote assistance available across the Lower Mainland.
            </p>
          </div>

          <div className="bg-gray-800/30 p-6 sm:p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Send className="text-orange-500" size={24} />
                </div>
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We will get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="" disabled className="text-gray-500">What can we help you with?</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Web Services">Web Services</option>
                  <option value="Ongoing Support Plan">Installation Services</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about what you need..."
                  required
                  minLength={10}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                ></textarea>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Sending..." : <> Send Message <Send size={18} /></>}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Free consultation — no commitment required.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}