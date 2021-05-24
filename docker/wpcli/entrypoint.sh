#!/bin/bash

sleep 15
if ! $(wp core is-installed);
then
    wp core install --path=$INSTALL_PATH --url=$WP_URL --title="WP Local Dev" --admin_user=$WP_ADMIN --admin_password=$WP_PASS --admin_email=foo@bar.com --skip-email
    echo "Setup WP with user: '$WP_ADMIN' and password: '$WP_PASS'"
else
    echo "WP is already setup, skipping..."
fi

if $(wp theme is-installed $WP_THEME);
then
    if ! $(wp theme is-active $WP_THEME);
    then
        wp theme activate  $WP_THEME --path=$INSTALL_PATH --url=$WP_URL
    else
        echo "WP theme already active, skipping..."
    fi
else
    echo "ERROR: Theme '$WP_THEME' is not installed. There may be an issue with your setup."
    echo "Here are your available themes:"
    wp theme list --format=yaml --path=$INSTALL_PATH --url=$WP_URL
fi

echo "Installing all plugins"
WP_PLUGINS=$(cat /etc/wp-setup/wp-plugins.txt | tr '\n' ' ')

echo "$WP_PLUGINS"

wp plugin install $WP_PLUGINS --activate --path=$INSTALL_PATH --url=$WP_URL
# wp plugin activate --all --path=$INSTALL_PATH --url=$WP_URL

# This command is buggy in 2.4.0... yay!
wp plugin list --format=yaml --path=$INSTALL_PATH --url=$WP_URL 2>/dev/null
