import React from "react";

export default function Form() {
  return (
    <div className="py-[69px] relative  bg-[#004D1E4A]" id="contact">
      <img
        src="/form-shape1.svg"
        alt="form-shape1"
        className="absolute top-0 right-0"
      />
      <img
        src="/form-shape2.svg"
        alt="form-shape2"
        className="absolute bottom-0 left-0 "
      />
      <div className="max-w-[1020px] px-[20px] mx-auto flex flex-col lg:flex-row gap-[60px] lg:gap-[120px] items-center relative z-1">
        <div className="flex gap-[12px] flex-col max-w-[320px]">
          <h2 className="h1-bold border-b w-fit mx-auto lg:mx-0">
            اتصل بـ لبيب
          </h2>

          <p className="h4-light text-center lg:text-start">
            كن شريكًا في ابتكار تجارب ملهمة تترك أثرًا دائمًا في حياة أجيال
            المستقبل
          </p>
        </div>
        <form
          action=""
          className="grid lg:grid-cols-2 gap-x-[16px] gap-y-[32px]  w-full"
        >
          <label
            htmlFor="name"
            className="flex flex-col gap-[4px] body-medium "
          >
            الإسم
            <input
              type="text"
              id="name"
              className="border-b border-white outline-none"
            />
          </label>
          <label
            htmlFor="phonenumber"
            className="flex flex-col gap-[4px] body-medium"
          >
            رقم الجوال
            <input
              type="text"
              id="phonenumber"
              className="border-b border-white"
            />
          </label>
          <label
            htmlFor="email"
            className="col-span-full flex flex-col gap-[4px] body-medium"
          >
            البريد الالكتروني
            <input
              type="text"
              id="email"
              className="border-b border-white outline-none"
            />
          </label>
          <label
            htmlFor="details"
            className="col-span-full flex flex-col gap-[4px] body-medium"
          >
            التفاصيل
            <textarea
              type="text"
              id="details"
              className="border-b border-white outline-none"
            />
          </label>

          <button className="col-span-full p-[10px] border rounded-[16px] cursor-pointer cta-large flex items-center gap-[8px] justify-center">
            إرسال
            <img src="/submit.svg" alt="submit" className="w-[25px] h-[24px]" />
          </button>
        </form>
      </div>
    </div>
  );
}
