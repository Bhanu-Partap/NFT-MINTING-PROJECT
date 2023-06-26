import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import Collection from "../Pages/Collection";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Routing() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
