import { Twitter, Linkedin, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "THC Token", href: "#thc-token" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Risk Disclosure", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Documentation", href: "#" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: Users, href: "#", label: "Discord" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/trade-hybrid-logo.png" 
                alt="Trade Hybrid Club"
                className="w-10 h-10 mr-3"
              />
              <span className="text-xl font-bold">Trade Hybrid Club</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              At Trade Hybrid, we empower individuals worldwide by providing the knowledge, tools and community support for financial success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Trade Hybrid Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Licensed & Regulated</span>
            <span className="text-gray-400 text-sm">SOC 2 Certified</span>
            <span className="text-gray-400 text-sm">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
