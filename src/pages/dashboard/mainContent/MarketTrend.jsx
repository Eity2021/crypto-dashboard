import React from "react";
import greenArrow from "../../../../public/image/greenArrow.png";
import redArrow from "../../../../public/image/redArrow.png";
export default function MarketTrend() {
  const trendData = [
    {
      id: 1,
      name: "BTC",
      title: "Bitcoin",
      price: 8594,
      hours: "2,540",
      arrow: greenArrow,
    },
    {
      id: 2,
      name: "BNB",
      title: "BNB",
      price: 57207,
      hours: "2,304",
      arrow: redArrow,
    },
    {
      id: 3,
      name: "ETH",
      title: "Ethereum",
      price: 71129,
      hours: "1,320",
      arrow: redArrow,
    },
    {
      id: 4,
      name: "LTC",
      title: "Litecoin",
      price: 18661,
      hours: "2,140",
      arrow: greenArrow,
    },
    {
      id: 5,
      name: "ADA",
      title: "Cardano",
      price: 37166,
      hours: "1,976",
      arrow: greenArrow,
    },
    {
      id: 6,
      name: "CAKE",
      title: "Pancake",
      price: 72650,
      hours: "1,903",
      arrow: redArrow,
    },
  ];

  return (
    <div className="bg-[#3C354A] rounded-[20px]  px-6 py-5">
      <h3 className="font-inter font-[700] text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF] mb-4">
        Market Trend
      </h3>

      <div className="grid grid-cols-3 text-xs text-gray-400 mb-2">
        <div>
          <p className="font-inter font-[400] text-[10px] leading-[100%] tracking-[0%] text-[#BFB7B7] ">
            Name
          </p>
        </div>
        <div>
          <p className="font-inter font-[400] text-[10px] leading-[100%] tracking-[0%] text-[#BFB7B7] text-right">
            Last Price
          </p>
        </div>
        <div>
          <p className="font-inter font-[400] text-[10px] leading-[100%] tracking-[0%] text-[#BFB7B7] text-right">
            24h Change
          </p>
        </div>
      </div>
      <div>
        {trendData.map((data) => (
          <div className="grid grid-cols-3 items-center pt-[11px]" key={data.id}>
            <div className="flex items-center">
              <span className="font-inter font-[400] text-[11.73px] leading-[16.75px] tracking-[0%] text-[#FFFFFF]">
                {data.name}
              </span>
              <span className="font-inter font-[400] text-[11.73px] leading-[16.75px] tracking-[0%] text-[#868B93] ml-1">
                {data.title}
              </span>
            </div>
            <div className="flex justify-end">
              <p className="font-inter font-[400] text-[11.73px] leading-[16.75px] tracking-[0%] text-[#9292C1]">
                ${data.price}
              </p>
            </div>
            <div className="text-right flex items-center justify-end">
              <p className="font-inter font-[400] text-[11.73px] leading-[16.75px] tracking-[0%] text-[#FFFFFF]">
                {data.hours}
              </p>
              <img src={data.arrow} className="mr-1 pl-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
