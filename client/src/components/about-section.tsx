import { Building } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "$50B+", label: "Total Trading Volume" },
    { value: "150+", label: "Supported Assets" },
    { value: "15K+", label: "Active Users" },
    { value: "99.9%", label: "Platform Uptime" }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      initials: "JS",
      description: "Former Goldman Sachs VP with 15 years in traditional finance and 8 years in cryptocurrency markets."
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      initials: "SK",
      description: "Blockchain architect and former Microsoft senior engineer specializing in distributed systems and security."
    },
    {
      name: "Michael Johnson",
      role: "Head of Trading",
      initials: "MJ",
      description: "Quantitative trader with 12 years at top-tier hedge funds and expertise in algorithmic trading systems."
    }
  ];

  const companyStats = [
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Countries" },
    { value: "200+", label: "Employees" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              About Trade Hybrid Club
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Trade Hybrid, we empower individuals worldwide by providing the knowledge, tools and community support. Our global network of traders spans the globe, offering a pathway to financial freedom regardless of location.
            </p>
            <p className="text-gray-600 mb-6">
              Experience the best of BOTH worlds - combine human wisdom with automated tools to make smarter trading decisions, save time, and achieve consistent results in the financial markets.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-8">
            {/* Company image placeholder - modern office environment */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Building className="text-purple-600 h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Headquarters</h3>
              <p className="text-gray-600">Wilmington, Delaware</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-cyan-500">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of expertise in finance, technology, and blockchain innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center th-glow">
                <span className="text-white text-2xl font-bold">{member.initials}</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-purple-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
