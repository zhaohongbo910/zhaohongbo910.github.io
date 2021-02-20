---
title: Node Buffer
date: 2018-01-02
permalink: /:year/:month/:day/:slug
tags:
 - Node 
categories: 
 - Node
publish: true
---


> buffer的来龙去脉 

<!--more-->

## 1. 什么是字节

+ 一个字节：11111111 （八位二进制数）
+ 10进制：0～9 
+ 2进制：0～1

- 字节(Byte)是计算机存储时的一种计量单位，**一个字节等于8位二进制数**
- 一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
- 字节是通过网络传输信息的单位
- 一个字节最大值十进制数是255

> 练习：编写一个方法，计算一个字节能够表示的最大的数

```js
    // 一个字节 占 8位；
    function oneBytyEpressMaxNumber(){
        var result = 0;
        for (var i=0; i<8; i++){
            result += Math.pow(2, i);
        }
        return result;
    }
    console.log(oneBytyEpressMaxNumber()); //255
```

> 练习：n个字节表示最大的数
```js
    // 
    function computeBytesEpressMaxNumber(byte){
        return Math.pow(oneBytyEpressMaxNumber(), byte);
    }
    console.log(computeBytesEpressMaxNumber(8));

    //思考: 指定一个字节数, 求最大表示的数值
```

## 2. 什么是Buffer
- **缓冲区Buffer是暂时存放输入输出数据的一段内存**
- JS语言没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。Buffer是一个像Array的对，它要用用于操作字节。
- NodeJS提供了一个Buffer对象来提供对二进制数据的操作, 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
- Buffer好比由一个多位字节元素组成的数组，可以有效的在javascript中表示二进制数据
- **Buffer对象类似于数组，它的元素为16进制的两位数，即0到255的数值**
- 不同编码的字符串占用的元素个数各不相同，中文字在UTF-8编码下占用3个元素，字母和半角标点符号占用1个元素。

### 2.1 模块结构
Buffer是一个的JavaScript与C++的结合的模块，它性能相关部分用C++实，非性能相关的部分用JavaScript实现，Buffer所占用的内存不是通过V8分配，它属于**堆外内存**
由于V8收垃圾回收机制的影响，将常用的操作对象用用更高效和专有的内存分配回收策略来管理是个不错的思路。并且由于buffer太常见，Node在进程启动的时候 就已经加载了，并放置在全局对象`global`所以无需`require()`可直接使用。

### 2.2 [Buffer 对象](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding)

```js
let buffer = Buffer.from('小布丁','uft-8')
console.log("buffer", buffer)
// buffer <Buffer e5 b0 8f e5 b8 83 e4 b8 81>

let buf = Buffer.alloc(100) // 分配一个长度为 100字节 的Buffer 对象

```
在Node的早期版本中 创建buffer 都是用 `new Buffer(size)` 的方式来创建 现在这种方式已经被弃用了。不同的编码用的个数不相同，上中的中在 UTF-8编下用3个，用1个。 


- 5.进制转换
```js
//5.1 将任意进制字符串转换为十进制
parseInt('11', 2); // 3 2进制转10进制
parseInt('77', 8); // 63 8进制转10进制
parseInt('0xe7', 16); //175 16进制转10进制
```

```js
// 5.2 将10进制转换为其它进制字符串
(3).toString(2)) // "11" 十进制转2进制
(17).toString(16) // "11" 十进制转16进制
(33).toString(32) // "11" 十提制转32进制

```
