"use client"; // only if using Next.js App Router
import Footer from "../components/Footer";
import Header from "../components/Header";
import Right from "../components/Right";
import Stars from "../components/Stars";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <Stars />
      <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
        <motion.div
          className="w-full md:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Header />
        </motion.div>

        <motion.div
          className="w-full md:w-1/4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Right />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
