"use client";

import React, { useEffect, useState, useCallback } from "react";

interface TimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const renderTimerComponents = () => {
    if (!timeLeft) {
      return <span>{"Time's up!"}</span>;
    }

    const intervals: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];
    return intervals.map((interval, index) => (
      <React.Fragment key={interval}>
        <div className="flex items-center flex-col space-y-1">
          <span className="text-2xl font-semibold">
            {isClient ? timeLeft[interval] : "00"}
          </span>
          <span className="text-xs font-light uppercase">{interval}</span>
        </div>
        {index < intervals.length - 1 && (
          <span key={interval + "-colon"} className="text-2xl font-semibold text-white">:</span>
        )}
      </React.Fragment>
    ));
  };

  return <div className="flex space-x-2">{renderTimerComponents()}</div>;
};

export { Timer };
