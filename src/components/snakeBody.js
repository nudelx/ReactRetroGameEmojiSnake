import React from 'react'
import { EmojiSnakeBody } from '../const/snakeIcons'

const SnakeBody = ({ y, x }) => {
  return (
    <div style={{ top: y, left: x }} className="snake-body">
      <EmojiSnakeBody />
    </div>
  )
}

export default SnakeBody
