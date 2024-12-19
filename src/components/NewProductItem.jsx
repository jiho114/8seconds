import React from 'react'
import { womenNewProductItem } from '../womenData'
import { menNewProductItem } from '../menData'
import './NewProductItem.css'

function NewProductItem({activeButton, navbarTap}) {
    const images = navbarTap === "WOMEN" ? womenNewProductItem[activeButton]  || []  : menNewProductItem[activeButton]  || [] ;

  return (
    <div className='NewProductItem'>
        <div className="imageContainer">
            {images.map((src, idx) => (
                <img key={idx} src={src} alt="신상품"></img>
            ))}
        </div>
    </div>
  )
}

export default NewProductItem