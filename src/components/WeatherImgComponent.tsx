'use client'

import { useWeatherImgContext } from '@/context/WeatherImgContext'
import React from 'react'

interface Props {
  condition: string
}

const WeatherImgComponent = (props: Props) => {
  // const {conditionImgUrl, dispatch} = useWeatherImgContext()

  // const setImgUrl = dispatch(props.condition)

  return (
    <div>
        <img className='w-[396px] h-[394px]' src={`/`} alt="weather icon" />
    </div>
  )
}

export default WeatherImgComponent