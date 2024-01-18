const prompt = require('prompt-sync')
const prompt = prompt()

let altura = parseInt(prompt('Informe a altura em cm: '))

console.log(`o peso ideal para homens é: ${((62.1*altura/100) - 44.7).toFixed(2)}`)