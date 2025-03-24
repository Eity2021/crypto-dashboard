import React from "react";
import { Plus, Send } from "lucide-react";
export default function QuickTransfer() {
  return (
    <div className="col-span-3 bg-gray-800/50 rounded-2xl p-6">
      <h3 className="font-medium text-lg mb-6">Quick Transfer</h3>

      <div className="flex justify-between mb-6">
        <div className="h-14 w-14 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-lg">👨</span>
          </div>
        </div>

        <div className="h-14 w-14 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-lg">🧢</span>
          </div>
        </div>

        <div className="h-14 w-14 rounded-full bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-600">
          <Plus size={20} className="text-gray-400" />
        </div>
      </div>

      <div className="mb-6">
        <div className="text-gray-400 mb-2">Amount:</div>
        <div className="text-2xl font-bold flex items-center">
          <span className="text-lg mr-1">$</span>
          3.25
        </div>
      </div>

      <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium flex items-center justify-center">
        <Send size={18} className="mr-2" />
        Transfer Now
      </button>
    </div>
  );
}
