import { useEffect, useState } from "react";

import { motion } from "@/theme";
import { SPLASH_MESSAGES } from "../constants/messages";

export function useSplash(onComplete?: () => void) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Rotate through loading messages
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % SPLASH_MESSAGES.length);
    }, motion.splash.messageInterval);

    // Start exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, motion.splash.exitDelay);

    // Notify parent once splash has finished
    const completionTimer = setTimeout(() => {
      onComplete?.();
    }, motion.splash.completeDelay);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(exitTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return {
    currentMessage: SPLASH_MESSAGES[messageIndex],
    isExiting,
  };
}
