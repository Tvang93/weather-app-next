"use client";

import { useWeatherImgContext } from "@/context/WeatherImgContext";
import React, { useEffect, useMemo } from "react";

interface Props {
  condition: string;
}

const WeatherImgComponent = (props: Props) => {

  const setWeatherImg = useMemo(() => {
        console.log('used')
        switch (props.condition) {
          case "Thunderstorm":
            return "/ProjectWeatherAssets/storm.png";
          case "Drizzle":
            return "/ProjectWeatherAssets/rain.png";
          case "Rain":
            return "/ProjectWeatherAssets/rainy.png";
          case "Snow":
            return "/ProjectWeatherAssets/snow.png";
          case "Atmosphere":
            return "/ProjectWeatherAssets/fog.png";
          case "Clear":
            return "/ProjectWeatherAssets/sunny.png";
          default:
            return "/ProjectWeatherAssets/cloud.png";
        }
      },[props])


  return (
    <div className="w-[396px]">
      <img className="w-[396px] h-[394px]" src={setWeatherImg} alt={props.condition} />
    </div>
  );
};

export default WeatherImgComponent;
