---
title: Http模块
date: 2018-05-29
---

> <a href='http://nodejs.cn/api/http.html#http_http'>http 模块</a>

<!-- more -->

## http 模块的介绍

Node 提供的内置的 `http` 模块可以很方便的创建一个服务器，这也是很多 Node web 框架提供 web 服务的都是依赖于 http 模块的二次封装

```js
var http = require("http"); //内置模块的倒入

/**
 * createServer 创建一个http.Server的实例对象
 * */
var server = http.createServer();

//监听指定的端口号(当前项目的端口是8080)
/**
 * listen: 监听指定的端口号
 * 参数1: 监听的端口号
 * 参数2: 监听成功的回调
 *
 * */
server.listen(8080, function() {
  console.log("server is success, listening 8080...");
});
```

> 上述代码只是监听了客户端的请求, 但是客户端什么时候到来我们并不知道, 如何知道客户端当前请求到达并且处理改请求呢？

```js
// ... 省略部分
/**
 * createServer 创建一个服务端, 返回值返回新的 `http.Server` 实例。 根据API文档中的的第二个参数是监听回调函数
 * 该回调方法是在客户端想服务器发送请求的时候, 服务器监听到有客户端的请求到来的时候, 触发该回调方法
 * 回调方法中的两个参数: req, res
 * req: 保存了客户端想服务器发送的所有请求信息(请求头url和请求体)
 * res: 通过res服务器可以相客户端返回相应的信息, 服务器可以在res对象上设置相应信息具体内容(响应头, 相应体)
 * */
var server = http.createServer(function(req, res) {
  console.log("🚀 ~ file: 04-Http模块 req", req);
  console.log("🚀 ~ file: 04-Http模块 res", res);
  //这里可以打印出req ,和 res 看看具体的会输出什么
});
```

req : 是 `http.IncomingMessage` 类的实例  `http.IncomingMessage`继承 `stream.Readable`
res: 是 `http.ServerResponse` 类的实例