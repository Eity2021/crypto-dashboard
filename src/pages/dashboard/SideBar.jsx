import React from 'react'
import {
  Home,
  BarChart2,
  Briefcase,
  Settings,
  LogOut,

} from "lucide-react";
export default function SideBar() {
  return (
    <div>    {/* Sidebar */}
          <div className="w-20 flex flex-col items-center py-6 border-r border-gray-800">
            <div className="mb-10">
              <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg transform rotate-45 flex items-center justify-center">
                <div className="h-6 w-6 bg-[#1E1A2F] rounded-md transform -rotate-45"></div>
              </div>
            </div>
    
            <nav className="flex flex-col items-center space-y-8 flex-1">
              <button className="p-3 rounded-lg bg-gray-800/50 text-purple-400">
                <Home size={20} />
              </button>
              <button className="p-3 rounded-lg hover:bg-gray-800/50 text-gray-400">
                <BarChart2 size={20} />
              </button>
              <button className="p-3 rounded-lg hover:bg-gray-800/50 text-gray-400">
                <Briefcase size={20} />
              </button>
              <button className="p-3 rounded-lg hover:bg-gray-800/50 text-gray-400">
                <Settings size={20} />
              </button>
            </nav>
    
            <button className="p-3 rounded-lg hover:bg-gray-800/50 text-gray-400 mt-auto">
              <LogOut size={20} />
            </button>
          </div></div>
  )
}
