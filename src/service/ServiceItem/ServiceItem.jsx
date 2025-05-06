import React from "react";
import "./ServiceItem.css";

import service1 from "../../assets/section-1-1.png";

import service2 from "../../assets/section-1-2.png";
import service3 from "../../assets/section-1-3.png";
import service4 from "../../assets/section-1-4.png";

const serviceList = [
  {
    id: 1,
    img: service1,
    title: "Innovatsion startap loyiha va g‘oyalarni rivojlantirish",
    text: "Batafsil",
  },

  {
    id: 2,
    img: service2,

    title: "Yoshlarga Axborot texnologiyalari sohasi bo‘yicha ta’lim berish",
    text: "Batafsil",
  },
  {
    id: 3,
    img: service3,
    title: "Raqamli texnologiyalar sohasi bo‘yicha xizmat ko‘rsatish",
    text: "Batafsil",
  },
  {
    id: 4,
    img: service4,
    title: "Metall va nometall hom ashyolariga qaytaishlov berish xizmatlari",
    text: "Batafsil",
  },
];

function ServiceItem() {
  return serviceList.map((item) => (
    <div className="service_item" key={item.id}>
      <img src={item.img} alt="" />
      <div>
        <p>{item.id}-yo‘nalish</p>
        <b>{item.title}</b>
        <p>{item.text}</p>
      </div>
    </div>
  ));
  // <div className="service_item">
  //   <img src={service1} alt="" />
  //   <div>
  //     <p>1-yo‘nalish</p>
  //     <b>Innovatsion startap loyiha va g‘oyalarni rivojlantirish</b>
  //     <p>Batafsil</p>
  //   </div>
  // </div>
}

export default ServiceItem;
