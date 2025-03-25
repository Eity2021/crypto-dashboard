import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import PriceChart from "../PriceChart";
import Frame from "../../../../public/image/Frame.png";
import ArrowDown from "../../../../public/image/ArrowDown.png";
export default function Chart({ timeframe, setTimeframe }) {
  return (
    <div className="col-span-6   p-6 rounded-[25px] bg-[linear-gradient(126.6deg,_rgba(255,255,255,0.12)_28.69%,_rgba(255,255,255,0)_100%)] border-2 border-[#FFFFFF80]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 bg-[rgba(26,17,29,0.7)] px-[13px] py-[10px] rounded-[10px]">
          <div>
            <img src={Frame} alt="Frame" />
          </div>
          <span className="font-inter font-[700] text-[14px] leading-[100%] tracking-[10%] text-[#fff]">
            ETH/USD
          </span>
          <img src={ArrowDown} alt="ArrowDown" />
        </div>

        <div className="flex space-x-2">
          <div
            className="w-[38px] h-[37px] flex alignItems-center justify-center rounded-[10px] bg-[rgba(26,17,29,0.7)] hover:bg-[rgba(26,17,29,0.7)]"
            onClick={() => setTimeframe("1D")}
          >
            <button
              className={cn(
                "font-inter font-[700] text-[14px] leading-[100%] tracking-[0%] ",
                timeframe === "1D" ? "text-[#fff]" : "text-[#868B93]"
              )}
            >
              1D
            </button>
          </div>

          <div
            className="w-[38px] h-[37px] flex alignItems-center justify-center rounded-[10px] bg-[rgba(26,17,29,0.7)] hover:bg-[rgba(26,17,29,0.7)]"
            onClick={() => setTimeframe("1W")}
          >
            <button
              className={cn(
                "font-inter font-[700] text-[14px] leading-[100%] tracking-[0%] ",
                timeframe === "1W" ? "text-[#fff]" : "text-[#868B93]"
              )}
            >
              1W
            </button>
          </div>
          <div
            className="w-[38px] h-[37px] flex alignItems-center justify-center rounded-[10px] bg-[rgba(26,17,29,0.7)] hover:bg-[rgba(26,17,29,0.7)]"
            onClick={() => setTimeframe("1M")}
          >
            <button
              className={cn(
                "font-inter font-[700] text-[14px] leading-[100%] tracking-[0%] ",
                timeframe === "1M" ? "text-[#fff]" : "text-[#868B93]"
              )}
            >
              1M
            </button>
          </div>
        </div>
      </div>

      <div className="h-48 relative">
        <PriceChart color1="#8B5CF6" color2="#06B6D4" />
      </div>
    </div>
  );
}
