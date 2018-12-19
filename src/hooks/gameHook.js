import React from "react"
export const useGameHook = () => {
  const [gameFail, setGameFail] = React.useState(false)
  const [playSound, setPlaySound] = React.useState(false)
  const [gameRunning, setGameRunning] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [playBGM, setPlayBGM] = React.useState(false)

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
    setGameRunningOn,
    setGameRunningOff,
    startTheGame,
    closePlayer,
    togglePlayBGM
  }
}
