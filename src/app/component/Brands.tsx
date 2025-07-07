"use client";

import Image from "next/image";
import { mockBrands } from "@/app/api/mockData";

const BrandPartners = () => {
  return (
    <div className="bg-black py-12">
      <h2 className="text-center text-white text-xl md:text-2xl font-semibold mb-10">
        Our Associated Partner
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {mockBrands.map((logo, index) => (
          <div
            key={index}
            className="w-16 h-16 md:w-20 md:h-20 relative grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={logo}
              alt={`Brand logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPartners;
