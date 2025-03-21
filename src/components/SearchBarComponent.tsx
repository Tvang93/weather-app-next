'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBarComponent = () => {
  const { push } = useRouter();

  const [city, setCity] = useState('')

  const handleSubmit = () => {
    push(`./weather/${city}`)
  }

  return (
    <div className="flex">
      <div className="border-2 rounded-s-4xl bg-[#99D9EA]">
        <button>
          <img
            className="w-[30px] h-[30px] m-3"
            src="/ProjectWeatherAssets/star.png"
            alt="star"
          />
        </button>
      </div>
      <div className="border-t-2 border-b-2 bg-[#99D9EA] grow">
        <input className="h-[58px] w-[484px] grow text-4xl focus:outline-0" 
        type="text" 
        placeholder="Search a City"
        onChange={(e)=> setCity(e.target.value)}
        />
      </div>
      <div className="border-2 rounded-e-4xl bg-[#99D9EA]">
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
