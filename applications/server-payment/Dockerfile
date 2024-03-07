FROM node:18-alpine

WORKDIR /usr/src/app
RUN apk --no-cache add curl

COPY . .

RUN npm install

ENV PORT=3000

CMD ["node" , "index.js"]