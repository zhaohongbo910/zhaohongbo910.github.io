#!/usr/bin/env sh

# throw error
set -e

npm run build


cd ./dist

git init 

git add .

git commit -m 'deploy'

git push -f https://github.com/zhaohongbo910/zhaohongbo910.github.io.git master:master

# git push -f https://git.dev.tencent.com/zhaohongbo910/bolg.git master:master

cd ../

echo '提交成功';