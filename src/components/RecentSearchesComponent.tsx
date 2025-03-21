"use client";

import {
  getHistoryFromLocalStorage,
  removeFavorites,
  saveToFavorites,
} from "@/lib/localStorage";
import React, { use, useState } from "react";

const RecentSearchesComponent = () => {
  const [isFavored, setIsFavored] = useState<boolean>(false);
  let SearchHistory: string[] = getHistoryFromLocalStorage();

  return (
    <div className="grow">
      <h1 className="text-4xl">
        <u>Recent Searches</u>
      </h1>
      {SearchHistory.map((each: string, key: number) => {
        return (
          <div className="flex justify-between" key={key}>
            <h1 className="text-4xl">{each}</h1>
            <img
              className="w-[42px]"
              src={`${
                isFavored
                  ? `/ProjectWeatherAssets/filled_star.png`
                  : `/ProjectWeatherAssets/star.png`
              }`}
              alt="star"
              onClick={() =>  saveToFavorites(each)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecentSearchesComponent;
