import Image from "next/image";
import React from "react";

const AboutMeet = () => {
  return (
    <div className="page-container">
      <div className="sections-margin mb-50 not-lg:mb-20 flex flex-wrap justify-center items-center">
        <div className="lg:basis-1/4 p-4">
          <div className="flex flex-col">
            <div className="w-full h-100 overflow-hidden relative mb-4">
              <Image
                src="/images/meet-us-1.png"
                alt="Description of image"
                fill
                className="absolute scale-110 hover:scale-100 transition-transform duration-600 object-cover"
              />
            </div>
            <h6 className="text-gray-400">Abstract Innovator</h6>
            <h4 className="text-2xl">Michael Thompson</h4>
          </div>
        </div>
        <div className="lg:basis-1/4 p-4">
          <div className="flex flex-col">
            <div className="w-full h-100 overflow-hidden relative mb-4">
              <Image
                src="/images/meet-us-1.png"
                alt="Description of image"
                fill
                className="absolute scale-110 hover:scale-100 transition-transform duration-600 object-cover"
              />
            </div>
            <h6 className="text-gray-400">Abstract Innovator</h6>
            <h4 className="text-2xl">Michael Thompson</h4>
          </div>
        </div>
        <div className="lg:basis-1/4 p-4">
          <div className="flex flex-col">
            <div className="w-full h-100 overflow-hidden relative mb-4">
              <Image
                src="/images/meet-us-1.png"
                alt="Description of image"
                fill
                className="absolute scale-110 hover:scale-100 transition-transform duration-600 object-cover"
              />
            </div>
            <h6 className="text-gray-400">Abstract Innovator</h6>
            <h4 className="text-2xl">Michael Thompson</h4>
          </div>
        </div>
        <div className="lg:basis-1/4 p-4">
          <div className="flex flex-col">
            <div className="w-full h-100 overflow-hidden relative mb-4">
              <Image
                src="/images/meet-us-1.png"
                alt="Description of image"
                fill
                className="absolute scale-110 hover:scale-100 transition-transform duration-600 object-cover"
              />
            </div>
            <h6 className="text-gray-400">Abstract Innovator</h6>
            <h4 className="text-2xl">Michael Thompson</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeet;
