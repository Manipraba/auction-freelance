// components/CarHighlights.tsx
import {
  AirVent,
  ShieldHalf,
  CircleDashed,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { mockAuctions } from "@/app/api/mockData";

const CarHighlights = ({ features }: { features?: string[] }) => {
  // Use features prop if provided, otherwise use the first auction's features
  const data = features || mockAuctions[0].features;
  // Optionally, you can map icons if you want to make it more dynamic
  const icons = [<AirVent size={16} />, <ShieldHalf size={16} />, <CircleDashed size={16} />];

  return (
    <div className="mt-4">
      <p className="text-sm text-white mb-2">The best features of this car.</p>

      <div className="flex flex-wrap justify-between items-center">
        {/* Left: Features */}
        <div className="flex gap-4 flex-wrap text-xs text-white">
          {data.map((feature, idx) => (
            <div className="flex items-center gap-2" key={idx}>
              {icons[idx % icons.length]}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Right: Arrows */}
        <div className="flex gap-2">
          <button className="border border-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white transition">
            <ChevronLeft size={16} />
          </button>
          <button className="border border-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white transition">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarHighlights;
