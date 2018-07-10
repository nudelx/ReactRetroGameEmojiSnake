import React from 'react'

const SoundBGMControl = ({ playBGM, togglePlayBGM }) => (
  <div className="sound-bgm-control" onClick={togglePlayBGM}>
    {playBGM ? '🔈' : '🔇'}
  </div>
)

export default SoundBGMControl
