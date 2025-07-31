import Link from "next/link";
import React from "react";

const HomeFeatured = () => {
  return (
    <div className="page-container">
      {/* Featured Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col ">
          <div className="w-32 h-0.5 mb-5 bg-black"></div>
          <h1 className="text-4xl font-medium">Featured Collection</h1>
        </div>
        <div className="text-md font-normal">
          <Link href="/shop">View All {">"}</Link>
        </div>
      </div>
      {/* Featured Collection Grid*/}
      <div className="flex justify-between text-white not-md:flex-col">
        {/* Featured Grid Left */}
        <div className="basis-1/2 p-4">
          <Link href="/shop" className="cursor-pointer">
            <div className="bg-[url('/images/featured-image-1.png')] bg-cover bg-center w-full h-170 not-md:h-64 not-sm:p-4 p-16 flex flex-col justify-end">
              <div className="w-32 h-0.25 mb-5 bg-white not-sm:w-16"></div>
              <h2 className="text-3xl font-medium mb-4 not-sm:text-xl">
                World Of Abstract Art
              </h2>
              <p className="text-md font-normal not-sm:text-sm">14 Lots</p>
            </div>
          </Link>
        </div>
        {/* Featured Grid Right */}
        <div className="basis-1/2 p-4">
          <Link href="/shop" className="cursor-pointer">
            <div className="bg-[url('/images/featured-image-2.png')] bg-cover bg-center w-full h-170 not-md:h-64 not-sm:p-4 p-16 flex flex-col justify-end">
              <div className="w-32 h-0.25 mb-5 bg-white not-sm:w-16"></div>
              <h2 className="text-3xl font-medium mb-4 not-sm:text-xl">
                Still Life collection
              </h2>
              <p className="text-md font-normal not-sm:text-sm">7 Lots</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
