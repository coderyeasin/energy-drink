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

export const SLOT_CONFIGS = [
  {
    slotId: 1,
    shadowClass:
      "w-42.25 h-[25.51px] bottom-8 left-4/12 -translate-x-1/2 -translate-y-2/12",
  },
  {
    slotId: 2,
    shadowClass:
      "w-54.25 h-[32.75px] bottom-10 left-4/12 -translate-x-1/2 -translate-y-2/12",
  },
  {
    slotId: 3,
    shadowClass:
      "w-66.25 h-10 bottom-2 left-2/5 -translate-x-1/2 -translate-y-2",
  },
  {
    slotId: 4,
    shadowClass:
      "w-54.25 h-[32.75px] bottom-10 left-4/12 -translate-x-1/2 -translate-y-2/12",
  },
  {
    slotId: 5,
    shadowClass:
      "w-42.25 h-[25.51px] bottom-8 left-4/12 -translate-x-1/2 -translate-y-2/12",
  },
];
