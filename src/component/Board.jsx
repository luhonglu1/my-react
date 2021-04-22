import React from 'react'
import Square from './Square'

const Board = ({ doClick, squares }) => {
  return (
    <div>
      {squares.map((row, idx) => {
        return (
          <div className="board-row" key={idx}>
            {row.map((col, idx2) => {
              return (
                <Square
                  doClick={() => doClick(idx, idx2)}
                  value={col}
                  key={idx2}
                ></Square>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
