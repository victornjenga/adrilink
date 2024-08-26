"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} pt-8 mx-auto w-[95%]`}>
    {/* <div className="gradient-02 z-0" /> */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| WHO WE ARE" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center "
      >
        Adrilink Logistics is among the fastest growing global sourcing companies with a wide network of global partnerships that make movement of your goods fast and affordable. We offer Airfreight, Sea freight, Warehousing & Distribution, Global Shopping, Gift and Parcel delivery and Global relocation of staff & Household to our clients in the Kenya & East Africa region.
      </motion.p>
      {/* <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg" 
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
      {/* <AiOutlineArrowDown className="text-7xl"/> */}
    </motion.div>
  </section>
);

export default About;
