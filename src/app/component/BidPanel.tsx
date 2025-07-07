"use client";

import { useState, useMemo } from "react";
import { CheckCircle, Gauge, Ban, Settings2, Fuel } from "lucide-react";
import PlaceMyBid from "./PlaceMyBid";
import { mockBidPanel, mockAuctions } from "@/app/api/mockData";

const BidPanel = () => {
  const {
    initialPrice,
    increment,
    visibleOptions,
    eligibleLoan,
    biddingAmount,
    walletBalance,
  } = mockBidPanel;

  const [ongoingBid, setOngoingBid] = useState(initialPrice);
  const [selectedBid, setSelectedBid] = useState(initialPrice + increment);
  const [showModal, setShowModal] = useState(false);

  const bidOptions = useMemo(() => {
    return Array.from(
      { length: visibleOptions },
      (_, i) => ongoingBid + increment * (i + 1)
    );
  }, [ongoingBid]);

  const isInsufficient = walletBalance < biddingAmount;

  const handlePlaceBid = () => {
    if (selectedBid > ongoingBid) {
      setOngoingBid(selectedBid);
      setSelectedBid(selectedBid + increment);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Use first auction for car info
  const car = mockAuctions[0];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md max-h-[75vh]">
      <h2 className="text-lg font-bold mb-1">{car.title}</h2>
      <p className="text-xs text-gray-400 mb-4">{car.subtitle}</p>
      <div className="grid grid-cols-4 gap-3 text-xs text-center mb-4 text-white">
        <div className="flex flex-col items-center gap-1">
          <Gauge size={16} />
          <span>{car.kilometers}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Ban size={16} />
          <span>{car.registrationStatus}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Settings2 size={16} />
          <span>{car.transmission}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Fuel size={16} />
          <span>{car.fuelType}</span>
        </div>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 pt-4 mb-2">
        <div>
          <p className="text-gray-400">Reserved Price</p>
          <p className="font-semibold">₹ {car.reservePrice.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-400">Bid Increment</p>
          <p className="font-semibold">₹ {increment.toLocaleString()}</p>
        </div>
      </div>
      <div className="bg-gray-800 p-3 rounded flex items-center gap-2 mb-4">
        <CheckCircle className="text-green-500" size={18} />
        <div>
          <p className="text-sm text-gray-300">
            You are eligible for pre-approved loan
          </p>
          <p className="text-green-400 text-lg font-semibold">₹ {eligibleLoan.toLocaleString()}</p>
        </div>
      </div>
      <p className="text-sm mb-1">Ongoing Bidding Price</p>
      <p className="text-lg font-semibold mb-3 text-green-400">
        ₹ {ongoingBid.toLocaleString()} ↑
      </p>
      <label htmlFor="bidSelect" className="text-sm">
        Choose Your Bid
      </label>
      <select
        id="bidSelect"
        value={selectedBid}
        onChange={(e) => setSelectedBid(Number(e.target.value))}
        className="w-full mt-1 mb-4 p-2 bg-gray-800 text-white rounded border border-gray-600"
      >
        {bidOptions.map((amount) => (
          <option key={amount} value={amount}>
            ₹ {amount.toLocaleString()}
          </option>
        ))}
      </select>
      <button
        onClick={handlePlaceBid}
        className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md text-white font-medium"
      >
        Place Bid (₹ {selectedBid.toLocaleString()})
      </button>
      {/* Modal Popup for PlaceMyBid */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-3xl md:max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceMyBid onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BidPanel;
