import { motion as Motion } from "framer-motion";

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, direction = "up" }) => {
  return (
    <Motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      custom={direction}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedSection;
