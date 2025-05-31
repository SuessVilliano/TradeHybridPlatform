import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Coins, 
  TrendingUp, 
  Users, 
  Shield, 
  ExternalLink, 
  Copy, 
  Zap, 
  PieChart,
  BarChart3,
  Percent,
  Vote,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function THCTokenPage() {
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

  const tokenAddress = "4kXPBvQthvpes9TC7h6tXsYxWPUbYWpocBMVUG3eBLy4";

  const tokenMetrics = [
    { label: "Symbol", value: "THC", icon: Coins },
    { label: "Network", value: "Solana", icon: Zap },
    { label: "Type", value: "SPL Token", icon: Shield },
    { label: "Decimals", value: "9", icon: BarChart3 }
  ];

  const utilities = [
    {
      icon: Percent,
      title: "Trading Fee Discounts",
      description: "Hold THC tokens to receive up to 50% discount on all trading fees across our platform.",
      benefit: "Up to 50% savings"
    },
    {
      icon: Vote,
      title: "Governance Participation",
      description: "Vote on platform upgrades, new feature implementations, and community proposals.",
      benefit: "Democratic control"
    },
    {
      icon: Star,
      title: "Premium Access",
      description: "Unlock exclusive trading tools, advanced analytics, and priority customer support.",
      benefit: "VIP treatment"
    },
    {
      icon: TrendingUp,
      title: "Staking Rewards",
      description: "Stake your THC tokens to earn passive income with competitive APY rates.",
      benefit: "Passive income"
    }
  ];

  const stakingTiers = [
    {
      tier: "Bronze",
      minAmount: "1,000 THC",
      apy: "8%",
      benefits: ["5% trading fee discount", "Basic analytics access"],
      color: "bg-amber-100 text-amber-800"
    },
    {
      tier: "Silver", 
      minAmount: "10,000 THC",
      apy: "12%",
      benefits: ["15% trading fee discount", "Advanced analytics", "Priority support"],
      color: "bg-gray-100 text-gray-800"
    },
    {
      tier: "Gold",
      minAmount: "50,000 THC",
      apy: "18%",
      benefits: ["25% trading fee discount", "Premium tools", "Governance voting", "Monthly reports"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      tier: "Platinum",
      minAmount: "100,000 THC",
      apy: "25%",
      benefits: ["50% trading fee discount", "All premium features", "Direct line to team", "Custom strategies"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              THC Token: TradeHybrid Coin
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our native Solana-based utility token that powers the entire TradeHybrid ecosystem with exclusive benefits, governance rights, and staking rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open('https://pro.tradehybrid.club/thc-staking', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Start Staking Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                onClick={() => window.open('https://solscan.io/token/4kXPBvQthvpes9TC7h6tXsYxWPUbYWpocBMVUG3eBLy4', '_blank')}
              >
                View on Solscan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Token Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contract Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-blue-600" />
                  Contract Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Contract Address</span>
                    <div className="flex items-center space-x-2">
                      <code className="text-sm bg-white px-2 py-1 rounded border font-mono break-all">
                        {tokenAddress}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(tokenAddress)}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {tokenMetrics.map((metric, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <metric.icon className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-600">{metric.label}</span>
                        </div>
                        <span className="font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solana Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Solana Network Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Lightning Fast Transactions</h4>
                      <p className="text-gray-600 text-sm">Process transactions in under 1 second with Solana's high-performance blockchain.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Ultra-Low Fees</h4>
                      <p className="text-gray-600 text-sm">Enjoy transaction costs under $0.01, making frequent trading and staking affordable.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Energy Efficient</h4>
                      <p className="text-gray-600 text-sm">Built on an environmentally sustainable blockchain with minimal energy consumption.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">DeFi Integration</h4>
                      <p className="text-gray-600 text-sm">Seamlessly integrate with the growing Solana DeFi ecosystem and protocols.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="utilities" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="utilities">Token Utilities</TabsTrigger>
              <TabsTrigger value="staking">Staking Tiers</TabsTrigger>
              <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
            </TabsList>

            <TabsContent value="utilities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {utilities.map((utility, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <utility.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{utility.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{utility.description}</p>
                          <Badge variant="secondary">{utility.benefit}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staking" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stakingTiers.map((tier, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{tier.tier}</CardTitle>
                        <Badge className={tier.color}>{tier.apy} APY</Badge>
                      </div>
                      <p className="text-sm text-gray-600">Minimum: {tier.minAmount}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-4" 
                        variant={index === 3 ? "default" : "outline"}
                        onClick={() => window.open('https://pro.tradehybrid.club/thc-staking', '_blank')}
                      >
                        Stake Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tokenomics" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="mr-2 h-5 w-5 text-blue-600" />
                      Token Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Public Sale</span>
                          <span className="text-sm">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Staking Rewards</span>
                          <span className="text-sm">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Team & Advisors</span>
                          <span className="text-sm">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Marketing & Partnerships</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Reserve Fund</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-green-600" />
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">100%</div>
                        <div className="text-sm text-gray-600">Decentralized</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">Fast</div>
                          <div className="text-xs text-gray-600">Transaction Speed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">Low</div>
                          <div className="text-xs text-gray-600">Network Fees</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">Secure</div>
                          <div className="text-xs text-gray-600">Blockchain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">Scalable</div>
                          <div className="text-xs text-gray-600">Infrastructure</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}