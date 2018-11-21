import React from "react"
import { TOTAL_HEADS } from "../const/snakeIcons"

export const useSnakeHook = () => {
  const [x, setX] = React.useState(32)
  const [y, setY] = React.useState(32)
  const [snakeHeadindex, setSnakeHeadindex] = React.useState(2)
  const [numOfChildren, setNumOfChildren] = React.useState(0)
  const [path, setPath] = React.useState([])
  const [pressCode, setPressCode] = React.useState(null)
  const [speed, setSpeed] = React.useState(250)
  const [scoreValue, setScoreValue] = React.useState(5)
  const [headIconChangeSpeed, setHeadIconChangeSpeed] = React.useState(300)
  const [timer, setTimer] = React.useState(null)

  React.useEffect(function() {
    const timer = setInterval(function() {
      setSnakeHeadindex((snakeHeadindex + 1) % TOTAL_HEADS)
    }, headIconChangeSpeed)
    return () => clearInterval(timer)
  })

  return {
    x,
    setX,
    y,
    setY,
    snakeHeadindex,
    setSnakeHeadindex,
    numOfChildren,
    setNumOfChildren,
    path,
    setPath,
    pressCode,
    setPressCode,
    speed,
    setSpeed,
    scoreValue,
    setScoreValue,
    headIconChangeSpeed,
    setHeadIconChangeSpeed,
    timer,
    setTimer
  }
}
