import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight, ChevronLeft, X, Play, CheckCircle } from "lucide-react";

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  target?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Trade Hybrid!',
    description: 'Let\'s take a quick tour of your dashboard and show you all the powerful tools available to help you succeed in trading.',
  },
  {
    id: 'trading-app',
    title: 'Trading Application',
    description: 'Access your comprehensive trading tools and analytics. This is where you\'ll execute trades and monitor your portfolio.',
  },
  {
    id: 'ai-agent',
    title: 'AI Trading Assistant',
    description: 'Your personal AI agent provides market insights, trade suggestions, and helps analyze trading opportunities.',
  },
  {
    id: 'prop-firm',
    title: 'Hybrid Funding',
    description: 'Access our proprietary trading firm platform to get funded and trade with our capital.',
  },
  {
    id: 'battles',
    title: 'Trading Competitions',
    description: 'Compete against other traders in live competitions to win prizes and improve your skills.',
  },
  {
    id: 'community',
    title: 'Community Access',
    description: 'Join our Discord community to connect with fellow traders, share strategies, and get real-time market discussions.',
  },
  {
    id: 'theme-toggle',
    title: 'Customize Your Experience',
    description: 'Toggle between dark and light themes using the sun/moon icon in the header to match your preference.',
  },
  {
    id: 'complete',
    title: 'You\'re All Set!',
    description: 'You now know how to navigate your dashboard. Start exploring the tools and join our community to maximize your trading success.',
  }
];

interface WelcomeTutorialProps {
  isNewUser?: boolean;
  onComplete?: () => void;
}

export default function WelcomeTutorial({ isNewUser = false, onComplete }: WelcomeTutorialProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);

  useEffect(() => {
    const tutorialSeen = localStorage.getItem('trade-hybrid-tutorial-seen');
    if (!tutorialSeen && isNewUser) {
      setIsOpen(true);
    } else {
      setHasSeenTutorial(true);
    }
  }, [isNewUser]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('trade-hybrid-tutorial-seen', 'true');
    setIsOpen(false);
    setHasSeenTutorial(true);
    onComplete?.();
  };

  const handleSkip = () => {
    localStorage.setItem('trade-hybrid-tutorial-seen', 'true');
    setIsOpen(false);
    setHasSeenTutorial(true);
  };

  const restartTutorial = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const currentStepData = tutorialSteps[currentStep];
  const isLastStep = currentStep === tutorialSteps.length - 1;

  return (
    <>
      {/* Tutorial Restart Button for existing users */}
      {hasSeenTutorial && (
        <Button
          variant="outline"
          size="sm"
          onClick={restartTutorial}
          className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-purple-200 text-purple-600 hover:bg-purple-50"
        >
          <Play className="w-4 h-4 mr-1" />
          Tutorial
        </Button>
      )}

      {/* Tutorial Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-2">
                <img 
                  src="/trade-hybrid-logo.png" 
                  alt="Trade Hybrid"
                  className="w-6 h-6"
                />
                Tutorial
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
                />
              </div>
              <Badge variant="secondary" className="text-xs">
                {currentStep + 1} / {tutorialSteps.length}
              </Badge>
            </div>

            {/* Step Content */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">
                  {currentStepData.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {currentStepData.description}
                </p>

                {isLastStep && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Tutorial Complete!</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      You can restart this tutorial anytime using the button in the bottom right corner.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                onClick={isLastStep ? handleComplete : handleNext}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white flex items-center gap-1"
              >
                {isLastStep ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Get Started
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Skip Option */}
            {!isLastStep && (
              <div className="text-center pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSkip}
                  className="text-gray-500 hover:text-gray-700 text-xs"
                >
                  Skip tutorial
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}