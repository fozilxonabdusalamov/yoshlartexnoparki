import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Registration from "./registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
