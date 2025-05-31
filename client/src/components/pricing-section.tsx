import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Monthly",
      price: "$97",
      period: "per month",
      description: "Perfect for getting started with Trade Hybrid",
      features: [
        "Community (Discord)",
        "Members App",
        "Tools (Indicators, Signals etc)",
        "Access to 1 Market Buddy (AI)"
      ],
      buttonText: "BUY NOW",
      checkoutUrl: "https://whop.com/checkout/1TIvb4zqrWODtRq69r-8xj0-51pd-UkLn-GwSXx18tPbZx/",
      popular: false,
      icon: Zap,
      gradient: "from-purple-600 to-purple-700"
    },
    {
      name: "Yearly",
      price: "$597",
      period: "per year",
      description: "Best value for serious traders",
      features: [
        "Everything from Monthly",
        "Access to 1 Mastermind",
        "Access to Prop Pass Program",
        "Trade Hybrid Trade Journal"
      ],
      buttonText: "BUY NOW",
      checkoutUrl: "https://whop.com/checkout/5sIJaH2cjV5tQsOoBX-eJnb-QHqG-OP9q-5z9KmBGnaxrB/",
      popular: true,
      icon: Star,
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Lifetime",
      price: "$1,497",
      period: "one time",
      description: "Ultimate trading package",
      features: [
        "Everything from Yearly",
        "Access to 2 Masterminds",
        "$25,000 Funded Account*",
        "Access to Company Liquidity Pool"
      ],
      buttonText: "BUY NOW",
      checkoutUrl: "https://whop.com/checkout/1SOuliJDFuPJPEFUPL-a4l7-4NwZ-nnVs-9Z8gADiIFnS0/",
      popular: false,
      icon: Crown,
      gradient: "from-purple-600 to-cyan-500"
    },
    {
      name: "Pro Lifetime",
      price: "$4,997",
      period: "one time",
      description: "For professional traders",
      features: [
        "Lifetime Membership",
        "Access to Auto Hybrid AI (Autotrader)",
        "Access to ALL Masterminds",
        "$100,000 Funded Account",
        "Access to Founders Liquidity Pool"
      ],
      buttonText: "BUY NOW",
      checkoutUrl: "https://whop.com/checkout/plan_hcBFS8A0XQZBi?d2c=true",
      popular: false,
      icon: Crown,
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Our Prices
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-600 shadow-xl scale-105' : ''} th-card-hover`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`}
                  onClick={() => window.open(plan.checkoutUrl, '_blank')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Funded accounts subject to terms and conditions. Performance requirements apply.
          </p>
        </div>
      </div>
    </section>
  );
}