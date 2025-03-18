import CityInfoComponent from "@/components/CityInfoComponent";
import FiveDayComponent from "@/components/FiveDayComponent";
import MoreCityInfoComponent from "@/components/MoreCityInfoComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import WeatherImgComponent from "@/components/WeatherImgComponent";
import React from "react";

const WeatherPage = () => {
  return (
    <div className="min-h-screen bg-[url(/ProjectWeatherAssets/crayon-day-time.png)] bg-no-repeat bg-cover bg-fill px-[192px] pt-[136px] pb-[76px]">
      <div className="flex mb-[62px]">
        <div>
          <WeatherImgComponent />
        </div>
        <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] w-[440px] h-[394px] ms-[46px] me-[54px]">
          <CityInfoComponent />
        </div>
        <div className="flex flex-col grow">
          <div className="mb-5">
            <SearchBarComponent />
          </div>
          <div className="bg-[rgb(255,255,255,0.6)] rounded-[15px] grow">
            <MoreCityInfoComponent />
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
