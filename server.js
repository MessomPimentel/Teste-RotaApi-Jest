const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ message: 'Heloo World' })
})

module.exports = app
