const names = ['Geraldo', 'André', 'Luis']
const numbers = [1, 10, 30, 40, 100]
const newArray = []

names.map((name) => newArray.push(`${name} é um bom companheiro!`))

console.log(newArray);

const findNames = names.find(name => name === 'Geraldo' )

console.log(findNames);

const filterNames = names.filter(name => name !== 'Geraldo' )

console.log(filterNames)

const reduceNumbers = numbers.reduce((stack, number) => {
  console.log('Elemento atual da pilha: ', stack);
  return stack + number
})

console.log(reduceNumbers)

const forEachNames = names.forEach((name) => {
  console.log(name)
})

console.log(forEachNames);