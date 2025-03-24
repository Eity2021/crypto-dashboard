import React from 'react'
import {
    ChevronRight,
  } from "lucide-react";
export default function Button() {
  return (
    <div className="col-span-3 flex items-center justify-center">
    <button className="p-4 rounded-full bg-gray-800/50 text-gray-400">
      <ChevronRight size={24} />
    </button>
  </div>
  )
}
