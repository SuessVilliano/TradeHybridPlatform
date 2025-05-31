import { Button } from "@/components/ui/button";
import { Percent, Vote, Star, Coins, ExternalLink, Copy, Zap, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function THCTokenSection() {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };
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
    { label: "Blockchain", value: "Solana (SPL)" },
    { label: "Contract Address", value: "4kXPBvQthvpes9TC7h6tXsYxWPUbYWpocBMVUG3eBLy4" },
    { label: "Decimals", value: "9" },
    { label: "Network", value: "Solana Mainnet" }
  ];

  const tokenStats = [
    { value: "Live Data", label: "Solana Network" },
    { value: "Fast & Cheap", label: "Transactions" },
    { value: "Decentralized", label: "SPL Token" },
    { value: "Staking Available", label: "Earn Rewards" }
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
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white break-all text-sm">{info.value}</span>
                      {info.label === "Contract Address" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(info.value)}
                          className="h-6 w-6 p-0 hover:bg-white/20"
                        >
                          <Copy className="h-3 w-3 text-white" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Solana Network Benefits */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                  Powered by Solana
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-blue-100">Secure & Decentralized</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                    <span className="text-blue-100">Fast Transactions</span>
                  </div>
                  <div className="flex items-center">
                    <Coins className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-blue-100">Low Fees</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-blue-100">Cross-Platform</span>
                  </div>
                </div>
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
              onClick={() => window.open('https://pro.tradehybrid.club/thc-staking', '_blank')}
            >
              Start THC Staking
            </Button>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open('https://solscan.io/token/4kXPBvQthvpes9TC7h6tXsYxWPUbYWpocBMVUG3eBLy4', '_blank')}
            >
              View on Solscan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
