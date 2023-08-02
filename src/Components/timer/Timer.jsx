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
    <div className="text-center">
      <h1 className="text-4xl font-bold">Waktu WIB</h1>
      <p className="text-2xl mt-4">{formatWaktu(waktu)}</p>
    </div>
  );
};

export default Timer;