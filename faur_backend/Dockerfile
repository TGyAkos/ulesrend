FROM node:latest AS build
WORKDIR /src

COPY package* tsconfig* ./
RUN npm install

COPY src ./src
RUN npm run tsc

FROM node:slim AS production

COPY --from=build /src/dist /dist
COPY --from=build /src/node_modules /dist/node_modules