# Playing around with prometheus and grafana

```
$ nvm use
$ npm i
$ npm start
```

## URLS

- Quick response
```
$ curl http://localhost:4000/
```

- Slow response
```
$ curl http://localhost:4000/slow
```

- Status code return
Pass any status code as param
```
$ curl http://localhost:4000/s/400
```

## References

- https://github.com/pavlovdog/grafana-prometheus-node-js-example
- https://github.com/TomDoesTech/REST-API-Tutorial-Updated/blob/main/src/utils/metrics.ts
