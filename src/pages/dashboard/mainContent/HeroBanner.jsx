import React from 'react'

export default function HeroBanner() {
  return (
    <div className="col-span-6 bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-8 relative overflow-hidden">
    <div className="relative z-10">
      <div className="text-sm font-medium text-purple-200 mb-2">ETHEREUM 2.0</div>
      <h2 className="text-3xl font-bold mb-1">
        Your Gateway
        <br />
        into Blockchain
      </h2>
      <p className="text-purple-200 mb-6">
        Paronia is a blockchain platform.
        <br />
        We make blockchain accessible.
      </p>
      <button className="bg-[#1E1A2F]/30 hover:bg-[#1E1A2F]/50 px-6 py-2 rounded-lg font-medium transition-colors">
        Learn More.
      </button>
    </div>

    {/* 3D Objects */}
    <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
      {/* These would be actual 3D objects in a real implementation */}
      <div className="absolute top-1/4 right-1/4 h-16 w-16 bg-purple-500 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/3 h-12 w-12 bg-cyan-400 rounded-full"></div>
      <div className="absolute top-1/2 right-1/2 h-10 w-24 bg-blue-400 rounded-full transform rotate-45"></div>
    </div>
  </div>
  )
}
