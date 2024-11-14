"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  const childrenArray = React.Children.toArray(children);
  const numberOfChildren = childrenArray.length;
  const angleIncrement = (2 * Math.PI) / numberOfChildren;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        } as React.CSSProperties}
        className={cn(
          "absolute flex items-center justify-center w-full h-full",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {childrenArray.map((child, index) => {
          const angle = angleIncrement * index;
          const offsetX = radius * Math.cos(angle);
          const offsetY = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                animation: `orbit var(--duration) linear infinite`,
                animationDelay: `${index * delay}s`,
                transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translate(var(--radius));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translate(var(--radius));
          }
        }
      `}</style>
    </>
  );
}