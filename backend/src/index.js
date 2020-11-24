const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.y9xdk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET(Query), POST(Body), PUT(Params), DELETE(Params)

//Tipos de parâmetros:
//Query params: request.query (Filtros, ordenação, paginação...)
//Route params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um resgistro)



app.listen(10000);
