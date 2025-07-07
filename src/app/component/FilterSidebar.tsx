"use client";

import { useState } from "react";
// import { Slider } from "@/components/ui/slider"; // Optional: use shadcn slider or a range input
// import { ChevronDown } from "lucide-react";

const categories = ["All", "Bike", "Car", "Mobile"];
const fuelTypes = ["All", "Petrol", "Diesel", "Electric"];
const conditions = [
  "1st Ownership",
  "2nd Ownership",
  "3rd Ownership",
  "4th and above",
];
const brands = [
  "Suzuki",
  "TATA",
  "Maruti Suzuki",
  "Hyundai",
  "Honda",
  "Nissan",
];
const bodyTypes = [
  "SUV",
  "MPV",
  "Coupe",
  "Sedan",
  "Sport",
  "Crossover",
  "Convertible",
];
const passengers = [
  "2 Seater",
  "4 Seater",
  "5 Seater",
  "6 Seater",
  "7 Seater",
  "8 & above",
];

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Car");
  const [selectedCondition, setSelectedCondition] = useState("Used");
  const [selectedFuel, setSelectedFuel] = useState("Petrol");

  return (
    <div className="bg-[#1c1c1c] text-white w-full max-w-lg rounded-xl p-5 space-y-6 shadow-lg">
      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Category</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-3 py-1 rounded-full ${
                selectedCategory === cat ? "bg-blue-600" : "bg-gray-800"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Budget</h3>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>1,00,000</span>
          <span>8,00,000</span>
        </div>
        <input
          type="range"
          min="1"
          max="8"
          className="w-full accent-blue-600"
        />
      </div>

      {/* Condition */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Condition</h3>
        <div className="flex gap-2 flex-wrap">
          {["All", "Brand New", "Used", "Scrap"].map((type) => (
            <button
              key={type}
              className={`text-sm px-3 py-1 rounded-full ${
                selectedCondition === type ? "bg-blue-600" : "bg-gray-800"
              }`}
              onClick={() => setSelectedCondition(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="mt-3 space-y-2 text-sm text-gray-300">
          {conditions.map((cond, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              {cond} <span className="ml-auto text-gray-500 text-xs">(2)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Make & Model */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Make & Model</h3>
        <input
          type="text"
          placeholder="Search a brand or model"
          className="w-full p-2 rounded-md text-sm bg-gray-800 text-white placeholder:text-gray-400"
        />
        <div className="mt-3 space-y-2 text-sm text-gray-300 max-h-32 overflow-auto scrollbar-none">
          {brands.map((brand, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              {brand} <span className="ml-auto text-gray-500 text-xs">(2)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Make Year */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Make Year</h3>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>2012</span>
          <span>2018</span>
        </div>
        <input
          type="range"
          min="2012"
          max="2018"
          className="w-full accent-blue-600"
        />
      </div>

      {/* Body Type */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Body Type</h3>
        <div className="flex gap-2 flex-wrap">
          {bodyTypes.map((type, i) => (
            <button
              key={i}
              className="text-xs bg-gray-800 px-3 py-1 rounded-full hover:bg-blue-600"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Fuel Type</h3>
        <div className="flex gap-2 flex-wrap">
          {fuelTypes.map((type, i) => (
            <button
              key={i}
              className={`text-sm px-3 py-1 rounded-full ${
                selectedFuel === type ? "bg-blue-600" : "bg-gray-800"
              }`}
              onClick={() => setSelectedFuel(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Passenger Capacity */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Passenger Capacity</h3>
        <div className="flex gap-2 flex-wrap">
          {passengers.map((pax, i) => (
            <button
              key={i}
              className="text-xs bg-gray-800 px-3 py-1 rounded-full hover:bg-blue-600"
            >
              {pax}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4">
        <button className="bg-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-600 w-full">
          Clear Filter
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700 w-full">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
