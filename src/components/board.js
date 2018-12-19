import React from "react"

const Board = ({ children, width, height, fallback }) => {
  const isReady = !!width + height
  return (
    <div
      className={isReady ? "game-board" : ""}
      style={{ width: width + "px", height: height + "px" }}
    >
      {isReady ? children : fallback()}
    </div>
  )
}

export default Board
