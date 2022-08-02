const express = require('express')

const app = express()


app.use(express.urlencoded({ extended: true }))


app.post('/pessoais', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Cadastrado!</h1>')
})

app.listen(3003)