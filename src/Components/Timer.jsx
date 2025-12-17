import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // countdown finished
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <div>Deadling Ended!</div>;
  }

  return (
    <div style={{ fontSize: "30px", fontWeight: "bold" }}>
      {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M
    </div>
  );
};

export default Timer;
