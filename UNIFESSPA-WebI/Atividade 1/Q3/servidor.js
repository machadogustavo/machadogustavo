const express = require('express')

const app = express()

const bodyParser = require('body-parser')


app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/pessoais', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Conexão Estabelecida!!</h1><br><h2>Usuário Cadastrado:</h2><br>'+req.body.nome+'<br>'+req.body.sexo)
    req.body.name
})

app.listen(3003)