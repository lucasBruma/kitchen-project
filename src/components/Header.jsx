"use client";
import React from "react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { linksNav } from "../constants/constants";

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bg = scrollTop > 0 ? "bg-white/90" : "bg-transparent";

  return (
    <header
      className={`text-secondary flex items-center justify-center px-10 py-6 ${bg} fixed z-50 h-[100px] w-full duration-300 ease-in-out`}
    >
      <div className="absolute flex w-full items-center justify-center gap-6">
        <span className="hover:cursor-pointer">{/* Hamburger Menu */}</span>
        <ul className="list-style-none flex items-center gap-8">
          {linksNav.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer px-3 py-2 duration-300 ease-in-out hover:bg-red-500 hover:text-white"
            >
              {/* <Link href={link.route}>{link.label}</Link> */}
              <button>{link.label}</button>
            </li>
          ))}
        </ul>
      </div>
      {/* Logo */}
    </header>
  );
}
