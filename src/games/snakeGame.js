import React from "react"
import Board from "../components/board"
import StartButton from "../components/startButton"
import GameOver from "../components/gameOver"
import SoundPlayer from "../components/soundPlayer"
import withBGM from "../HOC/playerWithBGM"
import SoundBGMControl from "../components/bgmControl"
import GameRun from "../components/GameRun"
import { useGameState } from "../hooks/gameState"

const SoundPlayerBGM = withBGM(SoundPlayer)

const SnakeGame = () => {
  const {
    foodX,
    foodY,
    foodVisible,
    score,
    playSound,
    gameRunning,
    gameFail,
    playBGM,
    width,
    height,
    step,
    toggleFood,
    setScore,
    setPlaySound,
    toggleGameFail,
    startTheGame,
    togglePlayBGM,
    closePlayer
  } = useGameState()
  const gameRunProps = {
    width,
    height,
    score,
    step,
    foodX,
    foodY,
    toggleFood,
    setScore,
    setPlaySound,
    toggleGameFail,
    closePlayer,
    foodVisible,
    playSound
  }
  console.log("width", width)
  console.log("height", height)
  return (
    <div>
      <Board width={width} height={height}>
        {gameRunning && !gameFail ? (
          <GameRun {...gameRunProps} />
        ) : gameFail ? (
          <GameOver score={score} onClick={startTheGame} />
        ) : (
          <StartButton onClick={startTheGame} />
        )}
        )}
      </Board>
      {playBGM && <SoundPlayerBGM />}
      {<SoundBGMControl playBGM={playBGM} togglePlayBGM={togglePlayBGM} />}
    </div>
  )
}

export default SnakeGame
