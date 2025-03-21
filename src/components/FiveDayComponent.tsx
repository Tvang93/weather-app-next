'use client'

import React from 'react'
import OneDayComponent from './OneDayComponent'

const FiveDayComponent = () => {
  const arr = [
    { dayOfWeek: "Today", highTemp: "45", lowTemp: "25", condition: "Clear" },
    { dayOfWeek: "Tomorrow", highTemp: "46", lowTemp: "26", condition: "Rain" },
    { dayOfWeek: "Wednesday", highTemp: "47", lowTemp: "27", condition: "Storm" },
    { dayOfWeek: "Thursday", highTemp: "48", lowTemp: "28", condition: "Atmosphere" },
    { dayOfWeek: "Friday", highTemp: "49", lowTemp: "29", condition: "Rain" },
  ];
  return (
    <div className=''>
        <h1 className='text-5xl'>5-Day Forecast</h1>
        <div className="flex justify-evenly">
            {
                arr.map((each,idx) => {
                    return (
                      <OneDayComponent 
                      key={idx} 
                      dayOfWeek={each.dayOfWeek} 
                      highTemp={each.highTemp}
                      lowTemp={each.lowTemp}
                      condition={each.condition}
                      />
                    )
                })
            }
        </div>
    </div>
  )
}

export default FiveDayComponent