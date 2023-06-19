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