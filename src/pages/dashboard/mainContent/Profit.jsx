import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
export default function Profit() {
  return (
    <div className="bg-[#3C354A] rounded-[20px]  border-[#FFFFFF80] rounded-[20px] p-6">
      <h3 className="font-inter font-[700] text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]  mb-4">
        Profit
      </h3>

      <div className="space-y-6">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-[10px] bg-[#0A09304D] flex items-center justify-center mr-4">
            <ArrowUp size={24} className="text-green-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className=" font-inter font-[400] text-[13.75px] leading-[100%] tracking-[0%] text-[#00C287]  mr-1">
                $
              </span>
              <span className="font-inter font-[600] text-[22px] leading-[100%] tracking-[0%] text-[#fff]">
                1892.25
              </span>
            </div>
            <div className="font-inter font-[500] text-[10px] leading-[100%] tracking-[0%] text-[#9A9A9A] ">
              Income
            </div>
          </div>
        </div>
        <hr className="h-px w-full bg-gradient-to-r from-[rgba(84,84,84,0.4)] via-[#5F479B] to-[rgba(84,84,84,0.4)] border-0" />
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-[10px] bg-[#0A09304D] flex items-center justify-center mr-4">
            <ArrowDown size={24} className="text-red-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-inter font-[400] text-[13.75px] leading-[100%] tracking-[0%] text-[#E72D04] mr-1">
                $
              </span>
              <span className="font-inter font-[600] text-[22px] leading-[100%] tracking-[0%] text-[#fff]">
                387.47
              </span>
            </div>
            <div className="font-inter font-[500] text-[10px] leading-[100%] tracking-[0%] text-[#9A9A9A] ">
              Expenses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
