import Image from "next/image";
import { motion } from "motion/react";
import {
  heroCanVariants,
  sectionContainerVariants,
  smoothEase,
} from "@/lib/animations";

const Producing = () => {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full producing-section relative flex flex-col lg:flex-row justify-between items-center lg:gap-8 px-10 py-10 lg:pb-10 overflow-x-clip perspective-distant"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -140,
            rotateY: 14,
            scale: 0.94,
          },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              duration: 1,
              ease: smoothEase,
            },
          },
        }}
        className="relative z-0 order-3 lg:order-1 w-full lg:w-auto flex justify-center"
      >
        <Image
          src="/assets/HeroImage.png"
          alt="Producing Process"
          className="lg:w-[700] lg:h-185 object-left"
          width={884}
          height={920}
          priority
        />
      </motion.div>

      <motion.div
        variants={heroCanVariants}
        whileHover={{ scale: 1.03, rotateZ: 2 }}
        className="relative lg:absolute z-10 order-2 lg:order-2 lg:-translate-x-4/12 xl:translate-x-1/12 lg:translate-y-2/12 lg:w-[1600px]"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotateZ: [0, 1.2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/second-can.png"
            alt="Producing Process"
            className="w-full h-auto object-fill"
            width={1488}
            height={565}
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 140, rotateY: -8 },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
              duration: 1,
              delay: 0.25,
              ease: smoothEase,
            },
          },
        }}
        className="z-20 order-1 lg:order-3 relative w-full lg:w-auto text-center lg:text-left"
      >
        <p
          className="w-full lg:w-148.5 h-auto lg:h-172 font-sakana text-primary text-[52px] sm:text-[65px] md:text-[85px] lg:text-[170px] leading-none tracking-[0.03em] lg:text-justify
        "
        >
          Since 2002 <br />
          <span className="lg:hidden">producing</span>
          <span className="hidden lg:inline">prod ucing</span>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Producing;
