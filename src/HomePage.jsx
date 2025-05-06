// HomePage.jsx
import React from "react";
import Header from "./header/Header";
import Banner from "./main/Banner";
import Service from "./service/Service";
import Business from "./bizness/Bizness";
import Groups from "./groups/Groups";
import News from "./news/News";
import Footer from "./footer/Footer";
import Tanlov from "./tanlov/Tanlov";
import Question from "./questions/Question";
import About from "./about/About";
import "./App.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className="_app">
        <div className="app">
          <div id="banner" className="section">
            <Banner />
          </div>
          <div id="news" className="section">
            <News />
          </div>
          <div id="service" className="section">
            <Service />
          </div>
          <div className="section">
            <Business />
          </div>
          <div id="about" className="section">
            <Groups />
          </div>

          <div id="tanlov" className="section">
            <Tanlov />
          </div>
          <div id="question" className="section">
            <Question />
          </div>
          <div className="section">
            <About />
          </div>
        </div>
        <div id="footer" className="section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
