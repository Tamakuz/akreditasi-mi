import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { AppProvider } from "./Context/Context";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
