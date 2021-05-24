FROM wordpress:cli-2

ARG INSTALL_PATH=/var/www/html
ENV INSTALL_PATH=$INSTALL_PATH

ARG WP_URL=http://localhost
ENV WP_URL=$WP_URL

ARG WP_ADMIN=admin
ENV WP_ADMIN=$WP_ADMIN

ARG WP_PASS=secret
ENV WP_PASS=$WP_PASS

ARG WP_THEME=twentytwenty
ENV WP_THEME=$WP_THEME

USER root

RUN mkdir /etc/wp-setup && \
    chmod 777 /etc/wp-setup

USER xfs

# Make sure this is set as executable locally
COPY docker/wpcli/entrypoint.sh /bin
COPY wp-plugins.txt /etc/wp-setup

# Leave as CMD so that docker run can override
CMD ["/bin/entrypoint.sh"]