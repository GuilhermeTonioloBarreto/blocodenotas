var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('olá mundo legalzão da porcaria agr deu certo! mesmo');
})

app.listen(3000, () => {
    console.log('servidor rodando')
})