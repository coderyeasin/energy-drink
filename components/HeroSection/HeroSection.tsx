import CustomButton from "@/Shared/CustomButton";
import Image from "next/image";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";

const HeroSection = () => {
  return (
    <section className="hero-section py-26">
      <section className="relative">
        <h1
          className="font-sakana text-center text-[568.39px] leading-none select-none tracking-[0.03rem] bg-radial from-accent from-40%
      to-primary to-70% bg-clip-text text-transparent "
        >
          NITRO
        </h1>
        <Image
          src="/assets/first-can.png"
          alt="Producing Process"
          className="absolute top-1/12 left-1/2 -translate-x-1/2 translate-y-0.5/12 w-275 object-fill"
          width={896}
          height={339}
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
          <GrFacebookOption className="h-10.5 w-10.5 p-2 rounded-full ring-2 ring-primary text-primary hover:bg-primary hover:text-secondary cursor-pointer" />
          <FaInstagram className="h-10.5 w-10.5 p-2 rounded-full ring-2 ring-primary text-primary hover:bg-primary hover:text-secondary cursor-pointer" />
          <FaXTwitter className="h-10.5 w-10.5 p-2 rounded-full ring-2 ring-primary text-primary hover:bg-primary hover:text-secondary cursor-pointer" />
          <BiLogoLinkedin className="h-10.5 w-10.5 p-2 rounded-full ring-2 ring-primary text-primary hover:bg-primary hover:text-secondary cursor-pointer" />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
