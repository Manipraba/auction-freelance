"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationDropdown = () => {
  const [location, setLocation] = useState("Coimbatore");
  const [isOpen, setIsOpen] = useState(false);

  const locations = ["Coimbatore", "Chennai", "Bangalore", "Hyderabad"];

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 border border-blue-500 rounded-md px-4 py-1 text-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaMapMarkerAlt className="text-blue-500" />
        <span>{location}</span>
        <svg
          className="w-3 h-3 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-[#222] border border-blue-500 rounded-md text-sm z-50">
          {locations.map((loc) => (
            <li
              key={loc}
              className="px-4 py-2 hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                setLocation(loc);
                setIsOpen(false);
              }}
            >
              {loc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
