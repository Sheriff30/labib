import React, { useState } from "react";
import { useSubscribeForm } from "../../../hooks/contact";

function EmailForm() {
  const { form, onSubmit, isSubmitting } = useSubscribeForm();
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (data) => {
    const result = await onSubmit(data);
    setSubmitMessage(result.message);

    // Clear message after 3 seconds
    setTimeout(() => setSubmitMessage(""), 3000);
  };
  return (
    <div className="px-5 py-8 bg-default">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-3">
        <p
          className="text-xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          لأنك تهتم برفاه ونمو الطفل،انضم الآن إلى نشرتنا واحصل على أحدث
          المقالات والدراسات والتجارب التي تُلهمك وتمكنك من تحقيق تأثير حقيقي
          ومستدام.
        </p>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid grid-cols-[1fr_75px] gap-1.5"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <div>
            <input
              {...form.register("email")}
              type="email"
              placeholder="ادخل بريدك الالكتروني"
              className="w-full bg-white py-[10px] px-[12.5px] rounded-md border border-offwhite focus:ring-2 focus:ring-primary-default focus:border-transparent outline-none"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1 absolute">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white font-bold rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
          >
            {isSubmitting ? "..." : "اشترك"}
          </button>
        </form>

        {/* Success/Error Message */}
        {submitMessage && (
          <div
            className={`p-3 rounded-lg text-center transition-all ${
              submitMessage.includes("بنجاح") ||
              submitMessage.includes("Successfully")
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            {submitMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailForm;
