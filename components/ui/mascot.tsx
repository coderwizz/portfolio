"use client";

import React, { useState, useEffect, useRef } from "react";

const sleepingSprite = "/assets/sleeping.png";
const wakingUpSprite = "/assets/waking-up.png";
const awakeSprite = "/assets/awake.png";
const happySprite = "/assets/happy.png";

const Mascot: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [sprite, setSprite] = useState(sleepingSprite);
  const [mouseActivity, setMouseActivity] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [lastActivityTime, setLastActivityTime] = useState<number>(0);
  const [activityTimeout, setActivityTimeout] = useState<boolean>(false);
  const [wakingUp, setWakingUp] = useState(false);

  const mascotRef = useRef<HTMLDivElement>(null);
  let lastMoveTime = useRef<number>(Date.now());

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - 695,
      y: window.innerHeight / 2 - 55,
    });
    setLastActivityTime(Date.now());
  }, []);

  const updateMouseActivity = () => {
    const now = Date.now();
    const timeDifference = now - lastMoveTime.current;
    lastMoveTime.current = now;

    if (timeDifference < 200) {
      setMouseActivity((prev) => Math.min(prev + 1, 5));
    } else {
      setMouseActivity((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const handleMouseMove = () => updateMouseActivity();
    const handleMouseClick = () => updateMouseActivity();
    const handleMouseScroll = () => updateMouseActivity();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("scroll", handleMouseScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("scroll", handleMouseScroll);
    };
  }, []);

  useEffect(() => {
    if (mouseActivity === 0) {
      setSprite(sleepingSprite);
    } else if (mouseActivity === 1) {
      setSprite(sleepingSprite);
    } else if (mouseActivity === 2) {
      setSprite(wakingUpSprite);
    } else if (mouseActivity === 3) {
      setSprite(awakeSprite);
    } else if (mouseActivity === 4 || mouseActivity === 5) {
      setSprite(happySprite);
    }
    setLastActivityTime(Date.now());
  }, [mouseActivity]);

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const now = Date.now();
      if (now - lastActivityTime >= 5000) {
        setActivityTimeout(true);
      }
    }, 1000);

    return () => clearInterval(checkInactivity);
  }, [lastActivityTime]);

  useEffect(() => {
    if (activityTimeout) {
      if (sprite === happySprite) {
        setSprite(awakeSprite);
        setActivityTimeout(false);
      } else if (sprite === awakeSprite) {
        setWakingUp(true);
        setTimeout(() => {
          setSprite(wakingUpSprite);
          setWakingUp(false);
        }, 1500);
      } else if (sprite === wakingUpSprite) {
        setSprite(sleepingSprite);
      }
    }
  }, [activityTimeout, sprite]);

  const onMouseDown = (e: React.MouseEvent) => {
    // Toggle the dragging state when clicked on the mascot
    setIsDragging(!isDragging);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({ x: e.clientX - 50, y: e.clientY - 50 }); // Center the mascot on the mouse cursor
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
    }

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDragging]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!mascotRef.current?.contains(e.target as Node)) {
        setIsDragging(false); // Stop dragging if clicked outside the mascot
      }
    };

    // Listen for clicks anywhere on the window to stop dragging
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={mascotRef}
      className="absolute cursor-pointer transition-all flex items-center"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
      }}
      onMouseDown={onMouseDown} // Handle the mouse down for toggling drag
    >
      <img src={sprite} alt="Mascot" className="w-24 h-24" draggable={false} />
      <div className="ml-4 text-left">
        <p className="text-sm font-semibold">
          Hello! I'm Nathan, Ethan's long lost cousin from the front-end.
        </p>
      </div>
    </div>
  );
};

export default Mascot;