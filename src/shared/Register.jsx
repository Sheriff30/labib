import React, { useState } from "react";
import SchoolInterestModal from "../components/SchoolInterestModal";

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" py-[38px] px-[20px] flex justify-center items-center bg-default">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="cta-large flex items-center gap-[12px] border-2 rounded-[16px] p-[10px] max-w-[456px] w-full justify-center cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-colors duration-300"
      >
        <img src="/school.svg" alt="school" className="w-[33px] h-[34px]" />
        سجّل اهتمام مدرستك الآن
      </button>

      <SchoolInterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
