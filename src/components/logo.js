import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const borderVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Main Text Logo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        className="text-2xl lg:text-3xl font-bold text-white border-4 border-solid border-white px-4 py-2 relative max-w-max"
      >
        Ch Huzaifa
        {/* Bottom Border Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={borderVariants}
          className="absolute left-0 bottom-0 h-1 bg-white"
        />
    
      </motion.div>
    </div>
  );
};

export default Logo;
