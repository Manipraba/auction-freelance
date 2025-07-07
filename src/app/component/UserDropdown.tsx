import React from "react";
import { LogOut } from "lucide-react";
import DropdownSection from "./DropdownSection";

interface Props {
  user: { name: string };
  onLogout: () => void;
}

const UserDropdown: React.FC<Props> = ({ user, onLogout }) => {
  return (
    <div className="absolute mt-3 right-0 w-72 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden text-white text-sm">
      <div className="p-4 border-b border-zinc-700">
        <p className="text-green-500 font-semibold">Welcome</p>
        <p className="truncate">{user.name}</p>
      </div>

      <ul className="px-2 py-2 space-y-1">
        <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
          My Profile
        </li>

        <DropdownSection />

        <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
          Check Vehicle Details
        </li>
        <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
          AuctionWOW newsverse
        </li>
        <li className="text-white px-3 py-2 rounded cursor-pointer">
          Contact Us
        </li>
        <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
          FAQs
        </li>

        <li
          onClick={onLogout}
          className="flex items-center gap-2 text-red-500 hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer"
        >
          <LogOut size={16} />
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
