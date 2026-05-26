"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LogoSplash() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [flyTo, setFlyTo] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check localStorage to see if animation already played
    const hasSeenAnimation = localStorage.getItem("logoAnimationPlayed");

    if (!hasSeenAnimation) {
      setIsVisible(true);
      localStorage.setItem("logoAnimationPlayed", "true");

      // Timeline of animations
      const timers = [
        // Color animation completes at 2s
        setTimeout(() => {
          // Get navbar logo position to fly to
          const navbarLogo = document.querySelector("[data-navbar-logo]");
          if (navbarLogo) {
            const rect = navbarLogo.getBoundingClientRect();
            // Calculate relative position from center
            setFlyTo({
              x: rect.left - window.innerWidth / 2,
              y: rect.top - window.innerHeight / 2,
            });
          }
          setIsFlying(true);
        }, 2000),

        // Text slides in after logo starts flying
        setTimeout(() => {
          setShowContent(true);
        }, 2800),

        // Remove splash screen
        setTimeout(() => {
          setIsVisible(false);
        }, 4200),
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isFlying
                ? "radial-gradient(circle at center, rgba(172, 106, 255, 0.1) 0%, transparent 70%)"
                : "radial-gradient(circle at center, rgba(172, 106, 255, 0.2) 0%, transparent 70%)",
            }}
            transition={{ duration: 1 }}
          />

          {/* Logo Container */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={{
              filter: isFlying
                ? "drop-shadow(0 0 20px rgba(172, 106, 255, 0.4))"
                : "drop-shadow(0 0 40px rgba(172, 106, 255, 0.8))",
            }}
            transition={{ duration: 0.8 }}
          >
            {/* SVG Logo with flying animation */}
            <motion.div
              animate={{
                x: isFlying && flyTo ? flyTo.x : 0,
                y: isFlying && flyTo ? flyTo.y : 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={isFlying ? 50 : 150}
                height={isFlying ? 50 : 150}
                viewBox="0 0 48 48"
                className="cursor-pointer transition-all duration-500"
              >
                {/* Animated Polygon with opacity transition */}
                <motion.polygon
                  fill="url(#animatedGradient)"
                  points="38.831 15.118 38.823 9.905 29.203 3.617 29.203 7.639 35.548 11.817 35.553 15.019 32.605 17.015 30.594 15.548 30.594 13.063 27.317 10.821 27.317 15.344 22.122 18.532 22.113 26.952 18.44 29.02 16.554 27.543 16.554 25.105 18.786 23.576 18.786 23.556 18.786 19.783 14.769 22.471 11.698 20.473 8.893 22.31 13.277 25.311 13.277 27.154 10.117 29.291 6.894 27.109 6.894 19.848 11.679 16.608 11.684 13.492 17.82 17.445 22.978 14.011 19.834 12.177 17.776 13.564 13.294 10.6 18.349 7.654 22.727 10.22 22.727 6.393 18.354 3.828 8.411 9.625 8.404 14.84 3.617 18.082 3.617 28.874 8.404 32.116 8.411 37.332 18.032 43.617 18.032 39.598 11.686 35.42 11.681 32.218 14.629 30.222 16.64 31.689 16.64 34.174 19.917 36.416 19.917 31.892 25.186 28.705 25.245 20.285 28.795 18.217 30.68 19.694 30.68 22.131 28.448 23.661 28.448 23.68 28.448 27.454 32.465 24.765 35.536 26.764 38.341 24.927 33.958 21.923 33.958 20.083 37.117 17.946 40.34 20.128 40.34 27.389 35.556 30.629 35.551 33.744 29.414 29.79 24.256 33.201 27.401 35.033 29.459 33.672 33.941 36.636 28.886 39.583 24.507 37.016 24.507 40.842 28.881 43.406 38.823 37.612 38.831 32.396 43.617 29.154 43.617 18.361"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="animatedGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#AC6AFF" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              className="mt-12 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={showContent ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center justify-center"
                initial={{ x: -100, opacity: 0 }}
                animate={showContent ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Intervu AI
                </span>
              </motion.div>

              <motion.p
                className="text-sm text-gray-400 text-center px-4"
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Preparing your interview experience...
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            {!showContent && (
              <motion.div className="mt-12 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}