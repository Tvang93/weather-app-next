'use client'

import { saveToSearchHistory } from "@/lib/localStorage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import RecentSearchesComponent from "./RecentSearchesComponent";

const SearchBarComponent = () => {
  const { push } = useRouter();

  const [city, setCity] = useState<string>('');

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSubmit = () => {
    if(city != null && city != "") saveToSearchHistory(city);
    push(`/weather/${city}`)
  }

  return (
    <div className="flex">
      <div className="border-2 rounded-s-4xl bg-[#99D9EA] shrink-0">
        <button>
          <img
            className="w-[30px] h-[30px] m-3"
            src="/ProjectWeatherAssets/star.png"
            alt="star"
          />
        </button>
      </div>
      <div className="flex border-t-2 border-b-2 bg-[#99D9EA] relative">
        <input 
        id="SearchBarField"
        className="h-[58px] max-w-[484px] text-4xl focus:outline-0" 
        type="text" 
        placeholder="Search a City"
        onFocus={()=>setIsActive(true)}
        onBlur={()=>setIsActive(false)}
        onChange={(e)=> setCity(e.target.value)}
        />
        <div className={`top-16 bg-[#99D9EA] flex p-5 w-[100%] ${isActive ? `absolute ` : `hidden`}`}>
          <RecentSearchesComponent />
        </div>
      </div>
      <div className="border-2 rounded-e-4xl bg-[#99D9EA] shrink-0">
        <button>
          <img
            className="w-[30px] h-[30px] m-3"
            src="/ProjectWeatherAssets/magnifying-glass.png"
            alt="magnifying glass"
            onClick={handleSubmit}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBarComponent;
