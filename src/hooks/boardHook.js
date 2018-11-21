import React from "react"

export const useBorardHook = () => {
  const [step, setStep] = React.useState(32)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [foodX, setFoodX] = React.useState(0)
  const [foodY, setFoodY] = React.useState(0)
  const [foodVisible, setFoodVisible] = React.useState(false)

  const randomPosition = (max, min) => {
    return Math.floor(Math.random() * max) + min
  }

  const calcFoodPosition = () => {
    let _foodX = randomPosition(width, 0)
    let _foodY = randomPosition(height, 0)
    _foodX = _foodX - (_foodX % step)
    _foodY = _foodY - (_foodY % step)
    setFoodX(_foodX)
    setFoodY(_foodY)
    setFoodVisible(true)
  }

  const toggleFood = () => {
    setFoodVisible(!foodVisible)
    foodVisible && calcFoodPosition()
  }
  // cdm
  React.useEffect(() => {
    const w = window.outerWidth * 0.95
    const h = window.outerHeight * 0.7
    setWidth(w - (w % step))
    setHeight(h - (h % step))
    calcFoodPosition()
  }, [])

  return {
    width,
    setWidth,
    height,
    setHeight,
    foodX,
    setFoodX,
    foodY,
    setFoodY,
    foodVisible,
    setFoodVisible,
    toggleFood,
    setStep,
    step,
    calcFoodPosition,
    randomPosition
  }
}
