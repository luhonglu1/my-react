import React from 'react'
import { Consumer } from '../App.js'

const Square = ({ value, doClick }) => {
  return (
    <Consumer>
      {(data) => {
        return (
          <button className="square" onClick={doClick}>
            {value}
          </button>
        )
      }}
    </Consumer>
  )
}

export default Square
