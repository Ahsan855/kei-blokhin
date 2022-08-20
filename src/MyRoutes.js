import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Author from "./Components/Pages/Author/Author";
import Contact from "./Components/Pages/Contact/Contact";
import Explore from "./Components/Pages/Explore/Explore";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
