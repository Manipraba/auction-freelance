"use client";
import React, { useState } from "react";
import { Pencil, Wallet, Banknote } from "lucide-react";
import Image from "next/image";
import Vault from "./vault";
import { mockBidPanel } from "@/app/api/mockData";

const PaymentOptionsPanel = () => {
  const [selectedMode, setSelectedMode] = useState<"wallet" | "loan">("wallet");
  const [showVault, setShowVault] = useState(false);
  const { biddingAmount, walletBalance, eligibleLoan } = mockBidPanel;

  const isInsufficient = selectedMode === "wallet" && walletBalance < biddingAmount;

  return (
    <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-xl max-w-md w-full space-y-6 shadow-lg border border-zinc-700">
      {/* Bidding Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-zinc-400">MY Bidding Price</p>
          <p className="text-xl font-semibold text-white">
            {biddingAmount.toLocaleString()} INR <span className="text-green-400">↑</span>
          </p>
        </div>
        <Pencil size={16} className="text-blue-400 mt-1 cursor-pointer" />
      </div>

      {/* Payment Modes */}
      <div className="space-y-2">
        <p className="text-sm text-zinc-400 mb-2">Your Eligible Payment Mode</p>

        {/* Wallet */}
        <label
          onClick={() => setSelectedMode("wallet")}
          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
            selectedMode === "wallet"
              ? "border-blue-500 bg-zinc-800"
              : "border-zinc-700 bg-zinc-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              readOnly
              checked={selectedMode === "wallet"}
              className="accent-blue-500"
            />
            <Wallet size={20} />
            <span>Wallet</span>
          </div>
          <span className="text-sm text-white">
            Available Balance <br />
            <span className="font-bold">{walletBalance.toLocaleString()} INR</span>
          </span>
        </label>

        {/* Loan */}
        <label
          onClick={() => setSelectedMode("loan")}
          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
            selectedMode === "loan"
              ? "border-blue-500 bg-zinc-800"
              : "border-zinc-700 bg-zinc-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              readOnly
              checked={selectedMode === "loan"}
              className="accent-blue-500"
            />
            <Banknote size={20} />
            <span>Avail Loan</span>
          </div>
          <span className="text-sm text-white">
            Pre-approved Loan <br />
            <span className="font-bold">{eligibleLoan.toLocaleString()} INR</span>
          </span>
        </label>
      </div>

      {/* Insufficient Message */}
      {isInsufficient && (
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/assets/insufficient.png"
              alt="Insufficient Balance"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-zinc-300">
            InSufficient Amount to Place the bidding
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded text-sm font-semibold"
            onClick={() => setShowVault(true)}
          >
            Top Up now
          </button>
        </div>
      )}
      {/* Vault Modal */}
      {showVault && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            <Vault />
            <button
              onClick={() => setShowVault(false)}
              className="absolute top-2 right-2 text-white bg-zinc-700 rounded-full p-1 hover:bg-zinc-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptionsPanel;
