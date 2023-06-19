const express = require('express');
const client = require('prom-client');
const logger = require('./logger');

const app = express();

const restResponseTimeHistogram = new client.Histogram({
  name: "rest_response_time_duration_seconds",
  help: "App API response time in seconds",
  labelNames: ["method", "route", "status_code"],
});

const startMetricsServer = () => {
  const collectDefaultMetrics = client.collectDefaultMetrics;
  collectDefaultMetrics();

  app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);

    return res.send(await client.register.metrics());
  });

  app.listen(9100, '0.0.0.0', () => {
    logger.info("Metrics server started at http://localhost:9100");
  });
}

module.exports = {
  startMetricsServer,
  restResponseTimeHistogram
};