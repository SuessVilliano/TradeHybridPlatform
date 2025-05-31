import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img 
                  src="/trade-hybrid-logo.png" 
                  alt="Trade Hybrid Club"
                  className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-purple-600 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              {location === "/" ? (
                <button 
                  onClick={() => scrollToSection('thc-token')}
                  className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  THC Token
                </button>
              ) : (
                <Link href="/thc-token">
                  <button className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    THC Token
                  </button>
                </Link>
              )}
              <Link href="/dashboard">
                <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === '/dashboard' 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                  Dashboard
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white th-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Services
              </button>
              {location === "/" ? (
                <button 
                  onClick={() => scrollToSection('thc-token')}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                >
                  THC Token
                </button>
              ) : (
                <Link href="/thc-token">
                  <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                    THC Token
                  </button>
                </Link>
              )}
              <Link href="/dashboard">
                <button className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  location === '/dashboard' 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                  Dashboard
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <Button variant="ghost" className="w-full justify-start mb-2">
                  Login
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
