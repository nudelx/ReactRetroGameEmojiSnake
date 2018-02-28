import React, { Component } from "react"
import Board from "../components/board"
import Snake from "../components/snake"
import Food from "../components/food"
import StartButton from "../components/startButton"
import ScoreDisplay from "../components/scoreDisplay"
import GameOver from "../components/gameOver"
import SoundPlayer from "../components/soundPlayer"
import withSFX from "../HOC/playerWithSFX"
import withBGM from "../HOC/playerWithBGM"
import SoundBGMControl from "../components/bgmControl"

const SoundPlayerSFX = withSFX(SoundPlayer)
const SoundPlayerBGM = withBGM(SoundPlayer)

class SnakeGame extends Component {
  state = {
    width: 0,
    height: 0,
    step: 32,
    foodX: 0,
    foodY: 0,
    foodVisible: false,
    gameRunning: false,
    gameFail: false,
    playSound: false,
    score: 0,
    playBGM: true
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

  toggleGameFail = () => this.setState({ gameFail: !this.state.gameFail })

  setPlaySound = value => this.setState({ playSound: value })

  randomPosition(max, min) {
    return Math.floor(Math.random() * max) + min
  }

  setGameRunningOn = () => this.setState({ gameRunning: true })

  setGameRunningOff = () => this.setState({ gameRunning: false })

  startTheGame = () =>
    this.setState({ score: 0, gameRunning: true, gameFail: false })

  setScore = value => this.setState({ score: this.state.score + value })

  closePlayer = () => this.setState({ playSound: false })

  togglePlayBGM = () => this.setState({ playBGM: !this.state.playBGM })

  calcFoodPosition() {
    let foodX = this.randomPosition(this.state.width, 0)
    let foodY = this.randomPosition(this.state.height, 0)
    foodX = foodX - foodX % this.state.step
    foodY = foodY - foodY % this.state.step
    this.setState({ foodX, foodY, foodVisible: true })
  }

  renderGame() {
    const { foodX, foodY, foodVisible, score, playSound } = this.state
    return (
      <Board {...this.state}>
        <ScoreDisplay score={score} />

        <Snake
          {...this.state}
          foodX={foodX}
          foodY={foodY}
          toggleFood={this.toggleFood}
          setScore={this.setScore}
          setPlaySound={this.setPlaySound}
          toggleGameFail={this.toggleGameFail}
        />
        {foodVisible && <Food foodX={foodX} foodY={foodY} />}
        {playSound && <SoundPlayerSFX closePlayer={this.closePlayer} />}
      </Board>
    )
  }

  render() {
    const { gameRunning, gameFail, score, playBGM } = this.state
    return (
      <div>
        {gameRunning && !gameFail ? (
          this.renderGame()
        ) : (
          <Board {...this.state}>
            {gameFail ? (
              <GameOver score={score} onClick={this.startTheGame} />
            ) : (
              <StartButton onClick={this.startTheGame} />
            )}
          </Board>
        )}
        {playBGM && <SoundPlayerBGM />}
        {
          <SoundBGMControl
            playBGM={playBGM}
            togglePlayBGM={this.togglePlayBGM}
          />
        }
      </div>
    )
  }
}

export default SnakeGame
