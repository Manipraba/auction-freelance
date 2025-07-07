"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";

const sortOptions = [
  "Recently Added",
  "Lowest Price",
  "Highest Price",
  "Ending Soon",
];

const AuctionHeaderWithSort = () => {
  const [selectedSort, setSelectedSort] = useState("Recently Added");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full px-4 md:px-10 py-6 flex items-center justify-between relative">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold">
        Recently Added Auctions
      </h2>

      {/* Dropdown Container */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 border border-blue-500 px-4 py-2 rounded-sm hover:bg-blue-600 transition"
        >
          <ArrowUpDown size={16} />
          <span className="text-sm">{selectedSort}</span>
          <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1c1c1c] border border-gray-700 rounded-md shadow-lg z-10">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedSort(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-600 ${
                  option === selectedSort
                    ? "bg-blue-600 text-white"
                    : "text-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuctionHeaderWithSort;
