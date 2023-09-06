import { useState } from "react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(true);

  const saveCookieForTrackingTraffic = () => {
    fetch(
      "https://knowledgeable-painted-guarantee.glitch.me/visitors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cookie: localStorage.getItem("cookieConsent") }),
      }
    );
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    saveCookieForTrackingTraffic();
    setShowPopup(false);
  };

  const handleDecline = () => {
    setShowPopup(false);
  };

  if (!showPopup || localStorage.getItem("cookieConsent") === "accepted") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-[999]">
      <div className="container mx-auto">
        <p className="text-center">
          Setujui sebagai pengunjung?.{" "}
          <span className="underline cursor-pointer" onClick={handleAccept}>
            ya
          </span>{" "}
          |{" "}
          <span className="cursor-pointer" onClick={handleDecline}>
            tidak
          </span>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;
