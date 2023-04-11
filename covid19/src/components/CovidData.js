import React from 'react'
import './CovidData.css'

export default function CovidData(Props) {
    // console.log(Props.stateData)
    return (
        <div className='card covidCards'>
            <h4 className='card-header m-0'>{Props.location}</h4>
            <div className='card-body d-flex'>
                <div className='head'>
                    <p className='card-text'>Confirmed</p>
                    <p className='card-text'>Recoverd</p>
                    <p className='card-text'>Deaths</p>

                </div>
                <div className='res'>
                    <p className='card-text'>: {Props.caseIndia}</p>
                    <p className='card-text'>: {Props.dischrg}</p>
                    <p className='card-text'>: {Props.death}</p>

                </div>
            </div>
            <h4 className='card-footer m-0'>Total Cases: {Props.total}</h4>
        </div>
    )
}

