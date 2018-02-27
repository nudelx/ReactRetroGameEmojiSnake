import React from 'react'

const Board = ({ children, width, height }) => {
  return (
    <div
      className="game-board"
      onTouchStart={(e) => console.log(e.nativeEvent)}
      style={{ width: width + 'px', height: height + 'px' }} >
      {children}
    </div>
  )
}

export default Board
