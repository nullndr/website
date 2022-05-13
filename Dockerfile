FROM node:16

COPY . /src
WORKDIR /src

RUN npm install && npm run build

CMD ["npm", "run", "start"]

