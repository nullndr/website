ARG version=2.4.48-alpine

FROM httpd:$version

LABEL version=1.0

COPY ./public_html/ /usr/local/apache2/htdocs/

# run web traffic over SSL/HTTPS

COPY ./cert/srv.crt /usr/local/apache2/conf/
COPY ./cert/srv.key /usr/local/apache2/conf/

RUN ["sed", "-i", "-e", "'s/^#\(Include .*httpd-ssl.conf\)/\1/'", "-e", "'s/^#\(LoadModule .*mod_ssl.so\)/\1/'", "-e", "'s/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/'", "conf/httpd.conf"]

EXPOSE 443/tcp

EXPOSE 80/tcp