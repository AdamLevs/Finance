import React, { useState } from "react";

export default function CompoundInterest() {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    let futureValue = initialAmount * Math.pow(1 + monthlyRate, months);
    for (let i = 1; i <= months; i++) {
      futureValue += monthlyContribution * Math.pow(1 + monthlyRate, months - i);
    }

    setResult(futureValue.toFixed(2));
  };

  return (
    <div className="bg-white shadow p-6 rounded">
      <h2 className="text-xl font-bold mb-4">מחשבון ריבית דריבית</h2>
      <p className="mb-4 text-gray-700">
        חישוב כמה תחסוך לאורך זמן עם ריבית דריבית – כולל סכום ראשוני והפקדות חודשיות קבועות.
      </p>

      <div className="grid gap-4">
        <label>
          סכום התחלתי (₪):
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
            className="input"
          />
        </label>
        <label>
          הפקדה חודשית (₪):
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="input"
          />
        </label>
        <label>
          ריבית שנתית (%):
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="input"
          />
        </label>
        <label>
          משך (בשנים):
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="input"
          />
        </label>
        <button onClick={calculate} className="bg-blue-600 text-white px-4 py-2 rounded">
          חשב
        </button>

        {result && (
          <div className="mt-4 text-lg font-semibold text-green-700">
            סכום עתידי משוער: ₪{result}
          </div>
        )}
      </div>
    </div>
  );
}