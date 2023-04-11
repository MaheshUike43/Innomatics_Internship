import React, { useState } from 'react'
import './Product.css'
import mainImg1 from '../images/image-product-1.jpg'
import mainImg2 from '../images/image-product-2.jpg'
import mainImg3 from '../images/image-product-3.jpg'
import mainImg4 from '../images/image-product-4.jpg'
import ImgTbnail1 from '../images/image-product-1-thumbnail.jpg'
import ImgTbnail2 from '../images/image-product-2-thumbnail.jpg'
import ImgTbnail3 from '../images/image-product-3-thumbnail.jpg'
import ImgTbnail4 from '../images/image-product-4-thumbnail.jpg'


export default function Product() {
    let [image, setImage] = useState(mainImg1)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 main-img'>
                    <img src={image} id='product-image' alt="" srcset="" />
                    <div className='d-flex imgThumbs'>
                        <div className='col-3 img'>
                            <img src={ImgTbnail1} onClick={()=> setImage(mainImg1)} className='img-tb-1' alt="" srcset="" />
                        </div>
                        <div className='col-3 img'>
                            <img src={ImgTbnail2} onClick={()=> setImage(mainImg2)} className='img-tb-2' alt="" srcset="" />
                        </div>
                        <div className='col-3 img'>
                            <img src={ImgTbnail3} onClick={()=> setImage(mainImg3)} className='img-tb-3' alt="" srcset="" />
                        </div>
                        <div className='col-3 img'>
                            <img src={ImgTbnail4} onClick={()=> setImage(mainImg4)} className='img-tb-4' alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
