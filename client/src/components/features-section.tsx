import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Coins, Bot, Users, Smartphone } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Vibrant trading community to network, share insights, and collaborate with traders of all levels.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Smartphone,
      title: "Members App",
      description: "Access everything you need, right in the palm of your hands with our user friendly Members App.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-100"
    },
    {
      icon: TrendingUp,
      title: "Tools",
      description: "Advanced tools including indicators, trade alerts, trade manager bots, trade journals and much more.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Bot,
      title: "Smart AI Agents",
      description: "Harness the power of AI driven robots to get smart signals and smart setups, capitalizing on opportunities 24/7.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-100"
    },
    {
      icon: Shield,
      title: "Education",
      description: "Education with pre-recorded courses, live trade sessions and live trainings to enhance your skills.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Coins,
      title: "THC Token Benefits",
      description: "Exclusive access to premium features, reduced trading fees, and governance rights with our native Trade Hybrid Coin.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Trade Hybrid Club?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We empower individuals worldwide by providing the knowledge, tools and community support for financial success.
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
