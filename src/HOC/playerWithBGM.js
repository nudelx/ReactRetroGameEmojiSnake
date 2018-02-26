import React, { Component } from "react"
import * as BGM from "../sounds/bgm.mp3"
import SoundPlayer from "../components/soundPlayer"
import { getDisplayName } from "./hocHelper"

const withBGM = Sound => {
  const withBGMFunction = () => (
    <Sound {...this.props} sound={BGM} autoPlay loop />
  )
  withBGMFunction.displayName = `WithBGM(${getDisplayName(Sound)})`
  return withBGMFunction
}

export default withBGM
