"use client";

import { useWeatherImgContext } from "@/context/WeatherImgContext";
import React, { useEffect, useMemo } from "react";

// type WeatherCondition = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds'
interface Props {
  condition: string;
}

const WeatherImgComponent = (props: Props) => {

//   const { state, dispatch } = useWeatherImgContext();

//   useEffect(() => {
//     console.log("Count Me");
//     switch (props.condition) {
//       case "Rain":
//         dispatch({ type: "Rain" });
//         break;
//       case "Clear":
//         dispatch({ type: "Clear" });
//         break;
//       case "Thunderstorm":
//         dispatch({ type: "Thunderstorm" });
//         break;
//       case "Clouds":
//         dispatch({ type: "Clouds" });
//         break;
//       case "Atmosphere":
//         dispatch({ type: "Atmosphere" });
//         break;
//       case "Drizzle":
//         dispatch({ type: "Drizzle" });
//         break;
//       case "Snow":
//         dispatch({ type: "Snow" });
//         break;
//     }
//   }, [props, dispatch]);

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

  // const {conditionImgUrl, dispatch} = useWeatherImgContext()

  // const setImgUrl = dispatch(props.condition)

  return (
    <div className="w-[396px]">
      <img className="w-[396px] h-[394px]" src={setWeatherImg} alt={props.condition} />
    </div>
  );
};

export default WeatherImgComponent;
