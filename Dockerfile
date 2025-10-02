FROM node:22.19.0-alpine3.22 AS builder

USER 1000

WORKDIR /app/src

COPY --chown=1000 . .



RUN npm ci

RUN npx ng build --configuration production



FROM node:22.19.0-alpine3.22 AS runner

USER 1000

WORKDIR /app/src

COPY --from=builder /app/src/dist .

COPY --chown=1000 serve.json /app/src/alves-ferreira-advocacia/browser/serve.json

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "/app/src/alves-ferreira-advocacia/browser"]