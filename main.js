const { body } = document
const canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 300

body.appendChild(canvas)

class Renderer {
  constructor(canvas) {
    this.context = canvas.getContext('2d')
  }

  renderObject(obj) {
    this.context.clearRect(0, 0, 300, 300)
    this.context.fillStyle = obj.color
    this.context.fillRect(obj.x, obj.y, obj.w, obj.h)
  }

  render(callback) {
    requestAnimationFrame(callback)
  }
}

document.addEventListener('keydown', e => {
  let movX = 0
  let movY = 0
  let displacement = 10
  switch (e.keyCode) {
    case 37:
      movX = -displacement
      movY = 0
      break
    case 38:
      movX = 0
      movY = -displacement
      break
    case 39:
      movX = displacement
      movY = 0
      break
    case 40:
      movX = 0
      movY = displacement
      break
    default:
      break
  }

  jugador.mover(movX, movY)
})

let jugador = new Jugador()
let juego = new Renderer(canvas)

juego.render(renderizar)

function renderizar() {
  juego.renderObject(jugador)
  juego.render(renderizar)
}
