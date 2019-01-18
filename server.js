const express = require('express');
const { recipes, dishes } = require('./db/access');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());

server.get('/api/dishes', (req, res) => {
    dishes.getAll(db).then(result => console.log(result));
});

server.post('/api/dishes', (req, res) => {
    dishes
        .addDish(req.body, db)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

server.get('/api/dishes/:id', (req, res) => {
    dishes
        .getDish(req.params.id, db)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

server.get('/api/recipes/', (req, res) => {
    recipes
        .getAll(db)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

module.exports = server;
