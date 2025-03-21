import CityInfoComponent from "@/components/CityInfoComponent";
import FiveDayComponent from "@/components/FiveDayComponent";
import MoreCityInfoComponent from "@/components/MoreCityInfoComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import WeatherImgComponent from "@/components/WeatherImgComponent";
import { getCurrentDayData, getFiveDayData } from "@/lib/services";
import React from "react";

const WeatherPage = async({params}: {params: Promise<{city: string}>}) => {
    const {city} = await params

  

//   const oneDayData = await getCurrentDayData(city);
//   console.log(oneDayData);
//   const fiveDaysData = await getFiveDayData(oneDayData.coord.lat, oneDayData.coord.lon);
//   console.log(fiveDaysData)

  return (
    <div className="min-h-screen bg-[url(/ProjectWeatherAssets/crayon-day-time.png)] bg-no-repeat bg-cover bg-fill px-[192px] pt-[136px] pb-[76px]">
      <div className="flex mb-[62px]">
        <div>
          <WeatherImgComponent 
            condition={`Clear`}
          />
        </div>
        <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] w-[440px] ms-[46px] me-[54px]">
          <CityInfoComponent 
            cityName={`string`}
            countryInitial={`string`}
            latestTime={`string`}
            temp={`12`}
            weather={`string`}
          />
        </div>
        <div className="flex flex-col grow">
          <div className="mb-5">
            <SearchBarComponent />
          </div>
          <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] grow">
            <MoreCityInfoComponent 
                highTemp={`64`}
                windSpeed={`2`}
                lowTemp={`20`}
                humidity={`65`}
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px]">
        <FiveDayComponent />
      </div>
    </div>
  );
};

export default WeatherPage;
