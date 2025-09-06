import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  children: string;
  animation?: "fadeIn" | "slideUp" | "blurInUp" | "fadeInUp";
  by?: "word" | "character";
  once?: boolean;
  className?: string;
  delay?: number;
}

export function TextAnimate({
  children,
  animation = "fadeIn",
  by = "word",
  once = false,
  className,
  delay = 0,
}: TextAnimateProps) {
  const text = children;
  const segments = by === "character" ? text.split("") : text.split(" ");

  const getAnimationVariants = () => {
    switch (animation) {
      case "blurInUp":
        return {
          hidden: { 
            opacity: 0, 
            y: 20, 
            filter: "blur(10px)" 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)" 
          },
        };
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideUp":
        return {
          hidden: { y: 20 },
          visible: { y: 0 },
        };
      case "fadeIn":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const variants = getAnimationVariants();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: by === "character" ? 0.015 : 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate={once ? undefined : "visible"}
      whileInView={once ? "visible" : undefined}
      viewport={once ? { once: true } : undefined}
      style={{ whiteSpace: 'pre-line' }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={itemVariants}
        >
          {by === "character" ? (
            segment === " " ? "\u00A0" : segment
          ) : (
            <>
              {segment}
              {index < segments.length - 1 && "\u00A0"}
            </>
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}