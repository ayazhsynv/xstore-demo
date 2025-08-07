import Image from "next/image";
import React from "react";

const HomeInstagram = () => {
  return (
    <div className="xl:px-6">
      <div className="sections-margin flex flex-col">
        <div className="w-32 h-0.5 bg-black mb-6"></div>
        <h2 className="text-4xl font-regular mb-4">Our Instagram</h2>
        <div className="w-full flex flex-wrap justify-center h-100">
          <div className="basis-1/6 h-100 p-2 relative">
            <Image
              src="/images/instagram-image-1.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/6 p-2 relative">
            <Image
              src="/images/instagram-image-2.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/6 p-2 relative">
            <Image
              src="/images/instagram-image-3.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/6 p-2 relative">
            <Image
              src="/images/instagram-image-4.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/6 p-2 relative">
            <Image
              src="/images/instagram-image-5.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/6 p-2 relative">
            <Image
              src="/images/instagram-image-6.png"
              alt="Instagram Post"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInstagram;
