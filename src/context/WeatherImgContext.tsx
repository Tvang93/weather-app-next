'use client'

import { createContext, useContext, useState } from "react";



interface ConditionType {
    conditionImgUrl: string,
    dispatch: (weather: string) => void
}


//<CounterContextType | undefined>(undefined) ask why we define instea of leaving it undefined
const WeatherImgContext = createContext<ConditionType>({
    conditionImgUrl: '',
    dispatch: (weather: string) => ''
})

export function WeatherImgWrapper({children}: {children: React.ReactNode}) {
    const [conditionImgUrl, setConditionImgUrl] = useState('/')

    const dispatch = (weather: string) => {
        switch(weather) {
            case 'Thunderstorm':
                setConditionImgUrl('/ProjectWeatherAssets/storm.png')
                break;
            case 'Drizzle':
                setConditionImgUrl('/ProjectWeatherAssets/rain.png')
                break;
            case 'Rain':
                setConditionImgUrl('/ProjectWeatherAssets/rainy.png')
                break;
            case 'Snow':
                setConditionImgUrl('/ProjectWeatherAssets/snow.png')
                break;
            case 'Atmosphere':
                setConditionImgUrl('/ProjectWeatherAssets/fog.png')
                break;
            case 'Clear':
                setConditionImgUrl('/ProjectWeatherAssets/sunny.png')
                break;
            case 'Clouds':
                setConditionImgUrl('/ProjectWeatherAssets/cloud.png')
                break;
            default:
                throw new Error(`Unhandled weather type: ${weather}`);
        }
    }
    
    return (
        <WeatherImgContext.Provider value={ {conditionImgUrl, dispatch} }>
            {children}
        </WeatherImgContext.Provider>
    )
}

export function useWeatherImgContext(){
    return useContext(WeatherImgContext)
}