"use client";

import React from 'react';
import { motion } from 'framer-motion';

// const FadeInSection = ({ children }) => {
//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={variants}
//     >
//       {children}
//     </motion.div>
//   );
// };

const FadeInSection = ({ children }) => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // This is the key for sequential child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/*
        We map over the children to apply the animation variants to each one.
        This allows for a staggered animation effect.
      */}
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInSection;
