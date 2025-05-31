import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, TrendingUp, Bot, Trophy, Users, Clock, Star } from "lucide-react";

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ExitIntentPopup({ isVisible, onClose }: ExitIntentPopupProps) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const membershipTiers = [
    {
      name: "Starter",
      price: "$97",
      features: ["Basic Trading Signals", "Community Access", "Weekly Webinars"],
      url: "https://whop.com/trade-hybrid-club/?pass=prod_starter",
      popular: false
    },
    {
      name: "Professional",
      price: "$197",
      features: ["Advanced AI Signals", "Live Trading Room", "1-on-1 Mentorship", "Priority Support"],
      url: "https://whop.com/trade-hybrid-club/?pass=prod_professional",
      popular: true
    },
    {
      name: "Elite",
      price: "$497", 
      features: ["Prop Firm Access", "Custom Strategies", "Direct Line to Traders", "Exclusive Events"],
      url: "https://whop.com/trade-hybrid-club/?pass=prod_elite",
      popular: false
    }
  ];

  if (!isVisible) return null;

  return (
    <Dialog open={isVisible} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 border-purple-500/30 p-0 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center p-8 pb-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/trade-hybrid-logo.png" 
                alt="Trade Hybrid"
                className="h-12 w-auto"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">
              Wait! Don't Miss Out 🚀
            </h2>
            
            <p className="text-xl text-purple-300 mb-4">
              Join 10,000+ successful traders making consistent profits
            </p>

            {/* Timer */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-mono text-lg">
                Limited Time: {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="px-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/40 rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">85% Win Rate</h3>
                <p className="text-gray-300 text-sm">Proven trading signals</p>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 text-center">
                <Bot className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">AI-Powered</h3>
                <p className="text-gray-300 text-sm">Advanced market analysis</p>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">Prop Funding</h3>
                <p className="text-gray-300 text-sm">Trade with our capital</p>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">Expert Community</h3>
                <p className="text-gray-300 text-sm">Learn from the best</p>
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipTiers.map((tier) => (
                <Card 
                  key={tier.name}
                  className={`relative bg-black/40 border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 ${
                    tier.popular ? 'scale-105 border-purple-400/40' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-3 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-purple-300 mb-4">
                      {tier.price}
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={() => window.open(tier.url, '_blank')}
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                      } text-white font-medium py-2 px-4 rounded-lg transition-all duration-200`}
                    >
                      Choose {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">
                  JM
                </div>
                <div>
                  <p className="text-white italic">
                    "Made back my membership fee in the first week. The signals are incredibly accurate and the community support is amazing!"
                  </p>
                  <p className="text-green-400 text-sm mt-2">- Jake M., Elite Member</p>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-6">
              <p className="text-purple-300 text-sm">
                💯 30-Day Money-Back Guarantee | Cancel Anytime | Secure Payment
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}