import React from 'react'
import * as SFX from '../sounds/snap.mp3'
import { getDisplayName } from './hocHelper'

const withSFX = Sound => {
  const withSFXFunction = props => <Sound {...props} sound={SFX} autoPlay />
  withSFXFunction.displayName = `WithSFX(${getDisplayName(Sound)})`
  return withSFXFunction
}

export default withSFX
