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
          <h1 className="h1-bold">تتجسد في تجارب وشراكات مؤثرة</h1>
          <a href="/initiatives" className="h4-link text-[#F06827]">
            عرض كل المبادرات
          </a>
        </div>
        <div className="grid  lg:grid-cols-2 gap-[12px] h-auto lg:h-130">
          <div className="grid lg:grid-cols-2 gap-[12px]">
            <Link
              to={`/blog/${inspiration?.data?.[0]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[0]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover"
              />
              <div className="pb-2 absolute top-0 bg-black/20  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className="h4-image-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[0]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[1]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[1]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover"
              />
              <div className="pb-2 absolute top-0 bg-black/20  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className="h4-image-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[1]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[2]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[2]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover"
              />
              <div className="pb-2 absolute top-0 bg-black/20  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className="h4-image-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[2]?.title,
                  }}
                />
              </div>
            </Link>
            <Link
              to={`/blog/${inspiration?.data?.[3]?.slug}`}
              className=" relative rounded-[8px] overflow-hidden h-50 lg:h-auto"
            >
              <img
                src={`${IMAGE_BASE_URL}${inspiration?.data?.[3]?.image}`}
                alt="initiatives image"
                className="w-full h-full object-cover"
              />
              <div className="pb-2 absolute top-0 bg-black/20  h-full flex flex-col w-full justify-end items-center text-center gap-[4px] ">
                <h4
                  className="h4-image-bold text-white"
                  dangerouslySetInnerHTML={{
                    __html: inspiration?.data?.[3]?.title,
                  }}
                />
              </div>
            </Link>
          </div>
          <Link
            to={`/blog/${inspiration?.data?.[4]?.slug}`}
            className="relative rounded-[8px] overflow-hidden h-50 lg:h-auto "
          >
            <img
              src={`${IMAGE_BASE_URL}${inspiration?.data?.[4]?.image}`}
              alt="initiatives image"
              className="w-full h-full object-cover"
              object-cover
            />
            <div className="absolute pb-2 h-full top-0 bg-black/20  flex flex-col w-full justify-end items-center text-center gap-[4px] ">
              <h4
                className="h4-image-bold text-white"
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
