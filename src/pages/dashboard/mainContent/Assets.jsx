import React from 'react'
import {
    Search,

  } from "lucide-react";
  import aIcon from "../../../../public/image/aIcon.png";
  import aIcon1 from "../../../../public/image/aIcon1.png";
export default function Assets() {
  return (
    <div className="bg-[#3C354A] rounded-[20px]  border-[#FFFFFF80] rounded-[20px]  p-6">
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-inter font-[700] text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Assets</h3>
      <button className="text-gray-400">
        <Search size={18} />
      </button>
    </div>

    <div className="space-y-4">
      <div className="flex items-center mb-[4px]">
        <div className="h-8 w-8 rounded-[6.4px] bg-[#0A09304D] flex items-center justify-center mr-3 ">
          <img src={aIcon} alt="aIcon" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center"> 
        <div className="flex justify-between">
        <div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Bitcoin</div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#9A9A9A]">BTC</div>
            </div>
        </div>
            </div>
            <div className="text-right">
              <div className="font-medium">0.14</div>
              <div className="text-xs text-gray-400">$4,455.2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-[4px]">
        <div className="h-8 w-8 rounded-[6.4px] bg-[#0A09304D] flex items-center justify-center mr-3 ">
          <img src={aIcon1} alt="aIcon1" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center"> 
        <div className="flex justify-between">
        <div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Ethereum</div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#9A9A9A]">ETC</div>
            </div>
        </div>
            </div>
            <div className="text-right">
              <div className="font-medium">4.65</div>
              <div className="text-xs text-gray-400">$1,888.2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-[4px]">
        <div className="h-8 w-8 rounded-[6.4px] bg-[#0A09304D] flex items-center justify-center mr-3 ">
          <img src={aIcon} alt="aIcon" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center"> 
        <div className="flex justify-between">
        <div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Bitcoin</div>
           <div className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#9A9A9A]">BTC</div>
            </div>
        </div>
            </div>
            <div className="text-right">
              <div className="font-medium">0.14</div>
              <div className="text-xs text-gray-400">$4,455.2</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}
