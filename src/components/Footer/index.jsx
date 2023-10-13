"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="flex h-1/2 w-full flex-col items-start justify-between gap-6 bg-gray-50 px-6 py-6 sm:py-20 md:flex-row md:px-32 xl:px-56">
        <ul>
          <p className="pb-6 text-3xl font-bold text-gray-800">
            Explore<span className="text-red-main">Kitchens</span>
          </p>
          <div className="flex gap-6 pb-5">
            <Link href="https://www.instagram.com/explorekitchens/">
              {" "}
              <FaInstagram className="cursor-pointer text-2xl text-black  hover:text-yellow-600" />
            </Link>
            <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fexplorekitchens">
              {" "}
              <FaTwitter className="cursor-pointer text-2xl text-black  hover:text-blue-600" />{" "}
            </Link>
            {/* <Link><FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"/> </Link> */}
            <Link href="https://www.youtube.com/channel/UCo69BjExN3Rbfsg7l-G9hlQ">
              {" "}
              <FaYoutube className="cursor-pointer text-2xl text-black  hover:text-red-600" />
            </Link>
          </div>
        </ul>
        <ul>
          <p className="pb-4 text-2xl font-bold text-black">Services</p>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Home Remodeling
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Futures & Options
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Home Additions</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Teardown and Rebuild
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Bathroom Remodeling
          </li>
        </ul>
        <ul>
          <p className="pb-4 text-2xl font-bold text-black">Wholesalers</p>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Lightingi</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Plumbing</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Shower Doors</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Tubs</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Vainities</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Cabinet Hardware
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Luxury Vinyl Tile
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Door Hardwware</li>
        </ul>

        <ul>
          <p className="pb-4 text-2xl font-bold text-black">Support</p>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Contact</li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Support Portals
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            List Of Charges
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">
            Downloads & Resources
          </li>
          <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Videos</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-50  p-5 text-center">
        <h1 className="font-semibold text-red-800">© 2023 All rights reserved</h1>
      </div>
    </footer>
  );
}
