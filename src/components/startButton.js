import React from 'react'

const StartButton = ({ onClick }) => {
  return (
    <div className="start-button">
      <div className="title">{'🤩 Welcome to Emoji Snake Game 🤩'}</div>
      <button onClick={onClick}>{'Start'}</button>
    </div>
  )
}

export default StartButton
