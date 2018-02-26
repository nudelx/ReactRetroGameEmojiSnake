import React from "react"

const ScoreDisplay = ({ score }) => {
  return (
    <div className={"score-display"}>
      <div>{` Score: ${score}`}</div>
    </div>
  )
}

export default ScoreDisplay
