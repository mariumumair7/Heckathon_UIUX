'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Menu</h5>
            <ul className="list-none">
              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/recently-viewed"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link
                  href="/popular-this-week"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Popular this week
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Categories</h5>
            <ul className="list-none">
              <li>
                <Link
                  href="/crockery"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Crockery
                </Link>
              </li>
              <li>
                <Link
                  href="/furniture"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/homeware"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Homeware
                </Link>
              </li>
              <li>
                <Link
                  href="/plant-pots"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Plant pots
                </Link>
              </li>
              <li>
                <Link
                  href="/chairs"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Chairs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Our Company</h5>
            <ul className="list-none">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/vacancies"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Vacancies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns-policy"
                  className="hover:text-gray-200 font-[Clash Display] font-normal text-[14px] leading-[19.68px]"
                >
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-4">Join our mailing list</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const emailInput = e.target.elements.email.value;
                alert(`Email submitted: ${emailInput}`);
              }}
            >
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border text-black border-gray-700 rounded-md mr-2"
                  placeholder="your@email.com"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#2A254B] font-[Satoshi] font-small px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex justify-between items-center mt-6">
          <p className="text-left">Copyright © 2023 Avion LTD</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
