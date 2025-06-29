import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Calculators from "../pages/Calculators";
import Contact from "../pages/Contact";
import LoanCalculator from "../pages/LoanCalculator";
import CompoundInterest from "../pages/CompoundInterest";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loan" element={<LoanCalculator />} />
      <Route path="/compound" element={<CompoundInterest />} />
    </Routes>
  );
}