import React from 'react'
import MiniChart from '../MiniChart'

export default function SecondCharts() {
  return (
    <div className="col-span-3 bg-gray-800/50 rounded-2xl p-4">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-2">
        <span className="font-medium">ETH</span>
        <div className="h-5 w-5 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 10L12 14L16 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-gray-400">USD</span>
      </div>
      <div className="text-red-400 flex items-center text-sm">
        <span>3.8%</span>
      </div>
    </div>
    <div className="text-2xl font-bold mb-2">4772.18</div>
    <div className="h-20">
      <MiniChart color="#06B6D4" trend="up" />
    </div>
  </div>
  )
}
