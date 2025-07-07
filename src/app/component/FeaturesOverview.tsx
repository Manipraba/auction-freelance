"use client";

import {
  Car,
  Lock,
  Baby,
  Bluetooth,
  Wind,
  KeyRound,
  Snowflake,
  ShieldCheck,
  EyeOff,
  Download,
} from "lucide-react";
import { mockFeatures } from "@/app/api/mockData";

const FeaturesOverview = ({ features }: { features?: string[] }) => {
  const data = features || mockFeatures;
  return (
    <div className="mt-6 bg-gray-800 p-5 rounded-xl text-white">
      <h3 className="text-sm font-semibold mb-3">Features Overview</h3>
      <hr className="border-gray-700 mb-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
        {data.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-300">
            <span className="text-blue-400">
              <Car size={16} />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <a
          href="/brochure.pdf"
          download
          className="flex items-center text-sm text-blue-500 hover:underline"
        >
          <Download size={16} className="mr-1" />
          Download Brochure
        </a>

        <button className="text-sm px-4 py-2 border border-blue-500 text-white rounded-md hover:bg-blue-500 hover:text-white transition">
          View All Features
        </button>
      </div>
    </div>
  );
};

export default FeaturesOverview;
