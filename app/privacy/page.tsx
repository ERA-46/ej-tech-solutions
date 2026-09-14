import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | EJ Tech Solutions",
  description: "Privacy policy for EJ Tech Solutions — how we collect and use your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-orange-400 hover:text-orange-300 text-sm font-medium mb-6 inline-block transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-gray-700">

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
          <p className="leading-relaxed">
            EJ Tech Solutions is a sole proprietorship based in Surrey, British Columbia, Canada,
            providing IT support, web services, and device installation services to individuals
            and small businesses in Langley, Surrey, and surrounding areas. Our website is
            located at <a href="https://ejtechno.com" className="text-orange-500 hover:underline">ejtechno.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="leading-relaxed mb-3">We collect information in the following ways:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li><strong className="text-gray-800">Contact form submissions</strong> — your name, email address, and message when you reach out to us.</li>
            <li><strong className="text-gray-800">Analytics data</strong> — pages visited, time on site, device type, and general location via Google Analytics and Vercel Analytics.</li>
            <li><strong className="text-gray-800">Cookies</strong> — Google Analytics sets cookies to distinguish unique visitors and track sessions.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To understand how visitors use our website so we can improve it</li>
            <li>To measure the performance of our website</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p className="leading-relaxed mb-3">We use the following third-party services:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li><strong className="text-gray-800">Formspree</strong> — processes contact form submissions. See their <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">privacy policy</a>.</li>
            <li><strong className="text-gray-800">Google Analytics</strong> — tracks website usage. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Google&apos;s privacy policy</a>.</li>
            <li><strong className="text-gray-800">Vercel Analytics</strong> — privacy-friendly website analytics with no personal data stored.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
          <p className="leading-relaxed">
            Our website uses cookies primarily through Google Analytics to understand how visitors
            use our site. You can disable cookies through your browser settings at any time.
            Declining cookies will not affect your ability to use our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
          <p className="leading-relaxed">
            Contact form submissions are retained by Formspree for as long as necessary to
            respond to your inquiry. Analytics data is retained for 26 months by Google Analytics
            by default. We do not store any personal data on our own servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
          <p className="leading-relaxed mb-3">
            Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA),
            you have the right to:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Withdraw consent for the use of your personal information</li>
            <li>Request deletion of your personal information</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your information,
            please contact us:
          </p>
          <div className="mt-3 space-y-1 text-gray-600">
            <p><strong className="text-gray-800">EJ Tech Solutions</strong></p>
            <p>Surrey, British Columbia, Canada</p>
            <p>Email: <a href="mailto:eranda@shaw.ca" className="text-orange-500 hover:underline">eranda@shaw.ca</a></p>
            <p>Phone: <a href="tel:+12368635178" className="text-orange-500 hover:underline">+1 (236) 863-5178</a></p>
            <p>Website: <a href="https://ejtechno.com" className="text-orange-500 hover:underline">ejtechno.com</a></p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            This privacy policy was last updated in {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long" })} and applies to all visitors of ejtechno.com.
          </p>
        </div>

      </div>
    </main>
  );
}