import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogIn, LogOut, User, CreditCard, AlertCircle } from "lucide-react";

export default function WhopTest() {
  const queryClient = useQueryClient();
  const [authStatus, setAuthStatus] = useState<string>("");

  // Check current auth status
  const { data: currentUser, isLoading: userLoading, error: userError } = useQuery({
    queryKey: ['/api/auth/whop/user'],
    retry: false,
  });

  // Get user subscriptions
  const { data: subscriptions, isLoading: subsLoading } = useQuery({
    queryKey: ['/api/whop/user/subscriptions'],
    enabled: !!currentUser,
    retry: false,
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/auth/whop/logout', {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Logout failed');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
      setAuthStatus("Logged out successfully");
    },
    onError: (error) => {
      setAuthStatus(`Logout error: ${error.message}`);
    },
  });

  const handleLogin = () => {
    setAuthStatus("Redirecting to Whop login...");
    window.location.href = '/api/auth/whop';
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <User className="w-6 h-6" />
              Whop Authentication Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Auth Status */}
            {authStatus && (
              <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300">{authStatus}</p>
              </div>
            )}

            {/* Current User Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Authentication Status</h3>
              
              {userLoading ? (
                <div className="text-purple-300">Loading user data...</div>
              ) : userError ? (
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  Not authenticated
                </div>
              ) : currentUser ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                      Authenticated
                    </Badge>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-white"><strong>User ID:</strong> {(currentUser as any).id}</p>
                    <p className="text-white"><strong>Username:</strong> {(currentUser as any).username}</p>
                    <p className="text-white"><strong>Email:</strong> {(currentUser as any).email}</p>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400">No user data available</div>
              )}
            </div>

            {/* User Subscriptions */}
            {currentUser && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Subscriptions
                </h3>
                
                {subsLoading ? (
                  <div className="text-purple-300">Loading subscriptions...</div>
                ) : subscriptions ? (
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <pre className="text-sm text-green-300 overflow-auto">
                      {JSON.stringify(subscriptions, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div className="text-gray-400">No subscription data available</div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {!currentUser ? (
                <Button 
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login with Whop
                </Button>
              ) : (
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="border-red-500/30 text-red-300 hover:bg-red-500/20"
                  disabled={logoutMutation.isPending}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
                </Button>
              )}
              
              <Button 
                onClick={() => queryClient.invalidateQueries()}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
              >
                Refresh Data
              </Button>
            </div>

            {/* Test Instructions */}
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <h4 className="text-white font-medium mb-2">Test Instructions:</h4>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Click "Login with Whop" to start the OAuth flow</li>
                <li>Complete authentication on Whop's website</li>
                <li>You should be redirected back with user data</li>
                <li>Check if subscriptions are loaded correctly</li>
                <li>Test logout functionality</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}