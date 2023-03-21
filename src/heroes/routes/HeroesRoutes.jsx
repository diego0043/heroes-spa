import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { Home, Heroes, Search, Hero } from "../pages/index";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hero/:heroeId" element={<Hero />} />
      </Routes>
    </>
  );
};
