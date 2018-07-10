import React from 'react'
import { GameOverIcon } from '../const/snakeIcons'

const GameOver = ({ onClick, score }) => {
  return (
    <div className="game-over">
      <div className="fog" />
      <div className="text">
        <div>
          <GameOverIcon />
          {` Game Over `}
          <GameOverIcon />
        </div>
        <div>{`Score: ${score}`}</div>
        <div className="btn-holder">
          <button onClick={onClick}>{'Play Again'}</button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
