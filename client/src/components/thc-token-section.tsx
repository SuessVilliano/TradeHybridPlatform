import { Button } from "@/components/ui/button";
import { Percent, Vote, Star, Coins } from "lucide-react";

export default function THCTokenSection() {
  const tokenBenefits = [
    {
      icon: Percent,
      title: "Reduced Trading Fees",
      description: "Hold THC tokens to enjoy up to 50% discount on all trading fees.",
      iconColor: "text-green-400"
    },
    {
      icon: Vote,
      title: "Governance Rights",
      description: "Participate in platform decisions and vote on new feature implementations.",
      iconColor: "text-green-400"
    },
    {
      icon: Star,
      title: "Premium Features",
      description: "Access exclusive tools, analytics, and priority customer support.",
      iconColor: "text-green-400"
    },
    {
      icon: Coins,
      title: "Staking Rewards",
      description: "Earn passive income by staking THC tokens with competitive APY rates.",
      iconColor: "text-green-400"
    }
  ];

  const tokenInfo = [
    { label: "Token Symbol", value: "THC" },
    { label: "Total Supply", value: "1,000,000,000 THC" },
    { label: "Circulating Supply", value: "750,000,000 THC" },
    { label: "Current Price", value: "$0.245", valueColor: "text-green-400" },
    { label: "Market Cap", value: "$183.75M" }
  ];

  const tokenStats = [
    { value: "15.2%", label: "Current APY" },
    { value: "12,500+", label: "Token Holders" },
    { value: "$2.1M", label: "24h Volume" },
    { value: "85%", label: "Staked Supply" }
  ];

  return (
    <section id="thc-token" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            THC Token: Our Native Cryptocurrency
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            TradeHybrid Coin (THC) is our utility token that powers the entire ecosystem, providing holders with exclusive benefits and governance rights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Token Information</h3>
              <div className="space-y-4">
                {tokenInfo.map((info, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">{info.label}</span>
                    <span className={`font-semibold ${info.valueColor || 'text-white'}`}>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Token Utilities & Benefits</h3>
            <div className="space-y-4">
              {tokenBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <benefit.icon className={`${benefit.iconColor} h-5 w-5 mt-1`} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {tokenStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="space-x-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Buy THC Token
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              View Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
