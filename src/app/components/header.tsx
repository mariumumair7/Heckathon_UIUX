'use client'; // Mark this as a Client Component

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use next/navigation

const Header = () => {
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    router.push('/'); // Navigate to the home page
  };

  return (
    <div>
      {/* Header Section with specific width and height */}
      <div className="relative w-full h-[120px] border-b border-white">
        <ul className="flex items-center justify-between w-full px-2 py-1">
          {/* Search Button */}
          <li className="flex items-center">
            <Link href="/search" legacyBehavior>
              <a>
                <button className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none">
                  <img src="./1.png" alt="Search" className="w-5 h-5" />
                </button>
              </a>
            </Link>
          </li>

          {/* Title (Avion as Home Button) */}
          <li className="font-clash-display text-2xl font-normal leading-[29.52px] text-DarkPrimary">
            <a
              href="/"
              onClick={handleHomeClick}
              className="hover:underline cursor-pointer"
            >
              Avion
            </a>
          </li>

          {/* Cart and User Buttons Grouped Together */}
          <li className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link href="/cart" legacyBehavior>
              <a>
                <button className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none">
                  <img src="./cart.jpeg" alt="Cart" className="w-5 h-5" />
                </button>
              </a>
            </Link>

            {/* User Button */}
            <Link href="/user-profile" legacyBehavior>
              <a>
                <button className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none">
                  <img src="./user.jpeg" alt="User Profile" className="w-5 h-5" />
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Separator Line */}
      <div className="w-full border-t border-gray-300 my-2"></div>

      {/* Navigation Links with updated size and font */}
      <div className="absolute top-[90px] left-[382px] w-[675px] h-[22px] flex gap-[44px] text-lg text-DarkPrimary">
        <Link href="/plant-pots" legacyBehavior>
          <a className="w-[90px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Plant Pots
          </a>
        </Link>
        <Link href="/ceramics" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Ceramics
          </a>
        </Link>
        <Link href="/tables" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Tables
          </a>
        </Link>
        <Link href="/chairs" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Chairs
          </a>
        </Link>
        <Link href="/crockery" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Crockery
          </a>
        </Link>
        <Link href="/tableware" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Tableware
          </a>
        </Link>
        <Link href="/cutlery" legacyBehavior>
          <a className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Cutlery
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
