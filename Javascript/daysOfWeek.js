let nomes = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira']

//Transforma o array em uma string separado pelo parametro 
let recivedNames = nomes.join(',')

console.log(recivedNames)

let carros = ['Gol', 'celta', 'corsa', 'corsa']

// RETORNA SEMPRE O PRIMEIRO INDICE ENCONTRADO
console.log(carros.indexOf('corsa'))

// RETORNA SEMPRE O ÚLTIMO INDICE ENCONTRADO
console.log(carros.lastIndexOf('corsa'))

// RETORNA UM BOOLEANO SE EXISTIR
console.log(carros.includes('corsa'))