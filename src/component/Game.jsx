import React, { Component } from 'react'
import Board from './Board'
import { results } from './../utils/consts'
import JumpList from './JumpList'

class Game extends Component {
  state = {
    history: [
      [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    ],
    activeValue: 'O',
  }

  componentDidUpdate(preProps, preState) {
    console.log(this.state.activeValue)
    console.log(preState.activeValue)
  }

  handleSquareClick(idx, idx2) {
    let historyCopy = this.state.history
    let firstArr = JSON.parse(JSON.stringify(historyCopy[0]))
    if (firstArr[idx][idx2] || this.calculateWinner(firstArr)) return
    let activeValue = this.state.activeValue === 'X' ? 'O' : 'X'
    firstArr[idx][idx2] = activeValue
    this.setState({
      history: [firstArr, ...historyCopy],
      activeValue: activeValue,
    })
  }

  handleStepClick(move) {
    let backList = this.state.history.slice(-move - 1)
    if (!move) {
      backList = [this.state.history[this.state.history.length - 1]]
    }
    this.setState({
      history: backList,
    })
  }

  calculateWinner(squares) {
    let flatArr = squares.flat()
    for (let i = 0; i < results.length; i++) {
      const [a, b, c] = results[i]
      if (
        flatArr[a] &&
        flatArr[a] === flatArr[b] &&
        flatArr[a] === flatArr[c]
      ) {
        return flatArr[a]
      }
    }
    return null
  }

  render() {
    const { history, activeValue } = this.state

    const winner = this.calculateWinner(history[0])

    let gameStatus = ''

    if (winner) {
      gameStatus = `Winner: ${winner}`
    } else {
      gameStatus = `Next player: ${activeValue === 'X' ? 'O' : 'X'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={history[0]}
            doClick={(idx, idx2) => this.handleSquareClick(idx, idx2)}
          ></Board>
        </div>
        <div className="game-info">
          <div>{gameStatus}</div>
          <ol>
            <JumpList
              history={history}
              doClick={(move) => this.handleStepClick(move)}
            ></JumpList>
          </ol>
        </div>
      </div>
    )
  }
}

export default Game
