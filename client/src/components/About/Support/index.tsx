import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSupport = () => {
  return (
    <div className="page-container">
      <div className="sections-margin flex flex-wrap">
        <div className="basis-1/2 not-lg:basis-full relative h-[70vh] not-lg:h-[50vh]">
          <Image
            src="/images/about-support-image.png"
            alt="Description of image"
            fill
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 not-lg:basis-full flex flex-col justify-center items-start not-lg:items-center pl-28 not-lg:pl-0">
          <div className="w-32 h-0.5 bg-black my-8"></div>
          <h3 className="text-4xl font-medium capitalize mb-8">
            We are available 24/7 for you!
          </h3>
          <p className="font-light text-gray-600 mb-16">
            We are available 24/7/365 for you! Do you want to surprise someone?
            Take advantage of our gift service. Do you need advice? One of our
            private shoppers will be happy to help you put together an ideal
            time give priority and get more packages.
          </p>
          <button className="mt-8 max-w-50 border border-black hover:text-white hover:bg-black transition duration-500 ease-in-out cursor-pointer uppercase px-11 py-4">
            <Link href="/contact" className="text-md font-normal ">
              Our Support
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSupport;
