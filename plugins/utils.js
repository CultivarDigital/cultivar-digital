export default ({ app, store }, inject) => {
  const plural = (qtd, word, includeQtd = true) => {
    const plural = qtd > 1 ? 's' : ''
    return `${includeQtd ? qtd + ' ' : ''}${word}${plural}`
  }

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
  }

  inject('utils', {
    hexToRgba,
    plural,
  })
}
