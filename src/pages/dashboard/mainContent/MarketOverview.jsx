import React from "react";
import ArrowDown from "../../../../public/image/ArrowDown.png";
import MarketOverviewChart from "../MarketOverviewChart";
export default function MarketOverview({ overviewPeriod }) {
  return (
    <div className="col-span-6 bg-[#3C354A] rounded-[20px]  border border-[#FFFFFF80] px-6 pt-6 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-inter font-[700] text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF] ">
          Market Overview
        </h3>
        <div className="flex items-center space-x-2 bg-[rgba(26,17,29,0.7)] px-[13px] py-[10px] rounded-[10px] cursor-pointer">
          <span className="font-inter font-[700] text-[14px] leading-[100%] tracking-[10%] text-[#fff]">
            {overviewPeriod}
          </span>
          <img src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>

      <div className="h-48 ">
        <MarketOverviewChart />
      </div>
    </div>
  );
}
