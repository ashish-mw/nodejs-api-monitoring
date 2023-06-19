const express = require('express')
const expressPino = require("express-pino-logger");

const logger = require('./logger');
const app = express();

app.use(expressPino({
  enabled: true,
}))

app.get('/', (req, res) => {
  res.send({
    message: 'Index route!'
  })
})

app.get("/slow", (req, res, next) => {
  setTimeout(() => {
    res.status(200).send({
      message: 'Slow route!'
    });
  }, 1000);
});

app.get('/s/:status', (req, res) => {
  let status = req.params.status || 200
  res.status(status).send({
    message: 'Status code page!'
  })
})

app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: 'Not found!'
  })
})

app.use((error, req, res, next) => {
  if (error && error.statusCode) {
    return res.status(error.statusCode).json({
      message: error.message
    })
  }
  return res.status(500).json({
    message: 'Unknown error'
  })
})

app.listen(4000, () => {
  logger.info('Server listening on port 4000')
})


