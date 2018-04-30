import React from 'react'
export const TOTAL_FOOD = 30
export const TOTAL_HEADS = 3

export const EmojiFood = ({ foodId }) => (<span className={`emoji emoji-food-${foodId}`}></span>)
export const EmojiSmileHead = ({ snakeHeadindex }) => (<span className={`emoji emoji-smile-${snakeHeadindex}`}></span>)

export const EmojiSnakeBody = () => (<span className="emoji emoji-body"></span>)
export const GameOverIcon = () => (<span className="emoji emoji-cry"></span>)
export const EmojiStar = () => (<span className="emoji emoji-star"></span>)
