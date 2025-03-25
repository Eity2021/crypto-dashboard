import React from "react";
import vector1 from "../../../public/image/Vector1.png";
import vector2 from "../../../public/image/Vector2.png";

export default function PriceChart() {
  return (
    <div className="flex relative">
      <div className="">
        <div className="flex">
          <div>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[25px]">
              50k
            </p>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[25px]">
              40k
            </p>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[25px]">
              30k
            </p>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[25px]">
              20k
            </p>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[25px]">
              10k
            </p>
            <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[20px]">
              0k
            </p>
          </div>
        </div>

        <div>
          <div className="absolute bottom-[20px] right-[50px] w-[88%]">
            <img src={vector1} alt="vector1" className="w-[100%]" />
          </div>
          <div className="absolute top-[3px] right-[50px] w-[88%]">
            <img src={vector2} alt="vector2" className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
