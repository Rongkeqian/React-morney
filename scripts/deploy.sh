#!/usr/bin/env bash


yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
#git remote add origin git@github.com:Rongkeqian/React-morney-website.git &&
git remote add origin git@gitee.com:mom-xiaorui/react-morney-website.git &&
git push -u origin main  &&
cd -

