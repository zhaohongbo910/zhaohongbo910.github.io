---
title: 流模块
date: 2018-05-29
---
## 流的概念
> 流是一组有序的，有起点和终点的字节数据传输手段 它不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理 流是一个抽象接口，被 Node 中的很多对象所实现。比如HTTP 服务器request和response对象都是流。

## 1.可读流createReadStream
> 实现了stream.Readable接口的对象,将对象数据读取为流数据,当监听data事件后,开始发射数据

```js
fs.createReadStream = function(path, options) {
  return new ReadStream(path, options);
};
util.inherits(ReadStream, Readable);
```
### 1.1 创建可读流
```
var rs = fs.createReadStream(path,[options]);
```
- 1: path读取文件的路径
- 2: options
    - flags打开文件要做的操作,默认为'r'
    - encoding默认为null
    - start开始读取的索引位置
    - end结束读取的索引位置(读取的长度是首包尾也包含)
    - highWaterMark读取缓存区默认的大小64kb
> 如果指定utf8编码highWaterMark要大于3个字节, 必须要是3的倍数, 否则读取不到

### 1.1.1 监听data事件
> 流切换到流动模式,数据会被尽可能快的读出
```js
rs.on('data', function (data) {
    console.log(data);
});
```
### 1.1.2 监听end事件
> 该事件会在读完数据后被触发
```js
rs.on('end', function () {
    console.log('读取完成');
});
```
### 1.1.3 监听error事件
```js
rs.on('error', function (err) {
    console.log(err);
});
```
### 1.1.4 设置编码
> 与指定{encoding:'utf8'}效果相同，设置编码

```js
rs.setEncoding('utf8');

```
> 实例
```js

var fs = require('fs');

var rs = fs.createReadStream('./data.txt');

rs.setEncoding('utf8');  //option中的flag, start, end, highWaterMark使用默认值

var result = '';
rs.on('data', function (data) { //
    result+=data;
});

rs.on('end', function () {
    console.log(result);
});

rs.on('error', function (err) {
    console.log(err);
});
```

### 1.1.5暂停触发data恢复触发data
> 通过pause()方法和resume()方法
```js
  rs.on('data', function (data) {
      rs.pause();
      console.log(data);
  });
  setTimeout(function () {
      rs.resume();
  },2000);
```

> 例子:
```js
  var fs = require('fs');

  var readStream = fs.createReadStream('../data.txt', {encoding:'utf8', highWaterMark: 3, start: 0, end: 11});

  var result = '';
  readStream.on('data', function (chunk) {
      console.log(chunk);
      /**
       * 思考：把setTimeout代码放到on-data中和放到外面分别输出什么???
       * */
      readStream.pause();//停止流的读取
      result += chunk;

      //setTimeout放在on-data中
      /*setTimeout(function () {
          readStream.resume();
      }, 2000);*/

  });

  //setTimeout放在外面
  /*setTimeout(function () {
      readStream.resume();
  }, 2000);*/


  readStream.on('end', function (chunk) {
      console.log(result);
  });

  readStream.on('error', function (err) {
      console.log(err);
  });
```

## 2.可写流createWriteStream
> 实现了stream.Writable接口的对象来将流数据写入到对象中
```js
fs.createWriteStream = function(path, options) {
  return new WriteStream(path, options);
};
util.inherits(WriteStream, Writable);
```

### 2.1 创建可写流
```js
var ws = fs.createWriteStream(path,[options]);
```
- 1: path写入的文件路径
- 2: options
    - flags打开文件要做的操作,默认为'w'
    - encoding默认为utf8
    - highWaterMark写入缓存区的默认大小16kb

### 2.1.1 write方法
```js
ws.write(chunk,[encoding],[callback]);
```
- chunk写入的数据buffer/string
- encoding编码格式chunk为字符串时有用，可选
- callback 写入成功后的回调
- 返回值为布尔值，系统缓存区满时为false,未满时为true

### 2.1.2 end方法
```
ws.end(chunk,[encoding],[callback]);
```
- 调用该方法关闭文件, 迫使系统缓存区的数据立即写入文件中。不能再次写入

> 实例代码
```js
var fs = require('fs');

//创建可写流 //flags设置为a就是追加内容
var writeStream = fs.createWriteStream('../data.txt', {encoding:'utf8', highWaterMark: 3});

//向可写流中写入内容
writeStream.write('你好');

//向可写流中写入数据，并关闭可写流(关闭可写流后不能再调用write写入内容)
writeStream.end('大家好');
```

## 修改flags的值为'a'向文件末尾追加数据

### 2.1.3 drain方法
```js
var fs = require('fs');
var ws = fs.createWriteStream('./2.txt',{highWaterMark:5});
var i = 0;
function write(){
    var flag = true;
    while (flag&&i<10){
        flag = ws.write(''+i++);//向缓冲区写入内容，当缓冲区没有写满的时候返回值为true，写满的时候返回false
    }
}
write();
ws.on('drain', function () { //当缓冲区的内容为空的时候触发
    write(); //缓冲区为空，再次调用write方法
});
```
### 3.pipe方法
### 3.1 pipe方法的原理
```js
function myPipe(path1, path2){
    var fs = require('fs');
    var rs = fs.createReadStream(path1, {highWaterMark: 5});
    var ws = fs.createWriteStream(path2, {highWaterMark: 1});

    var flag = true;
    rs.on('data', function (data) { //读取文件中的数据
        flag = ws.write(data); //向文件中写入数据
        if (!flag){   //缓冲区满了
            rs.pause();  //停止数据的读取
        }
    });
    rs.on('end', function () {
        ws.end('完成');
    });
    ws.on('drain', function () { //监测缓冲区干了
        console.log('缓冲区干了');
        rs.resume();
    });
}
myPipe('input.txt', 'output.txt');
```
### 3.2 pipe用法
> 格式: readStream.pipe(writeStream);
```js
var fs = require('fs');
var rs = fs.createReadStream('input.txt', {highWaterMark: 5});
var ws = fs.createWriteStream('output.txt', {highWaterMark: 1});

rs.pipe(ws);
```
> 将数据的滞留量限制到一个可接受的水平，以使得不同速度的来源和目标不会淹没可用内存。