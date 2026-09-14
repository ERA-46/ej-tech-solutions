"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
    window.location.reload();
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <p className="text-sm text-gray-300 leading-relaxed">
          We use cookies and analytics to improve your experience on our site.
          By continuing to use this site, you agree to our{" "}
          <Link
            href="/privacy"
            className="text-orange-400 hover:text-orange-300 underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}