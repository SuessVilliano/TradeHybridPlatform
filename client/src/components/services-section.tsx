import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowRightLeft, BarChart3, PiggyBank, GraduationCap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ArrowRightLeft,
      title: "Spot Trading",
      description: "Buy and sell cryptocurrencies at current market prices with instant execution.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "Futures Trading",
      description: "Trade derivatives with leverage up to 100x on major cryptocurrency pairs.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: PiggyBank,
      title: "Staking Rewards",
      description: "Earn passive income by staking THC tokens and other supported cryptocurrencies.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: GraduationCap,
      title: "Trading Academy",
      description: "Learn trading strategies, technical analysis, and risk management from experts.",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  const platformFeatures = [
    {
      title: "Advanced Order Types",
      description: "Stop-loss, take-profit, trailing stops, and algorithmic orders."
    },
    {
      title: "Real-Time Market Data",
      description: "Live price feeds, order book depth, and market sentiment indicators."
    },
    {
      title: "Portfolio Management",
      description: "Comprehensive tracking, performance analytics, and risk assessment tools."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Trading Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive trading solutions for every investor, from beginners to institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Professional Trading Platform */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Trading Platform</h3>
            <div className="space-y-4">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-600 h-5 w-5 mt-1" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Access Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            {/* Platform preview placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-2 bg-green-400 rounded"></div>
                <div className="h-2 bg-red-400 rounded"></div>
                <div className="h-2 bg-blue-400 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="mt-6 text-sm text-gray-500">Live Trading Interface Preview</div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <service.icon className={`${service.iconColor} h-8 w-8`} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
