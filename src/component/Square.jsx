import React from 'react'

const Square = ({ value, doClick }) => {
  return (
    <button className="square" onClick={doClick}>
      {value}
    </button>
  )
}

export default Square
