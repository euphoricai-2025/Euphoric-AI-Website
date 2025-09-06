import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BoxRevealProps {
  children: React.ReactNode;
  boxColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function BoxReveal({
  children,
  boxColor = "#5046e6",
  duration = 0.5,
  delay = 0,
  className = "",
}: BoxRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content that gets revealed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: duration, 
          ease: "easeOut",
          delay: duration * 0.3 // Content appears after box starts moving
        }}
      >
        {children}
      </motion.div>
      
      {/* Colored box overlay that slides away */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: boxColor }}
        initial={{ scaleX: 1 }}
        animate={isVisible ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ 
          duration: duration, 
          ease: "easeInOut"
        }}
        style={{ 
          transformOrigin: "left",
          backgroundColor: boxColor
        }}
      />
    </div>
  );
}