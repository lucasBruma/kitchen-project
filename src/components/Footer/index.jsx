"use client";
import Link from "next/link";
import React from "react";
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="flex h-1/2 w-full flex-col items-start justify-between gap-6 bg-gray-50 px-6 py-6 sm:py-20 md:flex-row md:px-32 xl:px-56">
        <ul>
          <p className="pb-6 text-3xl font-bold text-gray-800">
            Explore<span className="text-red-main">Kitchens</span>
          </p>
          <div className="flex gap-6 pb-5">
            <Link href="https://www.instagram.com/explorekitchens/" target="blank">
              {" "}
              <FaInstagram className="cursor-pointer text-2xl text-black  hover:text-yellow-600" />
            </Link>
            <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fexplorekitchens" target="blank">
              {" "}
              <FaTwitter className="cursor-pointer text-2xl text-black  hover:text-blue-600" />{" "}
            </Link>
            <Link href="https://www.linkedin.com/company/explore-granite-quartz-llc/" target="blank">
              <FaLinkedin className="cursor-pointer text-2xl text-black hover:text-blue-600" />{" "}
            </Link>
            <Link href="https://www.youtube.com/channel/UCo69BjExN3Rbfsg7l-G9hlQ" target="blank">
              {" "}
              <FaYoutube className="cursor-pointer text-2xl text-black  hover:text-red-600" />
            </Link>
          </div>
        </ul>
        <ul>
          <Link href="/cabinetRefacing" className="cursor-pointer">
            <p className="pb-4 text-2xl font-bold text-black">Cabinet Refacing</p>
          </Link>
        </ul>
        <ul>
          <p className="pb-4 text-2xl font-bold text-black">Gallery</p>
          <Link href="/portfolio">
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Portfolio</li>
          </Link>
        </ul>

        <ul>
          <p className="pb-4 text-2xl font-bold text-black">Support</p>
          <Link href="/contact">
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-red-600">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-50  p-5 text-center">
        <h1 className="font-semibold text-red-800">© 2023 All rights reserved</h1>
      </div>
    </footer>
  );
}
