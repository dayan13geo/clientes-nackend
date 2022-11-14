const express = require('express');
const router = require('./clientes.router')
const clientesRouter = require('./clientes.router')

function routerApi(app){
    const routerv2 = express.Router();
    app.use('/api/v2',routerv2);
    routerv2.use('/clientes',clientesRouter);
   }

 module.exports  = routerApi;
