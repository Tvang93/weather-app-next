'use client'

import { createContext, useContext, useState } from "react";



interface Context {
    temp: string;
    setTemp: (tempAmount: string) => void
    isFahrenheit: boolean
    setIsFahrenheit: (isTrue: boolean) => void
}

const AppContext = createContext<Context>({
    temp: '',
    setTemp: (tempAmount: string) => '',
    isFahrenheit: true,
    setIsFahrenheit: (isTrue: boolean) => true
})

export function AppWrapper({children}: {children: React.ReactNode}) {
    const [temp, setTemp] = useState('');
    const [isFahrenheit, setIsFahrenheit] = useState(true)

    return (
        <AppContext.Provider value={ {temp, setTemp, isFahrenheit, setIsFahrenheit} }>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}