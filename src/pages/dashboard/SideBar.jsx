import React from "react";
import { Home, Briefcase, Settings, LogOut } from "lucide-react";
import logo from "../../../public/image/logo.png";
import homeGraph from "../../../public/image/homeGraph.png";
import homeCartBag from "../../../public/image/homeCartBag.png";
export default function SideBar() {
  return (
    <div className="relative">
      {/* Sidebar */}
      <div className="w-20 flex flex-col items-center py-6 border-r border-gray-800">
        <div className="mb-10">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <nav className="flex flex-col items-center space-y-8 flex-1">
          <button className="p-3 rounded-lg bg-[#372C44] text-purple-400">
            <Home size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-[#372C44] text-gray-400">
            <img src={homeGraph} alt="homeGraph" />
          </button>
          <button className="p-3 rounded-lg hover:bg-[#372C44] text-gray-400">
            <img src={homeCartBag} alt="homeCartBag" />
          </button>
          <button className="p-3 rounded-lg hover:bg-[#372C44] text-gray-400">
            <Settings size={20} />
          </button>
        </nav>
        <div className="absolute bottom-14">
          <button className="p-3 rounded-lg hover:bg-[#372C44] text-gray-400 mt-auto ">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
