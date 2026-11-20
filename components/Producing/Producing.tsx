import Image from "next/image";

const Producing = () => {
  return (
    <section className="producing-section relative flex justify-between items-center gap-8 px-20 py-20">
      <div className="z-0">
        <Image
          src="/assets/HeroImage.png"
          alt="Producing Process"
          className=""
          width={884}
          height={920}
          priority
        />
      </div>
      <div className="z-10">
        <Image
          src="/assets/Can.png"
          alt="Producing Process"
          className="absolute left-40 top-3/12 z-0"
          width={1488}
          height={565}
          priority
        />
      </div>
      <div className="z-20">
        <p className=" font-sakana text-primary text-[185px] leading-none tracking-[0.03em]">
          Since <br /> 2002 <br /> prod
          <br />
          ucing
        </p>
      </div>
    </section>
  );
};

export default Producing;
