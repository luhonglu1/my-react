import React from 'react'
// import Game from './component/Game'
// import Mouse from './component/Mouse'
// import Animation from './component/Animation'

import './App.css'
import icon from './static/imgs/11.jpg'
import { withMouse } from './HOC/withMouse'

export const { Provider, Consumer } = React.createContext()

const Position = (mouse) => {
  return (
    <img
      src={icon}
      alt=""
      style={{
        position: 'absolute',
        left: mouse.x - 5,
        top: mouse.y - 64,
        height: 64,
        weight: 64,
      }}
    />
  )
}

const MouseHOC = withMouse(Position)

function App() {
  return (
    <div className="App">
      <Provider value={{ name: 'zs' }}>
        {/* <Game></Game> */}
        {/* <Mouse
          render={(mouse) => {
            console.log(mouse)
            return (
              <img
                style={{
                  position: 'absolute',
                  left: mouse.x - 5,
                  top: mouse.y - 64,
                  height: 64,
                  weight: 64,
                }}
                src={icon}
                alt=""
              ></img>
            )
          }}
        ></Mouse> */}
        <MouseHOC></MouseHOC>
      </Provider>
    </div>
  )
}

export default App
