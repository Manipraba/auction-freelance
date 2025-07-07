"use client";

import { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { mockAuctions } from "@/app/api/mockData";

interface Auction {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  reservePrice: number;
  tag: string;
  timeLeft: string;
  kilometers: string;
  fuelType: string;
  transmission: string;
  registrationStatus: string;
}

interface AuctionListProps {
  limit?: number;
}
const AuctionList = ({ limit }: AuctionListProps) => {
  const [auctions, setAuctions] = useState<typeof mockAuctions>([]);

  useEffect(() => {
    setAuctions(limit ? mockAuctions.slice(0, limit) : mockAuctions);
  }, [limit]);
  return (
    <div className="flex flex-wrap justify-between  gap-1 px-4 py-8 ">
      {auctions.map((car) => (
        <AuctionCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default AuctionList;
