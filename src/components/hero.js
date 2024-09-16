import { HERO } from "../constants";
import carlImg from "../assets/HuzaifaImg.png";
import { motion } from "framer-motion";
import resume from "../assets/CV.pdf";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          {HERO.name}
        </h2>
        <p className="my-2 text-2xl md:text-3xl lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-6 text-lg md:text-xl lg:text-2xl">
          {HERO.description}
        </p>
        <a href={resume} download="Resume">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            RESUME
          </button>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          src={carlImg}
          width={550}
          height={550}
          alt="Huzaifa Img"
          className="rounded-3xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
