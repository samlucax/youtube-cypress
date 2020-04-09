const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// cors é o modulo de seguranca
app.use(cors());

//importante ser antes de todas as requisicoes, por isso esta no topo
app.use(express.json());
//importante ser depois da linha acima
app.use(routes);

app.listen(3333);


/**
 * BTW: estou no min 40 - Migrations knex
 */
