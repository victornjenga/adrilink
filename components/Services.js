import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaNetworkWired,
  FaHouseDamage,
} from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { TbDatabaseImport, TbNetwork } from "react-icons/tb";
import { SiWeblate } from "react-icons/si";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";
import { MdMilitaryTech } from "react-icons/md";
import { GrTechnology, GrShieldSecurity, GrNetwork } from "react-icons/gr";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FcFilmReel } from "react-icons/fc";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaSearchLocation } from "react-icons/fa";
import { GrDocumentSound } from "react-icons/gr";
import { BiSolidVideos } from "react-icons/bi";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSecurityScan,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { FcAudioFile } from "react-icons/fc";

import Link from "next/link";
const Services = () => {
  return (
    <div id="feature" className=" justify-center   items-center  my-4">
      <div className="gradient-02 z-0" />

      <div className="flex flex-col text-center py-5">
        <h2 className="font-bold md:text-[54px] py-4 text-[40px] ">
          What we{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600  to-purple-600">
            Offer
          </span>{" "}
        </h2>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center  items-center space-y-5 mx-4 ">
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <FcFilmReel className="text-5xl " />
            <h2 className="font-semibold text-2xl">Contract Logistics</h2>
            <p className="">
              Need custom logistic services? We got it covered. From overland,
              air, rail and sea transportation. Fast, safe and accurate shipment
              provided all over the globe.
            </p>
            {/* <Link
              href="/"
              className="text-xl text-orange-600 cursor-pointer"
            >
              <p className="text-xl text-blue-700 cursor-pointer">
                Read More
              </p>
              
            </Link> */}
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <AiOutlineSecurityScan className="text-5xl text-orange-700" />
            <h2 className="font-semibold text-2xl">Warehousing and Storage</h2>
            <p className="">
              Adrilink offers intelligent warehouse solution. Lower your storage
              and good maintenance by using our modern and intelligent
              warehouses.
            </p>
            {/* <Link
              href="/"
              className="text-xl text-orange-600 cursor-pointer"
            >
              <p className="text-xl text-blue-700 cursor-pointer">
                Read More
              </p>
              
            </Link> */}
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <FcAudioFile className="text-5xl" />
            <h2 className="font-semibold text-2xl">Consulting Services</h2>
            <p className="">
              Don't know what mean of transportation would be right for you, or
              you need someone for full supply chain management? Please contact
              us. Our team of professionals will be happy to help.
            </p>
            {/* <Link
              href="/"
              className="text-xl text-orange-600 cursor-pointer"
            >
              <p className="text-xl text-blue-700 cursor-pointer">
                Read More
              </p>
              
            </Link> */}
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <BiSolidVideos className="text-5xl text-orange-700" />
            <h2 className="font-semibold text-2xl">
              Overland, Ocean and Air Freight
            </h2>
            <p className="">
              Adrilink Offers offers the best logistics services using all means
              of supply chain. Use our overland, ocean and air freight solutions
              for shipment of your goods.
            </p>
            {/* <Link
              href="/"
              className="text-xl text-orange-600 cursor-pointer"
            >
              <p className="text-xl text-blue-700 cursor-pointer">
                Read More
              </p>
              
            </Link> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
