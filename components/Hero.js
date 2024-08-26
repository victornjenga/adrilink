"use client";

import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const backgroundImageUrl = 'url("/hero10.jpeg")';
  const backgroundImageUrl2 = 'url("/hero20.jpeg")';
  return (
    <div id="about" className="w-full  flex  ">
      <div className="w-[100%] ">
        <Swiper
          // install Swiper modules
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-[400px] md:h-[420px] flex flex-col w-full items-center justify-center"
              style={{ backgroundImage: backgroundImageUrl }}
            >
              {" "}
              <div className="absolute inset-0 h-[400px] md:h-[420px]  bg-black opacity-50"></div>
              <section
                className={`${styles.paddings}   mx-auto z-10 w-[95%] items-center justify-center `}
              >
                {/* Your content goes here */}
                <h1 className="text-5xl md:text-7xl py-5 text-transparent z-10 text-center font-extrabold bg-clip-text bg-gradient-to-r from-red-400  to-red-700">
                  <span className="light:text-black text-gray-100">
                    Consumer and Retail {""}
                  </span>
                  Air Freight Solutions
                </h1>
                <p className="text-gray-100 text-2xl z-10 text-center ">
                  To suit your specific business needs.
                </p>
                <div className="text-center mt-4">
                  <button className="bg-blue-800 rounded-xl px-3 py-2 text-gray-100 text-xl  ">
                    <Link href="/contact"> Contact Us</Link>
                  </button>
                </div>
              </section>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-[400px] md:h-[420px] flex flex-col w-full items-center justify-center"
              style={{ backgroundImage: backgroundImageUrl2 }}
            >
              {" "}
              <div className="absolute inset-0 h-[400px] md:h-[420px]  bg-black opacity-50"></div>
              <section
                className={`${styles.paddings}   mx-auto z-10 w-[95%] items-center justify-center `}
              >
                {/* Your content goes here */}
                <h1 className="text-5xl md:text-7xl py-5 text-transparent z-10 text-center font-extrabold bg-clip-text bg-gradient-to-r from-red-400  to-red-700">
                  <span className="light:text-black text-gray-100">
                    MSME Global
                  </span>{" "}
                  Supply Delivery
                </h1>
                <p className="text-gray-100 text-2xl z-10 text-center ">
                  No more bureacracy - we'll do all the paper work for you
                </p>
                <div className="text-center mt-4">
                  <button className="bg-blue-800 rounded-xl px-3 py-2 text-gray-100 text-xl  ">
                    <Link href="/contact"> Contact Us</Link>
                  </button>
                </div>
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
