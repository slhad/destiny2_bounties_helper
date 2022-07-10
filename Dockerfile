FROM node:lts AS build
WORKDIR /app
COPY ./src/ ./src/
COPY ./files/ ./files/
COPY ./test/ ./test/
COPY ./template/ ./template/
COPY ./locales/ ./locales/
COPY ./package* ./
COPY ./tsconfig.json ./

RUN echo 'color=false' > ~/.npmrc &&  echo '{"api_key":false,"client_id":false,"client_secret":false}' > ./config.json

RUN npm -g install npm@latest && npm -g install npm@latest && npm ci && npm run build && npm test
# RUN pwd && ls -Rlha -I node_modules

FROM node:lts-alpine
WORKDIR /app
RUN echo 'color=false' > ~/.npmrc
COPY --from=build /app/lib/ /app/lib/
COPY ./files/ ./files/
COPY ./template/ ./template/
COPY ./locales/ ./locales/
COPY ./package* ./
RUN npm -g install npm@latest && npm -g install npm@latest && npm --omit-dev ci
EXPOSE 8888
EXPOSE 8887
VOLUME [ "/app/files" ]
ENV NODE_ENV=production
ENTRYPOINT [ "node","." ]