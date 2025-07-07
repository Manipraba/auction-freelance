// components/CarBenefits.tsx
import { ShieldCheck, ClipboardList, Truck, Coins } from "lucide-react";
import { mockAuctions } from "@/app/api/mockData";

const icons = [
  <ShieldCheck className="text-yellow-400" size={20} key="shield" />,
  <ClipboardList className="text-yellow-400" size={20} key="clipboard" />,
  <Truck className="text-yellow-400" size={20} key="truck" />,
  <Coins className="text-yellow-400" size={20} key="coins" />,
];

const CarBenefits = ({ benefits }: { benefits?: string[] }) => {
  // Use benefits prop if provided, otherwise use the first auction's benefits
  const data = benefits || mockAuctions[0].benefits;
  return (
    <div className="border border-yellow-400 rounded-lg mt-6 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-white">
      {data.map((benefit, idx) => (
        <div className="flex flex-col items-center gap-1" key={idx}>
          {icons[idx % icons.length]}
          <span className="text-white">{benefit}</span>
        </div>
      ))}
    </div>
  );
};

export default CarBenefits;
