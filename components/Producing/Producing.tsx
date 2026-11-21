import Image from "next/image";

const Producing = () => {
  return (
    <section className="w-full producing-section relative flex flex-col lg:flex-row justify-between items-center lg:gap-8 px-10 py-10 lg:pb-10 overflow-hidden ">
      <div className="z-0 order-3 lg:order-1">
        <Image
          src="/assets/HeroImage.png"
          alt="Producing Process"
          className="lg:w-[700] lg:h-185 object-left"
          width={884}
          height={920}
          priority
        />
      </div>
      <div className="z-10 order-2 lg:order-2">
        <Image
          src="/assets/second-can.png"
          alt="Producing Process"
          className="lg:absolute lg:-translate-x-4/12 xl:-translate-x-7/12 lg:-translate-y-5/12 lg:w-[1600px] object-fill"
          width={1488}
          height={565}
          priority
        />
      </div>
      <div className="z-20 order-1 lg:order-3">
        <p
          className="
         w-full lg:w-[594px]
    h-auto lg:h-[688px]
    font-sakana text-primary
    text-[52px]
    sm:text-[65px]
    md:text-[85px]
    lg:text-[170px]
    leading-none
    tracking-[0.03em]
     lg:text-justify
        "
        >
          Since 2002 <br />
          <span className="lg:hidden">producing</span>
          <span className="hidden lg:inline">prod ucing</span>
        </p>
      </div>
    </section>
  );
};

export default Producing;
