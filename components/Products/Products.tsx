import { IMAGE_ORDER_ } from "@/lib/dynamic";
import { IProduct } from "@/lib/interface";
import { prodData } from "@/lib/producData";
import Image from "next/image";

const Products = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:flex lg:justify-evenly lg:items-end w-full overflow-hidden px-2 sm:gap-4 lg:gap-0 mx-auto">
      {prodData.map((product: IProduct, i: number) => {
        const isCenter = i === 2;
        const orderClass = IMAGE_ORDER_[product.id] ?? `order-${product.id}`;

        return (
          <div
            key={product.id}
            className={`${orderClass} flex shrink-0 flex-col justify-center items-center cursor-pointer py-10 mx-auto lg:py-0 transition-transform duration-300`}
          >
            <div className="relative flex justify-center items-center w-full lg:w-auto">
              <Image
                src={product.image}
                alt={product.title}
                className={` 
                  relative z-10 object-contain 
                  `}
                width={product.wid}
                height={product.hit}
                priority={i < 3}
              />

              <div
                className={`
                  pointer-events-none absolute z-0 rounded-[100%] transition-all duration-300 
                  ${
                    product.id === 1 || product.id === 5
                      ? "w-42.25 h-[25.51px] bottom-8 left-4/12 -translate-x-1/2  -translate-y-2/12 "
                      : product.id === 2 || product.id === 4
                        ? "w-54.25 h-[32.75px] bottom-10 left-4/12 -translate-x-1/2  -translate-y-2/12 "
                        : "w-66.25 h-10 bottom-2 left-2/5 -translate-x-1/2  -translate-y-2 "
                  } 
                   ${
                     isCenter
                       ? "bg-[#828282] shadow-[0_0_25px_8px_rgba(255,255,255,0.35)]"
                       : "bg-[#212121] shadow-[0_0_15px_3px_rgba(0,0,0,0.5)]"
                   }`}
              />
            </div>

            <div className={`${orderClass} mt-4 text-center mr-10 space-y-2`}>
              <div>
                <h3 className="font-sakana uppercase text-tertiary font-bold">
                  {product.title}
                </h3>
                <p className="font-outfit text-subText capitalize text-tertiary/58">
                  {product.subtitle}
                </p>
              </div>
              <p className="font-outfit text-bold font-bold text-tertiary">
                {Number(product.price ?? 0).toFixed(2)} $
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
