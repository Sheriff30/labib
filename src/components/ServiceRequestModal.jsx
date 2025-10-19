import React, { useState, useEffect } from "react";
import { useContactForm } from "../hooks/contact";

export default function ServiceRequestModal({
  isOpen,
  onClose,
  serviceName = "",
}) {
  const { form, onSubmit, isSubmitting } = useContactForm();
  const [submitMessage, setSubmitMessage] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (data) => {
    // Add service name to the message
    const serviceData = {
      ...data,
      message: serviceName
        ? `طلب خدمة: ${serviceName}\n\n${data.message || ""}`
        : data.message,
    };

    const result = await onSubmit(serviceData);
    setSubmitMessage(result.message);

    setTimeout(() => {
      setSubmitMessage("");
      if (result.message.includes("بنجاح")) {
        onClose();
        form.reset();
      }
    }, 3000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#004D1E4A] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 hover:bg-white/10 rounded-full transition-colors z-10"
          type="button"
          aria-label="إغلاق النموذج"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Form content - identical to contact form */}
        <div className="py-[40px] relative bg-[#004D1E4A] backdrop-blur-3xl">
          <img
            src="/form-shape1.svg"
            alt="form-shape1"
            className="absolute top-0 right-0 opacity-50"
          />
          <img
            src="/form-shape2.svg"
            alt="form-shape2"
            className="absolute bottom-0 left-0 opacity-50"
          />

          <div className="max-w-[600px] px-[20px] mx-auto flex flex-col gap-[40px] items-center relative z-1">
            <div className="flex gap-[12px] flex-col text-center">
              <h2 className="h1-bold border-b w-fit mx-auto text-white">
                طلب خدمة
              </h2>
              {serviceName && (
                <p className="h4-medium text-white/90">{serviceName}</p>
              )}
              <p className="h4-light text-white/80">
                كن شريكًا في ابتكار تجارب ملهمة تترك أثرًا دائمًا في حياة أجيال
                المستقبل
              </p>
            </div>

            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="grid lg:grid-cols-2 gap-x-[16px] gap-y-[32px] w-full"
            >
              <label
                htmlFor="modal-name"
                className="flex flex-col gap-[4px] body-medium text-white"
              >
                الإسم
                <input
                  {...form.register("name")}
                  type="text"
                  id="modal-name"
                  className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
                />
                {form.formState.errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </span>
                )}
              </label>

              <label
                htmlFor="modal-phone"
                className="flex flex-col gap-[4px] body-medium text-white"
              >
                رقم الجوال
                <input
                  {...form.register("phone")}
                  type="tel"
                  id="modal-phone"
                  className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
                />
                {form.formState.errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {form.formState.errors.phone.message}
                  </span>
                )}
              </label>

              <label
                htmlFor="modal-email"
                className="col-span-full flex flex-col gap-[4px] body-medium text-white"
              >
                البريد الالكتروني
                <input
                  {...form.register("email")}
                  type="email"
                  id="modal-email"
                  className="border-b border-white outline-none bg-transparent text-white placeholder-white/70"
                />
                {form.formState.errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </span>
                )}
              </label>

              <label
                htmlFor="modal-message"
                className="col-span-full flex flex-col gap-[4px] body-medium text-white"
              >
                التفاصيل
                <textarea
                  {...form.register("message")}
                  id="modal-message"
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
                className="col-span-full p-[10px] border rounded-[16px] cursor-pointer cta-large flex items-center gap-[8px] justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors text-white border-white"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                <img
                  src="/submit2.svg"
                  alt="submit"
                  className="w-[25px] h-[24px]"
                />
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
      </div>
    </div>
  );
}
