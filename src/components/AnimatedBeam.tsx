import React, { forwardRef, useRef, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

// Circle component to wrap logos - consistent sizing and positioning
const Circle = forwardRef(({ className = "", children, size = "small" }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-15 flex items-center justify-center rounded-full bg-white shadow-xl border-2 border-gray-200 transition-all duration-300 ${size === "small" ? "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" : "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"} ${className}`}
      style={{ 
        position: 'absolute',
        // Ensure precise center alignment
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Better rendering
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

// Animated Beam Component with curved paths
const AnimatedBeam = ({
  className = "",
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "#e5e7eb",
  pathWidth = 2,
  pathOpacity = 0.6,
  gradientStartColor = "#64a4bf",
  gradientStopColor = "#42a4bf",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const updatePath = () => {
    if (containerRef.current && fromRef.current && toRef.current) {
      // Use multiple RAF calls to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (containerRef.current && fromRef.current && toRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const rectA = fromRef.current.getBoundingClientRect();
            const rectB = toRef.current.getBoundingClientRect();

            // Only proceed if we have valid dimensions
            if (containerRect.width === 0 || containerRect.height === 0 || 
                rectA.width === 0 || rectA.height === 0 || 
                rectB.width === 0 || rectB.height === 0) {
              return;
            }

            const svgWidth = containerRect.width;
            const svgHeight = containerRect.height;
            setSvgDimensions({ width: svgWidth, height: svgHeight });

            // Calculate the center of each element relative to the container with precise positioning
            const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
            const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
            const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
            const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

            // Validate coordinates are within bounds
            if (startX < 0 || startY < 0 || endX < 0 || endY < 0 ||
                startX > svgWidth || startY > svgHeight || endX > svgWidth || endY > svgHeight) {
              return;
            }

            // Create curved path using quadratic bezier curve
            const controlPointX = startX + (endX - startX) / 2;
            const controlPointY = startY + (endY - startY) / 2 + curvature;

            const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
            setPathD(d);
          }
        });
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Debounce resize events to prevent excessive calculations
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(updatePath, 150);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Use IntersectionObserver to detect when container becomes visible
    let observer;
    let mutationObserver;
    
    if (containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Container is visible, update paths with progressive delays
              setTimeout(updatePath, 0);
              setTimeout(updatePath, 100);
              setTimeout(updatePath, 300);
              setTimeout(updatePath, 600);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      
      // Watch for DOM changes that might affect positioning
      mutationObserver = new MutationObserver(() => {
        setTimeout(updatePath, 50);
      });
      
      mutationObserver.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
    
    // Progressive initialization with increasing delays for stability
    const timeouts = [
      setTimeout(updatePath, 0),
      setTimeout(updatePath, 50),
      setTimeout(updatePath, 150),
      setTimeout(updatePath, 300),
      setTimeout(updatePath, 600),
      setTimeout(updatePath, 1000),
      setTimeout(updatePath, 1500) // Extra delay for complex layouts
    ];
    
    // Handle page load state
    const handleLoad = () => {
      setTimeout(updatePath, 100);
      setTimeout(updatePath, 500);
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('DOMContentLoaded', handleLoad);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      timeouts.forEach(id => clearTimeout(id));
      if (window.resizeTimeout) clearTimeout(window.resizeTimeout);
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["-10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  return (
    <svg
      fill="none"
      width={svgDimensions.width || "100%"}
      height={svgDimensions.height || "100%"}
      className={`pointer-events-none absolute left-0 top-0 transform-gpu z-0 ${className}`}
      viewBox={`0 0 ${svgDimensions.width || 700} ${svgDimensions.height || 500}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        overflow: 'visible',
        willChange: 'transform'
      }}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// Central Euphoric AI Logo component - white background, largest size, perfectly centered
const EuphoricAIHub = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="z-20 flex items-center justify-center absolute bg-white p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-2 border-gray-200 transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 md:w-52 md:h-32"
    style={{
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      // Better rendering
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      // Ensure center alignment
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <img 
      src="/euphoric-logo-final.png" 
      alt="Euphoric AI" 
      className="w-24 sm:w-32 md:w-48 h-auto object-contain transition-all duration-300" 
      style={{ 
        maxHeight: '90%',
        maxWidth: '90%',
        height: 'auto',
        width: 'auto'
      }}
      loading="eager"
      onError={(e) => {
        console.warn('Euphoric AI logo failed to load');
        e.target.style.display = 'none';
      }}
    />
  </div>
));
EuphoricAIHub.displayName = "EuphoricAIHub";

export { AnimatedBeam, Circle, EuphoricAIHub };
export default AnimatedBeam;