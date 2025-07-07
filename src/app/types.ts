// types.ts
export interface CarDetails {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  timeLeft?: string;
  features?: string[];
  benefits?: string[];
  overview: {
    engine: string;
    fuel: string;
    emission: string;
    transmission: string;
    dimension: string;
    tyres: string;
    bootSpace: string;
    seating: string;
    groundClearance: string;
  };
  reservePrice: number;
  bidIncrement: number;
  eligibleLoan?: number;
  currentBid: number;
  bidAmount: number;
  kilometers: string;
  registrationStatus: string;
  transmissionType: string;
  fuelType: string;
}
