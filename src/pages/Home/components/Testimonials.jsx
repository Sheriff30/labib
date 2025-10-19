import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;
  const swiperRef = useRef(null);

  return (
    <div className="py-[32px] px-[20px]">
      <div className="max-w-[1000px] mx-auto">
        {/* Testimonials Carousel */}
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          speed={1000}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          <SwiperSlide>
            <div className="flex items-center gap-[24px] flex-col lg:flex-row">
              <img src="/testimonials.svg" alt="Testimonial" />
              <div className="flex flex-col gap-[16px] items-center lg:items-start">
                <h1 className="h3-bold text-[#F06827]">نورة الغامدي</h1>
                <p className="h3-light">
                  "تجربتنا مع لبيب كانت ملهمة جدًا! قدروا يحولوا فكرة بسيطة
                  لفعالية ثقافية أثرت في الأطفال بشكل رائع."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-[24px] flex-col lg:flex-row">
              <img src="/testimonials.svg" alt="Testimonial" />
              <div className="flex flex-col gap-[16px] items-center lg:items-start">
                <h1 className="h3-bold text-[#F06827]">نورة الغامدي</h1>
                <p className="h3-light">
                  "تجربتنا مع لبيب كانت ملهمة جدًا! قدروا يحولوا فكرة بسيطة
                  لفعالية ثقافية أثرت في الأطفال بشكل رائع."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-[24px] flex-col lg:flex-row">
              <img src="/testimonials.svg" alt="Testimonial" />
              <div className="flex flex-col gap-[16px] items-center lg:items-start">
                <h1 className="h3-bold text-[#F06827]">نورة الغامدي</h1>
                <p className="h3-light">
                  "تجربتنا مع لبيب كانت ملهمة جدًا! قدروا يحولوا فكرة بسيطة
                  لفعالية ثقافية أثرت في الأطفال بشكل رائع."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Bullets */}
        <div className="flex justify-center items-center gap-[16px] mt-[48px]">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-[#0F1113] scale-[1.25]"
                  : "border border-[#7F878F]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
