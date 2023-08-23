"use client";
import React from "react";
import { ClickAwayListener } from "@mui/base";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useWindowScroll } from "react-use";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { linksNav } from "../../constants/constants";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { DownMd, MdAndUp } from "../BreakpointsComponents";
import { HamburgerMenuButton } from "../HamburgerMenuButton";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef();
  const { y: scrollTop } = useWindowScroll();
  const [isBackgroundFilled, setIsBackgroundFilled] = useState(false);

  useEffect(() => {
    if (scrollTop > 0) {
      setIsBackgroundFilled(true);
    } else {
      setIsBackgroundFilled(false);
    }
  }, [scrollTop]);

  const handleToggleMenuButton = (e) => {
    e.stopPropagation();
    if (!isBackgroundFilled && !isMobileMenuOpen) setIsBackgroundFilled(true);
    toggleIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-secondary fixed z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center gap-6 bg-primary-light py-2">
        <Link href="tel:703-962-7510" className="flex items-center gap-3">
          <BsFillTelephoneInboundFill className="text-base text-white" />
          <p className="text-base">(703) 962 - 7510</p>
        </Link>
      </div>
      <div className="w-full">
        <MdAndUp>
          <div
            className={clsx(
              {
                "bg-black/90": isBackgroundFilled,
              },
              `flex w-full items-center justify-between gap-6 py-6 duration-300 ease-in-out sm:px-32 xl:px-80`,
            )}
          >
            <Link href="/">
              <Image src="/logoExploreKitchens.png" alt="logo" width={200} height={200} className="cursor-pointer" />
            </Link>
            <ul className="list-style-none flex items-center gap-8">
              {linksNav.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="ease-in-ou relative cursor-pointer px-3 py-2 duration-300 hover:text-red-main"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </MdAndUp>
        <DownMd>
          <div
            className={clsx(
              {
                "bg-black/90": isBackgroundFilled,
              },
              "flex items-center justify-between p-6 duration-300 ease-in-out",
            )}
          >
            <DownMd>
              <div className="flex items-center justify-center">
                <Link href="/">
                  <div className="text-4xl">LOGO</div>
                </Link>
              </div>
            </DownMd>
            <div className="flex items-center pt-1">
              <HamburgerMenuButton buttonRef={hamburgerRef} isOpen={isMobileMenuOpen} toggle={handleToggleMenuButton} />
            </div>
          </div>
        </DownMd>
      </div>
      <DownMd>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <ClickAwayListener
              onClickAway={(e) => {
                if (!(e.target instanceof Element)) return;
                if (hamburgerRef.current?.contains(e.target)) return;

                toggleIsMobileMenuOpen(false);
                setIsBackgroundFilled(false);
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className={clsx(
                  "left-0 top-0 z-50 flex w-full flex-col items-center gap-7 bg-black/90 px-[20px] pb-8 pt-4",
                )}
              >
                {linksNav.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <button className="text-base">{link.label}</button>
                  </Link>
                ))}
              </motion.div>
            </ClickAwayListener>
          )}
        </AnimatePresence>
      </DownMd>
    </header>
  );
}
