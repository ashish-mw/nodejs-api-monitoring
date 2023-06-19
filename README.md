# Playing around with prometheus and grafana

```
$ GF_ADMIN_PASSWORD="admin" docker-compose up
```

## 1. First hit some URLS

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

## 2. Then load up prometheus - (Optional)

http://localhost:9090/graph

We can see what data we get from the app running on `4000`

## 3. Lastly load up grafana

http://localhost:3333

```
UN: admin
PW: admin
```

## References

- https://github.com/pavlovdog/grafana-prometheus-node-js-example
- https://github.com/TomDoesTech/REST-API-Tutorial-Updated/blob/main/src/utils/metrics.ts
