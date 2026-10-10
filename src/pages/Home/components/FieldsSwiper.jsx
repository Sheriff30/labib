import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IMAGE_BASE_URL } from "../../../lib/constants";
import { LocalizedLink, useLocalized } from "@/lib/i18n";

export default function FieldsSwiper({ fields }) {
  const localized = useLocalized();
  return (
    <div className="block lg:hidden ">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.1}
        pagination={false}
        style={{ paddingRight: "8px" }}
        className="h-full "
      >
        {fields?.map((field, index) => {
          const { image } = field?.data || {};
          return (
            <SwiperSlide
              key={index}
              className="
            !h-auto"
            >
              <LocalizedLink
                to={"/fields"}
                className="flex flex-col flex-shrink-0 items-center bg-white px-[16px] py-[70px] h-full text-center shadow-[0px_4px_16px_0px_#24252E05] rounded-[8px] hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`${IMAGE_BASE_URL}${image}`}
                  alt={localized(field?.data, "title")}
                  className="mb-[24px] max-w-[160px] h-[100px]"
                />
                <h2 className="h3-bold mb-[13px]">{localized(field?.data, "title")}</h2>
                <p
                  className="h4-light"
                  dangerouslySetInnerHTML={{ __html: localized(field?.data, "text") }}
                />
              </LocalizedLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
