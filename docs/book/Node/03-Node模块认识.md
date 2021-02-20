---
title: Node模块认识
date: 2018-05-29
---

## node 中的模块

- 为了让 Node.js 的文件可以相互调用，Node.js 提供了一个简单的模块系统。
- 模块是 Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块。

### node 中模块的分类

- 内置模块: node 环境中自行提供的模块(http, fs, url...)
- 自定义模块: 我们自己定义的模块, 一个 js 文件就可以理解为一个自定义模块
- 第三方模块: 别人写好的模块, 我们直接使用(node 中如果需要使用别人编写的模块, 需要使用 npm 命令进行安装)
  > 例如: 安装 less 模块, npm install less 卸载 less 模块: npm uninstall less

### node 中自定义模块的导出

- 我们自己创建的模块只有导出后在其他模块中才能使用, 不导出, 外界模块是没法使用的
- 自定义模块中导出方式可以通过 `module.exports` 和 `exports`

```js
function sumAdd() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var cur = Number(arguments[i]);
    if (!isNaN(cur)) {
      total += cur;
    }
  }
  return total;
}
function sumDel() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var cur = Number(arguments[i]);
    if (!isNaN(cur)) {
      total -= cur;
    }
  }
  return total;
}

/**
 * 模块的导出方式:
 * module.exports 和 exports
 * */

//单独导出每个方法
module.exports.sumAdd = sumAdd;
module.exports.sumDel = sumDel;

//批量到处多个方法
module.exports.sum = {
  sumAdd: sumAdd,
  sumDel: sumDel,
};
```

> 练习: 导出一个构造方法, 通过该构造方法创建一个实例并调用其中的方法
> person.js 自定义模块

```js
module.exports = function(age, name) {
  this.age = age;
  this.name = name;
  this.about = function() {
    console.log(this.age, this.name);
  };
};
```

> 使用自定义模块

```js
var Person = require("./person");
var person = new Person(18, "chenchao");
person.about();
```

### node 中模块的加载

> node 中模块的加载使用 require

- 内置模块: require('http'); 直接写内置的模块名即可
- 自定义模块: require('./index.js') 必须有./, 不能省略当前目录./, 否则会被认为是查找内置模块, 文件后缀名可以省略
- 第三方模块: require('express'); 直接写第三方模块名
  > 注意: ./开头的是自定义模块, 没有./的可能是内置也可能是第三方模块

### Node 的内置模块使用

- http 模块: 创建服务器, 监听端口号, 监听客户端的请求, 获取客户端的请求报文, 返回给客户端相应的信息
- fs 模块: 文件的操作, 读取, 写入.....
- url 模型: 客户端请求 url 地址的解析(路径 pathname 和参数 query)
