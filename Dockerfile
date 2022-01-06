FROM node:16-alpine3.14 as development
WORKDIR /usr/app


COPY . .


RUN rm -Rf node_modules

RUN yarn 

RUN yarn build


FROM node:16-alpine3.14 as production
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY ./package.json ./

COPY ./yarn.lock ./



RUN rm -Rf node_modules

RUN yarn install --production

COPY --from=development /usr/app/dist ./dist





EXPOSE 4500

CMD [ "node", "dist/main" ]

