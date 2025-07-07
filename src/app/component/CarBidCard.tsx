"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { mockAuctions } from "@/app/api/mockData";

const CarBidCard = () => {
  const router = useRouter();
  const car = mockAuctions[0];

  const handleBidClick = () => {
    router.push("/pages/AuctionsPage/AuctionDetailsPage");
  };

  return (
    <div className="bg-[#121212] text-white">
      {/* Car Image Inside Max-Width Container */}
      <div className="max-w-7xl mx-auto ">
        <div className="relative w-full h-[300px] md:h-[400px] z-10 ">
          <Image
            src={car.image}
            alt={car.title}
            layout="fill"
            objectFit="contain"
            className="object-center scale-x-[-1] -mt-14"
          />
        </div>
      </div>

      {/* Bottom Info Panel - Full Width */}
      <div className="relative z-0 -mt-40 w-full  mx-auto flex justify-center bg-[#6a6a6a] px-4 sm:px-6 py-10 shadow-2xl rounded-t-3xl">
        <div className="w-full max-w-[45%]  flex flex-col md:flex-row justify-between items-center gap-6 mt-5">
          {/* Left Section */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              src={"/cars/porsche.png"}
              alt={car.title}
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-wide">
                {car.title}
              </h2>
              <p className="text-sm sm:text-md font-light text-gray-300">
                {car.subtitle}{" "}
                <span className="text-xs sm:text-sm">(2025)</span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-1">
              <p className="text-xs sm:text-sm text-gray-200">Reserve Price</p>
              <span className="text-sm text-gray-200 font-medium">
                ₹{car.reservePrice.toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleBidClick}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Start bidding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBidCard;
