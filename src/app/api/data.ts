// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const mockData = {
    id: "1",
    title: "2024 Maruti Ciaz",
    subtitle: "DELTA 1.5 SHVS PETROL",
    image: "/cars/car.png",
    tag: "Brand New",
    timeLeft: "20:24 hrs",
    features: [
      "4 air bag and ABS",
      "Essential Features",
      "16-inch alloy wheels",
    ],
    benefits: [
      "Free Insurance",
      "Free Registration",
      "Home Delivery 10% Off",
      "Finance Available",
    ],
    overview: {
      engine: "1500cc",
      fuel: "Petrol",
      emission: "BS VI",
      transmission: "5MT",
      dimension: "L4490 × W1730 × H1580",
      tyres: "185/65 R15 (Alloy)",
      bootSpace: "425",
      seating: "5 Seater",
      groundClearance: "185mm",
    },
    reservePrice: 451000,
    bidIncrement: 5000,
    eligibleLoan: 700000,
    currentBid: 551000,
    bidAmount: 556000,
    kilometers: "80 KM",
    registrationStatus: "Unregistered",
    transmissionType: "Manual",
    fuelType: "Petrol",
  };

  return NextResponse.json(mockData);
}
