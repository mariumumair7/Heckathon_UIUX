'use client'; // Mark this as a Client Component

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div>
      {/* Header Section with specific width and height */}
      <div className="relative w-full h-[120px] border-b border-white">
        <ul className="flex items-center justify-between w-full px-2 py-1">
          {/* Search Button */}
          <li className="flex items-center">
            <Link href="/search">
              <Image
                src="/1.png"
                alt="Search"
                width={20}
                height={20}
                className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none"
              />
            </Link>
          </li>

          {/* Title (Avion as Home Button) */}
          <li className="font-clash-display text-2xl font-normal leading-[29.52px] text-DarkPrimary">
            <Link href="/">
              <span className="hover:underline cursor-pointer">Avion</span>
            </Link>
          </li>

          {/* Cart and User Buttons Grouped Together */}
          <li className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link href="/cart">
              <Image
                src="/cart.jpeg"
                alt="Cart"
                width={20}
                height={20}
                className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none"
              />
            </Link>

            {/* User Button */}
            <Link href="/user-profile">
              <Image
                src="/user.jpeg"
                alt="User Profile"
                width={20}
                height={20}
                className="bg-transparent border-0 p-2 hover:bg-gray-200 rounded-full focus:outline-none"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Separator Line */}
      <div className="w-full border-t border-gray-300 my-2"></div>

      {/* Navigation Links with updated size and font */}
      <div className="absolute top-[90px] left-[382px] w-[675px] h-[22px] flex gap-[44px] text-lg text-DarkPrimary">
        <Link href="/plant-pots">
          <span className="w-[90px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Plant Pots
          </span>
        </Link>
        <Link href="/ceramics">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Ceramics
          </span>
        </Link>
        <Link href="/tables">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Tables
          </span>
        </Link>
        <Link href="/chairs">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Chairs
          </span>
        </Link>
        <Link href="/crockery">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Crockery
          </span>
        </Link>
        <Link href="/tableware">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Tableware
          </span>
        </Link>
        <Link href="/cutlery">
          <span className="w-[70px] h-[22px] text-[16px] leading-[21.6px] font-[Satoshi] font-normal">
            Cutlery
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
