FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add curl

COPY . .

RUN npm install

ENV PORT=2999

CMD ["node" , "index.js"]