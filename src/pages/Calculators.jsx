import React, { useState } from "react";
import LoanCalculator from "./LoanCalculator";
import CompoundInterest from "./CompoundInterest";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("loan");

  const tabClasses = (tab) =>
    `px-4 py-2 cursor-pointer border-b-2 ${
      activeTab === tab ? "border-blue-600 text-blue-600 font-bold" : "border-transparent text-gray-600"
    }`;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">מחשבונים פיננסיים</h1>

      <div className="flex justify-center mb-4 border-b">
        <div onClick={() => setActiveTab("loan")} className={tabClasses("loan")}>
          מחשבון הלוואות
        </div>
        <div onClick={() => setActiveTab("compound")} className={tabClasses("compound")}>
          ריבית דריבית
        </div>
      </div>

      {activeTab === "loan" && <LoanCalculator />}
      {activeTab === "compound" && <CompoundInterest />}
    </div>
  );
}