"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface VibrationIconProps {
  icon: React.ReactElement;
  animationDirection?: "left" | "right";
}

const VibrationIcon: React.FC<VibrationIconProps> = ({
  icon,
  animationDirection = "right",
}) => {
  const iconRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (iconRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      // Set up the vibration animation based on direction
      const movement = animationDirection === "left" ? -5 : 5;
      tl.to(iconRef.current, { y: movement, duration: 1.5 }).to(
        iconRef.current,
        { y: -movement, duration: 1.5 }
      );
    }
  }, [animationDirection]);

  return (
    <div className="cursor-pointer">
      {React.cloneElement(icon, { ref: iconRef })}
    </div>
  );
};

export default VibrationIcon;
