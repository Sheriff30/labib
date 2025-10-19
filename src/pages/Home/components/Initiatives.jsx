import React from "react";
import { useArticles } from "../../../hooks/content";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../lib/constants";

export default function Initiatives() {
  const { data: inspiration } = useArticles("initiatives");
  return (
    <div className="pt-[23.5px] pb-[119.5px] px-[20px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[24px]">
          <h1 className="h1-bold" data-aos="fade-down" data-aos-duration="600">
            تتجسد في تجارب وشراكات مؤثرة
          </h1>
          <a
            href="/initiatives"
            className="h4-link text-[#F06827] hover:text-[#e55a1f] transition-colors duration-300"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            عرض كل المبادرات
          </a>
        </div>
        <div className="grid  lg:grid-cols-2 gap-[12px] h-auto lg:h-130">
          <div
            className="grid grid-cols-2 gap-[12px]"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <Link
              to={`/blog/${inspiration?.data?.[0]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto group"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[0]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="pb-2 absolute top-0 bg-black/20  lg:opacity-0 group-hover:opacity-100 transition-all duration-500  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className=" text-sm lg:text-xl font-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[0]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[1]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto group"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[1]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="pb-2 absolute top-0 bg-black/20  lg:opacity-0 group-hover:opacity-100 transition-all duration-500  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className=" text-sm lg:text-xl font-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[1]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[2]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto group"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[2]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="pb-2 absolute top-0 bg-black/20  lg:opacity-0 group-hover:opacity-100 transition-all duration-500  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className=" text-sm lg:text-xl font-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[2]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[3]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto group"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[3]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="pb-2 absolute top-0 bg-black/20  lg:opacity-0 group-hover:opacity-100 transition-all duration-500  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className=" text-sm lg:text-xl font-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[3]?.title,
                  }}
                />
              </div>
            </Link>
          </div>
          <Link
            to={`/blog/${inspiration?.data?.[4]?.slug}`}
            className="relative rounded-[8px] overflow-hidden h-50 lg:h-auto group "
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <img
              src={`${IMAGE_BASE_URL}${inspiration?.data?.[4]?.image}`}
              alt="initiatives image"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              object-cover
            />
            <div className="pb-2 absolute top-0 bg-black/20  lg:opacity-0 group-hover:opacity-100 transition-all duration-500  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
              <h4
                className=" text-sm lg:text-xl font-bold text-white"
                dangerouslySetInnerHTML={{
                  __html: inspiration?.data?.[4]?.title,
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
