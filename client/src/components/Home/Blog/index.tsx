import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";

const HomeBlog = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col items-center justify-center sections-margin py-10">
        {/* Blog Section Header */}
        <div className="w-32 h-0.5 mb-5 bg-black"></div>
        <h1 className="text-4xl font-semibold mb-5">Latest From Blog</h1>
        {/* Blog Section Cards */}
        <div className="flex flex-wrap w-full justify-between">
          {/* Blog Section Left Card */}
          <div className="basis-1/2 not-md:basis-full flex flex-col justify-center items-center p-4">
            <div className="relative w-full h-100 mb-6">
              <Image
                src="/images/homeblog-image-1.png"
                alt="Blog"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl mb-6">Trends In Contemporary Art</h1>
            <Link
              href="/blog"
              className="border-b-2 border-b-white hover:border-b-black transition duration-500 ease-in-out"
            >
              Read More {">"}
            </Link>
          </div>
          {/* Blog Section Right Card */}
          <div className="basis-1/2 not-md:basis-full flex flex-col justify-center items-center p-4">
            <div className="relative w-full h-100 mb-6">
              <Image
                src="/images/homeblog-image-2.png"
                alt="Blog"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl mb-6">Caring For Your Oil Paintings</h1>
            <Link
              href="/blog"
              className="border-b-2 border-b-white hover:border-b-black transition duration-500 ease-in-out"
            >
              Read More {">"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
