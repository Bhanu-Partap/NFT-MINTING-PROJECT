import React from "react";
import Navbar  from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
