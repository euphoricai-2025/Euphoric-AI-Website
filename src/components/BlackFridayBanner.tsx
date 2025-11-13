import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useBanner } from '../contexts/BannerContext';

const BlackFridayBanner = () => {
  const { isBannerVisible, setIsBannerVisible } = useBanner();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-11-30T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsBannerVisible(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [setIsBannerVisible]);

  const handleDismiss = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-[#1a2a2d] via-[#1e3a3f] to-[#2a2520] border-b border-brand-teal/20 z-[60]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-3 sm:gap-4">
          {/* Left side - Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-0.5">
              Black Friday Event | FLASH SALE
            </h3>
            <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
              50% OFF implementation cost & middleware software. 10% OFF monthly subscription for first 3 months.
            </p>
          </div>

          {/* Right side - Timer and CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Countdown Timer */}
            <div className="flex gap-1.5">
              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 min-w-[2rem] sm:min-w-[2.5rem]">
                  <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center leading-tight">
                    {String(timeLeft.days).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[9px] sm:text-[10px]">Days</p>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 min-w-[2rem] sm:min-w-[2.5rem]">
                  <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center leading-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[9px] sm:text-[10px]">Hrs</p>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 min-w-[2rem] sm:min-w-[2.5rem]">
                  <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center leading-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[9px] sm:text-[10px]">Min</p>
              </div>

              <div className="hidden sm:flex flex-col items-center gap-0.5">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 min-w-[2rem] sm:min-w-[2.5rem]">
                  <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center leading-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[9px] sm:text-[10px]">Sec</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm transition-all duration-300 whitespace-nowrap shadow-lg"
            >
              Explore Plans
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
