"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kathryn Murphy",
      role: "Customer",
      image: "/images/customer-1.jpg",
      review:
        "I was blown away by the quality of the oil painting I received! The attention to detail and the vibrant colors are simply stunning. It has become the centerpiece of my living room, and I get compliments from everyone who visits. Highly recommend this artist!",
    },
    {
      id: 2,
      name: "Robert Fox",
      role: "Customer",
      image: "/images/customer-2.jpg",
      review:
        "Exceptional craftsmanship and beautiful artwork. The piece exceeded my expectations and arrived perfectly packaged. The artist's attention to detail is remarkable.",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "Customer",
      image: "/images/customer-3.jpg",
      review:
        "Amazing quality and fast delivery. The artwork perfectly complements my home decor. I've already ordered another piece for my office!",
    },
  ];

  return (
    <div className="page-container">
      <div className="flex flex-col justify-center items-center mt-50 not-lg:mt-20">
        <div className="w-32 h-0.5 bg-black mb-8"></div>
        <h2 className="text-4xl font-regular mb-4">
          What Our Collectors Are Saying
        </h2>

        <div className="w-full mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-black text-white py-16 px-8  relative">
                  {/* Customer Image */}
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for customer image */}
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="text-center max-w-3xl mx-auto">
                    <p className="text-2xl leading-8 mb-12">
                      "{testimonial.review}"
                    </p>

                    {/* Customer Info */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-4 text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white cursor-pointer hover:text-gray-300 transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white cursor-pointer hover:text-gray-300 transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
