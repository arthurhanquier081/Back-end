const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/saudacao', (req, res) => {

    const { nome } = req.body;

    res.json({
        mensagem: `Olá ${nome}!`
    });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});