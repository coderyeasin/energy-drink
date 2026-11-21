"use client";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import CustomButton from "@/Shared/CustomButton";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleMenu = () => setHamburger((prev) => !prev);
  const closeMenu = () => setHamburger(false);
  return (
    <header className="relative z-40 w-full flex items-center justify-between py-4 px-4 sm:px-8 lg:py-8 lg:px-22 bg-transparent">
      <Link href="/" onClick={closeMenu}>
        <h2 className="text-primary font-sakana text-[23.25px] tracking-[3%] leading-none">
          NITRO
        </h2>
      </Link>

      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <CustomButton CustomClass="hover:text-tertiary">Buy Now</CustomButton>
      </div>

      <button
        type="button"
        onClick={toggleMenu}
        aria-label={
          hamburger ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={hamburger}
        className="lg:hidden inline-flex items-center justify-center p-2 text-primary hover:text-tertiary transition-colors cursor-pointer"
      >
        {hamburger ? (
          <BiX className="w-6 h-6" />
        ) : (
          <BiMenu className="w-6 h-6" />
        )}
      </button>

      {hamburger && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-x-0 top-16 z-50 border-t border-primary/15 bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col items-center gap-6 transition-all duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full flex flex-col items-center gap-6"
          >
            <Navbar />
            <CustomButton CustomClass="hover:text-tertiary w-full max-w-xs">
              Buy Now
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
