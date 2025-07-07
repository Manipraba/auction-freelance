"use client";

import Image from "next/image";
import { Clock, Gauge, Fuel, Settings2, Ban } from "lucide-react";
import { useRouter } from "next/navigation";

interface Car {
  tag?: string;
  timeLeft?: string;
  image: string;
  title: string;
  subtitle?: string;
  kilometers?: string | number;
  fuelType?: string;
  transmission?: string;
  registrationStatus?: string;
  reservePrice: number | string;
}

const AuctionCard = ({ car }: { car: Car }) => {
  const router = useRouter();

  const handleBidClick = () => {
    router.push("/pages/AuctionsPage/AuctionDetailsPage");
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
      {/* Top Info Row */}
      <div className="flex justify-between items-start p-4">
        <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-md">
          {car.tag || "Brand New"}
        </span>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Clock size={14} />
          <span>{car.timeLeft || "03:24 hrs"}</span>
        </div>
      </div>

      {/* Car Image */}
      <div className="px-6">
        <Image
          src={car.image}
          alt={car.title}
          width={500}
          height={200}
          className="w-full object-contain  scale-x-[-1]"
        />
      </div>

      {/* Title */}
      <div className="px-6 pt-4">
        <h3 className="text-xl font-semibold">{car.title}</h3>
        <p className="text-sm text-gray-400">{car.subtitle}</p>
      </div>

      {/* Features */}
      <div className="border-t border-gray-700 mt-4 px-6 py-4 grid grid-cols-4 gap-3 text-center text-sm">
        <div className="flex flex-col items-center">
          <Gauge size={18} />
          <span className="mt-1">{car.kilometers}</span>
        </div>
        <div className="flex flex-col items-center">
          <Fuel size={18} />
          <span className="mt-1">{car.fuelType}</span>
        </div>
        <div className="flex flex-col items-center">
          <Settings2 size={18} />
          <span className="mt-1">{car.transmission}</span>
        </div>
        <div className="flex flex-col items-center">
          <Ban size={18} />
          <span className="mt-1">{car.registrationStatus}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4 bg-black">
        <div>
          <p className="text-sm text-gray-400">Reserve Price</p>
          <p className="text-lg font-semibold">₹ {car.reservePrice}</p>
        </div>
        <button
          onClick={handleBidClick}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Start bidding
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
