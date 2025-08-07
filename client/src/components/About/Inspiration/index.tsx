import Image from "next/image";
import React from "react";

const AboutInspiration = () => {
  return (
    <div className="page-container">
      <div className="flex justify-between flex-wrap">
        <div className="basis-1/2 not-lg:basis-full h-[80vh] relative">
          <Image
            src="/images/about-inspiration.png"
            alt="Inspiration"
            fill
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 not-lg:basis-full flex flex-col justify-center items-start pl-40 not-lg:pl-0 not-lg:mt-10">
          <div className="w-32 h-0.5 bg-black mb-8"></div>
          <h2 className="text-4xl font-medium capitalize mb-8">
            inspire creativity and foster a deep appreciation
          </h2>
          <p className="text-gray-600 font-light">
            our mission is to inspire creativity and foster a deep appreciation
            for the craft of oil painting. We believe that oil painting is more
            than just a technique—it's a way to express emotions, tell stories,
            and capture the beauty of the world around us. Whether you're a
            seasoned artist or just starting out, we're here to support your
            artistic journey with resources, tips, and inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInspiration;
