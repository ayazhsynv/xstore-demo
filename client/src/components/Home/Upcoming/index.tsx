"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeUpcoming = () => {
  return (
    <div className="w-full">
      {/* Upcoming Event Section */}
      <div className="sections-margin h-124 relative">
        {/* Swiper */}
        <Swiper spaceBetween={50} slidesPerView={1} className="h-full">
          {/* Swiper Slides */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src="/images/event-image.png"
                alt="Upcoming Event"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h4 className="text-3xl not-sm:text-2xl font-extralight mb-8">
                  Upcoming Events
                </h4>
                <h2 className="text-5xl not-sm:text-3xl mb-1">
                  Summer Art Exhibition
                </h2>
                <p className="mt-2 text-sm mb-11">Date: August 24</p>
                <Link
                  href="#"
                  className="px-10 py-5 not-sm:px-6 not-sm:py-3 bg-white text-black text-md font-light uppercase"
                >
                  Know More
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src="/images/event-image.png"
                alt="Upcoming Event"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h4 className="text-3xl not-sm:text-2xl font-extralight mb-8">
                  Upcoming Events
                </h4>
                <h2 className="text-5xl not-sm:text-3xl mb-1">
                  Trends In Contemporary Art
                </h2>
                <p className="mt-2 text-sm mb-11">Date: August 26</p>
                <Link
                  href="#"
                  className="px-10 py-5 not-sm:px-6 not-sm:py-3 bg-white text-black text-md font-light uppercase"
                >
                  Know More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeUpcoming;
