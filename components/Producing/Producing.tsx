import Image from "next/image";

const Producing = () => {
  return (
    <section className="w-full overflow-hidden producing-section relative flex flex-col lg:flex-row justify-between items-center gap-8 px-20 py-10">
      <div className="z-0 order-3 lg:order-1">
        <Image
          src="/assets/HeroImage.png"
          alt="Producing Process"
          className="lg:h-195 object-contain"
          width={884}
          height={920}
          priority
        />
      </div>
      <div className="z-10 order-2 lg:order-2">
        <Image
          src="/assets/second-can.png"
          alt="Producing Process"
          className="lg:absolute lg:left-54 lg:top-48 z-0 lg:w-[1600px] object-fill"
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
    text-center lg:text-left
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
