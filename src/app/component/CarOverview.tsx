// components/CarOverview.tsx
import { ChevronUp } from "lucide-react";
import { mockAuctions } from "@/app/api/mockData";

const CarOverview = ({ overview }: { overview?: any }) => {
  // Use overview prop if provided, otherwise use the first auction's overview
  const data = overview || mockAuctions[0].overview;

  // Map label to display name
  const labelMap: Record<string, string> = {
    engine: "Engine",
    fuel: "Fuel",
    emission: "Emission Type",
    transmission: "Transmission",
    dimension: "Dimension (mm)",
    tyres: "Tyre",
    bootSpace: "Boot Space (L)",
    seating: "Seating Capacity",
    groundClearance: "Ground Clearance (mm)",
  };

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-2xl shadow-inner">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-600 pb-2 mb-3">
        <h3 className="text-base font-semibold text-white">Car Overview</h3>
        <ChevronUp size={18} className="text-gray-400" />
      </div>

      {/* Grid Details */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-300">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <p className="text-gray-400">{labelMap[key] || key}</p>
            <p className="font-medium text-white">{String(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;
