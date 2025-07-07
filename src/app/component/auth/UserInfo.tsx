import React from "react";
import Image from "next/image";
import UserDropdown from "../UserDropdown";

interface Props {
  user: { name: string; picture: string };
  dropdownOpen: boolean;
  setDropdownOpen: (val: boolean) => void;
  onLogout: () => void;
}

const UserInfo: React.FC<Props> = ({
  user,
  dropdownOpen,
  setDropdownOpen,
  onLogout,
}) => {
  return (
    <div className="relative inline-block text-left z-50">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image
          src={user.picture}
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <div className="text-sm leading-tight">
          <p className="text-green-500 font-semibold">Welcome</p>
          <p className="text-white">{user.name}</p>
        </div>
        {dropdownOpen ? (
          // Close icon (chevron up)
          <svg
            className="w-3 h-3 ml-1 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          // Open icon (chevron down)
          <svg
            className="w-3 h-3 ml-1 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {dropdownOpen && <UserDropdown user={user} onLogout={onLogout} />}
    </div>
  );
};

export default UserInfo;
