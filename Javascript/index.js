let Techs = ['Docker', 'JS', 'NodeJS', 'TS']

console.log('Array: ',Techs)

// Adiciona a ultima posição
Techs.push('Angular', 'React')

console.log('Adicionando na ultima posição: ',Techs)

// Retira a ultima posição
let LastTech = Techs.pop()

console.log('Retirando Ultimo: ',LastTech)

// Retira a primeira posição
let FirstTech = Techs.shift()

console.log('Retirando Primeiro: ',FirstTech)

// Adiciona na primeira posição
Techs.unshift('VueJs')

console.log('Adicionando na primeira posição: ', Techs)


console.log('ARRAY ATUAL: ', Techs)