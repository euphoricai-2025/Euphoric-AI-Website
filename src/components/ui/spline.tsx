import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export function SplineScene({ scene, className = '', onLoad }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`w-full h-full ${className}`}>
      {isVisible ? (
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#42a4bf]/30 border-t-[#42a4bf] animate-spin" />
          </div>
        }>
          <Spline scene={scene} onLoad={onLoad} />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#42a4bf]/30 border-t-[#42a4bf] animate-spin" />
        </div>
      )}
    </div>
  );
}
