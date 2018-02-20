import React from "react"
import * as SFX from "../sounds/snap.mp3"

const SoundPlayer = ({closePlayer}) => {
  return (
    <div>
      <audio onEnded={closePlayer} autoPlay>
        <source src={SFX} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default SoundPlayer
