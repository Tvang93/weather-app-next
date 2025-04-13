"use client";
import { useAppContext } from "@/context/context";
import React, { useEffect } from "react";

interface InfoProps {
  cityName: string;
  countryInitial: string;
  latestTime: string;
  temp: string;
  weather: string;
}

const CityInfoComponent = (props: InfoProps) => {
  // const inUS = props.countryName == "US"
  const { temp, setTemp } = useAppContext();
  const { setIsFahrenheit } = useAppContext();

  useEffect(() => {
    if (props.temp != null) {
      setTemp(props.temp);
      console.log(temp);
    }
  }, []);

  return (
    <div>
      <h1 className="text-[40px]">{`${props.cityName}, ${props.countryInitial}`}</h1>
      <p>{`As of ${props.latestTime}`}</p>
      <div className="flex justify-between">
        <h1 className="text-8xl">{`${
          props.temp != null ? temp + `°` : `N/A`
        }`}</h1>
        <div className="me-8">
          <button
            className={`border-r-2 border-[#757575] pe-5 me-5 items-center ${
              temp == props.temp ? `text-8xl` : `text-[70px] text-[#757575]`
            }`}
            onClick={() => {
              if (temp != props.temp) {
                setTemp(Math.round((Number(temp) * 9) / 5 + 32).toString());
                setIsFahrenheit(true);
              }
            }}
          >
            F
          </button>
          <button
            className={`${
              temp != props.temp
                ? `text-8xl`
                : `text-[70px] text-[#757575] me-[26px]`
            }`}
            onClick={() => {
              if (temp == props.temp) {
                setTemp(Math.round(((Number(temp) - 32) * 5) / 9).toString());
                setIsFahrenheit(false);
              }
            }}
          >
            C
          </button>
        </div>
      </div>
      <h1 className="text-[64px]">{props.weather}</h1>
    </div>
  );
};

export default CityInfoComponent;
