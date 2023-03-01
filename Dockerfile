FROM node:alpine

COPY . /src

WORKDIR /src

RUN npm install && npm run build

CMD ["npm", "run", "start"]