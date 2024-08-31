FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build && npm cache clean --force
 
EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]