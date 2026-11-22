"use client";
import { animateCompo } from "@/lib/dynamic";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimateContents = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1) % animateCompo?.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const ActivateComponent = animateCompo[active]?.components;
  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={animateCompo[active].id}
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.72 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
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
