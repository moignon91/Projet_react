import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../nav/Nav";
import Apelleapi from "../api/Apelleapi";
import Men from "../category/Men";
import Women from "../category/Women";
import Jewelery from "../category/Jewelery";
import Electronic from "../category/Electronic";
import Details from "../category/Details";
import Panier from "../category/Panier";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Apelleapi />} />
          <Route path="/Men_clothes" element={<Men />} />
          <Route path="/Women_clothes" element={<Women />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/Electronic" element={<Electronic />} />
          <Route path="/Panier" element={<Panier />} />
        </Route>
        <Route>
          <Route path="/Details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
