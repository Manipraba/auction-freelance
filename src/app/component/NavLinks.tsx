"use client";
import React from "react";
import Link from "next/link";
import { mockNavLinks } from "@/app/api/mockData";

const NavLinks = () => {
  return (
    <nav className="flex gap-6 text-sm items-center">
      {mockNavLinks.map((item) => (
        <Link key={item.name} href={item.href} className="hover:text-gray-300">
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
