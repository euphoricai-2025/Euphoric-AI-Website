import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const BlackFridayBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('blackFridayBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
      return;
    }

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
        setIsVisible(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('blackFridayBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-b border-blue-500/20 z-[60]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Left side - Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-0.5">
              Black Friday Event
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              Up to 50% Off All Annual Plans. Deploy your intelligent voice agent in minutes.
            </p>
          </div>

          {/* Right side - Timer and CTA */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Countdown Timer */}
            <div className="flex gap-1.5 sm:gap-2">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-1.5 min-w-[2.5rem] sm:min-w-[3rem]">
                  <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center leading-tight">
                    {String(timeLeft.days).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Days</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-1.5 min-w-[2.5rem] sm:min-w-[3rem]">
                  <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center leading-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Hrs</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-1.5 min-w-[2.5rem] sm:min-w-[3rem]">
                  <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center leading-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Min</p>
              </div>

              <div className="hidden sm:flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-1.5 min-w-[2.5rem] sm:min-w-[3rem]">
                  <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center leading-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Sec</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-lg text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap"
            >
              Explore Plans
            </Link>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
