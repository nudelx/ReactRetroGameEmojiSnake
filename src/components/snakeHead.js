import React from 'react'
import { EmojiSmileHead } from '../const/snakeIcons'

const SnakeHead = ({ y, x, snakeHeadindex }) => {
  return (
    <div className="snake-head" style={{ top: y, left: x }}>
      <EmojiSmileHead snakeHeadindex={snakeHeadindex} />
    </div>
  )
}

export default SnakeHead
