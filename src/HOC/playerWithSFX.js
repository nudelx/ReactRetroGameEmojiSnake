import React, { Component } from 'react'
import * as SFX from "../sounds/snap.mp3"
import SoundPlayer from '../components/soundPlayer'
import {getDisplayName} from './hocHelper'

const withSFX = Sound => {
  const withSFXFunction = () => <Sound {...this.props} sound={SFX} autoPlay/>
  withSFXFunction.displayName = `WithSFX(${getDisplayName(Sound)})`
  return withSFXFunction
}


export default withSFX
