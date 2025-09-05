import React, { useState } from "react";
import { Breadcrumbs } from "@/shared";

const categories = [
  {
    id: 1,
    title: "الكل",
  },
  {
    id: 2,
    title: "الرحلات المدرسية",
  },
  {
    id: 3,
    title: "المعسكرات الصيفية",
  },
];

const data = [
  {
    id: 1,
    category: "الرحلات المدرسية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/camps.png",
  },
  {
    id: 2,
    category: "الرحلات المدرسية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/camps.png",
  },
  {
    id: 3,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery2.png",
  },
  {
    id: 4,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery3.png",
  },
  {
    id: 5,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery5.png",
  },
  {
    id: 6,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery6.png",
  },
  {
    id: 7,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery7.png",
  },
  {
    id: 8,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery8.png",
  },
  {
    id: 9,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/gallery9.png",
  },
  {
    id: 10,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/library.png",
  },
  {
    id: 11,
    category: "المعسكرات الصيفية",
    title: "إقامة زيارات مدرسية توعوية تثقيفية",
    description:
      "داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم التفاعلية.",
    image: "/library.png",
  },
];

export default function Page() {
  const [selected, setSelected] = useState("الكل");

  const filteredData = data.filter(
    (item) => item.category === selected || selected === "الكل"
  );
  return (
    <div className="py-4 px-5">
      <div className="max-w-[1232px] mx-auto">
        <div className="mb-6">
          <Breadcrumbs link1="/inspiration" title1="مساحة الإلهام" />
        </div>
        <div className="flex  justify-between items-center gap-2 md:gap-6 mb-8 flex-wrap">
          <div className="h1-bold">مبادراتنا</div>

          <div className=" gap-4 h4-light items-center hidden lg:flex">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.title)}
                className={` cursor-pointer ${
                  selected === item.title
                    ? "bg-light-blue py-[8.5px] px-5 cta-large rounded-2xl  duration-300 transition-all"
                    : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="block lg:hidden">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="  py-[8.5px] px-1 cta-large   duration-300 transition-all border-b outline-none"
            >
              {categories.map((item) => (
                <option
                  value={item.title}
                  key={item.id}
                  selected={selected === item.title}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid-masonry" dir="ltr">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden w-full  relative group cursor-pointer text-center gallery${
                index + 1
              }`}
            >
              <img
                src={item.image}
                alt="articles img"
                className="h-full w-full object-cover "
              />
              <div className="absolute top-0 left-0 w-full h-full xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300  bg-gradient-navy px-8 py-15 flex flex-col gap-2 text-white justify-end items-center">
                <div className="titles-bold px-[37px] py-[1.5px] bg-white/25 w-fit rounded-lg ">
                  {item.category}
                </div>
                <p className="h4-bold">{item.title}</p>
                <p className="body-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
