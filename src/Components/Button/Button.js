import React from 'react'
import "./Button.css"

const Button = ({content}) => {
  return (
    <div>
        <button>{content}</button>
    </div>
  )
}

export default Button