import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../hooks/contact";

export default function SchoolInterestModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { form, onSubmit, isSubmitting } = useContactForm();
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (data) => {
    // Tag the lead as a school-interest registration (same destination as contact form)
    const payload = {
      ...data,
      message: `تسجيل اهتمام لمدرسة\n\n${data.message || ""}`,
    };

    const result = await onSubmit(payload);
    setSubmitMessage(result.message);
    setSubmitSuccess(Boolean(result.success));

    setTimeout(() => {
      setSubmitMessage("");
      if (result.success) {
        onClose();
        form.reset();
      }
    }, 3000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  const fieldClass =
    "w-full rounded-[12px] border border-grey/70 bg-default px-[16px] py-[12px] text-navy outline-none transition-all duration-200 placeholder-navy/40 focus:border-orange focus:ring-2 focus:ring-orange/20";

  return (
    <div
      className="animate-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="animate-modal-card no-scrollbar relative grid max-h-[92vh] w-full max-w-[920px] overflow-auto rounded-[24px] bg-white shadow-2xl lg:grid-cols-2">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] left-[16px] z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 lg:text-white"
          type="button"
          aria-label={t("إغلاق النموذج")}
        >
          <svg
            width="18"
            height="18"
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

        {/* Brand panel */}
        <div className="relative flex flex-col justify-center gap-[20px] overflow-hidden bg-[linear-gradient(135deg,#0f2837_0%,#16425b_100%)] p-[40px] text-white">
          <img
            src="/form-shape1.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 opacity-30"
          />
          <img
            src="/form-shape2.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 opacity-30"
          />

          <div className="relative z-10 flex flex-col gap-[20px]">
            <h2 className="h3-bold leading-tight">{t("سجّل اهتمام مدرستك الآن")}</h2>
            <p className="body-light text-white/80">
              {t(
                "كن شريكًا في ابتكار تجارب ملهمة تترك أثرًا دائمًا في حياة أجيال المستقبل. سجّل بيانات مدرستك وسيتواصل معك فريق لبيب في أقرب وقت."
              )}
            </p>
            <span className="mt-[8px] h-[4px] w-[56px] rounded-full bg-orange" />
          </div>
        </div>

        {/* Form panel */}
        <div className="p-[32px] lg:p-[40px]">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full flex-col gap-[20px]"
          >
            <label
              htmlFor="school-name"
              className="flex flex-col gap-[6px] body-medium text-navy"
            >
              {t("الإسم")}
              <input
                {...form.register("name")}
                type="text"
                id="school-name"
                className={fieldClass}
              />
              {form.formState.errors.name && (
                <span className="text-sm text-red">
                  {t(form.formState.errors.name.message)}
                </span>
              )}
            </label>

            <label
              htmlFor="school-phone"
              className="flex flex-col gap-[6px] body-medium text-navy"
            >
              {t("رقم الجوال")}
              <input
                {...form.register("phone")}
                type="tel"
                id="school-phone"
                className={fieldClass}
              />
              {form.formState.errors.phone && (
                <span className="text-sm text-red">
                  {t(form.formState.errors.phone.message)}
                </span>
              )}
            </label>

            <label
              htmlFor="school-email"
              className="flex flex-col gap-[6px] body-medium text-navy"
            >
              {t("البريد الالكتروني")}
              <input
                {...form.register("email")}
                type="email"
                id="school-email"
                className={fieldClass}
              />
              {form.formState.errors.email && (
                <span className="text-sm text-red">
                  {t(form.formState.errors.email.message)}
                </span>
              )}
            </label>

            <label
              htmlFor="school-message"
              className="flex flex-col gap-[6px] body-medium text-navy"
            >
              {t("التفاصيل")}
              <textarea
                {...form.register("message")}
                id="school-message"
                rows={3}
                className={`${fieldClass} resize-none`}
              />
              {form.formState.errors.message && (
                <span className="text-sm text-red">
                  {t(form.formState.errors.message.message)}
                </span>
              )}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex cursor-pointer items-center justify-center gap-[8px] rounded-[16px] bg-orange p-[12px] cta-large text-white transition-colors hover:bg-[#e55a1f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? t("جاري الإرسال...") : t("إرسال")}
              <img
                src="/submit.svg"
                alt="submit"
                className="h-[24px] w-[25px] brightness-0 invert"
              />
            </button>

            {submitMessage && (
              <div
                className={`rounded-[12px] p-3 text-center ${
                  submitSuccess
                    ? "border border-green-500/30 bg-green-700 text-white"
                    : "border border-red/30 bg-red/10 text-red"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
