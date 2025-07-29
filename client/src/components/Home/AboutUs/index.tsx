import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="page-container">
      <div className="my-40 not-lg:my-16 flex flex-wrap ">
        <div className="md:basis-1/2 relative h-180 ">
          <Image
            src="/images/about-us-1.png"
            alt="About Us 1"
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="md:basis-1/2"></div>
      </div>
    </div>
  );
};

export default HomeAbout;
