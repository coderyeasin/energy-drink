import type { Variants } from "motion/react";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const sectionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

// export const depthTextVariants: Variants = {
//   hidden: { opacity: 0, y: 28, rotateX: 18, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     scale: 1,
//     transition: { duration: 0.75, ease: smoothEase },
//   },
// };

// export const heroCanVariants: Variants = {
//   hidden: { opacity: 0, y: 55, scale: 0.86, rotateZ: -6 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateZ: 0,
//     transition: {
//       type: "spring",
//       stiffness: 110,
//       damping: 16,
//       mass: 0.9,
//     },
//   },
// };

export const bottomBarVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: smoothEase },
  },
};

export const depthTextVariants: Variants = {
  hidden: { opacity: 0, x: -50, y: 12, rotateX: 14, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.95, ease: smoothEase },
  },
};

export const heroCanVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-110vw",
    y: 0,
    scale: 0.92,
    rotateZ: -6,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
      mass: 0.9,
      delay: 1,
    },
  },
};

export const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 45, rotateX: 14, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 125,
      damping: 16,
    },
  },
};
