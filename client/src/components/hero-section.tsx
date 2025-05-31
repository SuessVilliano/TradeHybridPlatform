import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl animate-slide-up">
                <span className="block xl:inline">Professional Trading</span>
                <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent xl:inline th-text-glow"> Made Simple</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in">
                Access advanced trading tools, comprehensive market analysis, and our exclusive THC token ecosystem. Join thousands of traders who trust Trade Hybrid Club for their investment journey.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button 
                    size="lg"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white md:py-4 md:text-lg md:px-10 th-glow"
                  >
                    Start Trading Now
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('services')}
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full th-cyberpunk-gradient flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="grid grid-cols-2 gap-4 animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 th-glow">
                <div className="text-2xl font-bold">$2.1M+</div>
                <div className="text-sm opacity-90">Daily Volume</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 th-glow">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm opacity-90">Active Traders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 th-glow">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 th-glow">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
