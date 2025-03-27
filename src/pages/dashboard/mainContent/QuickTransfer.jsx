import React from "react";
import { Plus, Send } from "lucide-react";
import avatar from "../../../../public/image/avatar.png";
import avatar2 from "../../../../public/image/avatar2.png";
import plus from "../../../../public/image/plus.png";
export default function QuickTransfer() {
  return (
    <div className="bg-[#3C354A] rounded-[20px] p-5">
      <h3 className="font-inter font-[700] text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF] mb-6">Quick Transfer</h3>

      <div className="flex justify-between mb-6">
        <div className="flex items-center justify-center overflow-hidden">
          <div className=" flex items-center justify-center">
            <img src={avatar} alt="avatar" />
          </div>
        </div>

        <div className=" flex items-center justify-center overflow-hidden">
        <div className=" flex items-center justify-center">
            <img src={avatar2} alt="avatar2" />
          </div>
        </div>

        <div className="h-14 w-14 rounded-full  flex items-center justify-center border-2 border-dashed border-[#723FD8BA]">
          <img src={plus} alt="plus" />
        </div>
      </div>

      <div className="mb-6 flex gap-2 mb-8">
        <div className="font-inter font-[500] text-[15px] leading-[100%] tracking-[0%] text-[#9080BA] flex items-center">Amount:</div>
        <div className="flex items-center ">
          <sup className="font-inter font-[400] text-[13.75px] leading-[100%] tracking-[0%] text-[#7452CD] mr-[4px]">$</sup>
        <p className="font-inter font-[600] text-[24.75px] leading-[100%] tracking-[0%] text-[#fff]">  3.25</p>
        </div>
      </div>

      <button className="w-full py-3 bg-[linear-gradient(90deg,_#AC6AEC_0%,_#BB7FF5_100%)] rounded-[10px] flex items-center justify-center">
  <Send size={18} className="mr-2" />
<p className="font-inter font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#fff]">  Transfer Now</p>
</button>
    </div>
  );
}
