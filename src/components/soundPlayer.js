import React from 'react'

const SoundPlayer = ({ closePlayer, sound, autoPlay, loop }) => {
  return (
    <div>
      <audio onEnded={closePlayer} autoPlay={autoPlay} loop={loop}>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default SoundPlayer
