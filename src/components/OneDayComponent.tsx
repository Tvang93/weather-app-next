import { useAppContext } from "@/context/context";
import React, { useMemo } from "react";

interface Props {
  dayOfWeek: string;
  highTemp: string;
  lowTemp: string;
  condition: string;
}

const OneDayComponent = (props: Props) => {
  const { isFahrenheit } = useAppContext();

  const setWeatherImg = useMemo(() => {
    console.log("used");
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
  }, [props]);

  return (
    <div className="flex justify-center grow">
      <div className="flex flex-col items-center grow">
        <h1 className="text-[48px]">{props.dayOfWeek}</h1>
        <img className="w-[132px]" src={setWeatherImg} alt={props.condition} />
        <p className="text-2xl">{`H: ${
          isFahrenheit
            ? props.highTemp + `°F`
            : Math.round(((Number(props.highTemp) - 32) / 9) * 5).toString() + `°C`}`}
        </p>
        <p className="text-2xl">{`L: ${
          isFahrenheit
            ? props.lowTemp + `°F`
            : Math.round(((Number(props.lowTemp) - 32) / 9) * 5).toString() + `°C`}`}
        </p>
      </div>
    </div>
  );
};

export default OneDayComponent;
