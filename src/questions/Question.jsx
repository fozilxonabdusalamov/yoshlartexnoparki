import React, { useState } from "react";
import "./Question.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// data.js
const faqData = [
  {
    question: "Dasturchi bo‘lmoqchi edim, matematika kerak bo‘ladimi?",
    answer:
      "Dasturchi bo‘lish uchun mukammal matematika bilimlari shart emas. Asosiy arifmetik amallar va mantiqiy fikrlash yetarli. Murakkab matematika faqat ba’zi sohalarda kerak bo‘ladi (masalan, sun’iy intellekt, o‘yinlar yaratish)..",
  },
  {
    question: " Kompyuterim yo‘q edi, dasturlash o‘rgansam bo‘ladimi?",
    answer:
      "Albatta bo‘ladi! Texnopartda siz markazdagi kompyuterlardan foydalangan holda o‘rganishingiz mumkin. Darslar amaliy tarzda olib boriladi, shuning uchun o‘z kompyuteringiz bo‘lmasa ham, to‘liq o‘rganishingiz mumkin.",
  },
  {
    question: "O‘quv kurslari qanchadan boshlanadi?",
    answer:
      " Kurslar narxi tanlangan yo‘nalish va davomiyligiga qarab farq qiladi. O‘rtacha oylik to‘lovlar 300 000 so‘mdan boshlanadi. Batafsil ma’lumot olish uchun biz bilan bog‘laning.",
  },
  {
    question: "Kursni tugatgach, ish topishimga yordam berasizlarmi?",
    answer:
      "Ha, Texnopart bitiruvchilariga ishga joylashishda maslahat va yo‘naltirishlar beriladi. Eng yaxshi bitiruvchilar tavsiya orqali IT kompaniyalarga yo‘naltiriladi.",
  },
];

function Question() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container">
      <h1 className="heading">
        <span>Tez-tez</span> beriladigan savollar
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => toggle(index)} className="accordion-question">
            {item.question}
            <span>
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
