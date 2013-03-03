#!/bin/sh
is_express_installed=$(npm list | grep express | wc -l)
if [ $is_express_installed -eq 0 ] ; then
    echo "express node module is required"
    echo "install in progress..."
    npm install express
    echo "done"
fi

is_hbs_installed=$(npm list | grep hbs | wc -l)
if [ $is_hbs_installed -eq 0 ] ; then
    echo "hbs node module is required"
    echo "install in progress..."
    npm install hbs
    echo "done"
fi

if [ $is_express_installed -gt 0 ] || [ $is_hbs_installed -gt 0 ] ; then
    echo "check updates for already installed node modules"
    npm update
    echo "done"
fi

node server.js