#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 根据文件目录生成config.js
java  java/src/Utils.java

yarn resource:build

# 将docs目录改名并移动到外层
java java/src/MoveFiles.java
# 进入生成的文件夹

#cd resource/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 应为我本地有两个git，我学习的git命名是git@study.github.com
git push -f https://github.com/IFANx/ifan.git master:blog-pages
#git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支

cd -
