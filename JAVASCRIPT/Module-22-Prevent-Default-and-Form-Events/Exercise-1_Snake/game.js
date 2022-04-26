import {update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')
const snakeSpeed = 5;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return


    lastRenderTime = currentTime
    console.log('Render')

    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    gameBoard.innerHTML = ''
    updateSnake()
    updateFood()
    updateDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// function checkDeath() {
//     gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
// }