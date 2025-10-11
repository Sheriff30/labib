import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact, submitSubscribe } from "../api/contact";

// Zod validation schema for contact form
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون أكثر من حرفين")
    .max(100, "الاسم طويل جداً"),
  phone: z
    .string()
    .min(10, "رقم الهاتف غير صحيح")
    .max(15, "رقم الهاتف طويل جداً"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  message: z
    .string()
    .min(10, "الرسالة قصيرة جداً")
    .max(5000, "الرسالة طويلة جداً (حد أقصى 5000 حرف)"),
});

// Zod validation schema for subscribe form
export const subscribeSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صحيح"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type SubscribeFormData = z.infer<typeof subscribeSchema>;

export const useSubmitContact = () => {
  return useMutation({
    mutationFn: submitContact,
  });
};

export const useSubmitSubscribe = () => {
  return useMutation({
    mutationFn: submitSubscribe,
  });
};

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useSubmitContact();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactMutation.mutateAsync(data);
      form.reset();
      return { success: true, message: "تم إرسال الرسالة بنجاح!" };
    } catch (error) {
      return { success: false, message: "حدث خطأ في إرسال الرسالة" };
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting: contactMutation.isPending,
    isSuccess: contactMutation.isSuccess,
    isError: contactMutation.isError,
    error: contactMutation.error,
  };
};

export const useSubscribeForm = () => {
  const form = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useSubmitSubscribe();

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      const response = await subscribeMutation.mutateAsync(data);
      form.reset();
      return {
        success: true,
        message: "تم الاشتراك في النشرة البريدية بنجاح!",
      };
    } catch (error: any) {
      // Handle duplicate email error
      if (error?.response?.status === 422) {
        return {
          success: false,
          message: "هذا البريد الإلكتروني مسجل مسبقاً",
        };
      }
      return {
        success: false,
        message: "حدث خطأ في الاشتراك، يرجى المحاولة مرة أخرى",
      };
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting: subscribeMutation.isPending,
    isSuccess: subscribeMutation.isSuccess,
    isError: subscribeMutation.isError,
    error: subscribeMutation.error,
  };
};
