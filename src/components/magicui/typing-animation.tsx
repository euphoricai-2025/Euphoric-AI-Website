import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text?: string;
  duration?: number;
  className?: string;
  startOnView?: boolean;
  children?: React.ReactNode;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
  startOnView = false,
  children,
}: TypingAnimationProps) {
  const textToAnimate = text || (typeof children === 'string' ? children : '');
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnView);

  useEffect(() => {
    if (!isVisible) return;

    const typingEffect = setInterval(() => {
      if (i < textToAnimate.length) {
        setDisplayedText(textToAnimate.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, textToAnimate, duration, isVisible]);

  return (
    <motion.span
      className={cn("font-display text-center font-bold tracking-[-0.02em] drop-shadow-sm", className)}
      initial={{ opacity: 0 }}
      whileInView={startOnView ? { opacity: 1 } : undefined}
      animate={!startOnView ? { opacity: 1 } : undefined}
      onViewportEnter={() => startOnView && setIsVisible(true)}
    >
      {displayedText}
      <motion.span
        className="inline-block"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </motion.span>
  );
}