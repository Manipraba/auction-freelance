// app/components/SearchBar.tsx
"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Homefilter = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="w-full bg-[#121212] text-white py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        Chase your dream, bid to win!
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 bg-[#1e1e1e] px-6 py-4 rounded-xl">
        {/* Dropdowns */}
        <select
          className="bg-transparent border-b border-gray-600 px-4 py-2 focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="cars">Cars</option>
          <option value="electronics">Electronics</option>
        </select>

        <select
          className="bg-transparent border-b border-gray-600 px-4 py-2 focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Type</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>

        <select
          className="bg-transparent border-b border-gray-600 px-4 py-2 focus:outline-none"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <select
          className="bg-transparent border-b border-gray-600 px-4 py-2 focus:outline-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        {/* Search Button */}
        <button className="bg-blue-600 p-3 rounded-md hover:bg-blue-700 transition">
          <FaSearch className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Homefilter;
