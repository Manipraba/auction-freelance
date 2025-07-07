// Centralized mock data for the auction platform

export const mockAuctions = [
  {
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
    transmission: "Manual",
    fuelType: "Petrol",
  },
  {
    id: "2",
    title: "2019 Honda City",
    subtitle: "VX CVT i-VTEC",
    image: "/cars/car.png",
    tag: "Certified",
    timeLeft: "01:15 hrs",
    kilometers: "22,000 KM",
    fuelType: "Petrol",
    transmission: "Automatic",
    registrationStatus: "Registered",
    reservePrice: 595000,
    features: ["Sunroof", "Touchscreen Display"],
    benefits: ["Free Insurance", "Finance Available"],
    overview: {},
    bidIncrement: 5000,
    eligibleLoan: 600000,
    currentBid: 600000,
    bidAmount: 605000,
  },
  {
    id: "3",
    title: "2021 Hyundai Creta",
    subtitle: "SX Turbo Petrol",
    image: "/cars/car.png",
    tag: "Hot Deal",
    timeLeft: "04:50 hrs",
    kilometers: "14,500 KM",
    fuelType: "Petrol",
    transmission: "Manual",
    registrationStatus: "Unregistered",
    reservePrice: 899000,
    features: ["Turbo Engine", "Wireless Charging"],
    benefits: ["Home Delivery 10% Off"],
    overview: {},
    bidIncrement: 5000,
    eligibleLoan: 900000,
    currentBid: 900000,
    bidAmount: 905000,
  },
  {
    id: "4",
    title: "2018 Ford EcoSport",
    subtitle: "Titanium 1.5 Diesel",
    image: "/cars/ecosport.png",
    tag: "Diesel Power",
    timeLeft: "02:33 hrs",
    kilometers: "60,000 KM",
    fuelType: "Diesel",
    transmission: "Manual",
    registrationStatus: "Registered",
    reservePrice: 535000,
    features: ["Diesel Engine", "ABS"],
    benefits: ["Finance Available"],
    overview: {},
    bidIncrement: 5000,
    eligibleLoan: 550000,
    currentBid: 540000,
    bidAmount: 545000,
  },
];

export const mockBrands = [
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
  "/cars/porsche.png",
];

export const mockFeatures = [
  "Steering Mounted Controls",
  "Central Locking",
  "ISOFIX - Child Seat",
  "Bluetooth Compatibility",
  "Airbags",
  "Auto Air Conditioner",
  "Rear AC",
  "Anti-lock Braking System",
  "Rear Defogger",
];

export const mockBenefits = [
  "Free Insurance",
  "Free Registration",
  "Home Delivery 10% Off",
  "Finance Available",
];

export const mockBidPanel = {
  initialPrice: 550000,
  increment: 5000,
  visibleOptions: 10,
  eligibleLoan: 700000,
  biddingAmount: 556000,
  walletBalance: 30000,
};

export const mockWhyUs = [
  {
    title: "Free EMD",
    description: "No upfront deposit required",
  },
  {
    title: "No Hidden Charges",
    description: "Transparent pricing with no surprises",
  },
  {
    title: "Hassle-Free Process",
    description: "Smooth and efficient auction process",
  },
  {
    title: "100% Transparency",
    description: "Complete visibility of auction details",
  },
];

export const mockNavLinks = [
  { name: "How Auction Works", href: "#" },
  { name: "Sell in Auction", href: "#" },
  { name: "Auction Finance", href: "#" },
];

export const mockDropdownSection = [
  { label: "My Wallet" },
  { label: "My Auction", badge: "SELL" },
  { label: "My Bidding", badge: "BUY" },
  { label: "My Finance" },
]; 