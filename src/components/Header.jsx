import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 rtl">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-xl font-bold">שנקל</h1>
        <ul className="flex gap-4">
          <li><Link to="/">בית</Link></li>
          <li><Link to="/about">אודות</Link></li>
          <li><Link to="/blog">בלוג</Link></li>
          <li><Link to="/calculators">מחשבונים</Link></li>
          <li><Link to="/contact">צור קשר</Link></li>
        </ul>
      </nav>
    </header>
  );
}