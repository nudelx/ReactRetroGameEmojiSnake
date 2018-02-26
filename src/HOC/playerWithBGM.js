import React from "react"
import * as BGM from "../sounds/bgm.mp3"
import { getDisplayName } from "./hocHelper"

const withBGM = Sound => {
  const withBGMFunction = props => (
    <Sound {...props} sound={BGM} autoPlay loop />
  )
  withBGMFunction.displayName = `WithBGM(${getDisplayName(Sound)})`
  return withBGMFunction
}

export default withBGM
