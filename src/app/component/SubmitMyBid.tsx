import React from "react";
import { CheckCircle, X } from "lucide-react";
import Image from "next/image";

export default function SubmitMyBid({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative bg-zinc-900 text-white rounded-lg max-w-[90vw] max-h-[85vh] overflow-y-auto p-6 md:p-8 w-full flex flex-col items-center text-center">
      <X
        className="absolute top-4 right-4 h-5 w-5 text-white cursor-pointer z-50"
        onClick={onClose}
      />

      <CheckCircle className="text-green-500 w-12 h-12 mb-4" />
      <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-3">
        Your Bid Successfully Submitted
      </h2>

      <p className="text-sm md:text-base text-zinc-300 max-w-lg mb-2">
        Your bid of Rupees{" "}
        <span className="text-white font-semibold">5,56,000 INR</span> for the
        <br />
        <span className="text-white font-semibold">
          2024 Maruti Ciaz Delta 1.5 SHVS Petrol
        </span>{" "}
        has been submitted.
      </p>

      <div className="my-6">
        <Image
          src="/cars/car.png"
          alt="Submitted Car"
          width={400}
          height={200}
          className="rounded-lg object-contain"
        />
      </div>

      <p className="text-xs md:text-sm text-gray-400">
        <span className="text-yellow-400 font-medium">Next Step:</span> You will
        be notified if you win—stay tuned for updates!
      </p>

      <button
        onClick={onClose}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium text-sm"
      >
        Go Back to Auction
      </button>
    </div>
  );
}
