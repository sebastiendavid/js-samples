#!/bin/sh
is_requirejs_installed=$(npm list | grep requirejs | wc -l)
if [ $is_requirejs_installed -eq 0 ] ; then
    echo "requirejs node module is required"
    echo "install in progress..."
    npm install requirejs
    echo "done"
fi

is_less_installed=$(npm list | grep less | wc -l)
if [ $is_less_installed -eq 0 ] ; then
    echo "LESS node module is required"
    npm install less
    echo "done"
fi

#if [ $is_requirejs_installed -gt 0 ] || [ $is_less_installed -gt 0 ] ; then
#    echo "check updates for already installed node modules"
#    npm update
#    echo "done"
#fi

echo ""
echo "LESS compilation in progress..."
mkdir ../out
mkdir ../out/css
node_modules/less/bin/lessc -O0 --compress --yui-compress ../client/less/main.less > ../out/css/main.css
echo "done"

echo ""
echo "JS optimization:"
node minify-main-app.js
node minify-backbonejs-app.js
node minify-canjs-app.js
echo ""