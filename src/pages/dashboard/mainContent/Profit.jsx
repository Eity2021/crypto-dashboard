import React from 'react'
import {
    ArrowUp,
    ArrowDown,
  } from "lucide-react";
export default function Profit() {
  return (
    <div className="col-span-3 bg-gray-800/50 rounded-2xl p-6">
    <h3 className="font-medium text-lg mb-6">Profit</h3>

    <div className="space-y-6">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center mr-4">
          <ArrowUp size={20} className="text-green-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-green-400 text-lg font-bold mr-1">$</span>
            <span className="text-xl font-bold">1892.25</span>
          </div>
          <div className="text-sm text-gray-400">Income</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center mr-4">
          <ArrowDown size={20} className="text-red-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-red-400 text-lg font-bold mr-1">$</span>
            <span className="text-xl font-bold">387.47</span>
          </div>
          <div className="text-sm text-gray-400">Expenses</div>
        </div>
      </div>
    </div>
  </div>
  )
}
