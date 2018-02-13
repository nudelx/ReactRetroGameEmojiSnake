import React, { Component } from 'react'
import Board from '../components/board'
import Snake from '../components/snake'
import Food from '../components/food'
import StartButton from '../components/startButton'

class SnakeGame extends Component {
  state = {
    width: 0,
    height: 0,
    step: 32,
    foodX: 0,
    foodY: 0,
    foodVisible: false,
    gameRunning: false
  }
  componentWillMount() {
    this.setBackgroudDimensions()
  }

  setBackgroudDimensions() {
    const w = window.outerWidth * 0.95
    const h = window.outerHeight * 0.7
    this.setState(
      {
        width: w - w % this.state.step,
        height: h - h % this.state.step
      },
      () => this.calcFoodPosition()
    )
  }

  toggleFood = () =>
    this.setState(
      { foodVisible: !this.state.foodVisible },
      () => !this.state.foodVisible && this.calcFoodPosition()
    )

  randomPosition(max, min) {
    return Math.floor(Math.random() * max) + min
  }

  startTheGame = () => this.setState({ gameRunning: true })

  calcFoodPosition() {
    let foodX = this.randomPosition(this.state.width, 0)
    let foodY = this.randomPosition(this.state.height, 0)
    foodX = foodX - foodX % this.state.step
    foodY = foodY - foodY % this.state.step
    this.setState({ foodX, foodY, foodVisible: true })
  }

  renderGame() {
    const { foodX, foodY, foodVisible } = this.state
    return (
      <Board {...this.state}>
        <Snake
          {...this.state}
          foodX={foodX}
          foodY={foodY}
          toggleFood={this.toggleFood}
        />
        {foodVisible && <Food foodX={foodX} foodY={foodY} />}
      </Board>
    )
  }

  render() {
    const { gameRunning } = this.state
    return (
      <div>
        {gameRunning ? (
          this.renderGame()
        ) : (
          <Board {...this.state}>
            {' '}
            <StartButton onClick={this.startTheGame} />{' '}
          </Board>
        )}
        <div className='tuts'>{'Use: J,K,L,I to navigate'}</div>
      </div>
    )
  }
}

export default SnakeGame
