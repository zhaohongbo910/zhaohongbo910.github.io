---
title: CDN Cli ReleaseNote
date: 2020-04-30
tags:
 - ReleaseNote      
categories: 
 - ReleaseNote
publish: false
---

## EdgeRoutine-Cli 脚手架任务 

1.优化代码结构，并理解代码
  er init   初始化edge.js demo 代码
  er config 初始化配置 config.js 配置cdn 加速域名和所对应的域名的 AK SK
  er build  灰度环境发布配置
  er build -s 展示灰度环境配置
  er build -r 灰度环境配置回滚
  er build -d 删除灰度环境配置

  er publish 正式环境发布
  er publish -s 展示
  er publish -d 删除
2.编写测试用例 mocha  expect.js  assert  --> 对于异步操作的测试用例 编写还是不够熟练

3.测试 ER build 构建灰度环境
    小于45KB 走CDN OpenAPI POST 方法 直接设置灰度环境的er代码规则
    大于45KB 走ER 中心服务托管的OSS 仓库返回文件名，在走CDN 的OpenAPI 的GET 方法提交设置灰度环境ER 代码规则

4.优化ER publish 正式环境发布
    提示用户做灰度环境测试
    加载进度条，给用户一定的反馈。
  
## 