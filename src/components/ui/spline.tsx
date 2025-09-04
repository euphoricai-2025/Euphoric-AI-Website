import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export function SplineScene({ scene, className = '', onLoad }: SplineSceneProps) {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400">Loading 3D scene...</div>
      </div>
    }>
      <Spline 
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  );
}