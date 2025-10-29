import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "../lib/constants";

export default function Partners({ data }) {
  const images =
    data?.content?.filter((section) => section.type === "image_gallery")?.[0]
      ?.data?.images || [];

  console.log("Partners images:", images);
  return (
    <div className="py-[56px] px-[20px]">
      <div className="max-w-[1232px] mx-auto f">
        {/* Title */}
        <h2
          className="h1-bold text-center mb-[32px]"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          شركاء لبيب
        </h2>

        {/* Swuper Slider */}
        <div
          className="flex items-center justify-between gap-0 md:gap-[134px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <div className="swiper-button-prev-custom cursor-pointer  flex items-center justify-center">
            <img
              src="/arrow-right.svg"
              alt="Previous"
              className="w-full h-full object-contain min-w-[16px] min-h-[30px]"
            />
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            spaceBetween={134}
            speed={2000}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
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
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="!flex justify-center items-center"
              >
                <img
                  src={`${IMAGE_BASE_URL}${image}`}
                  alt="Partner"
                  className="max-w-[80px] h-full w-full max-h-[80px] object-cover"
                />
              </SwiperSlide>
            ))}
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
