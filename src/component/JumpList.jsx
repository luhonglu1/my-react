import React from 'react'

const JumpList = ({ history, doClick }) => {
  history = history.reverse()
  return history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : `Go to game start`
    return (
      <li key={move}>
        <button onClick={() => doClick(move)}>{desc}</button>
      </li>
    )
  })
}

export default JumpList
