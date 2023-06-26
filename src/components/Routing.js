import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import Collection from "../Pages/Collection";
// import { Provider } from "react-redux";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Provider > */}
            <Route path="/" element={<Homepage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
          {/* </Provider> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
