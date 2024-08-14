import React from 'react'

export const Depart = ({depart}) => {
  return (
    <div className='card'>
        <div className="depart-name">{depart.name}</div>
        <img src={depart.imageUrl} alt={depart.name} />
    </div>
  )
}
