'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const FinancialCalculator = () => {
  const [state, setState] = useState({
    loanAmount: 250000,
    interestRate: 8,
    periods: 25,
    baseDate: '2025-03-01',
    revenue: 10,
    expenses: -2,
  });

  const calculatePMT = () => {
    const rate = state.interestRate / 100 / 12;
    const periods = state.periods * 12;
    const present = state.loanAmount;
    return (
      (present * rate * Math.pow(1 + rate, periods)) /
      (Math.pow(1 + rate, periods) - 1)
    );
  };

  const generateMonthlyData = () => {
    const months = [];
    let currentDate = new Date(state.baseDate);

    for (let i = 0; i < 8; i++) {
      const revenue = state.revenue + i * 1;
      const expenses = state.expenses - i * 0.5;

      months.push({
        date: currentDate.toISOString().split('T')[0],
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        revenue,
        expenses,
        netIncome: revenue + expenses,
      });

      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return months;
  };

  const monthlyData = generateMonthlyData();
  const payment = calculatePMT();

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Financial Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Loan Amount ($)
              </label>
              <input
                type="number"
                value={state.loanAmount}
                onChange={(e) =>
                  setState({
                    ...state,
                    loanAmount: Number(e.target.value),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={state.interestRate}
                onChange={(e) =>
                  setState({
                    ...state,
                    interestRate: Number(e.target.value),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Base Revenue
              </label>
              <input
                type="number"
                value={state.revenue}
                onChange={(e) =>
                  setState({
                    ...state,
                    revenue: Number(e.target.value),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Base Expenses
              </label>
              <input
                type="number"
                value={state.expenses}
                onChange={(e) =>
                  setState({
                    ...state,
                    expenses: Number(e.target.value),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2 ">
              Monthly Payment: ${payment.toFixed(2)}
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Revenue</th>
                  <th className="border p-2">Expenses</th>
                  <th className="border p-2">Net Income</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((month, index) => (
                  <tr key={index}>
                    <td className="border p-2">{month.date}</td>
                    <td className="border p-2">
                      {month.revenue.toFixed(1)}
                    </td>
                    <td className="border p-2">
                      {month.expenses.toFixed(1)}
                    </td>
                    <td className="border p-2">
                      {month.netIncome.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialCalculator;
