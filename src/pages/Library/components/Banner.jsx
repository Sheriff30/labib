import { IMAGE_BASE_URL } from "../../../lib/constants";

function Banner({ data }) {
  const image_gallery = data?.data || {};
  return (
    <div className=" h-60 flex justify-center items-center text-white  rounded-lg ">
      <img
        className="w-full h-full object-cover rounded-lg "
        src={`${IMAGE_BASE_URL}${image_gallery?.images?.[0]}`}
      />
    </div>
  );
}

export default Banner;
