import React from "react"
export const useGameState = () => {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [step, setStep] = React.useState(32)
  const [foodX, setFoodX] = React.useState(0)
  const [foodY, setFoodY] = React.useState(0)
  const [foodVisible, setFoodVisible] = React.useState(false)
  const [gameFail, setGameFail] = React.useState(false)
  const [playSound, setPlaySound] = React.useState(false)
  const [gameRunning, setGameRunning] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [playBGM, setPlayBGM] = React.useState(false)

  React.useEffect(() => {
    const w = window.outerWidth * 0.95
    const h = window.outerHeight * 0.7
    setWidth(w - (w % step))
    setHeight(h - (h % step))
    calcFoodPosition()
  }, [])

  const randomPosition = (max, min) => {
    return Math.floor(Math.random() * max) + min
  }

  const calcFoodPosition = () => {
    let _foodX = randomPosition(width, 0)
    let _foodY = randomPosition(height, 0)
    _foodX = _foodX - (_foodX % step)
    _foodY = _foodY - (_foodY % step)
    setFoodX(_foodX)
    setFoodY(_foodY)
    setFoodVisible(true)
  }

  const toggleFood = () => {
    setFoodVisible(!foodVisible)
    foodVisible && calcFoodPosition()
  }

  const toggleGameFail = () => {
    setGameFail(!gameFail)
  }

  const _setPlaySound = value => setPlaySound(value)

  const setGameRunningOn = () => setGameRunning(true)

  const setGameRunningOff = () => setGameRunning(false)

  const startTheGame = () => {
    setScore(0)
    setGameRunning(true)
    setGameFail(false)
  }

  const _setScore = value => setScore(score + value)

  const closePlayer = () => setPlaySound(false)

  const togglePlayBGM = () => setPlayBGM(!playBGM)
  return {
    width,
    setWidth,
    height,
    setHeight,
    step,
    setStep,
    foodX,
    setFoodX,
    foodY,
    setFoodY,
    foodVisible,
    setFoodVisible,
    gameFail,
    setGameFail,
    playSound,
    setPlaySound: _setPlaySound,
    gameRunning,
    setGameRunning,
    score,
    setScore: _setScore,
    playBGM,
    setPlayBGM,
    toggleGameFail,
    toggleFood,
    setGameRunningOn,
    setGameRunningOff,
    startTheGame,
    closePlayer,
    togglePlayBGM
  }
}
