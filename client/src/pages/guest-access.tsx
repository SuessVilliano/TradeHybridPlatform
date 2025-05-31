import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowRight, Users } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function GuestAccess() {
  const [isGrantingAccess, setIsGrantingAccess] = useState(false);
  const { theme } = useTheme();

  const handleGrantAccess = () => {
    setIsGrantingAccess(true);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    } p-8`}>
      <div className="max-w-md mx-auto">
        <Card className={`backdrop-blur-sm transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-black/40 border-purple-500/20' 
            : 'bg-white/60 border-gray-200'
        }`}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-full transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-purple-500/20' 
                  : 'bg-blue-100'
              }`}>
                <Shield className={`w-8 h-8 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-blue-600'
                }`} />
              </div>
            </div>
            <CardTitle className={`text-2xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Trade Hybrid Members
            </CardTitle>
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-purple-300' : 'text-blue-600'
            }`}>
              Secure Member Access Portal
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`p-4 rounded-lg border transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800/30 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <Users className={`w-5 h-5 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`} />
                <span className={`font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Verified Member Access
                </span>
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                This portal is exclusively for Trade Hybrid members. Access to the dashboard and trading tools is granted to verified members only.
              </p>
            </div>

            <Button 
              onClick={handleGrantAccess}
              disabled={isGrantingAccess}
              className={`w-full py-3 transition-all duration-300 ${
                isGrantingAccess 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600'
              } text-white`}
            >
              {isGrantingAccess ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Granting Access...
                </>
              ) : (
                <>
                  Access Member Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <div className={`text-center text-xs transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p>Secure access for verified Trade Hybrid members</p>
              <p>All activities are logged for security purposes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}