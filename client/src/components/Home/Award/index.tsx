import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeAward = () => {
  return (
    <div className="page-container">
      <div className="sections-margin flex flex-wrap justify-between items-center">
        <div className="basis-1/2 not-md:basis-full max-w-140 not-lg:max-w-full h-[42vw] relative">
          <Image
            src="/images/award-image.png"
            alt="Award"
            fill
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 not-md:basis-full">
          <div className="md:basis-1/2 not-md:basis-full flex flex-col p-4">
            <div className="flex flex-col max-w-132 ">
              <div className="w-32 h-0.5 mb-5 bg-black"></div>
              <h1 className="text-4xl font-medium mb-5">Award-Winning Art</h1>
              <h2 className="text-3xl font-light">Arlene McCoy</h2>
              <h3 className="text-md font-regular">Landscape City View</h3>
              <p className="text-md text-grey-text mt-5">
                Our gallery has proudly received multiple awards for outstanding
                contributions to the world of fine art. Our curated collections
                have been celebrated at prestigious art fairs and exhibitions,
                where our artists' work continues to captivate audiences
              </p>
              <button className="mt-8 max-w-50 border border-black hover:text-white hover:bg-black transition duration-500 ease-in-out cursor-pointer uppercase px-11 py-4">
                <Link href="/about" className="text-md font-normal ">
                  View Detail
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAward;
