"use client";

import {
  getHistoryFromLocalStorage,
  removeFavorites,
  saveToFavorites,
} from "@/lib/localStorage";
import React, { useState } from "react";

const RecentSearchesComponent = () => {
  const [isFavored, setIsFavored] = useState<boolean>(false);
  const SearchHistory: string[] = getHistoryFromLocalStorage();

const SaveOnClick = (each: string) => {
  saveToFavorites(each);
  setIsFavored(true)
}

const RemoveOnClick = (param: string) => {
  removeFavorites(param);
  setIsFavored(false)
}

  return (
    <div className="grow">
      <h1 className="text-4xl">
        <u>Recent Searches</u>
      </h1>
      {  getHistoryFromLocalStorage() !== undefined ?
        SearchHistory.map((each: string, key: number) => {
        return (
          <div key={key} className="flex justify-between" >
            <h1 className="text-4xl">{each}</h1>
            <img
              className="w-[42px]"
              src={`${
                isFavored
                  ? `/ProjectWeatherAssets/filled_star.png`
                  : `/ProjectWeatherAssets/star.png`
              }`}
              alt="star"
              onClick={isFavored ? () => RemoveOnClick(each) : () => SaveOnClick(each)}
            />
          </div>
        );
      }) :
      <></>
    }
    </div>
  );
};

export default RecentSearchesComponent;
