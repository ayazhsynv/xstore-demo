import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="page-container">
      <div className="my-40 not-lg:my-16 flex flex-wrap">
        {/* About Image Section */}
        <div className="md:basis-1/2 not-md:basis-full p-4">
          <div className="relative xl:h-[42vw] lg:h-[50vw] md:h-[60vw] h-[100vw] ">
            <Image
              src="/images/about-us-1.png"
              alt="About Us 1"
              fill
              className="absolute object-cover overflow-hidden"
            />
          </div>
        </div>
        {/* About Text Section */}
        <div className="md:basis-1/2 not-md:basis-full flex flex-col justify-center items-end not-md:items-center p-4">
          <div className="flex flex-col max-w-132">
            <div className="w-32 h-0.5 mb-5 bg-black"></div>
            <h1 className="text-4xl font-medium">
              XStore Elementor Painting Studio Demo
            </h1>
            <p className="text-md text-grey-text mt-5">
              Our mission is to inspire creativity and foster a deep
              appreciation for the craft of oil painting. We believe that oil
              painting is more than just a technique—it's a way to express
              emotions.
            </p>
            <button className="mt-8 max-w-50 border border-black hover:text-white hover:bg-black transition duration-500 ease-in-out cursor-pointer uppercase px-11 py-4">
              <Link href="/about" className="text-md font-normal ">
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
