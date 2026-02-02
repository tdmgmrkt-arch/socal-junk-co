import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SoCal Junk Co terms of service. Review our service terms, conditions, and policies.",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://socaljunkco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Service",
      item: "https://socaljunkco.com/terms",
    },
  ],
}

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of SoCal Junk Co's services and website. By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                If you do not agree to these Terms, please do not use our services or access our website.
              </p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Our Services</h2>
              <p className="text-gray-700 mb-4">
                SoCal Junk Co provides junk removal and hauling services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Residential junk removal</li>
                <li>Commercial junk removal</li>
                <li>Furniture removal</li>
                <li>Appliance removal</li>
                <li>Construction debris removal</li>
                <li>Yard waste removal</li>
                <li>Estate cleanouts</li>
                <li>Donation and recycling services</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to refuse service for any items we deem hazardous, illegal, or beyond the scope of our services.
              </p>
            </div>

            {/* Booking and Scheduling */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Booking and Scheduling</h2>
              <p className="text-gray-700 mb-4">
                <strong>Appointments:</strong> Services must be scheduled in advance by phone, email, or through our website contact form. Appointment times are approximate and may vary due to traffic or previous job completion times.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Advance Notice:</strong> We will call you 30 minutes before our estimated arrival time.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cancellations:</strong> Customers may cancel or reschedule appointments with at least 24 hours notice without penalty. Cancellations with less than 24 hours notice may be subject to a cancellation fee.
              </p>
            </div>

            {/* Pricing and Payment */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quotes:</strong> All quotes provided are estimates based on the information you provide. Final pricing is determined on-site based on the actual volume and type of items to be removed.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Pricing:</strong> Our pricing is volume-based, determined by how much space your items take up in our truck. Prices include labor, loading, hauling, disposal, and recycling fees.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Payment:</strong> Payment is due upon completion of service. We accept cash, credit cards, and debit cards. A receipt will be provided for all transactions.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Additional Fees:</strong> Additional charges may apply for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Extremely heavy items (pianos, safes, hot tubs)</li>
                <li>Items requiring special disposal (electronics, mattresses)</li>
                <li>Difficult access locations (stairs, long carries)</li>
                <li>Same-day or emergency service requests</li>
              </ul>
              <p className="text-gray-700">
                All additional fees will be communicated before work begins, and you have the right to decline the service.
              </p>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide accurate information about items to be removed</li>
                <li>Ensure all items are ready for removal at the scheduled time</li>
                <li>Provide clear access to items (clear pathways, parking available)</li>
                <li>Identify any items you wish to keep before removal begins</li>
                <li>Ensure you have the legal right to dispose of all items</li>
                <li>Remove all personal belongings from furniture and items</li>
                <li>Inform us of any hazardous materials (we do not remove hazardous waste)</li>
              </ul>
            </div>

            {/* Prohibited Items */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Prohibited Items</h2>
              <p className="text-gray-700 mb-4">
                We DO NOT remove:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Hazardous materials (chemicals, asbestos, paint, oil)</li>
                <li>Medical waste</li>
                <li>Radioactive materials</li>
                <li>Biological waste</li>
                <li>Ammunition or explosives</li>
                <li>Items containing mercury</li>
                <li>Industrial waste</li>
              </ul>
              <p className="text-gray-700">
                If prohibited items are discovered during service, we reserve the right to refuse removal and charge for time spent on-site.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Liability and Insurance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Insurance:</strong> SoCal Junk Co carries general liability insurance to protect against property damage during service.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Property Damage:</strong> While we take great care during all removals, we are not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Pre-existing damage to property or items</li>
                <li>Damage to items designated for removal</li>
                <li>Normal wear and tear from item removal</li>
                <li>Damage to property not reported within 24 hours of service</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Any claims for property damage must be reported within 24 hours of service completion.
              </p>
              <p className="text-gray-700">
                <strong>Limitation of Liability:</strong> Our liability is limited to the cost of the service provided, not to exceed $1,000 per incident.
              </p>
            </div>

            {/* Disposal Methods */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Disposal and Recycling</h2>
              <p className="text-gray-700 mb-4">
                We are committed to environmentally responsible disposal practices:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>We donate usable items to local charities whenever possible</li>
                <li>We recycle materials including metal, wood, cardboard, and electronics</li>
                <li>We properly dispose of all items at licensed facilities</li>
                <li>We aim to divert 75% or more of collected items from landfills</li>
              </ul>
              <p className="text-gray-700">
                While we make every effort to recycle and donate, we cannot guarantee that all items will be recycled or donated.
              </p>
            </div>

            {/* Satisfaction Guarantee */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We stand behind our service with a 100% satisfaction guarantee. If you are not completely satisfied with our service, please contact us within 24 hours of service completion. We will:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Return to address any service issues at no additional charge</li>
                <li>Provide a partial or full refund if we cannot resolve the issue</li>
              </ul>
              <p className="text-gray-700">
                This guarantee does not apply to customer errors (such as items mistakenly identified for removal) or changes of mind after service completion.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless SoCal Junk Co, its employees, and contractors from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-4 space-y-2">
                <li>Your breach of these Terms</li>
                <li>Your violation of any law or regulation</li>
                <li>Items you request us to remove that you do not have legal right to dispose of</li>
                <li>Hazardous materials not disclosed to us</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content on our website, including text, graphics, logos, images, and software, is the property of SoCal Junk Co and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved in the courts of Orange County, California.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                In the event of a dispute, we encourage you to contact us first to seek an informal resolution. We are committed to working with you to resolve any issues fairly and quickly.
              </p>
              <p className="text-gray-700">
                If we cannot resolve a dispute informally, you agree to participate in non-binding mediation before pursuing any legal action.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>SoCal Junk Co</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:opanuco@yahoo.com" className="text-gold hover:underline">opanuco@yahoo.com</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+13102187822" className="text-gold hover:underline">(310) 218-7822</a> or <a href="tel:+17147172613" className="text-gold hover:underline">(714) 717-2613</a></p>
                <p className="text-gray-700">Location: Anaheim, CA</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-8 p-6 bg-gold/10 border-l-4 border-gold rounded">
              <p className="text-gray-700 font-semibold">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </p>
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
    </>
  )
}
