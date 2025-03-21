import { APIKEY } from "@/something"

export const getCurrentDayData = async(city: string) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${APIKEY}&units=imperial`, {
        cache: "force-cache"
    });
    const data = await response.json();
    return data;
}

export const getFiveDayData = async(lat: string, lon: string) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`, {
        cache: "force-cache"
    });
    const data = await response.json();
    return data;
}