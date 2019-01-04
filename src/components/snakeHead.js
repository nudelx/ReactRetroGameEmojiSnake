import React from 'react'
import { EmojiSmileHead } from '../const/snakeIcons'
import { TOTAL_HEADS } from '../const/snakeIcons'

const SnakeHead = ({ y, x }) => {
  const [headIndex, setHeadIndex] = React.useState(0)

  React.useEffect(
    () => {
      const interval = setInterval(
        () => setHeadIndex((headIndex + 1) % TOTAL_HEADS),
        200
      )

      return () => clearInterval(interval)
    },
    [headIndex]
  )

  return (
    <div className="snake-head" style={{ top: y, left: x }}>
      <EmojiSmileHead snakeHeadindex={headIndex} />
    </div>
  )
}

export default SnakeHead
