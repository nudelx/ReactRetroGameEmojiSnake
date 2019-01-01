import React, { Component } from "react"

import "./App.css"
import "./emoji.css"
// import ReactHeader from './components/recatHeader'
import SnakeGame from "./games/snakeGame"
// import { EmojiSmileHead, makeFood } from "./const/snakeIcons"

// window.parent &&
//   window.parent.postMessage('gameLoaded', 'https://wix-incubator.github.io')

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ReactHeader /> */}
        <SnakeGame />
        {/* and more games here  */}
        {/* {makeFood().map(item => (
          <EmojiSmileHead key={item} snakeHeadindex={item} />
        ))} */}
      </div>
    )
  }
}

export default App
