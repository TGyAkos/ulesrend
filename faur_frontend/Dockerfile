FROM node:latest AS build
WORKDIR /asd

COPY next* package* postcss* tailwind* tsconfig* /asd/
COPY /app /asd/app/
COPY /public /asd/public/
COPY /node_modules /asd/node_modules/

RUN npm install
RUN npm run build