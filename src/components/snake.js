import React, { Component } from 'react'
import { snakeHead } from '../const/snakeIcons'
class Snake extends Component {
  state = {
    x: 32,
    y: 32,
    snakeHeadindex: 0,
    calcStep: {
      KeyI: { axis: 'y', sign: -1 },
      KeyJ: { axis: 'x', sign: -1 },
      KeyL: { axis: 'x', sign: 1 },
      KeyK: { axis: 'y', sign: 1 }
    }
  }

  magicMove(axis, axisValue) {
    const { height, width, step } = this.props
    if (axis === 'y') {
      return axisValue < 0
        ? height - step
        : axisValue + step > height ? 0 : axisValue
    } else {
      return axisValue < 0
        ? width - step
        : axisValue + step > width ? 0 : axisValue
    }
  }

  updatePosition = e => {
    const { calcStep } = this.state
    const { step, foodY, foodX, toggleFood } = this.props
    if (!calcStep[e.code]) return
    const { [e.code]: { axis, sign } } = calcStep
    const { [axis]: axisValue } = this.state

    this.setState(
      {
        [axis]: this.magicMove(axis, axisValue + step * sign)
      },
      () => {
        if (foodY === this.state.y && foodX === this.state.x) {
          toggleFood()
        }
      }
    )
  }

  componentDidMount() {
    const body = document.querySelector('body')
    body.addEventListener('keypress', this.updatePosition)
    this.runHeadChange()
  }

  runHeadChange() {
    setInterval(
      () =>
        this.setState({
          snakeHeadindex: (this.state.snakeHeadindex + 1) % snakeHead.length
        }),
      300
    )
  }

  render() {
    return (
      <div className="snake">
        <div
          className="snake-head"
          style={{ top: this.state.y, left: this.state.x }}>
          {snakeHead[this.state.snakeHeadindex]}
        </div>
      </div>
    )
  }
}

export default Snake
