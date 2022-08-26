import React from 'react'
import "./Card.css"

const Card = ({icon, title, body}) => {
  return (
    <div>
        <div className='card'>
            <div className='card-icon'>
                <img src={icon} alt="icon" />
            </div>

            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    </div>
  )
}

export default Card