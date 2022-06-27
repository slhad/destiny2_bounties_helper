FROM node:lts AS build
WORKDIR /app
COPY ./src/ ./src/
COPY ./files/ ./files/
COPY ./test/ ./test/
COPY ./package* ./
COPY ./tsconfig.json ./

RUN echo '{"api_key":false,"client_id":false,"client_secret":false}' > ./config.json

RUN npm -g install npm@latest && npm -g install npm@latest && npm ci && npm run build && npm test
# RUN pwd && ls -Rlha -I node_modules

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/lib/ /app/lib/
COPY ./files/ ./files/
COPY ./package* ./
RUN pwd && ls -Rlha
RUN npm -g install npm@latest && npm -g install npm@latest && npm --omit-dev ci
EXPOSE 8888
ENTRYPOINT [ "node","." ]