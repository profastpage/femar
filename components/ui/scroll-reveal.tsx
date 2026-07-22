"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  xOffset = 50,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = yOffset;
        break;
      case "down":
        y = -yOffset;
        break;
      case "left":
        x = xOffset;
        break;
      case "right":
        x = -xOffset;
        break;
      default:
        break;
    }

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x,
        y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration, xOffset, yOffset]);

  return (
    <div ref={elementRef} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
