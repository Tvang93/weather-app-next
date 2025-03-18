'use client'

import React from 'react'
import OneDayComponent from './OneDayComponent'

const FiveDayComponent = () => {
    const arr: number[] = [1,2,3,4,5]
  return (
    <div className=''>
        <h1>5-Day Forecast</h1>
        <div className="flex justify-evenly">
            {
                arr.map((each,idx) => {
                    return (
                      <OneDayComponent key={idx} day={each}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FiveDayComponent