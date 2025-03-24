import React from 'react'

export default function MiniChart({ color = "#8B5CF6", trend = "up" }) {
    let path = "";

    if (trend === "up") {
      path = "M 5 40 L 20 35 L 35 38 L 50 30 L 65 32 L 80 25 L 95 10";
    } else if (trend === "down") {
      path = "M 5 10 L 20 15 L 35 12 L 50 20 L 65 18 L 80 25 L 95 40";
    } else {
      path = "M 5 25 L 20 30 L 35 20 L 50 25 L 65 15 L 80 25 L 95 25";
    }
  
  return (
    <div>
         <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={color} strokeWidth="2" />
    </svg>
    </div>
  )
}
