---
title: 跨域解决方案之proxyTable  
date: 2017-12-30
permalink: /:year/:month/:day/:slug
tags:
 - vue
 - webpack
categories: 
 - 前端
sidebar: false
---

> 在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了[**http-proxy-middleware**](https://github.com/chimurai/http-proxy-middleware)，我们只需要在`config/index.js`中的proxyTable 配置即可。

<!-- more -->

如果接口是`www.baidu.com/get/getList`，那么有两种配置方案：
- 方法一
```ecmascript 6
proxyTable: {
  '/api': {
    target: 'www.baidu.com', 目标api 
    changeOrigin: true,  //是否跨域
    pathRewrite: {
      '^/api': '/get' 目标重写
    }
  }
}
```
这个时候我们请求`/api/getList`就是请求`www.baidu.com/get/getList`
- 方法二
```ecmascript 6
proxyTable: {
  '/api': {
    target: 'www.baidu.com',
    changeOrigin: true,  //是否跨域
    pathRewrite: {
      '^/api': '/' 目标不重写  
    }
  }
}
```
这个时候我们请求`/api/get/getList`就是请求`www.aaa.com/get/getList`
