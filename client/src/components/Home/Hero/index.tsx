import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="page-container">
      <div className="flex not-md:flex-col w-full mt-4 not-md:mx-4 gap-4 xl:h-168 lg:h-120 md:h-90 not-md:h-200">
        <div className="flex basis-1/3 not-md:basis-2/3 flex-col not-md:mx-4 gap-4">
          <div className="basis-1/2 h-full overflow-hidden relative">
            <Image
              src="/images/hero-image-1.png"
              alt="Description"
              fill
              className="absolute hover:scale-110 transition-transform duration-600 object-cover"
            />
            <div className="absolute lg:bottom-8 lg:left-8 not-lg:bottom-4 not-lg:left-4 text-white flex flex-col justify-center items-start max-w-80">
              <h1 className="text-3xl font-medium">Crimson Twilight Dreams</h1>
              <p className="mt-4 text-sm font-light">From $580</p>
            </div>
          </div>
          <div className="basis-1/2 h-full overflow-hidden relative">
            <Image
              src="/images/hero-image-2.png"
              alt="Description"
              fill
              className="absolute hover:scale-110 transition-transform duration-600 object-cover"
            />
            <div className="absolute lg:bottom-8 lg:left-8 not-lg:bottom-4 not-lg:left-4 text-white flex flex-col justify-center items-start max-w-80">
              <h1 className="text-3xl font-medium">
                Capturing The Beauty Of Nature
              </h1>
              <p className="mt-4 text-sm font-light">From $950</p>
            </div>
          </div>
        </div>
        <div className="flex basis-2/3 not-md:basis-1/3 not-md:mx-4 overflow-hidden relative">
          <Image
            src="/images/hero-image-3.png"
            alt="Description"
            fill
            className="absolute hover:scale-110 transition-transform duration-600 object-cover"
          />
          <div className="absolute lg:bottom-8 lg:left-8 not-lg:bottom-4 not-lg:left-4 text-white flex flex-col justify-center items-start max-w-80">
            <h1 className="text-4xl font-medium">Bringing Art To Life</h1>
            <p className="mt-4 mb-4 text-xl font-light">From $1,460</p>
            <button className="bg-white text-black px-9 py-3 text-lg font-normal hover:bg-gray-200 transition-colors duration-300">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
