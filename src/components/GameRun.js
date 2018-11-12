import React from "react"
import ScoreDisplay from "./scoreDisplay"
import Snake from "./snake"
import Food from "./food"
import SoundPlayer from "./soundPlayer"
import withSFX from "../HOC/playerWithSFX"

const SoundPlayerSFX = withSFX(SoundPlayer)

const GameRun = ({
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
}) => {
  return (
    <div>
      <ScoreDisplay score={score} />
      <Snake
        step={step}
        width={width}
        height={height}
        foodX={foodX}
        foodY={foodY}
        toggleFood={toggleFood}
        setScore={setScore}
        setPlaySound={setPlaySound}
        toggleGameFail={toggleGameFail}
      />
      {foodVisible && <Food foodX={foodX} foodY={foodY} />}
      {playSound && <SoundPlayerSFX closePlayer={closePlayer} />}
    </div>
  )
}

export default GameRun
