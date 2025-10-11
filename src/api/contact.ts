import axiosInstance from "./axios";

interface ContactData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface SubscribeData {
  email: string;
}

interface SubscribeResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    email: string;
    created_at: string;
  };
}

export const submitContact = async (contactData: ContactData) => {
  try {
    const res = await axiosInstance.post("/contact", contactData);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const submitSubscribe = async (
  subscribeData: SubscribeData
): Promise<SubscribeResponse> => {
  try {
    const res = await axiosInstance.post("/subscribe", subscribeData);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
