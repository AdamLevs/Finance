import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 rtl">
      <p>כל הזכויות שמורות © {new Date().getFullYear()} שנקל</p>
    </footer>
  );
}