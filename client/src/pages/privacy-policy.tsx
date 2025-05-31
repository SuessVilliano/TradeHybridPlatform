import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-purple-300 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <img 
              src="/trade-hybrid-logo.png" 
              alt="Trade Hybrid"
              className="h-12 w-auto mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-purple-300">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-3">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Create an account or subscribe to our services</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Participate in our trading community or forums</li>
                  <li>Subscribe to our newsletters, alerts, or promotional communications</li>
                  <li>Use our trading tools and platforms</li>
                </ul>
                <p>This information may include your name, email address, phone number, trading preferences, and account information.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. SMS and Communication Consent</h2>
              <div className="text-gray-300 space-y-3">
                <p>By providing your phone number and opting in, you expressly consent to receive:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Trading Alerts:</strong> Time-sensitive market opportunities and signals</li>
                  <li><strong>Notifications:</strong> Account updates, platform announcements, and security alerts</li>
                  <li><strong>Reminders:</strong> Educational webinars, live trading sessions, and community events</li>
                  <li><strong>Promotional Content:</strong> Special offers, new services, and member benefits</li>
                  <li><strong>Marketing Messages:</strong> Information about our trading tools, courses, and partnerships</li>
                </ul>
                <p>Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP to any message or contacting us directly.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide and improve our trading services and platforms</li>
                  <li>Send you trading alerts, market analysis, and educational content</li>
                  <li>Process your membership and subscription payments</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Personalize your trading experience and recommendations</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <div className="text-gray-300 space-y-3">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <div className="text-gray-300 space-y-3">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
              <div className="text-gray-300 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Request a copy of the information we have about you</li>
                  <li>Withdraw consent for SMS communications by replying STOP</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <div className="text-gray-300 space-y-3">
                <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
              <div className="text-gray-300 space-y-3">
                <p>Our platform may integrate with third-party services including trading platforms, payment processors, and analytics providers. These services have their own privacy policies, and we encourage you to review them.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <div className="text-gray-300 space-y-3">
                <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <div className="text-gray-300 space-y-3">
                <p>We may update this privacy policy from time to time. We will notify you of any material changes by email or through our platform. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <div className="text-gray-300 space-y-3">
                <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p><strong>Trade Hybrid</strong></p>
                  <p>Email: support@tradehybrid.club</p>
                  <p>Website: tradehybrid.club</p>
                </div>
              </div>
            </section>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}