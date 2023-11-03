# Use an nginx runtime as a base image
FROM nginx

# copy app to image
COPY ./app.tgz /tmp/

# untar application
RUN tar -C /usr/share/nginx/html -xvvzf /tmp/app.tgz

#remove package
RUN rm /tmp/app.tgz

# copy configuration to nginx
COPY nginx.conf.template /nginx.conf.template

# nginx log file
VOLUME /var/log/nginx

# Make port 80 available to the world outside this container
EXPOSE 80

CMD ["/bin/sh" , "-c" , "envsubst '$APPLICATION_CONTEXT' < /nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]