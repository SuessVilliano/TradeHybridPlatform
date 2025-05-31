import { useState, useEffect, useCallback } from 'react';

export function useExitIntent() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top of the page
    if (e.clientY <= 0 && !hasShown) {
      setShowExitIntent(true);
      setHasShown(true);
      // Store in sessionStorage to prevent showing again this session
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, [hasShown]);

  const handleClosePopup = useCallback(() => {
    setShowExitIntent(false);
  }, []);

  useEffect(() => {
    // Check if user is a member or has seen popup this session
    const isExitIntentShown = sessionStorage.getItem('exitIntentShown');
    const isMember = localStorage.getItem('trade-hybrid-member');
    
    if (isExitIntentShown || isMember) {
      setHasShown(true);
      return;
    }

    // Add mouse leave listener
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return {
    showExitIntent,
    handleClosePopup
  };
}