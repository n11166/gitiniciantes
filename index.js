const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'Ola mundo mais uma vez!!!'})
})

app.listen(4001, () => {
    console.log('API rodando da porta 4001');
})