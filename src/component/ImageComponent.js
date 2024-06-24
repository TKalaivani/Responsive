import React from 'react'
import image from '../images/img1.jpeg'
import './ImageComponent.css';
export const ImageComponent = () => {
  return (
    <>
      <div className="image-container">
      <img src={image} className="img-fluid fullwidth" alt="Responsive image" />
      <div className="image-text">
        <h2>Computer Engineering</h2>
       <p>142,765 Computer Engineers follow this</p><br />
      </div>
    </div>
    </>

  )
}
