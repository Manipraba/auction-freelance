"use client";

import {
  BadgeDollarSign,
  ReceiptText,
  Shuffle,
  ShieldCheck,
} from "lucide-react";
import { mockWhyUs } from "@/app/api/mockData";

const iconMap = [
  <BadgeDollarSign size={28} key="dollar" />, 
  <ReceiptText size={28} key="receipt" />, 
  <Shuffle size={28} key="shuffle" />, 
  <ShieldCheck size={28} key="shield" />
];

const WhyUsSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-10">
      <h2 className="text-2xl font-semibold mb-8">Why Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mockWhyUs.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition"
          >
            <div className="text-white mb-4">{iconMap[index]}</div>
            <h3 className="text-md font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
