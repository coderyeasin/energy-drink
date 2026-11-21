import CustomButton from "@/Shared/CustomButton";
import Image from "next/image";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { motion } from "motion/react";
import {
  bottomBarVariants,
  depthTextVariants,
  heroCanVariants,
  sectionContainerVariants,
} from "@/lib/animations";

const HeroSection = () => {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-x-clip perspective-distant hero-section py-20 lg:py-26"
    >
      <motion.div variants={depthTextVariants} className="relative">
        <h1
          className="font-sakana text-center text-6xl sm:text-8xl md:text-[180px] lg:md:text-[320px] xl:text-[568.39px] 
           leading-none select-none tracking-[0.03rem] bg-radial from-accent from-40%
      to-primary to-70% bg-clip-text text-transparent "
        >
          NITRO
        </h1>
      </motion.div>
      <motion.div className="static lg:absolute lg:top-2/12 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1 w-[90%] sm:w-[80%] md:w-170 lg:w-200 xl:w-275 lg:max-w-none h-auto lg:h-auto object-fill mx-auto">
        <motion.div
          variants={heroCanVariants}
          whileHover={{ scale: 1.03, rotateZ: 2 }}
          className="pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotateZ: [0, 1.2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/first-can.png"
              alt="Producing Process"
              className="w-full h-auto object-fill"
              width={896}
              height={339}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={bottomBarVariants}
        className="hero-subtitle flex flex-col lg:flex-wrap xl:flex-row justify-between items-center gap-4 px-20 "
      >
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
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
