"use client";

import { useState, useEffect } from "react";
import { IMAGE_ORDER_ } from "@/lib/dynamic";
import { IProduct } from "@/lib/interface";
import { prodData } from "@/lib/productData";
import Image from "next/image";
import { motion } from "motion/react";
import { cardVariants, gridVariants, smoothEase } from "@/lib/animations";

const SLOT_CONFIGS = [
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

const Products = () => {
  const [shift, setShift] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = prodData.length;

  const centerTemplate = prodData.find((p) => p.id === 3) || prodData[2];

  useEffect(() => {
    if (isPaused || total === 0) return;

    const timer = setInterval(() => {
      setShift((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:flex lg:justify-evenly lg:items-end w-full overflow-hidden px-2 sm:gap-4 lg:gap-0 perspective-distant"
    >
      {prodData.map((product: IProduct, productIndex: number) => {
        const currentSlotIndex = (productIndex - shift + total) % total;
        const isCenter = currentSlotIndex === 2;

        const slotProductReference = prodData[currentSlotIndex];
        const orderClass = IMAGE_ORDER_[slotProductReference.id] ?? "order-0";
        const currentShadowClass = SLOT_CONFIGS[currentSlotIndex].shadowClass;

        const targetWidth = isCenter
          ? centerTemplate.wid
          : slotProductReference.wid;
        const targetHeight = isCenter
          ? centerTemplate.hit
          : slotProductReference.hit;

        return (
          <motion.div
            key={product.id}
            layout
            transition={{
              layout: { type: "spring", stiffness: 220, damping: 24 },
            }}
            onClick={() => {
              const stepsToCenter = (productIndex - 2 + total) % total;
              setShift(stepsToCenter);
            }}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`${orderClass} flex shrink-0 flex-col justify-center items-center cursor-pointer py-10 lg:py-0`}
          >
            <div className="relative flex justify-center items-center w-full lg:w-auto">
              <motion.div
                layout
                variants={{
                  rest: {
                    y: isCenter ? -6 : 0,
                    scale: 1,
                    rotateZ: 0,
                  },
                  hover: {
                    y: -14,
                    scale: 1.06,
                    rotateZ: isCenter ? 0 : currentSlotIndex < 2 ? -2.5 : 2.5,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  },
                }}
                className="relative z-10"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="relative z-10 object-contain h-auto transition-all duration-500 ease-out"
                  width={targetWidth}
                  height={targetHeight}
                  priority={currentSlotIndex < 3}
                />
              </motion.div>

              <motion.div
                layout
                variants={{
                  rest: { scale: 1, opacity: 1 },
                  hover: {
                    scale: 0.85,
                    opacity: 0.65,
                    transition: { duration: 0.25, ease: smoothEase },
                  },
                }}
                className={`
                  pointer-events-none absolute z-0 rounded-[100%] transition-all duration-500
                  ${currentShadowClass}
                  ${
                    isCenter
                      ? "bg-[#828282] shadow-[0_0_25px_8px_rgba(255,255,255,0.35)]"
                      : "bg-[#212121] shadow-[0_0_15px_3px_rgba(0,0,0,0.5)]"
                  }
                `}
              />
            </div>

            <motion.div
              layout="position"
              variants={{
                rest: { y: 0 },
                hover: { y: -3, transition: { duration: 0.2 } },
              }}
              className="mt-4 text-center mr-10 space-y-2"
            >
              <div>
                <h3
                  className={`font-sakana uppercase font-bold transition-colors duration-300 ${
                    isCenter ? "text-tertiary scale-105" : "text-tertiary/85"
                  }`}
                >
                  {product.title}
                </h3>
                <p className="font-outfit text-subText capitalize text-tertiary/58">
                  {product.subtitle}
                </p>
              </div>
              <p className="font-outfit text-bold font-bold text-tertiary">
                {Number(product.price ?? 0).toFixed(2)} $
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Products;
