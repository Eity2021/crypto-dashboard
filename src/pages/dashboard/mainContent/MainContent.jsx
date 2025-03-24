import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Chart from "./Chart";
import PriceCard from "./PriceCard";
// import SecondCharts from "./SecondCharts";
import Button from "./Button";
import MarketOverview from "./MarketOverview";
import QuickTransfer from "./QuickTransfer";
import MarketTrend from "./MarketTrend";
import Profit from "./Profit";
import Assets from "./Assets";

export default function MainContent({
  overviewPeriod,
  timeframe,
  setTimeframe,
}) {
  return (
    <div className="container">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}

        <Header></Header>

        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-12 gap-4">
          {/* Hero Banner */}

          <HeroBanner></HeroBanner>

          {/* ETH/USD Chart */}
          <Chart timeframe={timeframe} setTimeframe={setTimeframe}></Chart>

          {/* Price Cards */}
          <PriceCard></PriceCard>

          {/* <SecondCharts></SecondCharts>
          <SecondCharts></SecondCharts> */}

          {/* <div className="col-span-3 bg-gray-800/50 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium">LTC</span>
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
            <div className="text-gray-400 flex items-center text-sm">
              <span>0.0%</span>
            </div>
          </div>
          <div className="text-2xl font-bold mb-2">3612.65</div>
          <div className="h-20 relative">
            <MiniChart color="#F472B6" trend="flat" />
          </div>
        </div> */}

          <Button></Button>

          {/* Market Overview */}
          <MarketOverview overviewPeriod={overviewPeriod}></MarketOverview>

          {/* Quick Transfer */}

          <QuickTransfer></QuickTransfer>
          {/* Market Trend */}
          <MarketTrend></MarketTrend>

          {/* Profit */}
          <Profit></Profit>

          {/* Assets */}

          <Assets></Assets>
        </div>
      </div>
    </div>
  );
}
