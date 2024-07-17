import React from 'react'
import './Card.css'
import img4 from "../../../../assets/images/BG2@2x.png";

export default function Card({image, number, title}) {
  return (
    <div className='card'>
      
      <div class="card-content">
      <img className="card-image" src= {image} />
          <b><font class="card-number">{number}</font></b>
          <p class="card-title">{title}</p>
      </div>
    </div>
  )
}
