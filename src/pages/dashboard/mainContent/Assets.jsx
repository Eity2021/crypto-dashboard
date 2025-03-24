import React from 'react'
import {
    Search,

  } from "lucide-react";
export default function Assets() {
  return (
    <div className="col-span-3 bg-gray-800/50 rounded-2xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-medium text-lg">Assets</h3>
      <button className="text-gray-400">
        <Search size={18} />
      </button>
    </div>

    <div className="space-y-4">
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
          <span className="text-xs font-bold">₿</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <div className="font-medium">Bitcoin</div>
              <div className="text-xs text-gray-400">BTC</div>
            </div>
            <div className="text-right">
              <div className="font-medium">0.14</div>
              <div className="text-xs text-gray-400">$4,455.2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
          <span className="text-xs font-bold">Ξ</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <div className="font-medium">Ethereum</div>
              <div className="text-xs text-gray-400">ETC</div>
            </div>
            <div className="text-right">
              <div className="font-medium">4.65</div>
              <div className="text-xs text-gray-400">$1,888.2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
          <span className="text-xs font-bold">₿</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <div className="font-medium">Bitcoin</div>
              <div className="text-xs text-gray-400">BTC</div>
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
