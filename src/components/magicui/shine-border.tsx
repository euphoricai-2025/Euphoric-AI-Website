import { cn } from "@/lib/utils";
import { CSSProperties, ReactElement } from "react";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children?: ReactElement;
  shineColor?: string | string[];
}

export function ShineBorder({
  borderRadius = 18,
  borderWidth = 2,
  duration = 14,
  color = "#000000",
  className,
  children,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
}: ShineBorderProps) {
  const normalizedShineColor = Array.isArray(shineColor) ? shineColor : [shineColor];
  
  return (
    <>
      <div
        style={
          {
            "--border-radius": `${borderRadius}px`,
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,
            "--shine-gradient": `conic-gradient(from 0deg, transparent, ${normalizedShineColor.join(", ")}, transparent)`,
          } as CSSProperties
        }
        className={cn(
          "absolute inset-0 overflow-hidden rounded-[var(--border-radius)]",
          "shine-border-element",
          className
        )}
      />
      {children}
    </>
  );
}