import React, { Component } from "react"
import { snakeHead, snakeBody } from "../const/snakeIcons"
import SnakeHead from "./snakeHead"
import SnakeBody from "./snakeBody"

class Snake extends Component {
  state = {
    x: 32,
    y: 32,
    snakeHeadindex: 0,
    numOfChildren: 0,
    path: [],
    pressCode: null,
    speed: 250,
    scoreValue: 5,
    headIconChangeSpeed: 300,
    timer: null,
    calcStep: {
      ArrowUp: { axis: "y", sign: -1 },
      ArrowLeft: { axis: "x", sign: -1 },
      ArrowRight: { axis: "x", sign: 1 },
      ArrowDown: { axis: "y", sign: 1 }
    }
  }

  activateAutoRun() {
    clearInterval(this.state.timer)
    const timer = setInterval(
      () => this.updatePosition({ code: this.state.pressCode }),
      this.state.speed
    )
    this.setState({ timer })
  }

  updateSpeed() {
    if (this.state.numOfChildren % 5 === 0 && this.state.speed > 50) {
      this.setState({ speed: this.state.speed * 0.9 }, () =>
        this.activateAutoRun()
      )
    }
  }

  checkForFail() {
    const { path, x, y } = this.state
    // need to improve performance here
    path.filter(item => item.x === x && item.y === y).length &&
      this.stopTheGame()
  }

  stopTheGame() {
    clearInterval(this.state.timer)
    this.props.toggleGameFail()
  }

  magicMove(axis, axisValue) {
    const { height, width, step } = this.props
    if (axis === "y") {
      return axisValue < 0
        ? height - step
        : axisValue + step > height ? 0 : axisValue
    } else {
      return axisValue < 0
        ? width - step
        : axisValue + step > width ? 0 : axisValue
    }
  }

  addChild() {
    this.setState({ numOfChildren: this.state.numOfChildren + 1 })
  }

  updatePosition = e => {
    const { calcStep, path, numOfChildren, timer, pressCode } = this.state
    const { step, foodY, foodX, toggleFood, setScore, setPlaySound } = this.props
    if (!calcStep[e.code]) return
    const { [e.code]: { axis, sign } } = calcStep
    if (pressCode && calcStep[pressCode].axis === axis &&  sign !== calcStep[pressCode].sign) return
    const { [axis]: axisValue } = this.state
    path.push({ x: this.state.x, y: this.state.y })
    this.setState(
      {
        [axis]: this.magicMove(axis, axisValue + step * sign),
        path: numOfChildren === 0 ? [] : path.slice(-numOfChildren),
        pressCode: e.code
      },
      () => {
        if (foodY === this.state.y && foodX === this.state.x) {
          toggleFood()
          setScore(this.state.scoreValue)
          this.addChild()
          this.updateSpeed()
          setPlaySound(true)
        }
        timer === null && this.activateAutoRun()
        this.checkForFail()
      }
    )
  }

  runHeadChange() {
    const { headIconChangeSpeed } = this.state
    setInterval(
      () =>
        this.setState({
          snakeHeadindex: (this.state.snakeHeadindex + 1) % snakeHead.length
        }),
      headIconChangeSpeed
    )
  }

  componentDidMount() {
    const body = document.querySelector("body")
    body.addEventListener("keydown", this.updatePosition)
    this.runHeadChange()
  }

  render() {
    const { x, y, snakeHeadindex } = this.state
    return (
      <div className="snake">
        <SnakeHead x={x} y={y} snakeHeadindex={snakeHeadindex} />
        {this.state.path.map((item, index) => (
          <SnakeBody {...item} key={`${item.y}_${item.x}_${index}`}>
            {snakeBody}
          </SnakeBody>
        ))}
      </div>
    )
  }
}

export default Snake
