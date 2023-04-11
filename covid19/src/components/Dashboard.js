import React from 'react'
import './Dashboard.css'

export default function Dashboard(Props) {
    // console.log(Props.totalData)
    return (
        <div className='row dashCards'>
            <div className='col-lg-2 col-md-10 my-md-3 my-sm-3 my-3 card bg-primary'>
                <div className='card-body'>
                    <h5 className='card-title'>Total Cases</h5>
                    <p className='card-text'>{Props.totalData?.total}</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-10 my-lg-3 my-3  card bg-warning'>
                <div className='card-body'>
                    <h5 className='card-title'>Confirmed Cases</h5>
                    <p className='card-text'>{Props.totalData?.confirmedCasesIndian}</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-10 mb-lg-3 mt-md-3 mt-sm-3 my-3 card bg-success'>
                <div className='card-body'>
                    <h5 className='card-title'>Recoverd</h5>
                    <p className='card-text'>{Props.totalData?.discharged}</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-10 my-md-3 my-sm-3 my-3 card bg-danger'>
                <div className='card-body'>
                    <h5 className='card-title'>Deaths</h5>
                    <p className='card-text'>{Props.totalData?.deaths}</p>
                </div>
            </div>
        </div>
    )
}
