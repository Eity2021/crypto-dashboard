import React from 'react'

export default function PriceChart({ color1 = "#8B5CF6", color2 = "#06B6D4" }) {
  return (
    <div>
         <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color1} />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color2} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>

      {/* Y-axis labels */}
      <text x="0" y="20" fill="#9CA3AF" fontSize="10">50k</text>
      <text x="0" y="50" fill="#9CA3AF" fontSize="10">40k</text>
      <text x="0" y="80" fill="#9CA3AF" fontSize="10">30k</text>
      <text x="0" y="110" fill="#9CA3AF" fontSize="10">20k</text>
      <text x="0" y="140" fill="#9CA3AF" fontSize="10">10k</text>

      {/* Purple line */}
      <path
        d="M 20 20 L 80 20 L 140 80 L 200 80 L 260 110 L 320 40 L 380 40"
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="2"
      />

      {/* Blue line */}
      <path
        d="M 20 140 L 80 140 L 140 60 L 200 20 L 260 80 L 320 80 L 380 140"
        fill="none"
        stroke="url(#gradient2)"
        strokeWidth="2"
      />
    </svg>
    </div>
  )
}
