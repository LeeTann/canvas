let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// allows us to get access to methods/functions within the variable context
let context = canvas.getContext('2d')

// Rectangle
// context.fillStyle = "rgba(255, 0, 0, 0.5"
// context.fillRect(100, 100, 100, 100) // (x, y, width, height)
// context.fillStyle = "rgba(0, 0, 255, 0.5"
// context.fillRect(400, 100, 100, 100)
// context.fillStyle = "rgba(0, 255, 255, 0.5"
// context.fillRect(300, 500, 100, 100)

console.log(canvas)

// Line
// context.beginPath()
// context.moveTo(50, 300)
// context.lineTo(300, 100)
// context.lineTo(400, 300)
// context.lineTo(600, 600)
// context.lineTo(1000, 50)
// context.strokeStyle = "#fa34a4"
// context.stroke()

// Create a mouse object
let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40
// let minRadius = 2

window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x
    mouse.y = event.y
  })

window.addEventListener('resize',
  function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    init()
  })

// Create a circle object
function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.minRadius = radius
  let color = ['#BF99A7', '#586F8C', '#0E2940', '#F2CEAE', '#F2C1AE']
  // let strokeColor = color[Math.floor(Math.random() * color.length)]
  let fillColor = color[Math.floor(Math.random() * color.length)]

  this.draw = function() {
    context.beginPath() // beginPath() start a new drawing piece
    context.arc(this.x, this.y, this.radius, 0, Math.PI *2, false) // code for drawing circle
    // context.strokeStyle = strokeColor
    // context.stroke() // stroke() draws to screen
    context.fillStyle = fillColor
    context.fill()
  }

  this.update = function() {
    // contains the circles with canvas and bounce it around
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
  
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
  
    this.x += this.dx
    this.y += this.dy

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1
        }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }

    this.draw()
  }
}


let circleArray = []

function init() {
  // reset circle array each time init is called during resizing
  circleArray = []

  for (let i = 0; i < 200; i++) {
    // This generates a random circle
    let radius = Math.random() * 5 + 1
    let x = Math.random() * (innerWidth - radius *2) + radius
    let y = Math.random() * (innerHeight - radius *2) + radius
    let dx = (Math.random() -0.5) * 2 // x velocity
    let dy = (Math.random() -0.5) * 2 // y velocity
  
    circleArray.push(new Circle(x, y, dx, dy, radius))
  }
}

// Create an animation function
function animate() {
  requestAnimationFrame(animate) // this pretty much creates a animation loop
  context.clearRect(0, 0, innerWidth, innerHeight) // clears the canvas each time it draws

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update() // update each indiviual circle
  }
}

init()
animate()

// Creates random circles 
// for (let i=0; i<100; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   let color = ['red', 'blue', 'yellow', 'grey', 'pink', 'green', 'orange', 'purple']
//   let strokeColor = color[Math.floor(Math.random() * color.length)]

//   context.beginPath() // beginPath() starts a new drawing piece and prevent connecting previous stroke
//   context.arc (x, y, 30, 0, Math.PI *2, false) // code for creating a circle
//   context.strokeStyle = strokeColor
//   context.stroke()
// }