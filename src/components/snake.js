import React from "react"
import SnakeHead from "./snakeHead"
import SnakeBody from "./snakeBody"
import { useSnakeHook } from "../hooks/snakeHook"
const calcStep = {
  ArrowUp: { axis: "y", sign: -1 },
  ArrowLeft: { axis: "x", sign: -1 },
  ArrowRight: { axis: "x", sign: 1 },
  ArrowDown: { axis: "y", sign: 1 }
}

const Snake = props => {
  const {
    x,
    y,
    snakeHeadindex,
    numOfChildren,
    path,
    pressCode,
    speed,
    scoreValue,
    timer,
    setTimer,
    setSpeed,
    setNumOfChildren,
    setX,
    setY,
    setPath,
    setPressCode
  } = useSnakeHook()

  const updateSpeed = () => {
    if (numOfChildren % 5 === 0 && speed > 50) {
      setSpeed(speed * 0.9)
    }
  }

  const checkForFail = () => {
    // need to improve performance here
    path.filter(item => item.x === x && item.y === y).length && stopTheGame()
  }

  const stopTheGame = () => {
    clearInterval(timer)
    props.toggleGameFail()
  }

  const magicMove = (axis, axisValue) => {
    const { height, width, step } = props
    if (axis === "y") {
      return axisValue < 0
        ? height - step
        : axisValue + step > height
        ? 0
        : axisValue
    } else {
      return axisValue < 0
        ? width - step
        : axisValue + step > width
        ? 0
        : axisValue
    }
  }

  const addChild = () => {
    setNumOfChildren(numOfChildren + 1)
  }

  const updatePosition = e => {
    const { step } = props
    if (!calcStep[e.code]) return
    const {
      [e.code]: { axis, sign }
    } = calcStep
    if (
      pressCode &&
      calcStep[pressCode].axis === axis &&
      sign !== calcStep[pressCode].sign
    )
      return
    // const { [axis]: axisValue } = this.state
    const axisValue = axis === "x" ? x : y

    path.push({ x, y })
    const update = magicMove(axis, axisValue + step * sign)
    axis === "x" ? setX(update) : setY(update)
    setPath(numOfChildren === 0 ? [] : path.slice(-numOfChildren))
    setPressCode(e.code)
  }

  React.useEffect(
    () => {
      const { foodY, foodX, toggleFood, setScore, setPlaySound } = props
      const timetRun = setInterval(function() {
        updatePosition({ code: pressCode })
      }, speed)

      if (foodY === y && foodX === x) {
        toggleFood()
        setScore(scoreValue)
        addChild()
        updateSpeed()
        setPlaySound(true)
      }
      checkForFail()
      return () => clearInterval(timetRun)
    },
    [pressCode, speed, path, y, x]
  )

  React.useEffect(() => {
    const body = document.querySelector("body")
    body.addEventListener("keydown", e => setPressCode(e.code))
  }, [])

  return (
    <div className="snake">
      <SnakeHead x={x} y={y} snakeHeadindex={snakeHeadindex} />
      {path.map((item, index) => (
        <SnakeBody {...item} key={`${item.y}_${item.x}_${index}`} />
      ))}
    </div>
  )
}

export default Snake
