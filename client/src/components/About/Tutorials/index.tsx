import Image from "next/image";
import React from "react";

const AboutTutorials = () => {
  return (
    <div className="page-container">
      <div className="sections-margin flex flex-wrap">
        <div className="basis-1/3 not-lg:basis-full flex flex-col justify-center items-start">
          <div className="w-32 h-0.5 bg-black mb-8"></div>
          <h2 className="font-medium text-4xl mb-8 capitalize">
            We provide step-by-step tutorials
          </h2>
          <p className=" font-light text-gray-600">
            guide you through various oil painting techniques, from basic
            brushwork to advanced layering and glazing. Our tutorials are
            designed to be accessible and easy to follow, helping you develop
            your skills at your own pace.
          </p>
        </div>
        <div className="basis-2/3 not-lg:basis-full flex justify-around items-end">
          <div className="basis-3/7 not-lg:basis-full relative h-[60vh]">
            <Image
              src="/images/tutorial-image-1.png"
              alt="Tutorial Image"
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-2/7 not-lg:basis-full h-[60vh] relative">
            <Image
              src="/images/tutorial-image-2.png"
              alt="Tutorial Image"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTutorials;
