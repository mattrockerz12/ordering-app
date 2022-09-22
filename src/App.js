import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
