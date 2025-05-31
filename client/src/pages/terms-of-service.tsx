import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
            <p className="text-purple-300">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-3">
                <p>By accessing and using Trade Hybrid services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
              <div className="text-gray-300 space-y-3">
                <p>Trade Hybrid provides:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Educational trading content and market analysis</li>
                  <li>Trading tools and AI-powered insights</li>
                  <li>Community access and trading competitions</li>
                  <li>Proprietary trading firm opportunities</li>
                  <li>SMS alerts, notifications, and marketing communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. SMS and Communication Terms</h2>
              <div className="text-gray-300 space-y-3">
                <p><strong>By providing your phone number and opting in, you expressly agree to receive:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Trading Alerts:</strong> Time-sensitive market signals and opportunities</li>
                  <li><strong>Educational Content:</strong> Trading tips, market analysis, and learning materials</li>
                  <li><strong>Event Notifications:</strong> Live sessions, webinars, and community events</li>
                  <li><strong>Account Updates:</strong> Service announcements and security notifications</li>
                  <li><strong>Promotional Messages:</strong> Special offers, new features, and member benefits</li>
                  <li><strong>Marketing Communications:</strong> Product updates and partnership opportunities</li>
                </ul>
                <p><strong>Message Frequency:</strong> You may receive up to 10 messages per day during active trading hours and market events.</p>
                <p><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe. Reply HELP for assistance.</p>
                <p><strong>Costs:</strong> Message and data rates may apply. Check with your carrier for pricing.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Financial Disclaimers</h2>
              <div className="text-gray-300 space-y-3">
                <p><strong>IMPORTANT:</strong> Trading involves substantial risk and is not suitable for all investors. Past performance does not guarantee future results.</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Our content is for educational purposes only, not investment advice</li>
                  <li>You are solely responsible for your trading decisions</li>
                  <li>We do not guarantee profits or prevent losses</li>
                  <li>Consult with qualified financial advisors before trading</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User Responsibilities</h2>
              <div className="text-gray-300 space-y-3">
                <p>You agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide accurate and current information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow community guidelines in forums and discussions</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Prohibited Uses</h2>
              <div className="text-gray-300 space-y-3">
                <p>You may not:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Share or resell our proprietary content or signals</li>
                  <li>Use automated systems to access our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Harass or harm other community members</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Subscription and Payment Terms</h2>
              <div className="text-gray-300 space-y-3">
                <p>Membership subscriptions are processed through our payment partners. By subscribing, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Pay all applicable fees when due</li>
                  <li>Automatic renewal unless cancelled</li>
                  <li>Our refund policy as stated separately</li>
                  <li>Immediate termination for payment failures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
              <div className="text-gray-300 space-y-3">
                <p>All content, including trading signals, educational materials, software, and branding, is owned by Trade Hybrid or our licensors. You may not reproduce, distribute, or create derivative works without permission.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Privacy and Data Protection</h2>
              <div className="text-gray-300 space-y-3">
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-3">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>We provide services "as is" without warranties</li>
                  <li>We are not liable for trading losses or damages</li>
                  <li>Our liability is limited to the amount you paid for services</li>
                  <li>We disclaim responsibility for third-party content or services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Account Termination</h2>
              <div className="text-gray-300 space-y-3">
                <p>We may suspend or terminate your account for:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Violation of these terms</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or abusive behavior</li>
                  <li>Legal or regulatory requirements</li>
                </ul>
                <p>You may cancel your subscription at any time through your account settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
              <div className="text-gray-300 space-y-3">
                <p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding arbitration or in the courts of [Your Jurisdiction].</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
              <div className="text-gray-300 space-y-3">
                <p>We may modify these terms at any time. We will notify you of material changes via email or platform notifications. Continued use after changes constitutes acceptance of the new terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
              <div className="text-gray-300 space-y-3">
                <p>For questions about these terms or our services, contact us:</p>
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