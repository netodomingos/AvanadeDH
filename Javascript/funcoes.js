function digaOla(nome){
  console.log('Olá ' + nome + ', como vai?')
}

function montarNomeCompleto(nome, callback){
  const nomeCompleto = `${nome.primeiroNome} ${nome.ultimoNome}`
  callback(nomeCompleto)
}

let user = {
  primeiroNome: 'Geraldo',
  ultimoNome: 'Neto'
}

montarNomeCompleto(user, digaOla)