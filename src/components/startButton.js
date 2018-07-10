import React from 'react'
import { EmojiStar } from '../const/snakeIcons'

const StartButton = ({ onClick }) => {
  return (
    <div className="start-button">
      <div className="title">
        <EmojiStar />
        {' Welcome to Emoji Snake Game '}
        <EmojiStar />
      </div>
      <button onClick={onClick}>{'Start'}</button>
    </div>
  )
}

export default StartButton
