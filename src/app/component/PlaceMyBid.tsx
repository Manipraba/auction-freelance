import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import SubmitMyBid from "./SubmitMyBid";

export default function PlaceMyBid({ onClose }: { onClose: () => void }) {
  const [tenure, setTenure] = useState(37);
  const [downPayment, setDownPayment] = useState(60000);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  if (showSubmitModal) return <SubmitMyBid onClose={onClose} />;
  return (
    <div className="flex flex-col md:flex-row  text-white rounded-lg gap-4 max-h-[80vh] overflow-y-auto max-w-[90vw] p-4 md:p-5">
      <X
        className="absolute top-2 right-6 h-5 w-5 text-white cursor-pointer z-50"
        onClick={onClose}
      />
      {/* Left Panel */}
      <div className="bg-zinc-900 rounded-lg p-4 w-full md:w-3/5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Place My Bid</h2>
          <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
            Finest Now
          </span>
        </div>
        <div className="text-xs text-zinc-400">
          Bidding ends in <b className="text-white">2024 hrs</b>
        </div>
        <h3 className="text-lg font-semibold">2024 Maruti Ciaz</h3>
        <p className="text-xs text-zinc-400">DELTA 1.5 5HVS PETROL</p>

        <div className="flex gap-2 text-xs text-zinc-300 mt-1">
          <span>80 KM</span>
          <span>Unregistered</span>
          <span>Manual</span>
          <span>Petrol</span>
        </div>

        <Image
          src="/cars/car.png"
          alt="car"
          width={600}
          height={300}
          className="w-full object-cover rounded-md"
        />

        <div className="flex justify-between pt-2 text-xs">
          <div>
            <p className="text-zinc-400">Reserved Price</p>
            <p className="text-white font-semibold">4,51,000 INR</p>
          </div>
          <div>
            <p className="text-zinc-400">Bid Increment</p>
            <p className="text-white font-semibold">5,000 INR</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-[10px] pt-3 text-zinc-300">
          <span className="bg-zinc-800 px-2 py-1 rounded-full">
            Free Insurance
          </span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">
            Free Registration
          </span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">
            Home Delivery (20k KM)
          </span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">
            Finance Available
          </span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-zinc-800 rounded-lg p-4 w-full md:w-2/5 text-sm">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs">MY Bidding Price</p>
        </div>
        <p className="text-xl font-bold text-green-400">5,56,000.00 INR</p>

        <p className="mt-3 text-xs text-zinc-400">Your Eligible Payment Mode</p>
        <div className="mt-1 space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Wallet</span>
            <span className="text-white">30,000 INR</span>
          </div>
          <div className="flex justify-between">
            <span>Avail Loan</span>
            <span className="text-white">7,00,000.00 INR</span>
          </div>
        </div>

        <div className="mt-3 space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Loan Amount</span>
            <span>Down Payment</span>
          </div>
          <div className="flex justify-between">
            <input
              className="bg-zinc-700 p-1 rounded w-[48%] text-right text-xs"
              value="528000"
              readOnly
            />
            <input
              className="bg-zinc-700 p-1 rounded w-[48%] text-right border border-red-500 text-xs"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
          <p className="text-red-400 text-[10px]">
            Insufficient Amount.{" "}
            <a className="underline cursor-pointer">Top it up</a>
          </p>
        </div>

        <div className="mt-3">
          <p className="text-xs mb-1">Tenure</p>
          <input
            type="range"
            min="12"
            max="60"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-right text-[10px] text-zinc-400">
            {tenure} Months
          </p>
        </div>

        <div className="mt-3 text-xs">
          <p>
            Monthly EMI @12%
            <span className="float-right font-semibold text-white">
              29,580 / Mo
            </span>
          </p>
        </div>

        <div className="flex items-start mt-3 gap-2 text-xs">
          <input type="checkbox" id="agree" className="mt-1" />
          <label htmlFor="agree">
            I agree the <span className="underline">Terms and Condition</span>{" "}
            and <span className="underline">Privacy Policy</span>
          </label>
        </div>
        <button
          onClick={() => setShowSubmitModal(true)}
          className="mt-4 w-full bg-blue-500 text-white py-1.5 rounded font-semibold text-sm"
        >
          Submit Bid (5,56,000.00 INR)
        </button>
      </div>
    </div>
  );
}
