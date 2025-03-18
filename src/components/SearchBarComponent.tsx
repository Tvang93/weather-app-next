import React from "react";

const SearchBarComponent = () => {
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
        <input className="h-[42px]" type="text" placeholder="Search a City" />
      </div>
      <div className="border-2 rounded-e-4xl bg-[#99D9EA]">
        <button>
          <img
            className="w-[30px] h-[30px] m-3"
            src="/ProjectWeatherAssets/magnifying-glass.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBarComponent;
