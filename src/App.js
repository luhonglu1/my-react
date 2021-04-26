import React from 'react'
import Game from './component/Game'
import './App.css'

export const { Provider, Consumer } = React.createContext()

function App() {
  return (
    <div className="App">
      <Provider value={{ name: 'zs' }}>
        <Game></Game>
      </Provider>
    </div>
  )
}

export default App
