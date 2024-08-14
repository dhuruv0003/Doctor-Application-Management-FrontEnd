import React from 'react'

export const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="bioImg" />
      </div>
      <div className="banner">
        <p>Biography </p>
        <h3>Who We are</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur suscipit unde molestias debitis, maiores natus beatae alias amet cupiditate veniam sit eligendi temporibus tempore ipsam inventore itaque, ducimus fugiat vero placeat obcaecati error nesciunt animi velit at. Minus, ut. Eaque?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, placeat impedit. Deleniti odit, modi cum aspernatur velit laboriosam dicta quaerat? Unde, doloribus. Unde ex maxime enim pariatur quasi repudiandae totam.
        </p>
      </div>
    </div>
  )
}
