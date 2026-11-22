"use client";

import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "motion/react";
import Image from "next/image";

import { SLOT_CONFIGS } from "@/lib/dynamic";
import { prodData } from "@/lib/productData";
import { cardVariants, gridVariants, smoothEase } from "@/lib/animations";

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
      <LayoutGroup>
        {prodData.map((_, slotIndex) => {
          const productIndex = (slotIndex + shift) % total;
          const product = prodData[productIndex];

          const isCenter = slotIndex === 2;
          const slotTemplate = prodData[slotIndex];

          const targetWidth = isCenter ? centerTemplate.wid : slotTemplate.wid;

          const targetHeight = isCenter ? centerTemplate.hit : slotTemplate.hit;

          // const currentShadowClass = SLOT_CONFIGS[slotIndex]?.shadowClass ?? "";
          const currentShadowClass =
            SLOT_CONFIGS[productIndex]?.shadowClass ?? "";

          return (
            <div
              key={`slot-${slotIndex}`}
              className="relative flex shrink-0 flex-col justify-center items-center py-10 lg:py-0"
            >
              <motion.div
                key={product.id}
                layoutId={`product-${product.id}`}
                layout
                transition={{
                  layout: {
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                    mass: 1,
                  },
                }}
                onClick={() => {
                  const stepsToCenter = (productIndex - 2 + total) % total;

                  setShift(stepsToCenter);
                }}
                variants={cardVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative z-10 flex flex-col justify-center items-center cursor-pointer"
              >
                <div className="relative inline-flex justify-center items-end overflow-visible">
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
                        rotateZ: isCenter ? 0 : slotIndex < 2 ? -2.5 : 2.5,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        },
                      },
                    }}
                    className="relative z-10"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="relative z-10 object-contain h-auto"
                      width={targetWidth}
                      height={targetHeight}
                      priority={slotIndex < 3}
                    />
                  </motion.div>

                  <motion.div
                    variants={{
                      rest: { opacity: 1 },
                      hover: {
                        opacity: 0.65,
                        transition: {
                          duration: 0.25,
                          ease: smoothEase,
                        },
                      },
                    }}
                    className={`
                      pointer-events-none absolute z-0 rounded-[100%] border-0 outline-none ring-0 transition-colors duration-500
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
                    hover: {
                      y: -3,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="mt-4 text-center mr-10 space-y-2"
                >
                  <div>
                    <h3
                      className={`font-sakana uppercase font-bold transition-colors duration-300 ${
                        isCenter
                          ? "text-tertiary scale-105"
                          : "text-tertiary/85"
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
            </div>
          );
        })}
      </LayoutGroup>
    </motion.div>
  );
};

export default Products;
