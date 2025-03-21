'use client'

import React from 'react'
import OneDayComponent from './OneDayComponent'

interface PropObjects {
  dayOfWeek: string;
  highTemp: string;
  lowTemp: string;
  condition: string;
}
interface Props {
  arr: PropObjects[]
}


const FiveDayComponent = (props: Props) => {
  console.log(props.arr)
  return (
    <div className=''>
        <h1 className='text-5xl'>5-Day Forecast</h1>
        <div className="flex justify-evenly">
            {
                props.arr.map((each,idx) => {
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