import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import axios from "axios";
import { BASE_URL } from "../utils";
import Places from "../components/Places";
import Footer from "../components/Layout/Footer";
import Partners from "../components/Partners";
import About from "../components/About";
import Services from "../components/Services";
import styles from "../styles/style";
import { urlFor } from "../utils/client";
import Link from "next/link";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  // console.log(products);

  return (
    <div>
      <SeoHead title="Sanaa Zote TV" />

      <div id="about" className="w-full flex pt-20 md:pt-20">
        <div className="w-[100%]">
         <Hero/>
        </div>
      </div>
      <About />
      <div className="relative">
        <Services />
        <Partners />
        <Pricing />
      </div>
    </div>
  );
}


