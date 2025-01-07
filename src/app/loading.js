"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="container_loader flex items-center justify-center h-screen">
      <motion.div
        className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full"
        style={{
          borderTopColor: "transparent",
          borderRightColor: "#FF5722",
          borderBottomColor: "#FF5722",
          borderLeftColor: "#FF5722",
        }}
      ></motion.div>
    </div>
  );
};

export default Loading;
