import React from 'react'
import { TOTAL_FOOD, EmojiFood } from '../const/snakeIcons'

const Food = ({ foodX, foodY }) => {
  return (
    <div className="food" style={{ top: foodY, left: foodX }}>
      {<EmojiFood foodId={((foodX + foodY) % TOTAL_FOOD)} /> } 
    </div>
  )
}

export default Food
