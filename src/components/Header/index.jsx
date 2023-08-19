"use client";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import { linksNav } from "../../constants/constants";

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const bg = scrollTop > 0 ? "bg-white/90" : "bg-transparent";

  return (
    <header
      className={`text-secondary flex items-center justify-center px-10 py-6 ${bg} fixed z-50 h-[100px] w-full duration-300 ease-in-out`}
    >
      <div className="absolute flex w-full items-center justify-center gap-6">
        <span className="hover:cursor-pointer" onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
          {/* Hamburger Menu */}
        </span>
        <ul className="list-style-none flex items-center gap-8">
          {linksNav.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer px-3 py-2 duration-300 ease-in-out hover:bg-red-500 hover:text-white"
            >
              {/* <Link href={link.route}>{link.label}</Link> */}
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseEnter={handleOpenMenu} // Cambio aquí
              >
                {link.label}
              </button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                // onClose={handleCloseMenu}
                // elevation={1}
                // getContentAnchorEl={null}
                // anchorOrigin={{
                //   vertical: 'bottom',
                //   horizontal: 'center',
                // }}
                onMouseLeave={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                // onMouseOut={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>Inodoro</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Jabón</MenuItem>
              </Menu>
            </li>
          ))}
        </ul>
      </div>
      {/* Logo */}
    </header>
  );
}
