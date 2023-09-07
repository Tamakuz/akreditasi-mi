import { useState, useEffect } from "react";

const Timer = () => {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000); // Update waktu setiap detik

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatWaktu = (date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Asia/Jakarta", // Set zona waktu ke WIB (GMT+7)
    });
  };

  return (
    <div className="text-right">
      <p className="text-1xl mt-4 text-[14px] md:text-[16px]">{formatWaktu(waktu)} WIB</p>
    </div>
  );
};

export default Timer;