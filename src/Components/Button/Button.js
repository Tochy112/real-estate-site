import React from 'react'
import "./Button.css"

const Button = ({content, icon}) => {
  return (
    <div>
        <button>
          {icon}
          {content}
        </button>
    </div>
  )
}

export default Button