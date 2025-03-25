import React from "react";

import SuperToroidBlackMatte from "../../../../public/image/SuperToroid-Black-Matte.png";
import ImageWhite from "../../../../public/image/ImageWhite.png";
import Image from "../../../../public/image/Image.png";
import RoundCubeIridescent from "../../../../public/image/RoundCube-Iridescent.png";
import PillBlueGlossy from "../../../../public/image/Pill-Blue-Glossy.png";
import SpherePurpleGlossy from "../../../../public/image/Sphere-Purple-Glossy.png";

export default function HeroBanner() {
  // bg-[linear-gradient(to_right,rgba(42,15,211,0.10)_10%,rgba(255,122,122,0.56)_90%)]
  // background: linear-gradient(253.1deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%);

  return (
    <div
      className="col-span-6 rounded-2xl  p-8 relative overflow-hidden border-2 border-[#000]"
      style={{
        background:
          "linear-gradient(253.1deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%)",
      }}
    >
      <div className="relative z-10">
        <div className="font-inter font-bold text-[10px] leading-[100%] tracking-[10%] ">
          ETHEREUM 2.0
        </div>
        <h2 className="text-inter  font-[700]  text-[30px] leading-[120%] tracking-[0%] pt-[15px]">
          Your Gateway
          <br />
          into Blockchain
        </h2>
        <p className="text-inter  font-[500]  text-[14px] leading-[135%] tracking-[0%] mt-[15px]">
           Paronia is a blockchain platform.
          <br />
           We make blockchain accessible.
        </p>
        <div className="rounded-[10px] w-[144px] h-[43px] flex justify-center alignItems-center mt-[35px] bg-[#261B4C] hover:bg-[#261B4C] transition-all duration-300" >
          <button className=" text-inter  font-[700]  text-[16px] leading-[100%] tracking-[0%]" >
            Learn More.
          </button>
        </div>
      </div>

      {/* 3D Objects */}
      <div className="absolute right-[-100px] top-0 h-full w-1/2 pointer-events-none">
        <img src={SuperToroidBlackMatte} alt="SuperToroidBlackMatte" />
      </div>
      <div className="absolute right-[-280px] bottom-[-170px] h-full w-1/2 pointer-events-none">
        <img src={ImageWhite} alt="ImageWhite" />
      </div>
      <div className="absolute right-[-170px] bottom-[-90px] h-full w-1/2 pointer-events-none">
        <img src={Image} alt="Image" />
      </div>
      <div className="absolute right-[-317px] bottom-[0px] h-full w-1/2 pointer-events-none">
        <img src={RoundCubeIridescent} alt="RoundCubeIridescent" />
      </div>
      <div className="absolute right-[-17px] bottom-[-112px] h-full w-1/2 pointer-events-none">
        <img src={PillBlueGlossy} alt="PillBlueGlossy" />
      </div>
      <div className="absolute right-[-162px] bottom-[-248px] h-full w-1/2 pointer-events-none">
        <img src={SpherePurpleGlossy} alt="SpherePurpleGlossy" />
      </div>
    </div>
  );
}
