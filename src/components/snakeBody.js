import React from "react"
import { snakeBody } from "../const/snakeIcons"

const SnakeBody = ({ y, x }) => {
  return (
    <div style={{ top: y, left: x }} className="snake-body">
      {snakeBody}
    </div>
  )
}

export default SnakeBody
