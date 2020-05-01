---
title: -TextEncoder-TextDecoder
date: 2019-03-24
permalink: /:year/:month/:day/:slug
tags:
 - webpack       
categories: 
 - 前端
publish: true
---

## TextEncoder 以UTF-8的编码方式输出字节流

**构造函数 TextEncoder()**
**返回一个新构造的结构TextEncoder，该结构将生成采用默认的UTF-8编码的字节流，**
> TextEncoder() 从 Firefox 48 and Chrome 53 开始不再需要参数 ，传入TextEncoder构造函数的任何类型编码格式现在都将被忽略，并且将创建一个utf-8 TextEncoder。
```js
const encoder = new TextEncoder() // 默认是 UTF-8
console.log(encoder.encoding);   // 返回utf-8
const view = encoder.encode('小布丁')
console.log(view); //Uint8Array(9) [229, 176, 143,229, 184, 131,228, 184, 129]
```

## TextDecode 解码器
```js
const decoder= new TextDecoder();
// the argument must be an instance of ArrayBuffer or ArrayBufferView
const str = decoder.decode(view);
console.log("buffer", str);
```

:trophy: **参考**
#### []()