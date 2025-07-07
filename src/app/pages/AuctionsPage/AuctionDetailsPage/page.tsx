"use client";

import Image from "next/image";
import { useState } from "react";
import CarOverview from "../../../component/CarOverview";
import CarHighlights from "../../../component/CarHighlights";
import CarBenefits from "../../../component/CarBenefits";
import BidPanel from "../../../component/BidPanel";
import FeaturesOverview from "@/app/component/FeaturesOverview";
import ViewallButton from "@/app/component/viewallButton";
import AuctionList from "@/app/component/AuctionList";

const AuctionDetailsPage = () => {
  const [view, setView] = useState<"interior" | "exterior">("exterior");

  const carImages = {
    interior: "/cars/interior.png", // update with your actual image paths
    exterior: "/cars/car.png",
  };

  return (
    <>
      <div className="bg-black text-white p-4 md:p-10 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-b from-gray-800 to-black p-4 rounded-xl shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-3">
            <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-md">
              Brand New
            </span>
            <p className="text-sm text-gray-300">
              Bidding Ends in <span className="font-semibold">20:24 hrs</span>
            </p>
          </div>

          {/* Image with Selector */}
          <div className="relative h-[300px] flex gap-4">
            <div className="relative flex-1">
              <Image
                src="/cars/car.png"
                alt="Car View"
                fill
                className="object-contain scale-x-[-1] rounded-md"
              />
            </div>

            {/* Thumbnail Selector */}
            <div className="flex flex-col justify-center gap-4">
              {(["interior", "exterior"] as const).map((type) => (
                <div
                  key={type}
                  className={`w-16 h-14 relative rounded-md cursor-pointer border-2 ${
                    view === type ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => setView(type)}
                >
                  <Image
                    src={carImages[type]}
                    alt={type}
                    fill
                    className="object-cover rounded-md"
                  />
                  <p
                    className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs ${
                      view === type ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Sections */}
          <CarHighlights />
          <CarBenefits />
          <CarOverview />
          <FeaturesOverview />
        </div>
        <BidPanel />
      </div>

      <ViewallButton title="Similar auction" />
      <AuctionList limit={3} />
    </>
  );
};

export default AuctionDetailsPage;
