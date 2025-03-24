import React from 'react'
import {
    ArrowUp,
    ArrowDown,
  } from "lucide-react";
export default function MarketTrend() {
  return (
    <div className="col-span-3 bg-gray-800/50 rounded-2xl p-6">
    <h3 className="font-medium text-lg mb-4">Market Trend</h3>

    <div className="grid grid-cols-3 text-xs text-gray-400 mb-2">
      <div>Name</div>
      <div className="text-right">Last Price</div>
      <div className="text-right">24h Change</div>
    </div>

    <div className="space-y-3">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">BTC</span>
          <span className="text-xs text-gray-400 ml-1">Bitcoin</span>
        </div>
        <div className="text-right">$8594</div>
        <div className="text-right text-green-400 flex items-center justify-end">
          <ArrowUp size={14} className="mr-1" />
          2,540
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">BNB</span>
          <span className="text-xs text-gray-400 ml-1">BNB</span>
        </div>
        <div className="text-right">$5207</div>
        <div className="text-right text-red-400 flex items-center justify-end">
          <ArrowDown size={14} className="mr-1" />
          2,304
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">ETH</span>
          <span className="text-xs text-gray-400 ml-1">Ethereum</span>
        </div>
        <div className="text-right">$7129</div>
        <div className="text-right text-red-400 flex items-center justify-end">
          <ArrowDown size={14} className="mr-1" />
          1,320
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">LTC</span>
          <span className="text-xs text-gray-400 ml-1">Litecoin</span>
        </div>
        <div className="text-right">$18661</div>
        <div className="text-right text-green-400 flex items-center justify-end">
          <ArrowUp size={14} className="mr-1" />
          2,140
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">ADA</span>
          <span className="text-xs text-gray-400 ml-1">Cardano</span>
        </div>
        <div className="text-right">$3766</div>
        <div className="text-right text-green-400 flex items-center justify-end">
          <ArrowUp size={14} className="mr-1" />
          1,876
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-medium">CAKE</span>
          <span className="text-xs text-gray-400 ml-1">Pancake</span>
        </div>
        <div className="text-right">$7650</div>
        <div className="text-right text-red-400 flex items-center justify-end">
          <ArrowDown size={14} className="mr-1" />
          1,903
        </div>
      </div>
    </div>
  </div>
  )
}
