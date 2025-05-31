import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  CreditCard, 
  MessageSquare, 
  BookOpen, 
  Radio, 
  Bot, 
  ExternalLink,
  Minimize2,
  Maximize2,
  X,
  Play,
  Users,
  TrendingUp,
  Settings,
  Loader2,
  Calendar,
  ShoppingBag,
  Trophy
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Dashboard() {
  const [openWidget, setOpenWidget] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("demo-user"); // In real app, get from auth

  // Fetch user's Whop subscription data
  const { data: subscriptions, isLoading: subscriptionsLoading } = useQuery({
    queryKey: ['/api/whop/subscriptions', userId],
    enabled: !!userId,
  });

  // Fetch Whop products to match user's subscription
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ['/api/whop/products'],
  });

  const dashboardCards = [
    {
      id: "trading-app",
      title: "Trading App",
      description: "Access your comprehensive trading tools and analytics",
      icon: TrendingUp,
      url: "https://app.tradehybrid.co",
      gradient: "from-purple-600 to-purple-700",
      isEmbed: true
    },
    {
      id: "ai-agent",
      title: "Trade Hybrid Agent",
      description: "Your personal AI trading assistant",
      icon: Bot,
      url: "https://tradehybridagent.com",
      gradient: "from-cyan-500 to-cyan-600",
      isEmbed: true
    },
    {
      id: "prop-firm",
      title: "Hybrid Funding",
      description: "Access our proprietary trading firm platform",
      icon: Trophy,
      url: "https://hybridfunding.co",
      gradient: "from-emerald-500 to-emerald-600",
      isEmbed: true
    },
    {
      id: "battles",
      title: "Trading Battles",
      description: "Compete in live trading competitions",
      icon: Play,
      url: "https://battles.hybridfunding.co",
      gradient: "from-red-500 to-pink-500",
      isEmbed: true
    },
    {
      id: "events",
      title: "Events",
      description: "Join live trading events and webinars",
      icon: Calendar,
      url: "#",
      gradient: "from-violet-500 to-violet-600",
      isEmbed: false,
      comingSoon: true
    },
    {
      id: "shop",
      title: "Shop",
      description: "Purchase trading tools and merchandise",
      icon: ShoppingBag,
      url: "#",
      gradient: "from-amber-500 to-amber-600",
      isEmbed: false,
      comingSoon: true
    },
    {
      id: "billing",
      title: "Billing & Subscription",
      description: "Manage your membership and payments",
      icon: CreditCard,
      url: "https://whop.com/hub",
      gradient: "from-green-500 to-green-600",
      isEmbed: false
    },
    {
      id: "discord",
      title: "Discord Community",
      description: "Join live discussions with fellow traders",
      icon: MessageSquare,
      url: "https://discord.gg/tradehybrid",
      gradient: "from-indigo-500 to-indigo-600",
      isEmbed: false
    },
    {
      id: "course",
      title: "Trading Course",
      description: "Master trading with our comprehensive curriculum",
      icon: BookOpen,
      url: "#",
      gradient: "from-orange-500 to-orange-600",
      isEmbed: false,
      comingSoon: true
    },
    {
      id: "livestream",
      title: "Live Stream",
      description: "Watch live trading sessions and market analysis",
      icon: Radio,
      url: "https://tv.tradehybrid.club",
      gradient: "from-red-500 to-red-600",
      isEmbed: true
    }
  ];

  const EmbedWidget = ({ url, title, onClose }: { url: string; title: string; onClose: () => void }) => (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
        <DialogHeader className="p-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              {title}
            </DialogTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => window.open(url, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 p-4">
          <iframe
            src={url}
            className="w-full h-full border-0 rounded-lg"
            title={title}
            allow="camera; microphone; fullscreen"
          />
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/trade-hybrid-logo.png" 
                alt="Trade Hybrid Club"
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Trade Hybrid Dashboard</h1>
                <p className="text-purple-300">Welcome back, trader</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {subscriptionsLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-purple-300" />
              ) : (
                <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
                  Member
                </Badge>
              )}
              <Button 
                variant="ghost" 
                className="text-purple-300 hover:text-white"
                onClick={() => window.open('https://whop.com/hub', '_blank')}
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Portfolio Value</p>
                  <p className="text-2xl font-bold text-white">$125,450</p>
                  <p className="text-green-400 text-sm">+12.5% this month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Active Trades</p>
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-cyan-400 text-sm">3 winning positions</p>
                </div>
                <Play className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Community Rank</p>
                  <p className="text-2xl font-bold text-white">#247</p>
                  <p className="text-purple-400 text-sm">Top 15% trader</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={card.id}
                className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  if (card.comingSoon) return;
                  if (card.isEmbed) {
                    setOpenWidget(card.id);
                  } else {
                    window.open(card.url, '_blank');
                  }
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {card.comingSoon && (
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      className={`text-white bg-gradient-to-r ${card.gradient} hover:opacity-80 ${card.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={card.comingSoon}
                    >
                      {card.isEmbed ? 'Open Widget' : 'Open Link'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New trade signal", time: "2 minutes ago", type: "signal" },
                  { action: "Portfolio updated", time: "15 minutes ago", type: "portfolio" },
                  { action: "Discord message", time: "1 hour ago", type: "community" },
                  { action: "AI analysis complete", time: "2 hours ago", type: "ai" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-purple-500/10 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"></div>
                      <span className="text-white">{activity.action}</span>
                    </div>
                    <span className="text-purple-300 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Embed Widgets */}
      {openWidget && (() => {
        const widget = dashboardCards.find(card => card.id === openWidget);
        return widget ? (
          <EmbedWidget
            url={widget.url}
            title={widget.title}
            onClose={() => setOpenWidget(null)}
          />
        ) : null;
      })()}
    </div>
  );
}