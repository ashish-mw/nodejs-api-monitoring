FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["node"]

# not exposing as docker compose takes care of internal
# routing

