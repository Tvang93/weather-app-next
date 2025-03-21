import { useAppContext } from "@/context/context";
import { useWeatherImgContext } from "@/context/WeatherImgContext";
import React, { useEffect } from "react";

interface Props {
  dayOfWeek: string;
  highTemp: string;
  lowTemp: string;
  condition: string;
}

const OneDayComponent = (props: Props) => {
  const { isFahrenheit } = useAppContext();

    const {state, dispatch} = useWeatherImgContext();
  
    useEffect(() => {
      switch (props.condition) {
        case "Rain":
          dispatch({ type: "Rain" });
          break;
        case "Clear":
          dispatch({ type: "Clear" });
          break;
        case "Thunderstorm":
          dispatch({ type: "Thunderstorm" });
          break;
        case "Clouds":
          dispatch({ type: "Clouds" });
          break;
        case "Atmosphere":
          dispatch({ type: "Atmosphere" });
          break;
        case "Drizzle":
          dispatch({ type: "Drizzle" });
          break;
        case "Snow":
          dispatch({ type: "Snow" });
          break;
      }
    }, [props]);
    
  // const {conditionImgUrl, dispatch} = useWeatherImgContext()
  
  // const setImgUrl = dispatch(props.condition)

  return (
    <div className="flex justify-center grow">
      <div className="flex flex-col items-center grow">
        <h1 className="text-[48px]">{props.dayOfWeek}</h1>
        <img className="w-[132px]" src={state.condition} alt={props.condition} />
        <p className="text-2xl">{`H: ${
          isFahrenheit
            ? props.highTemp
            : Math.round((Number(props.highTemp) * 9) / 5 + 32).toString()
        }°${isFahrenheit ? `F` : `C`}`}</p>
        <p className="text-2xl">{`L: ${
          isFahrenheit
            ? props.lowTemp
            : Math.round((Number(props.lowTemp) * 9) / 5 + 32).toString()
        }°${isFahrenheit ? `F` : `C`}`}</p>
      </div>
    </div>
  );
};

export default OneDayComponent;
