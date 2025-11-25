import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useBanner } from '../contexts/BannerContext';

const BlackFridayBanner = () => {
  const { isBannerVisible, setIsBannerVisible } = useBanner();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBannerHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };

    updateBannerHeight();
    window.addEventListener('resize', updateBannerHeight);

    return () => {
      window.removeEventListener('resize', updateBannerHeight);
    };
  }, []);

  const handleDismiss = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div ref={bannerRef} className="fixed top-0 w-full bg-gradient-to-br from-[#0a4d4d] via-[#0d2847] to-[#0a1a2e] border-b border-[#6498a0]/20 z-[60] min-h-[62px] py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left side - Text content */}
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-white font-bold text-[9px] sm:text-sm md:text-base mb-0.5">
              BLACK FRIDAY FLASH SALE
            </h3>
            <p className="text-gray-200 text-[8px] sm:text-xs md:text-sm line-clamp-2">
              50% OFF setup + middleware • 10% OFF monthly subscription for first 3 months
            </p>
          </div>

          {/* Right side - CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Button */}
            <Link
              to="/pricing"
              className="bg-[#b8935f] hover:bg-[#a98064] text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm transition-all duration-300 whitespace-nowrap shadow-lg"
            >
              Claim Offer →
            </Link>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
