import React from "react";

type PageHeadingProps = {
  title: string;
  description?: string;
};

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="page-container">
      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="font-semibold text-7xl mb-8">{title}</h1>
        <div className="w-0.5 h-32 bg-black mb-8"></div>
        <p className="text-gray-600 font-light text-center max-w-5xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeading;
