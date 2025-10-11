import React, { useState } from "react";
import { useContactForm } from "../../../hooks/contact";

export default function Form() {
  const { form, onSubmit, isSubmitting } = useContactForm();
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (data) => {
    const result = await onSubmit(data);
    setSubmitMessage(result.message);

    setTimeout(() => setSubmitMessage(""), 3000);
  };
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
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid lg:grid-cols-2 gap-x-[16px] gap-y-[32px]  w-full"
        >
          <label
            htmlFor="name"
            className="flex flex-col gap-[4px] body-medium "
          >
            الإسم
            <input
              {...form.register("name")}
              type="text"
              id="name"
              className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
            />
            {form.formState.errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {form.formState.errors.name.message}
              </span>
            )}
          </label>
          <label
            htmlFor="phone"
            className="flex flex-col gap-[4px] body-medium"
          >
            رقم الجوال
            <input
              {...form.register("phone")}
              type="tel"
              id="phone"
              className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
            />
            {form.formState.errors.phone && (
              <span className="text-red-500 text-sm mt-1">
                {form.formState.errors.phone.message}
              </span>
            )}
          </label>
          <label
            htmlFor="email"
            className="col-span-full flex flex-col gap-[4px] body-medium"
          >
            البريد الالكتروني
            <input
              {...form.register("email")}
              type="email"
              id="email"
              className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
            />
            {form.formState.errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </span>
            )}
          </label>
          <label
            htmlFor="message"
            className="col-span-full flex flex-col gap-[4px] body-medium"
          >
            التفاصيل
            <textarea
              {...form.register("message")}
              id="message"
              className="border-b border-white outline-none bg-transparent text-white placeholder-white/70 resize-none"
              rows={3}
            />
            {form.formState.errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {form.formState.errors.message.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="col-span-full p-[10px] border rounded-[16px] cursor-pointer cta-large flex items-center gap-[8px] justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال"}
            <img src="/submit.svg" alt="submit" className="w-[25px] h-[24px]" />
          </button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div
              className={`col-span-full p-3 rounded-lg text-center ${
                submitMessage.includes("بنجاح")
                  ? "bg-green-500/20 text-green-200 border border-green-500/30"
                  : "bg-red-500/20 text-red-200 border border-red-500/30"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
