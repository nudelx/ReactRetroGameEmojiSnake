import React from "react"
import Board from "../components/board"
import StartButton from "../components/startButton"
import GameOver from "../components/gameOver"
import SoundPlayer from "../components/soundPlayer"
import withBGM from "../HOC/playerWithBGM"
import SoundBGMControl from "../components/bgmControl"
import GameRun from "../components/GameRun"
import { useGameHook } from "../hooks/gameHook"
import { useBorardHook } from "../hooks/boardHook"
import Loading from "../components/loading"

const SoundPlayerBGM = withBGM(SoundPlayer)

const SnakeGame = () => {
  const {
    gameFail,
    playSound,
    setPlaySound,
    gameRunning,
    score,
    setScore,
    playBGM,
    toggleGameFail,
    startTheGame,
    closePlayer,
    togglePlayBGM
  } = useGameHook()
  const {
    width,
    height,
    foodX,
    foodY,
    foodVisible,
    toggleFood,
    step
  } = useBorardHook()
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

  const runGame = gameRunning && !gameFail

  return (
    <div>
      <Board width={width} height={height} fallback={Loading}>
        {runGame ? (
          <GameRun {...gameRunProps} />
        ) : gameFail ? (
          <GameOver score={score} onClick={startTheGame} />
        ) : (
          <StartButton onClick={startTheGame} />
        )}
      </Board>
      {playBGM && <SoundPlayerBGM />}
      {<SoundBGMControl playBGM={playBGM} togglePlayBGM={togglePlayBGM} />}
    </div>
  )
}

export default SnakeGame
