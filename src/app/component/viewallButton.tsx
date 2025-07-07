"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
interface RecentlyAddedHeaderProps {
  title: string;
}

const ViewallButton = ({ title }: RecentlyAddedHeaderProps) => {
  const router = useRouter();

  const handleBidClick = () => {
    router.push("/pages/AuctionsPage");
  };
  return (
    <div className="bg-black text-white w-full px-4 md:px-10 py-6 flex items-center justify-between">
      {/* Left Heading */}
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        <button className="border border-blue-500 p-2 rounded-sm hover:bg-blue-500 hover:text-white transition">
          <ChevronLeft size={18} />
        </button>
        <button className="border border-blue-500 p-2 rounded-sm hover:bg-blue-500 hover:text-white transition">
          <ChevronRight size={18} />
        </button>

        <button
          onClick={handleBidClick}
          className="border border-blue-500 px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-blue-500 hover:text-white transition"
        >
          View all <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ViewallButton;
