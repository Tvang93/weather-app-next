"use client";

import { useAppContext } from "@/context/context";
import React from "react";

interface MoreInfo {
  highTemp: string;
  windSpeed: string;
  lowTemp: string;
  humidity: string;
}

const MoreCityInfoComponent = (props: MoreInfo) => {
  const { isFahrenheit } = useAppContext();

  return (
    <div className="grid grid-cols-2 px-[20px] py-[15px] gap-y-1">
      <div className="flex">
        <div className="flex flex-col items-center">
          <h1 className="text-[64px] leading-none">
            <u>High</u>
          </h1>
          <h2 className="text-[48px]">{`${
            isFahrenheit
              ? props.highTemp
              : Math.round((Number(props.highTemp) * 9) / 5 + 32).toString()
          }°${isFahrenheit ? `F` : `C`}`}</h2>
        </div>
        <div>
          <img
            className="w-[64px]"
            src="/ProjectWeatherAssets/hot-thermometer.png"
            alt="hot thermometer"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[64px] leading-none">
            <u>Wind</u>
          </h1>
          <h2 className="text-[48px]">{props.windSpeed} mph</h2>
        </div>
        <div>
          <img
            className="w-[64px]"
            src="/ProjectWeatherAssets/wind.png"
            alt="windy cloud"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <h1 className="text-[64px] leading-none">
            <u>Low</u>
          </h1>
          <h2 className="text-[48px]">{`${
            isFahrenheit
              ? props.lowTemp
              : Math.round((Number(props.lowTemp) * 9) / 5 + 32).toString()
          }°${isFahrenheit ? `F` : `C`}`}</h2>
        </div>
        <div>
          <img
            className="w-[64px]"
            src="/ProjectWeatherAssets/cold-thermometer.png"
            alt="cold thermometer"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[64px] leading-none">
            <u>Humidity</u>
          </h1>
          <h2 className="text-[48px]">{props.humidity} %</h2>
        </div>
        <div>
          <img
            className="w-[64px]"
            src="/ProjectWeatherAssets/water.png"
            alt="droplets"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreCityInfoComponent;
