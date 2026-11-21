"use client";
import { animateCompo } from "@/lib/dynamic";
import { AnimatePresence, motion } from "framer-motion";
// import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimateContents = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1) % animateCompo.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActivateComponent = animateCompo[active].components;
  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={animateCompo[active].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full"
        >
          <ActivateComponent />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AnimateContents;
