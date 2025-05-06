import React, { useState } from "react";
import "./Banner.css";
import banner from "../../public/banner.png";
import { useNavigate, useLocation } from "react-router-dom";

function Banner() {
  const [activeSection, setActiveSection] = useState("banner");
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div className="banner" id="banner">
      <div className="banner_left">
        <h1 className="banner_title title">
          <span>Innovatsiyalar va innovatorlarni </span>ishlab chiqaruvchi
          maydon
        </h1>
        <button
          className="register-button"
          onClick={() => navigate("/registration")}
        >
          So'rov qoldiring
        </button>
      </div>
      <div className="banner_right">
        <img src={banner} alt="banner_imge" />
      </div>
    </div>
  );
}

export default Banner;
