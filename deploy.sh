#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 根据文件目录生成config.js
java  java/src/Utils.java

yarn resource:build

# 将docs目录改名并移动到外层
java java/src/MoveFiles.java
# 进入生成的文件夹

# ./upload2Server.sh
#cd resource/.vuepress/dist

# git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push origin blog-pages

cd -
