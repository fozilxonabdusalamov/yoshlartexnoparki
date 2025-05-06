// Header.jsx
import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("banner");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false); // menyuni yopish

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
    <div className="header">
      <div className="header_conatiner">
        <h2 className="logo">Namangan Yoshlar Texnoparni</h2>

        <div className="nav-links">
          <p
            className={`link ${activeSection === "banner" ? "active" : ""}`}
            onClick={() => handleLinkClick("banner")}
          >
            Asosiy
          </p>
          <p
            className={`link ${activeSection === "news" ? "active" : ""}`}
            onClick={() => handleLinkClick("news")}
          >
            Yangiliklar
          </p>
          <p
            className={`link ${activeSection === "service" ? "active" : ""}`}
            onClick={() => handleLinkClick("service")}
          >
            Xizmatlar
          </p>
          <p
            className={`link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            Jamoa
          </p>

          <p
            className={`link ${activeSection === "tanlov" ? "active" : ""}`}
            onClick={() => handleLinkClick("tanlov")}
          >
            Tanlov
          </p>
          <p
            className={`link ${activeSection === "footer" ? "active" : ""}`}
            onClick={() => handleLinkClick("footer")}
          >
            Aloqa
          </p>

          <button
            className="register-button"
            onClick={() => navigate("/registration")}
          >
            Ro'yhatdan o'tish
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </div>

      {/* Mobile menyu */}
      {menuOpen && (
        <div className="mobile-menu">
          <p onClick={() => handleLinkClick("banner")}>Asosiy</p>
          <p onClick={() => handleLinkClick("service")}>Xizmatlar</p>
          <p onClick={() => handleLinkClick("about")}>Jamoa</p>
          <p onClick={() => handleLinkClick("news")}>Yangiliklar</p>
          <p onClick={() => handleLinkClick("tanlov")}>Tanlov</p>
          <p onClick={() => handleLinkClick("footer")}>Aloqa</p>
          <button onClick={() => navigate("/registration")}>
            Ro'yhatdan o'tish
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
