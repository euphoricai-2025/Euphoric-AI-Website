"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#FFEB3B",
  className,
}: HighlighterProps) {
  const baseStyles = "relative inline-block";
  
  const highlightVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  const underlineVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  return (
    <span className={cn(baseStyles, className)}>
      {action === "highlight" && (
        <motion.span
          className="absolute inset-0 rounded-lg opacity-80 px-1"
          style={{ backgroundColor: color, zIndex: -1 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={highlightVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      {action === "underline" && (
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 w-full rounded-full"
          style={{ backgroundColor: color }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={underlineVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </span>
  );
}