import React from "react";
import TanlovItem from "./Tanlovitems/TanlovItem";
import "./Tanlov.css";

function Tanlov() {
  return (
    <div className="tanlov">
      <h1>
        nega aynan <span> texnopark?</span>
      </h1>
      <div className="tanlov_conatiner">
        <TanlovItem />
      </div>
    </div>
  );
}

export default Tanlov;
