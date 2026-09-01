# syntax=docker/dockerfile:1-labs
# check=error=true

FROM ghcr.io/rochacbruno/marmite:0.4.2 AS builder

WORKDIR /app

COPY . ./

RUN marmite . /site

FROM nginx:alpine

COPY --from=builder /site /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
