function jugar () {
  console.log('jugar')
  let jugador1 = (Math.floor(Math.random() * (0 + 3) + 0)) // prompt('Ingrese piedra papel o tijera')
  let jugador2 = (Math.floor(Math.random() * (0 + 3) + 0))
  let elecciones = ['piedra', 'papel', 'tijera']

  elecciones.map((value, index) => {
    if (index === jugador1) {
      jugador1 = value
    }
    if (index === jugador2) {
      jugador2 = value
    }
  })

  console.log(`Jugador1 eligio: ${jugador1}`)
  console.log(`Jugador2 eligio: ${jugador2}`)

  if ((jugador1 === 'piedra' && jugador2 === 'papel') || (jugador2 === 'piedra' && jugador1 === 'papel')) {
    if (jugador1 === 'papel') {
      console.log('Jugador1 (papel) gana')
    }
    if (jugador2 === 'papel') {
      console.log('Jugador2 (papel) gana')
    }
  } else if ((jugador1 === 'papel' && jugador2 === 'tijera') || (jugador2 === 'papel' && jugador1 === 'tijera')) {
    if (jugador1 === 'tijera') {
      console.log('Jugador1 (tijera) gana')
    }
    if (jugador2 === 'tijera') {
      console.log('Jugador2 (tijera) gana')
    }
  } else if ((jugador1 === 'tijera' && jugador2 === 'piedra') || (jugador2 === 'tijera' && jugador1 === 'piedra')) {
    if (jugador1 === 'piedra') {
      console.log('Jugador1 (piedra) gana')
    }
    if (jugador2 === 'piedra') {
      console.log('Jugador2 (piedra) gana')
    }
  } else {
    console.log('empate')
  }
}

function jugar2 () {
  console.log('jugar2')
  let jugador1 = (Math.floor(Math.random() * (0 + 3) + 0)) // prompt('Ingrese piedra papel o tijera')
  let jugador2 = (Math.floor(Math.random() * (0 + 3) + 0))

  console.log(`Jugador1 eligio: ${jugador1}`)
  console.log(`Jugador2 eligio: ${jugador2}`)

  if ((jugador1 === 0 && jugador2 === 1) || (jugador2 === 0 && jugador1 === 1)) {
    if (jugador1 === 1) {
      console.log('Jugador1 (papel) gana')
    }
    if (jugador2 === 1) {
      console.log('Jugador2 (papel) gana')
    }
  } else if ((jugador1 === 1 && jugador2 === 2) || (jugador2 === 1 && jugador1 === 2)) {
    if (jugador1 === 2) {
      console.log('Jugador1 (tijera) gana')
    }
    if (jugador2 === 2) {
      console.log('Jugador2 (tijera) gana')
    }
  } else if ((jugador1 === 2 && jugador2 === 0) || (jugador2 === 2 && jugador1 === 0)) {
    if (jugador1 === 0) {
      console.log('Jugador1 (piedra) gana')
    }
    if (jugador2 === 0) {
      console.log('Jugador2 (piedra) gana')
    }
  } else {
    console.log('empate')
  }
}

jugar()
jugar2()
