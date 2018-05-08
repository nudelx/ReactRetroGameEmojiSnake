#!/usr/bin/env bash
clear
git checkout master
git pull
git checkout gh-pages
git pull
git merge -X theirs master
git commit -am "version update $(date)"
rm -rf static/
yarn build
cp -r build/* .
sed  's/\="\//\="\.\//g' index.html > index1.html
cat index1.html > index.html
rm index1.html

sed  's/n.p\+"static\/media\//"\.\/static\/media\//g' static/js/*.js > static/js/t.js
file=$(ls static/js/*.js | grep main)
cat  static/js/t.js >  $file
rm static/js/t.js

sed 's/\/static\/media/..\/media/g' static/css/main*.css > static/css/t.css
file=$(ls static/css/main*.css | grep main)
cat  static/css/t.css >  $file
rm static/css/t.css

git add .
git commit -am "new deploy $(date)"
git push
git checkout master
