import React from 'react'
import {
  ArrowLeft,
  Search,
  Bell,
} from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button className="p-2 rounded-full bg-gray-800/50 mr-4">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-medium">Home</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800/50 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          <button className="relative p-2 rounded-full hover:bg-gray-800/50">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
        </div>
      </header>

  )
}
