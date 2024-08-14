import React from 'react'
import frame from '../assets/Vector.png'

export const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores, voluptatum animi inventore optio aliquam odit alias tempore saepe voluptate fugiat cupiditate rerum eius maiores delectus doloribus. Magni omnis nemo aspernatur a molestias deleniti animi, suscipit voluptatibus, consectetur eligendi adipisci.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className='animated-image'/>
        <span>
          <img src={frame} alt="vector" />
        </span>
      </div>
    </div>
  )
}
