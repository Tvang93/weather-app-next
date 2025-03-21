import { useAppContext } from "@/context/context";
import React from "react";

interface Props {
  dayOfWeek: string;
  highTemp: string;
  lowTemp: string;
}

const OneDayComponent = (props: Props) => {
  const { isFahrenheit } = useAppContext();

  return (
    <div className="flex justify-center grow">
      <div className="flex flex-col items-center grow">
        <h1 className="text-[48px]">{props.dayOfWeek}</h1>
        <img src="/" alt="" />
        <p className="text-2xl">{`${
          isFahrenheit
            ? props.highTemp
            : Math.round((Number(props.highTemp) * 9) / 5 + 32).toString()
        }°${isFahrenheit ? `F` : `C`}`}</p>
        <p className="text-2xl">{`${
          isFahrenheit
            ? props.lowTemp
            : Math.round((Number(props.lowTemp) * 9) / 5 + 32).toString()
        }°${isFahrenheit ? `F` : `C`}`}</p>
      </div>
    </div>
  );
};

export default OneDayComponent;
