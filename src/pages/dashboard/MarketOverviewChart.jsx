import React from "react";
import mGraph2 from "../../../public/image/mGraph2.png";
import mGraph from "../../../public/image/mGraph.png";
import mGraph1 from "../../../public/image/mGraph1.png";
import lineGraph from "../../../public/image/lineGraph.png";
export default function MarketOverviewChart() {
  return (
    <div className="relative">
      <div className="flex">
        <div>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[27px]">
            50k
          </p>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[27px]">
            40k
          </p>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[27px]">
            30k
          </p>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[27px]">
            20k
          </p>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[27px]">
            10k
          </p>
          <p className="text-right font-inter font-[700] text-[10px] text-[#868B93] leading-[100%] tracking-[10%] pb-[20px]">
            0k
          </p>
        </div>
      </div>

      <div>
        <div className="absolute bottom-[-3px] right-[60px] w-[88%]">
          <img src={mGraph2} alt="mGraph2" className="w-[100%]" />
        </div>
        <div className="absolute bottom-[22px] right-[60px] w-[88%]">
          <img src={mGraph} alt="mGraph" className="w-[100%]" />
        </div>
        <div className="absolute bottom-[22px] right-[60px] w-[88%]">
          <img src={mGraph1} alt="mGraph1" className="w-[100%]" />
        </div>
        <div className="absolute bottom-[35px] right-[382px] ">
          <img src={lineGraph} alt="lineGraph" className="" />
        </div>
      </div>
    </div>
  );
}
