import React from 'react'
import {
  ChevronDown,
} from "lucide-react";
import { cn } from "../../../lib/utils";
import PriceChart from '../PriceChart';
export default function Chart({timeframe, setTimeframe}) {
  return (
    <div className="col-span-6 bg-gray-800/50 rounded-2xl p-6">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold">Ξ</span>
        </div>
        <span className="font-medium">ETH/USD</span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>

      <div className="flex space-x-2">
        <button
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium",
            timeframe === "1D" ? "bg-gray-700" : "bg-transparent hover:bg-gray-700/50",
          )}
          onClick={() => setTimeframe("1D")}
        >
          1D
        </button>
        <button
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium",
            timeframe === "1W" ? "bg-gray-700" : "bg-transparent hover:bg-gray-700/50",
          )}
          onClick={() => setTimeframe("1W")}
        >
          1W
        </button>
        <button
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium",
            timeframe === "1M" ? "bg-gray-700" : "bg-transparent hover:bg-gray-700/50",
          )}
          onClick={() => setTimeframe("1M")}
        >
          1M
        </button>
      </div>
    </div>

    <div className="h-48 relative">
      <PriceChart color1="#8B5CF6" color2="#06B6D4" />
    </div>
  </div>
  )
}
