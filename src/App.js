import React, { Component } from "react"

import "./App.css"
import "./emoji.css"
// import ReactHeader from './components/recatHeader'
import SnakeGame from "./games/snakeGame"
// window.parent &&
//   window.parent.postMessage('gameLoaded', 'https://wix-incubator.github.io')

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ReactHeader /> */}
        <SnakeGame />
        {/* and more games here  */}
      </div>
    )
  }
}

export default App
