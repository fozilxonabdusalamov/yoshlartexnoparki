import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaMapLocation,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("banner");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (id) => {
    setActiveSection(id);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  useEffect(() => {
    const sectionIds = [
      "banner",
      "service",
      "business",
      "about",
      "news",
      "tanlov",
      "question",
      "footer",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="footer">
      <div className="f_container">
        <div className="f_container_items">
           <h2 className="logo">Namangan Yoshlar Texnoparni</h2>

          <p
            className={`links ${activeSection === "banner" ? "active" : ""}`}
            onClick={() => handleLinkClick("banner")}
          >
            Asosiy
          </p>
          <p
            className={`links ${activeSection === "service" ? "active" : ""}`}
            onClick={() => handleLinkClick("service")}
          >
            Xizmatlar
          </p>
          <p
            className={`links ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            Jamoa
          </p>
          <p
            className={`links ${activeSection === "news" ? "active" : ""}`}
            onClick={() => handleLinkClick("news")}
          >
            Yangiliklar
          </p>
          <p
            className={`links ${activeSection === "tanlov" ? "active" : ""}`}
            onClick={() => handleLinkClick("tanlov")}
          >
            Tanlov
          </p>
          <p
            className={`links ${activeSection === "footer" ? "active" : ""}`}
            onClick={() => handleLinkClick("footer")}
          >
            Aloqa
          </p>
        </div>

        <div className="f_container_items_one">
          <ul>
            <li>
              <b>Yoshlar uchun:</b> maktab o‘quvchilari, talaba va umuman
              texnologiyaga qiziqqan yoshlar.
            </li>
            <li>
              <b>O‘rgatadi:</b> dasturlash (programming), sun’iy intellekt (AI),
              robototexnika, 3D-printing, web development, mobil ilovalar
              yaratish va boshqa texnologik sohalar.
            </li>
            <li>
              <b>Amaliy imkoniyat beradi:</b> o‘z startaplarini yaratish,
              loyihalarda ishlash, real kompaniyalar bilan hamkorlik qilish.
            </li>
            <li>
              <b>Tanlovlar va grantlar taklif qiladi:</b> yaxshi loyihalarga
              investitsiya yoki grantlar ajratiladi.
            </li>
            <li>
              <b>Mentorlik:</b> tajribali mutaxassislar yoshlarni qiziqtirgan
              sohalarda yo‘naltiradi.
            </li>
            <li>
              <b>Tadbirlar:</b> seminarlar, hackathonlar, kurslar va treninglar
              o‘tkaziladi.
            </li>
          </ul>
        </div>

        <div className="f_container_items_link">
          <a
            href="https://t.me/Namanganyoshlartexnoparki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram /> Telegram
          </a>
          <a
            href="https://www.instagram.com/namangan.yoshlar.texnoparki?utm_source=qr&igsh=em02ODgwdnh0OXp0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://youtube.com/your_channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> YouTube
          </a>
          <a href="tel:+998950280082">
            <FaPhone /> +998 95 028 00 82
          </a>
          <a href="tel:+998902220082">
            <FaPhone /> +998 90 222 00 82
          </a>
          <div>
            <p>
              <FaMapLocation /> <b>Manzil:</b> Nurafshon MFY, A.Xo'jayev
              ko'chasi, 125-uy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
