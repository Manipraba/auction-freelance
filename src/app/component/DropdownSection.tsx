import React from "react";
import { mockDropdownSection } from "@/app/api/mockData";

const DropdownSection = () => {
  return (
    <div className="bg-zinc-800 p-2 rounded">
      {mockDropdownSection.map((item, idx) => (
        <li
          key={idx}
          className={`flex justify-between items-center hover:bg-zinc-700 px-3 py-2 rounded cursor-pointer`}
        >
          {item.label}
          {item.badge && (
            <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-[2px] rounded">
              {item.badge}
            </span>
          )}
        </li>
      ))}
    </div>
  );
};

export default DropdownSection;
