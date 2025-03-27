import React from "react";
import graph1 from "../../../../public/image/graph.png";
import graph2 from "../../../../public/image/graph2.png";
import graph3 from "../../../../public/image/graph.png";
import icon from "../../../../public/image/icon.png";
import redFrame from "../../../../public/image/redFrame.png";
import greenFrame from "../../../../public/image/greenFrame.png";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
export default function PriceCard() {
  const priceCardContent = [
    {
      id: 1,
      currency: "BTC",
      unit: "USD",
      percentage: 6.2,
      price: 8442.55,
      graph: graph1,
      greenFrame: greenFrame,
    },
    {
      id: 2,
      currency: "ETH",
      unit: "USD",
      percentage: 3.8,
      price: 3421.87,
      graph: graph2,
      redFrame: redFrame,
    },
    {
      id: 3,
      currency: "LTC",
      unit: "USD",
      percentage: 1.4,
      price: 3612.65,
      graph: graph3,
      greenFrame: greenFrame,
    },
    {
      id: 4,
      currency: "ETH",
      unit: "USD",
      percentage: 3.8,
      price: 3421.87,
      graph: graph2,
      redFrame: redFrame,
    },
    {
      id: 5,
      currency: "LTC",
      unit: "USD",
      percentage: 1.4,
      price: 3612.65,
      graph: graph3,
      greenFrame: greenFrame,
    },
  ];

  return (
    <div className="w-[100%] ">
      <Swiper
        modules={[Navigation]}

   
        // slidesPerView={3}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 2,
            spaceBetween:24
          },
          1170: {
            slidesPerView: 3,
            spaceBetween:6
          },
        }}
      >
        {priceCardContent.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex justify-center">
              <div className="bg-[#3C354A] rounded-[20px] p-4 h-[157px] w-[250px]  border border-[#FFFFFF80] ">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-inter font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#868B93]">
                      {card.currency}
                    </span>
                    <div className="h-5 w-5 flex items-center justify-center">
                      <img src={icon} alt="icon" />
                    </div>
                    <span className="font-inter font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#868B93]">
                      {card.unit}
                    </span>
                  </div>
                  {card.percentage === 3.8 ? (
                    <div className=" flex items-center gap-2">
                      <img src={redFrame} alt="redFrame" />
                      <span className="font-inter font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#E72D04]">
                        {card.percentage}%
                      </span>
                    </div>
                  ) : (
                    <div className=" flex items-center gap-2">
                      <img src={greenFrame} alt="greenFrame" />
                      <span className="font-inter font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#00C287]">
                        {card.percentage}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="font-inter font-[600] text-[20px] leading-[100%] tracking-[0%] text-[#fff]">
                  {card.price}
                </div>
                <div className="w-[100%] mt-[-10px]">
                  <img src={card.graph} alt="" className="w-[100%]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
