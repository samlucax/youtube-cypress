const express = require('express');
const routes  = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/**
     * Rota é o conjunto completo que será acessado
     * Recurso é a parte contextual, normalmente relacionado a banco de dados, objeto, etc
     */

    /**
     * Métodos HTTP (principais):
     * 
     * GET: Buscar/Listar uma informação no backend
     * POST: Criar uma informação no backend
     * PUT: Alterar uma informação no backend
     * DELETE: Deletar uma informação no backend
     */

    /**
     * Tipos de parâmetros:
     * 
     * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
     * Route Params: Parâmetros utilizados para identificar recursos
     * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
     */

    /**
     * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
     * NoSQL: MongoDB, CouchDB, etc.
     */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;