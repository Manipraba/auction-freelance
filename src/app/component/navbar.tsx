"use client";
import React, { useState } from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LocationDropdown from "./LocationDropdown";
import NavLinks from "./NavLinks";
import GoogleAuth from "./auth/auth";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState<{ name: string; picture: string } | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false); // NEW: menu toggle state

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#181818] rounded text-white px-6 py-3 flex items-center justify-between w-full relative z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="AuctionWow Logo"
            width={180}
            height={60}
          />
        </Link>
      </div>

      {/* Location Dropdown */}
      <div className="hidden md:block">
        <LocationDropdown />
      </div>

      {/* Nav Links */}
      <div className={`hidden md:flex`}>
        <NavLinks />
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center gap-5">
        {/* Menu Toggle Button (Mobile) */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </div>

        {/* Notification Icon (Desktop Only) */}
        <div className="hidden md:block relative">
          <FaBell className="w-7 h-7" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black" />
        </div>

        {/* User Avatar */}
        <GoogleAuth user={user} setUser={setUser} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] px-6 py-4 flex flex-col items-start gap-4 md:hidden z-40">
          <LocationDropdown />
          <NavLinks />
        </div>
      )}
    </header>
  );
};

export default Navbar;
