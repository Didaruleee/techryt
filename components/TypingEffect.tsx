"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TypingEffectProps {
  text: string;
  color?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  color = "#04A6C8",
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = "";
      const splitText = text.split("");

      splitText.forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.style.color = color;
        if (textRef.current) {
          textRef.current.appendChild(span);
        }
        gsap.fromTo(
          span,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            delay: index * 0.1,
            duration: 0.2,
          }
        );
      });
    }
  }, [text, color]);

  return <div className="typing-effect" ref={textRef}></div>;
};

export default TypingEffect;
