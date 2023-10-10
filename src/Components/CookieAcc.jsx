import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      localStorage.setItem("cookieConsent", "accepted");

      fetch("https://knowledgeable-painted-guarantee.glitch.me/visitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookie: localStorage.getItem("cookieConsent"),
        }),
      });
    }
  }, []);
};

export default CookieConsent;
