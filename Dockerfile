FROM ghcr.io/rochacbruno/marmite

WORKDIR /input

COPY . ./

EXPOSE 3000

CMD ["--serve", "--bind", "0.0.0.0:3000"]