import CustomButton from "@/Shared/CustomButton";
import Image from "next/image";
import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
  GrX,
} from "react-icons/gr";

const HeroSection = () => {
  return (
    <section className="hero-section py-26">
      <section className="relative">
        {/* text-[568.39px] */}
        <h1
          className="font-sakana w-fit text-[500px] leading-none tracking-[0.03em] 
      bg-radial from-accent 
      to-primary bg-clip-text text-transparent select-none text-center"
        >
          NITRO
        </h1>
        <Image
          src="/assets/Can (1).png"
          alt="Producing Process"
          className="absolute top-1/12 left-2/12 border-2 border-red-700"
          width={900}
          height={340}
          priority
        />
      </section>
      <section className="hero-subtitle flex justify-between items-center gap-4 px-20">
        <div>
          <p className="font-outfit text-base text-tertiary">
            Worem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nunc
            vulputate libero et velit interdum, ac.
          </p>
        </div>
        <div className="flex gap-8">
          <CustomButton CustomClass="bg-tertiary hover:text-white hover:bg-transparent border-2 border-tertiary text-secondary">
            Buy Now
          </CustomButton>
          <CustomButton CustomClass="bg-transparent border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-secondary">
            More info
          </CustomButton>
        </div>
        <div className="flex gap-8">
          <GrFacebookOption className="h-10.5 w-10.5 rounded-full ring-2 ring-primary text-primary" />
          <GrInstagram className="h-10.5 w-10.5 rounded-full ring-2 ring-primary text-primary" />
          <GrTwitter className="h-10.5 w-10.5 rounded-full ring-2 ring-primary text-primary" />
          <GrLinkedin className="h-10.5 w-10.5 rounded-full ring-2 ring-primary text-primary" />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
