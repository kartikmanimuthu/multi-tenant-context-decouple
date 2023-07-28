const express = require('express');

const userRouter = require('./routes/user')
const { contextMiddleware } = require('../src/middleware/context-middleware')
const { corellationMiddleware } = require('../src/middleware/corellation-id-middleware')


const app = express();

app.use(contextMiddleware);
app.use(corellationMiddleware);

app.use('/api/v1/user-management/', userRouter);



module.exports = app;