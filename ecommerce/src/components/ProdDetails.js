import React, { useState } from 'react'
import './ProdDetails.css'
import add from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'

export default function ProdDetails() {
    let [count, setCount] = useState(0);

    return (
        <div className='conatiner'>
            <div className='row prodDetails'>
                <div className='col-12'>
                    <p className='comp-name'>SNEAKER COMPANY</p>
                    <h1 className='prod-name fw-bold'>Fall Limited Edition Sneakers</h1>
                    <p className='details'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div className='d-flex'>
                        <h3 className='price fw-bold'>$125.00</h3>
                        <p className='disc'>50%</p>
                    </div>
                    <p class='text-decoration-line-through fw-bold' style={{color:'#dadada'}}>$250.00</p>
                    <div className='buttons d-flex'>
                        <div className="incDec-btn me-3" role="group" aria-label="Basic example">
                            <button type="button " className='btn-dec' onClick={(count>0)?()=> setCount(--count):null}>
                                <img src={minus} alt="" />
                            </button>
                            <button type="text" class="value">{count}</button>
                            <button type="button" className='btn-inc' onClick={()=> setCount(++count)}>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <button className='addcart-btn fw-bold' aria-label="Basic example">
                            <i className='bi bi-cart3 me-3'></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
