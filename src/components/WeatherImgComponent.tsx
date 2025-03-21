'use client'

import { useWeatherImgContext } from '@/context/WeatherImgContext'
import React, { useEffect } from 'react'

// type WeatherCondition = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds'
interface Props {
  condition: string
}

const WeatherImgComponent = (props: Props) => {
  
  const {state, dispatch} = useWeatherImgContext();

  useEffect(() => {
    console.log("Count Me")
    switch (props.condition) {
      case "Rain":
        dispatch({ type: "Rain" });
        break;
      case "Clear":
        dispatch({ type: "Clear" });
        break;
      case "Thunderstorm":
        dispatch({ type: "Thunderstorm" });
        break;
      case "Clouds":
        dispatch({ type: "Clouds" });
        break;
      case "Atmosphere":
        dispatch({ type: "Atmosphere" });
        break;
      case "Drizzle":
        dispatch({ type: "Drizzle" });
        break;
      case "Snow":
        dispatch({ type: "Snow" });
        break;
    }
  }, [props, dispatch]);


  // const {conditionImgUrl, dispatch} = useWeatherImgContext()

  // const setImgUrl = dispatch(props.condition)

  return (
    <div>
        <img className='w-[396px] h-[394px]' src={state.condition} alt={props.condition} />
    </div>
  )
}

export default WeatherImgComponent