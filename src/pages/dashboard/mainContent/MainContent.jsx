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
      <div className="flex-1 overflow-auto ">
        <Header></Header>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <HeroBanner></HeroBanner>
          <Chart timeframe={timeframe} setTimeframe={setTimeframe}></Chart>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
  {/* Left Section */}
  <div className="md:col-span-1 lg:col-span-6">
    <div>
      <PriceCard />
    </div>
    <div className="mt-4 md:mt-8">
      <MarketOverview overviewPeriod={overviewPeriod} />
    </div>
  </div>

  {/* Right Section */}
  <div className="md:col-span-1 lg:col-span-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <QuickTransfer />
      </div>
      <div className="sm:col-span-1 lg:col-span-2">
        <MarketTrend />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-8">
      <div>
        <Profit />
      </div>
      <div className="sm:col-span-1 lg:col-span-2">
        <Assets />
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
