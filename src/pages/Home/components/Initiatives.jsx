import React from "react";

export default function Initiatives() {
  return (
    <div className="pt-[23.5px] pb-[119.5px] px-[20px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[24px]">
          <h1 className="h1-bold">تتجسد في تجارب وشراكات مؤثرة</h1>
          <a className="h4-link text-[#F06827]">عرض كل المبادرات</a>
        </div>
        <div className="grid  lg:grid-cols-[1fr_1fr] gap-[12px]">
          <div className="grid grid-cols-2 gap-[12px]">
            <div className=" relative rounded-[8px] overflow-hidden">
              <img
                src="/initiatives.svg"
                alt="initiatives image"
                className="w-full h-full"
              />
              <div className="absolute bottom-[10px] flex flex-col w-full justify-center items-center text-center gap-[4px] ">
                <h4 className="h4-image-bold text-white">
                  برامج تفاعلية وقصص مُلهمة
                </h4>
              </div>
            </div>
            <div className="relative rounded-[8px] overflow-hidden">
              <img
                src="/initiatives.svg"
                alt="initiatives image"
                className="w-full h-full"
              />{" "}
              <div className="absolute bottom-[10px] flex flex-col w-full justify-center items-center text-center gap-[4px] ">
                <h4 className="h4-image-bold text-white">
                  برامج تفاعلية وقصص مُلهمة
                </h4>
              </div>
            </div>
            <div className="col-span-full rounded-[8px] overflow-hidden">
              <img
                src="/initiatives2.svg"
                alt="initiatives image"
                className="w-full object-cover h-full"
              />
            </div>
          </div>
          <div className="relative rounded-[8px] overflow-hidden ">
            <img
              src="/initiatives.svg"
              alt="initiatives image"
              className="w-full"
            />
            <div className="absolute bottom-[60px] flex flex-col w-full justify-center items-center text-center gap-[4px] ">
              <h4 className="h4-image-bold text-white">
                برامج تفاعلية وقصص مُلهمة
              </h4>
              <p className="max-w-[260px] h4-image text-white">
                داخل متجر نوق، أطلق الأطفال العنان لإبداعاتهم عبر فعاليات الرسم
                التفاعلية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
