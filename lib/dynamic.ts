import HeroSection from "@/components/HeroSection/HeroSection";
import Producing from "@/components/Producing/Producing";
import Products from "@/components/Products/Products";

export const menuArr = ["Home", "Shop", "About", "Gallery", "Contact"];

export const IMAGE_ORDER_: Record<number, string> = {
  1: "order-2 sm:order-2 lg:order-0",
  2: "order-3 sm:order-3 lg:order-0",
  3: "order-1 sm:order-1 lg:order-0",
  4: "order-4 sm:order-4 lg:order-0",
  5: "order-5 sm:order-5 lg:order-0",
};

export const animateCompo = [
  { id: "hero", components: HeroSection },
  { id: "producing", components: Producing },
  { id: "product", components: Products },
];
