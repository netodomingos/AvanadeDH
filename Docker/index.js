const app =  require('express')()

app.get('/', (req, res) => {
  res.send('Olá')
})

app.listen(3000, () => {
  console.log('Rodando DH - Docker...')
})