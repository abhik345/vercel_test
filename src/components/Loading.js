"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Loading = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    return () => animation.stop();
  }, [count]);

  return (
    <div className="container_loader">
      <motion.h1 className="font-display text-[60px]">
        {rounded}
      </motion.h1>
    </div>
  );
};

export default Loading;