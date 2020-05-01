#!/usr/bin sh

# $throw error
# set -e
cd  dist/
pwd
echo -n 'Commmit info:'
read info
echo $info
# npm run build

if test .git 
then 
    git add . 
else
    git init 

    git add .
fi

git commit -m `deploy:$info`

git push -f https://github.com/zhaohongbo910/zhaohongbo910.github.io.git master:master
# # # git push -f https://git.dev.tencent.com/zhaohongbo910/bolg.git master:master
cd ../
echo 'publish success';