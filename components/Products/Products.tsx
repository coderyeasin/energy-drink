import { IProduct } from "@/lib/interface";
import { prodData } from "@/lib/producData";
import Image from "next/image";
import React from "react";

const Products = () => {
  // Center item index (or pass your dynamic activeIndex state here)
  const activeIndex = 2;

  return (
    <div className="flex justify-evenly items-end">
      {prodData.map((product: IProduct, index: number) => {
        const isCenter = index === activeIndex;

        return (
          <div
            key={product.id}
            className="flex flex-col justify-end items-center cursor-pointer transition-transform duration-300"
          >
            {/* Can + Bottom Oval Pedestal Wrapper */}
            <div className="relative flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                className="relative z-10 ml-10 mx-auto object-contain drop-shadow-[12px_16px_14px_rgba(0,0,0,0.85)]"
                width={product.wid}
                height={product.hit}
                priority
              />

              {/* Bottom Oval Disc: #212121 (inactive) | #828282 + glow (active center) */}
              <div
                className={`pointer-events-none relative z-0  h-5 w-[82%] rounded-[100%] border transition-all duration-300 ${
                  isCenter
                    ? "bg-[#828282] border-white/25 shadow-[0_0_24px_5px_rgba(130,130,130,0.65)]"
                    : "bg-[#212121] border-white/5 shadow-[0_6px_14px_2px_rgba(0,0,0,0.8)]"
                }`}
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-4 text-center">
              <h3 className="font-sakana uppercase text-tertiary font-bold">
                {product.title}
              </h3>
              <p className="font-outfit text-subText text-tertiary/58">
                {product.subtitle}
              </p>
              <p className="font-outfit font-bold text-tertiary">
                {product.price} $
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
