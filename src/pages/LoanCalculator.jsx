import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LoanCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(1200000);
  const [rate, setRate] = useState(2.5);
  const [years, setYears] = useState(10);
  const [extraMonthly, setExtraMonthly] = useState(0);
  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;

    const monthlyPayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    const adjustedMonthly = monthlyPayment + Number(extraMonthly);
    const totalPayment = adjustedMonthly * months;
    const totalInterest = totalPayment - amount;

    setResults({
      monthlyPayment: adjustedMonthly,
      totalPayment,
      totalInterest,
    });
  };

  return (
    <div className="max-w-xl mx-auto text-right">
      <h2 className="text-2xl font-bold mb-4">{t("loan.title")}</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <label className="block">
          {t("loan.amount")}
          <input
            type="number"
            className="w-full border p-2"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </label>

        <label className="block">
          {t("loan.rate")}
          <input
            type="number"
            className="w-full border p-2"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            step="0.01"
          />
        </label>

        <label className="block">
          תקופת ההחזר (שנים)
          <input
            type="number"
            className="w-full border p-2"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </label>

        <label className="block">
          תשלום חודשי נוסף (אופציונלי)
          <input
            type="number"
            className="w-full border p-2"
            value={extraMonthly}
            onChange={(e) => setExtraMonthly(+e.target.value)}
          />
        </label>

        <button
          onClick={calculateLoan}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {t("loan.calculate")}
        </button>
      </form>

      {results && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow text-lg">
          <p>
            💰 <b>{t("loan.monthlyPayment")}:</b> ₪{results.monthlyPayment.toFixed(2)}
          </p>
          <p>
            📊 <b>{t("loan.totalPayment")}:</b> ₪{results.totalPayment.toFixed(2)}
          </p>
          <p>
            📉 <b>{t("loan.totalInterest")}:</b> ₪{results.totalInterest.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}