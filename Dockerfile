# syntax=docker/dockerfile:1-labs
# check=error=true

FROM ghcr.io/rochacbruno/marmite

ENV TZ="Etc/UTC"

WORKDIR /app

COPY . ./

EXPOSE 3000

CMD ["--serve", "--bind", "0.0.0.0:3000"]
