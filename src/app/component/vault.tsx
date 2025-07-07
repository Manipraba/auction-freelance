"use client";
import React, { useState } from "react";
import { Wallet, Banknote, ArrowUpRight } from "lucide-react";
import { mockBidPanel } from "@/app/api/mockData";

const Vault: React.FC = () => {
  const [paymentMode, setPaymentMode] = useState<"wallet" | "loan">("wallet");
  const [loanAmount, setLoanAmount] = useState("");
  const { eligibleLoan, biddingAmount } = mockBidPanel;

  return (
    <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-xl max-w-md w-full space-y-6 shadow-xl border border-zinc-700">
      {/* Pre-approved Loan Banner */}
      <div className="bg-zinc-800 text-center p-4 rounded-lg space-y-1 border border-zinc-700">
        <p className="text-sm text-gray-300">✨ Congratulations,</p>
        <p className="text-xs text-zinc-400">
          You are eligible for pre approved loan
        </p>
        <p className="text-2xl font-bold text-green-500">{eligibleLoan.toLocaleString()} INR</p>
      </div>

      {/* Bidding Price */}
      <div className="text-center space-y-1">
        <p className="text-sm text-zinc-400 tracking-wide">MY Bidding Price</p>
        <p className="text-xl font-semibold text-white flex items-center justify-center gap-1">
          {biddingAmount.toLocaleString()} INR <ArrowUpRight className="text-green-400" size={16} />
        </p>
      </div>

      {/* Payment Mode Selection */}
      <div className="space-y-3">
        <p className="text-sm text-zinc-400 tracking-wide">
          Choose Payment Mode
        </p>

        {/* Wallet Option */}
        <label
          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
            paymentMode === "wallet"
              ? "border-blue-500 bg-zinc-800"
              : "border-zinc-600 bg-zinc-900"
          }`}
          onClick={() => setPaymentMode("wallet")}
        >
          <div className="flex items-center gap-3">
            <Wallet size={20} />
            <span>Wallet</span>
          </div>
          <span
            className={`h-4 w-4 rounded-full border-2 ${
              paymentMode === "wallet"
                ? "border-blue-500 bg-blue-500"
                : "border-zinc-600"
            }`}
          />
        </label>

        {/* Loan Option */}
        <label
          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
            paymentMode === "loan"
              ? "border-blue-500 bg-zinc-800"
              : "border-zinc-600 bg-zinc-900"
          }`}
          onClick={() => setPaymentMode("loan")}
        >
          <div className="flex items-center gap-3">
            <Banknote size={20} />
            <span>Avail Loan</span>
          </div>
          <span
            className={`h-4 w-4 rounded-full border-2 ${
              paymentMode === "loan"
                ? "border-blue-500 bg-blue-500"
                : "border-zinc-600"
            }`}
          />
        </label>
      </div>

      {/* Loan Amount Input */}
      {paymentMode === "loan" && (
        <div>
          <p className="text-sm text-zinc-400 mb-1 tracking-wide">
            Loan Amount (INR)
          </p>
          <input
            type="number"
            placeholder="Enter your required loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-3 py-2.5 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium text-sm"
        onClick={() => alert("Bid Submitted")}
      >
        Submit Bid ({biddingAmount.toLocaleString()} INR)
      </button>
    </div>
  );
};

export default Vault;
