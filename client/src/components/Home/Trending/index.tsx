import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeTrending = () => {
  return (
    <div className="page-container">
      {/* Trending Section Header */}
      <div className="flex justify-between items-center mt-36 not-lg:mt-20 mb-4">
        <div className="flex flex-col ">
          <div className="w-32 h-0.5 mb-5 bg-black"></div>
          <h1 className="text-4xl font-medium">Trending Product</h1>
        </div>
        <div className="text-md font-normal">
          <Link href="/shop">View All {">"}</Link>
        </div>
      </div>
      {/* Trending Products Flexbox */}
      <div className="flex flex-wrap justify-between">
        {/* Product Card */}
        <div className="flex flex-col p-4 items-start justify-center relative lg:basis-1/4 md:basis-1/2 sm:basis-full not-sm:basis-full">
          <div className="w-full h-96 relative mb-8 group overflow-hidden">
            <Image
              src="/images/trending-product-1.png"
              alt="Trending Product 1"
              fill
              className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-end p-4">
              <div className="flex flex-col items-center">
                <button className="bg-white text-black px-3 py-3 rounded-t-md border-b-0 border border-black">
                  <Image
                    src="/icons/cart.svg"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
                <button className="bg-white text-black px-3 py-3 rounded-b-md border-t-0 border border-black">
                  <Image
                    src="/icons/eye.svg"
                    alt="View Details"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
          <Link href="#">
            <h2 className="text-xl font-medium mb-2.5 px-5">
              Crimson Twilight Dreams
            </h2>
          </Link>
          <p className="text-[15px] font-light text-grey-text mb-4 px-5">
            Majestic Landscapes
          </p>
          <p className="text-2xl font-light px-5 word-spacing">
            <span className="line-through">$1,750.00 </span>
            $1,450.00
          </p>
        </div>
        {/* Product Card */}
        <div className="flex flex-col p-4 items-start justify-center relative lg:basis-1/4 md:basis-1/2 sm:basis-full not-sm:basis-full">
          <div className="w-full h-96 relative mb-8 group overflow-hidden">
            <Image
              src="/images/trending-product-1.png"
              alt="Trending Product 1"
              fill
              className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-end p-4">
              <div className="flex flex-col items-center">
                <button className="bg-white text-black px-3 py-3 rounded-t-md border-b-0 border border-black">
                  <Image
                    src="/icons/cart.svg"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
                <button className="bg-white text-black px-3 py-3 rounded-b-md border-t-0 border border-black">
                  <Image
                    src="/icons/eye.svg"
                    alt="View Details"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
          <Link href="#">
            <h2 className="text-xl font-medium mb-2.5 px-5">
              Crimson Twilight Dreams
            </h2>
          </Link>
          <p className="text-[15px] font-light text-grey-text mb-4 px-5">
            Majestic Landscapes
          </p>
          <p className="text-2xl font-light px-5 word-spacing">
            <span className="line-through">$1,750.00 </span>
            $1,450.00
          </p>
        </div>
        {/* Product Card */}
        <div className="flex flex-col p-4 items-start justify-center relative lg:basis-1/4 md:basis-1/2 sm:basis-full not-sm:basis-full">
          <div className="w-full h-96 relative mb-8 group overflow-hidden">
            <Image
              src="/images/trending-product-1.png"
              alt="Trending Product 1"
              fill
              className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-end p-4">
              <div className="flex flex-col items-center">
                <button className="bg-white text-black px-3 py-3 rounded-t-md border-b-0 border border-black">
                  <Image
                    src="/icons/cart.svg"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
                <button className="bg-white text-black px-3 py-3 rounded-b-md border-t-0 border border-black">
                  <Image
                    src="/icons/eye.svg"
                    alt="View Details"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
          <Link href="#">
            <h2 className="text-xl font-medium mb-2.5 px-5">
              Crimson Twilight Dreams
            </h2>
          </Link>
          <p className="text-[15px] font-light text-grey-text mb-4 px-5">
            Majestic Landscapes
          </p>
          <p className="text-2xl font-light px-5 word-spacing">
            <span className="line-through">$1,750.00 </span>
            $1,450.00
          </p>
        </div>
        {/* Product Card */}
        <div className="flex flex-col p-4 items-start justify-center relative lg:basis-1/4 md:basis-1/2 sm:basis-full not-sm:basis-full">
          <div className="w-full h-96 relative mb-8 group overflow-hidden">
            <Image
              src="/images/trending-product-1.png"
              alt="Trending Product 1"
              fill
              className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-end p-4">
              <div className="flex flex-col items-center">
                <button className="bg-white text-black px-3 py-3 rounded-t-md border-b-0 border border-black">
                  <Image
                    src="/icons/cart.svg"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
                <button className="bg-white text-black px-3 py-3 rounded-b-md border-t-0 border border-black">
                  <Image
                    src="/icons/eye.svg"
                    alt="View Details"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
          <Link href="#">
            <h2 className="text-xl font-medium mb-2.5 px-5">
              Crimson Twilight Dreams
            </h2>
          </Link>
          <p className="text-[15px] font-light text-grey-text mb-4 px-5">
            Majestic Landscapes
          </p>
          <p className="text-2xl font-light px-5 word-spacing">
            <span className="line-through">$1,750.00 </span>
            $1,450.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTrending;
