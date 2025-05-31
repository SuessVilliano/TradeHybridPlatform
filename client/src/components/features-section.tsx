import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Coins, Bot, Users, Smartphone } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Professional-grade charting tools, technical indicators, and market analysis to make informed trading decisions.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your assets are protected with military-grade encryption, cold storage, and multi-factor authentication.",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Coins,
      title: "THC Token Benefits",
      description: "Exclusive access to premium features, reduced trading fees, and governance rights with our native THC token.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Bot,
      title: "Automated Trading",
      description: "Deploy sophisticated trading bots and algorithms to execute strategies 24/7 across multiple markets.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Learn from experienced traders, share strategies, and access exclusive market insights from our community.",
      iconColor: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on-the-go with our responsive web platform and dedicated mobile apps for iOS and Android.",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose TradeHybrid Club?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide institutional-grade trading tools with retail accessibility, backed by our innovative THC token ecosystem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg th-card-hover">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`${feature.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
