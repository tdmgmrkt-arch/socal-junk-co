import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SoCal Junk Co privacy policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                SoCal Junk Co ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-black mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Request a quote or contact us for services</li>
                <li>Fill out a contact form on our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Book an appointment for junk removal services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Service location address</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Clickstream data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your service requests and appointments</li>
                <li>Send you quotes, invoices, and service confirmations</li>
                <li>Communicate with you about your service or questions</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as payment processing, email delivery, and website hosting.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
              <p className="text-gray-700">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and data storage</li>
                <li>Regular security assessments</li>
                <li>Restricted access to personal information</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request that we correct any inaccurate information</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at <a href="mailto:opanuco@yahoo.com" className="text-gold hover:underline">opanuco@yahoo.com</a> or call us at <a href="tel:+13102187822" className="text-gold hover:underline">(310) 218-7822</a>.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Third-Party Websites</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">California Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>The right to know what personal information is collected</li>
                <li>The right to know if personal information is sold or disclosed</li>
                <li>The right to opt-out of the sale of personal information</li>
                <li>The right to access personal information</li>
                <li>The right to request deletion of personal information</li>
                <li>The right to non-discrimination for exercising CCPA rights</li>
              </ul>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>SoCal Junk Co</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:opanuco@yahoo.com" className="text-gold hover:underline">opanuco@yahoo.com</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+13102187822" className="text-gold hover:underline">(310) 218-7822</a> or <a href="tel:+17147172613" className="text-gold hover:underline">(714) 717-2613</a></p>
                <p className="text-gray-700">Location: Anaheim, CA</p>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-gold hover:underline font-semibold">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
