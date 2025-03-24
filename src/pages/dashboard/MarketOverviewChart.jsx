import React from 'react'

export default function MarketOverviewChart() {
  return (
    <div>

<svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Y-axis labels */}
      <text x="0" y="20" fill="#9CA3AF" fontSize="10">
        50k
      </text>
      <text x="0" y="50" fill="#9CA3AF" fontSize="10">
        40k
      </text>
      <text x="0" y="80" fill="#9CA3AF" fontSize="10">
        30k
      </text>
      <text x="0" y="110" fill="#9CA3AF" fontSize="10">
        20k
      </text>
      <text x="0" y="140" fill="#9CA3AF" fontSize="10">
        10k
      </text>

      {/* Purple line */}
      <path
        d="M 20 20 L 80 20 L 100 80 L 140 80 L 160 20 L 200 110 L 240 80 L 280 40 L 320 20 L 380 20"
        fill="none"
        stroke="url(#gradientPurple)"
        strokeWidth="2"
      />

      {/* Blue line */}
      <path
        d="M 20 140 L 60 80 L 100 110 L 140 40 L 180 80 L 220 140 L 260 110 L 300 80 L 340 40 L 380 20"
        fill="none"
        stroke="url(#gradientBlue)"
        strokeWidth="2"
      />

      {/* Highlight point */}
      <circle cx="160" cy="20" r="6" fill="#EC4899" />
      <circle cx="160" cy="20" r="10" fill="#EC4899" fillOpacity="0.3" />
    </svg>

    
    </div>
  )
}
