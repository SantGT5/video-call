FROM node:20.9-alpine AS build
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build

FROM node:20.9-alpine
WORKDIR /app

COPY --from=build /app/dist .
COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/.env .

EXPOSE 8080

USER node

CMD ["node", "server.js"]
