import React from "react";
import { Breadcrumbs } from "@/shared";
export default function Hero() {
  return (
    <div className="bg-[#F06827] pt-[90px] lg:pt-[150px] relative">
      <div className="display2-bold text-white text-center">
        نـبــــنــــــي الاحــــــــــلام <br />
        ونصنع المستقبل
      </div>
      <img src="/home-hero.jpeg" className=" h-auto w-full " alt="hero image" />
    </div>
  );
}
