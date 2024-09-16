import { BIO } from "../constants";
import { motion } from "framer-motion";

const bioVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Bio = () => {
  return (
    <section
      className="flex max-w-4xl flex-col gap-12 pt-20 mx-auto px-4"
      id="bio"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl lg:text-4xl font-semibold mb-8 text-white"
      >
        BIO
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={bioVariants}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        {BIO.map((bio, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
          >
            <p className="text-lg lg:text-xl text-white">{bio}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
