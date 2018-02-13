import React from 'react'
import { ICONS } from '../const/snakeIcons'

const Food = ({ foodX, foodY }) => {
  return (
    <div className="food" style={{ top: foodY, left: foodX }}>
      {ICONS[(foodX + foodY) % ICONS.length]}
    </div>
  )
}

export default Food
