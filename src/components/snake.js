import React, { Component } from 'react'
import { snakeHead } from '../const/snakeIcons'
class Snake extends Component {
  state = {
    x: 32,
    y: 32,
    snakeHeadindex: 0,
    numOfChildren: 0,
    path: [],
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

  addChild() {
    this.setState({ numOfChildren: this.state.numOfChildren + 1 })
  }

  updatePosition = e => {
    const { calcStep, path, numOfChildren } = this.state
    const { step, foodY, foodX, toggleFood } = this.props
    if (!calcStep[e.code]) return
    const { [e.code]: { axis, sign } } = calcStep
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
          this.addChild()
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
        {this.state.path.map((item, index) => (
          <div
            key={`${item.y}_${item.x}_${index}`}
            style={{ top: item.y, left: item.x }}
            className="snake-body">
            {'🌕'}
          </div>
        ))}
      </div>
    )
  }
}

export default Snake
