import React from "react"
import { snakeHead } from "../const/snakeIcons"

const SnakeHead = ({ y, x, snakeHeadindex }) => {
  return (
    <div className="snake-head" style={{ top: y, left: x }}>
      {snakeHead[snakeHeadindex]}
    </div>
  )
}

export default SnakeHead
