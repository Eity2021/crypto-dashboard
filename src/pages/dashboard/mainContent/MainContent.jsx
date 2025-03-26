import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Chart from "./Chart";
import PriceCard from "./PriceCard";
// import SecondCharts from "./SecondCharts";

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
      <div className="flex-1 overflow-auto ">
        {/* Header */}
        <Header></Header>
        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-12 gap-4">
          {/* Hero Banner */}
          <HeroBanner></HeroBanner>
          {/* ETH/USD Chart */}
          <Chart timeframe={timeframe} setTimeframe={setTimeframe}></Chart>
        </div>
        {/* Price Cards */}
        <div className="p-4 grid grid-cols-12 gap-4">
          <div className="col-span-6 ">
            <PriceCard></PriceCard>
            {/* Market Overview */}
            <div className="mt-8">
              <MarketOverview overviewPeriod={overviewPeriod}></MarketOverview>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-3 gap-4">
              {/* Quick Transfer */}
              <div>
                <QuickTransfer></QuickTransfer>
              </div>
              {/* Market Trend */}
              <div className="col-span-2">
                <MarketTrend></MarketTrend>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {/* Quick Transfer */}
              <div>
                {/* Profit */}
                <Profit></Profit>
              </div>
              {/* Market Trend */}
              <div className="col-span-2">
                {/* Assets */}
                <Assets></Assets>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
