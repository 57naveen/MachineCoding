import React from 'react'

const Cards = ({image,title}) => {
  return (
    <div className='card-container'>
        <img className='card-image' src={image} alt={title} />
        <span>{title}</span>
    </div>
  )
}

export default Cards