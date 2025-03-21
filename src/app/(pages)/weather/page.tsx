import CityInfoComponent from "@/components/CityInfoComponent";
import FiveDayComponent from "@/components/FiveDayComponent";
import MoreCityInfoComponent from "@/components/MoreCityInfoComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import WeatherImgComponent from "@/components/WeatherImgComponent";
import { getCurrentDayData, getFiveDayData } from "@/lib/services";
import React from "react";

const WeatherPage = async () => {

  const oneDayData = await getCurrentDayData("Stockton");
  const fiveDaysData = await getFiveDayData(
    oneDayData.coord.lat,
    oneDayData.coord.lon
  );

  let highTempArr: string[] = [];
  let lowTempArr: string[] = [];

  if (fiveDaysData != null) {
    type TempMax = {
      temp_max: string;
    };

    type MainObjHigh = {
      main: TempMax;
    };

    type ListDataHigh = {
      List: MainObjHigh[];
    };

    const HighTempFiveDays = fiveDaysData.list.map((each: MainObjHigh) => {
      return each.main.temp_max;
    });
    const HighTempSetOne = Math.round(
      HighTempFiveDays.slice(0, 8).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const HighTempSetTwo = Math.round(
      HighTempFiveDays.slice(8, 16).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const HighTempSetThree = Math.round(
      HighTempFiveDays.slice(16, 24).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const HighTempSetFour = Math.round(
      HighTempFiveDays.slice(24, 32).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const HighTempSetFive = Math.round(
      HighTempFiveDays.slice(32, 40).reduce((i: number, j: number) => i + j) / 8
    ).toString();

    type TempMin = {
      temp_min: string;
    };

    type MainObjLow = {
      main: TempMin;
    };

    type ListDataLow = {
      List: MainObjLow[];
    };

    const LowTempFiveDays = fiveDaysData.list.map((each: MainObjLow) => {
      return each.main.temp_min;
    });
    const LowTempSetOne = Math.round(
      LowTempFiveDays.slice(0, 8).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const LowTempSetTwo = Math.round(
      LowTempFiveDays.slice(8, 16).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const LowTempSetThree = Math.round(
      LowTempFiveDays.slice(16, 24).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const LowTempSetFour = Math.round(
      LowTempFiveDays.slice(24, 32).reduce((i: number, j: number) => i + j) / 8
    ).toString();
    const LowTempSetFive = Math.round(
      LowTempFiveDays.slice(32, 40).reduce((i: number, j: number) => i + j) / 8
    ).toString();

    highTempArr = [HighTempSetOne, HighTempSetTwo, HighTempSetThree, HighTempSetFour, HighTempSetFive]
    lowTempArr = [LowTempSetOne, LowTempSetTwo, LowTempSetThree, LowTempSetFour, LowTempSetFive]
  }

  

  const FiveDayArr = [
    {
      dayOfWeek: "Today",
      highTemp: highTempArr[0],
      lowTemp: lowTempArr[0],
      condition: fiveDaysData.list[5].weather[0].main,
    },
    {
      dayOfWeek: "Tomorrow",
      highTemp: highTempArr[1],
      lowTemp: lowTempArr[1],
      condition: fiveDaysData.list[13].weather[0].main,
    },
    {
      dayOfWeek: "Wednesday",
      highTemp: highTempArr[2],
      lowTemp: lowTempArr[2],
      condition: fiveDaysData.list[21].weather[0].main,
    },
    {
      dayOfWeek: "Thursday",
      highTemp: highTempArr[3],
      lowTemp: lowTempArr[3],
      condition: fiveDaysData.list[29].weather[0].main,
    },
    {
      dayOfWeek: "Friday",
      highTemp: highTempArr[4],
      lowTemp: lowTempArr[4],
      condition: fiveDaysData.list[36].weather[0].main,
    },
  ];


  return (
    <div className="min-h-screen bg-[url(/ProjectWeatherAssets/crayon-day-time.png)] bg-no-repeat bg-cover bg-fill px-[192px] pt-[136px] pb-[76px]">
      <div className="flex mb-[62px]">
        <div>
          <WeatherImgComponent condition={oneDayData.weather[0].main} />
        </div>
        <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] w-[440px] ms-[46px] me-[54px]">
          <CityInfoComponent
            cityName={oneDayData.name}
            countryInitial={oneDayData.sys.country}
            latestTime={oneDayData.dt}
            temp={Math.round(Number(oneDayData.main.temp)).toString()}
            weather={oneDayData.weather[0].main}
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-5">
            <SearchBarComponent />
          </div>
          <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] grow">
            <MoreCityInfoComponent
              highTemp={Math.round(Number(oneDayData.main.temp_max)).toString()}
              windSpeed={Math.round(Number(oneDayData.wind.speed)).toString()}
              lowTemp={Math.round(Number(oneDayData.main.temp_min)).toString()}
              humidity={oneDayData.main.humidity}
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px]">
        <FiveDayComponent 
        arr={FiveDayArr}
        />
      </div>
    </div>
  );
};

export default WeatherPage;
