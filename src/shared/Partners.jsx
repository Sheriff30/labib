import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Partners() {
  return (
    <div className="py-[56px] px-[20px]">
      <div className="max-w-[1440px] mx-auto f">
        {/* Title */}
        <h2 className="h1-bold text-center mb-[32px]">شركاء لبيب</h2>

        {/* Swuper Slider */}
        <div className="flex items-center justify-between gap-0 md:gap-[134px] ">
          <div className="swiper-button-prev-custom cursor-pointer  flex items-center justify-center">
            <img
              src="/arrow-right.svg"
              alt="Previous"
              className="w-full h-full object-contain min-w-[16px] min-h-[30px]"
            />
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={134}
            slidesPerView={1}
            speed={1000}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 134,
              },
            }}
          >
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center items-center">
              <img src="/partner.svg" alt="Partner" className="min-w-[65px]" />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-next-custom cursor-pointer  flex items-center justify-center">
            <img
              src="/arrow-left.svg"
              alt="Next"
              className="w-full h-full object-contain min-w-[16px] min-h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
