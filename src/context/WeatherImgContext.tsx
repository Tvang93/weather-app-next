'use client'

import React, { useReducer } from "react";
import { createContext, useContext, useState } from "react";



// type WeatherTypes = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds'

type WeatherURL = '/ProjectWeatherAssets/storm.png' | '/ProjectWeatherAssets/rain.png' | '/ProjectWeatherAssets/rainy.png' | '/ProjectWeatherAssets/snow.png' | '/ProjectWeatherAssets/fog.png' | '/ProjectWeatherAssets/sunny.png' | '/ProjectWeatherAssets/cloud.png'

interface WeatherCondition {
    condition: WeatherURL;
}
interface WeatherAction {
    type: 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds'
}

const initialState: WeatherCondition = { condition: "/ProjectWeatherAssets/sunny.png"}


const WeatherImgReducer: (state: WeatherCondition, action: WeatherAction) => WeatherCondition = (state: WeatherCondition, action: WeatherAction) => {
        switch(action.type) {
            case 'Thunderstorm':
                return {condition: "/ProjectWeatherAssets/storm.png"};
            case 'Drizzle':
                return {condition: "/ProjectWeatherAssets/rain.png"}
            case 'Rain':
                return {condition:'/ProjectWeatherAssets/rainy.png'}
            case 'Snow':
                return {condition:'/ProjectWeatherAssets/snow.png'}
            case 'Atmosphere':
                return {condition:'/ProjectWeatherAssets/fog.png'}
            case 'Clear':
                return {condition:'/ProjectWeatherAssets/sunny.png'}
            case 'Clouds':
                return {condition:'/ProjectWeatherAssets/cloud.png'}
            default:
                throw new Error(`Unhandled weather type: ${action.type}`);
        }
    }

// interface ConditionType {
//     conditionImgUrl: string,
//     dispatch: (weather: WeatherType) => void
// }


//<CounterContextType | undefined>(undefined) ask why we define instea of leaving it undefined
const WeatherImgContext = createContext<{
    state: WeatherCondition;
    dispatch: React.Dispatch<WeatherAction>
} | undefined>(undefined)

export function WeatherImgWrapper({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(WeatherImgReducer, initialState)

    
    
    return (
        <WeatherImgContext.Provider value={ {state, dispatch} }>
            {children}
        </WeatherImgContext.Provider>
    )
}

export function useWeatherImgContext(){
    const context = useContext(WeatherImgContext);
    if (!context) {
        throw new Error("useWeatherImgContext must be used within a WeatherImgWrapper");
    }
    return context;
}