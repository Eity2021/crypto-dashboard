import React from "react";
import { ArrowLeft, Search, Bell } from "lucide-react";
import HeaderAvatar from "../../../../public/image/HeaderAvatar.png";
import backArrow from "../../../../public/image/backArrow.png";
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div>
          <img src={backArrow} alt="backArrow"/>
        </div>
        <h1 className="font-inter font-[700] text-[14px] leading-[100%] tracking-[0%] text-[#fff]">Home</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2F293E] rounded-[15px] py-3 pl-4 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-[15px] text-gray-400" size={18} />
        </div>

        <button className="relative p-3 rounded-full border  border-[#D9CBFF66] bg-[#2B2638]">
          <Bell size={16} />
          <span className="absolute top-[1px] right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center justify-center">
          <img src={HeaderAvatar} alt="HeaderAvatar" />
        </div>
      </div>
    </header>
  );
}
