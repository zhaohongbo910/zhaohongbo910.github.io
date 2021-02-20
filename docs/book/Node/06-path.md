---
title: 路径模块
date: 2018-05-29
---

# 路径处理path模块
path是node中专门处理路径的一个核心模块

- 将多个参数值字符串结合为一个路径字符串 `path.join`
```js
var path = require('path');

//将字符串拼接成路径的形式(字符串之间用/隔开)
console.log(path.join('divr', 'filename'));
```

- 获取一个路径中的文件名 `path.basename`
```js
var path = require('path');

//将字符串拼接成路径的形式(字符串之间用/隔开)
var pathname = path.join('divr', 'dir1', 'dir2', 'filename');

//获取路径中的文件名(最后一个/后面的内容)
console.log(path.basename(pathname));
```


- 获取一个路径中的扩展名 `path.extname`
```js
var path = require('path');

//将字符串拼接成路径的形式(字符串之间用/隔开)
var pathname = path.join('divr', 'dir1', 'dir2', 'filename.txt');

//获取路径中文件名的后缀(文件名中.后面的内容,没有.返回空)
console.log(path.extname(pathname));
```

- 操作系统提定的文件分隔符 `path.sep`
```js
var path = require('path');

console.log(path.sep); //特定平台下的分割符(window和mac下不一样)

var filepath = path.join('file', 'dir1', 'dir2', 'dir3', 'filename');
console.log(filepath.split(path.sep));  //将路径名进行分割
```


- 属性值为系统指定的环境变量路径分隔符 `path.delimiter`
```js
var path = require('path');

console.log(path.delimiter); //特定平台的路径分隔符

//获取环境变量的值
console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));//将环境变量的路径集合, 按照路径分隔符分割成若干个子路径
```

- 将非标准的路径字符串转化为标准路径字符串 `path.normalize`
```js
var path = require('path');

var filepath = '../../././././../dir1////dir/filename.txt';

console.log(path.normalize(filepath)); //将非标准的路径字符串转换成标准的路径字符串
```

特点：
可以解析 . 和 ..
多个杠可以转换成一个杠
在windows下反杠会转化成正杠
如结尾以杠结尾的，则保留斜杠


取得绝对路径
- resolve
```js
var path = require('path');

var filename = '1. join.js';

console.log(path.resolve(filename)); //根据文件名获取文件的绝对路径

```

特点：
以应用程序根目录为起点
如果参数是普通字符串，则意思是当前目录的下级目录
如果参数是.. 回到上一级目录
如果是/开头表示一个绝对的根路径