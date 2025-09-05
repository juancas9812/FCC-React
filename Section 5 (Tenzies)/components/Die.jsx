import React from 'react'

const Die = ({value, isHeld, id, hold}) => {
  return (
    <button 
      className={isHeld ? "die die-held": "die"}
      onClick={() => hold(id)}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  )
}

export default Die