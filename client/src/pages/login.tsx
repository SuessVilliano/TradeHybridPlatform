import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <img 
              src="/trade-hybrid-logo.png" 
              alt="Trade Hybrid Club"
              className="w-16 h-16 mx-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Welcome Back
            </CardTitle>
            <p className="text-purple-300">
              Sign in to access your trading dashboard
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-300">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-purple-300">
                  <input type="checkbox" className="rounded border-purple-500/30" />
                  <span>Remember me</span>
                </label>
                <Link href="/forgot-password">
                  <span className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
                    Forgot password?
                  </span>
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-purple-500/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black/40 px-2 text-purple-300">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:text-white"
              onClick={() => window.location.href = '/api/auth/whop'}
            >
              Continue with Whop
            </Button>

            <p className="text-center text-sm text-purple-300">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer font-medium">
                  Sign up
                </span>
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-xs text-purple-400">
            By signing in, you agree to our{" "}
            <Link href="/terms">
              <span className="hover:text-purple-300 cursor-pointer">Terms of Service</span>
            </Link>
            {" "}and{" "}
            <Link href="/privacy">
              <span className="hover:text-purple-300 cursor-pointer">Privacy Policy</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}