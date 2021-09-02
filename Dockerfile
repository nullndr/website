ARG version=2.4.48

FROM httpd:$version-alpine

LABEL version=1.0

COPY ./public_html/ /usr/local/apache2/htdocs/

EXPOSE 80/tcp

