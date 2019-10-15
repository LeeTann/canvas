let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// allows us to get access to methods/functions within the variable context
let context = canvas.getContext('2d')

context.fillStyle = "rgba(255, 0, 0, 0.5"
context.fillRect(100, 100, 100, 100) // (x, y, width, height)
context.fillStyle = "rgba(0, 0, 255, 0.5"
context.fillRect(400, 100, 100, 100)
context.fillStyle = "rgba(0, 255, 255, 0.5"
context.fillRect(300, 500, 100, 100)

console.log(canvas)

// Line
context.beginPath()
context.moveTo(50, 300)
context.lineTo(300, 100)
context.lineTo(400, 300)
context.lineTo(600, 600)
context.lineTo(1000, 50)
context.strokeStyle = "#fa34a4"
context.stroke()

// Arc / Circle
// context.beginPath() // beginPath() starts a new drawing piece and prevent connecting previous stroke
// context.arc (300, 300, 30, 0, Math.PI *2, false) // code for creating a circle
// context.strokeStyle = "blue"
// context.stroke()

for (let i=0; i<100; i++) {
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  let color = ['red', 'blue', 'yellow', 'grey', 'pink', 'green', 'orange', 'purple']
  let strokeColor = color[Math.floor(Math.random() * color.length)]
  context.beginPath() // beginPath() starts a new drawing piece and prevent connecting previous stroke
  context.arc (x, y, 30, 0, Math.PI *2, false) // code for creating a circle
  context.strokeStyle = strokeColor
  context.stroke()
}