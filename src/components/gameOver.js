import React from "react"
import { gameOverIcon } from "../const/snakeIcons"

const GameOver = ({ onClick, score }) => {
  return (
    <div className="game-over">
      <div className="fog" />
      <div className="text">
        <div>{`${gameOverIcon} Game Over ${gameOverIcon}`}</div>
        <div>{`Score: ${score}`}</div>
        <div className='btn-holder'><button onClick={onClick}>{'Play Again'}</button></div>
      </div>
    </div>
  )
}

export default GameOver
