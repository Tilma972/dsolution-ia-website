import React, { useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number; // Vertical offset for the slide-up animation
  isFirst?: boolean; // Keeping this prop to avoid breaking App.tsx
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0.3,
  duration = 1.0,
  yOffset = 70, // Increased slide-up distance for more noticeable animation
  isFirst = false, // Not used but kept for compatibility
  ...rest // Pass any other div props
}) => {
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible, run only once
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
      variants={variants}
      className={className} // Apply any custom classes
      {...rest} // Spread the rest of the props
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
