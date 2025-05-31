import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, TrendingUp, Shield, Users, BarChart3, UserCheck, DollarSign } from "lucide-react";

export default function AIAgentsSection() {
  const aiAgents = [
    {
      icon: TrendingUp,
      name: "Market Buddy",
      role: "Trade Assistant",
      description: "Your dedicated Trade Assistant, providing insightful trade analysis and strategy support.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Brain,
      name: "Psyche Master",
      role: "Mind Coach",
      description: "The Mind Coach inspired by Wendy Rhodes, focused on optimizing your mental approach to trading.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    },
    {
      icon: Bot,
      name: "Algo Visionary",
      role: "Quant Guru",
      description: "The Quant Guru, delivering algorithmic insights to refine and enhance trading tactics.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Shield,
      name: "RegGuard",
      role: "Risk & Compliance Sentinel",
      description: "The Risk & Compliance Sentinel, ensuring trading aligns with regulations and risk management standards.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    },
    {
      icon: Users,
      name: "TradeSense",
      role: "Trader Companion",
      description: "Your Trader Companion, offering personalized guidance to navigate the complexities of trading.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: BarChart3,
      name: "VantagePro",
      role: "Enterprise Architect & Strategist",
      description: "The Enterprise Architect & Strategist, crafting effective trade plans and market strategies.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    },
    {
      icon: UserCheck,
      name: "ClientSphere",
      role: "Client Relations Expert",
      description: "The Client Relations Expert, designed to manage and foster client relationships seamlessly.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: DollarSign,
      name: "FinPulse",
      role: "Financial Ops & Reporting Analyst",
      description: "The Financial Ops & Reporting Analyst, keeping you informed with detailed financial reports and operational insights.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Smart AI Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The Hybrid Trading AI Team is an elite group of AI agents, each specializing in a unique area of trading, market analysis, and trader support, designed to offer a comprehensive and interactive platform for our Trading Community.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white th-glow">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiAgents.map((agent, index) => (
            <Card key={index} className="text-center th-card-hover">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${agent.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <agent.icon className={`${agent.color} h-8 w-8`} />
                </div>
                <CardTitle className="text-lg font-bold">{agent.name}</CardTitle>
                <p className="text-sm font-medium text-gray-600">{agent.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{agent.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Complete AI Trading Ecosystem</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Together, this AI team forms a cohesive support system, equipped to empower every trader within the community by providing real-time data, expert advice, and personalized strategies to optimize their trading experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xl font-bold mb-2">HUMANS</h4>
              <p className="text-sm opacity-90">Our community of experienced traders offer invaluable insight and mentorship, ensuring that you can learn, grow and succeed alongside a supportive group of like-minded individuals.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">ROBOTS</h4>
              <p className="text-sm opacity-90">Harness the Power of AI driven robots to get smart signals and smart setups, allowing you to capitalize on opportunities 24/7 even when you aren't looking.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">AUTOMATIONS</h4>
              <p className="text-sm opacity-90">Experience the best of BOTH worlds - combine human wisdom with automated tools to make smarter trading decisions, save time, and achieve consistent results in the financial markets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}