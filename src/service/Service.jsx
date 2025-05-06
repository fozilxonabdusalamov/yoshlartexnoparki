import React from "react";
import "./Service.css";
import ServiceItem from "./ServiceItem/ServiceItem";
function Service() {
  return (
    <div className="service">
      <h1 className="service_title">
        Faoliyat <span>yo‘nalishlari</span>
      </h1>
      <p className="text">
        O‘zingizga kerak bo‘lgan faoliyat yo‘nalishini tanlang.
      </p>
      <div className="service_main">
        <ServiceItem />
      </div>
    </div>
  );
}

export default Service;
