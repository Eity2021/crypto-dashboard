import React from 'react'
import {
    ChevronDown,

  } from "lucide-react";
import MarketOverviewChart from '../MarketOverviewChart';
export default function MarketOverview({overviewPeriod}) {
  return (
     <div className="col-span-6 bg-gray-800/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-lg">Market Overview</h3>
            <button className="px-4 py-1.5 rounded-lg bg-gray-700 text-sm font-medium flex items-center">
              {overviewPeriod}
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>

          <div className="h-48 relative">
            <MarketOverviewChart />
          </div>
        </div>
  )
}
