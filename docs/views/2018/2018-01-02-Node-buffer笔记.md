
---
title: Node --Buffer
date: 2018-01-02
tags:
 - Node 
categories: 
 - Node
sidebar: false
---

## 1. 什么是Buffer
- 缓冲区Buffer是暂时存放输入输出数据的一段内存。
- JS语言没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
- NodeJS提供了一个Buffer对象来提供对二进制数据的操作, 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
- Buffer好比由一个多位字节元素组成的数组，可以有效的在javascript中表示二进制数据

## 2. 什么是字节
+ 一个字节：11111111 （八位二进制数）
+ 10进制：0～9 
+ 2进制：0～1

- 字节(Byte)是计算机存储时的一种计量单位，一个字节等于8位二进制数
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

## 3. 定义buffer的三种方式
- 3.1 通过长度定义buffer(指定buffer由几个字节构成)

```js
Buffer.from(array,)

例子:
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72],'');
console.log(buf);
```

- 3.2 通过数组定义buffer(一个数组成员对应buffer一个字节)
```
new Buffer(str,[encoding]);

例子:
var ary = [1, 2, 3, 4, 5];
//var ary = ['fdskjh', 'sdfljk', 'sdflj']; //只能放数字, 并且数字的大小只能在0~255之间,因为一个数组成员对应一个字节
var bufferFromArray = new Buffer(ary);

console.log(bufferFromArray);
```
- 3.3 字符串创建(字符串中每个字符对应一个字节)
```js
 例子:
 var bufferFromString = Buffer.from('123456','utf-8'); // 创建一个字符串buffer(将字符串中的每个字符对应的ascii值取出来, 一个字符对应一个字节)
 console.log(bufferFromString);
```
> 总结: 无论是以哪种方式创建buffer, 最终的目的都是给buffer一个指定空间长度, 可以把buffer相关的操作类比数组的相关操作来进行学习

## 4.buffer常用方法
- 4.1 fill方法: 将buffer内容置空
```js
buffer.fill(0);
手动初始化,擦干净桌子,将buffer内容清0

例子:
var buffer = new Buffer('sdkjlh');
console.log(buffer);

buffer.fill(0); //一个参数的时候表示全部清空(最常用)
console.log(buffer);

buffer.fill(0, 2); //两个参数的时候表示从第二个字节后开始清空
console.log(buffer);


buffer.fill(buffer, 2, 4); //三个参数的时候表示从第二个字节后开始清空, 直到第四个字节结束
console.log(buffer);
```

- 4.2 write方法：向buffer中写入内容
> function(string, offset, length, encoding)
```js
string, offset, length, encoding

buffer.write('百',0,3,'utf8');
buffer.write('知',3,3,'utf8'); //陈超

例子:
//思考: 如何通过剩下两种方式创建5个字节大小的空间呢 ?
//var buffer = new Buffer('12345');
var buffer = new Buffer([1, 2, 3, 4, 5]);

//buf.write(string, [offset], [length], [encoding])
//除了第一个参数,其他参数都可以省略
//buffer.write('陈'); //如果是一个参数,直接将内容写入到buffer中
//buffer.write('陈超');//切记: 如果写入的内容比原来的数组长度还要长, 会自动截取

//buffer.write('陈', 1);//如果是两个参数, 就是将内容写入buffer中, 但是是从buffer的第一个字节开始写入(首尾两个字节内容不变)

//buffer.write('陈超', 1, 6); //如果是三个参数, 就是将内容写入buffer中, 但是是从buffer的第一个字节开始写入, 到第四个字节结束(首尾两个字节内容不变) ==>切记: buffer的起始和结束写入长度一定要比写入的内容长, 否则会自动截取

console.log(buffer);

```

- 4.3 toString方法：将buffer转换成string
> function(encoding, start, end)

```js
//将buffer转换成字符串类型 start end 是截取的buffer的长度

buffer.toString('utf8',3,6)

例子:
var buffer = Buffer.from('小布丁');
console.log(buffer); //如果直接打印buffer是一堆16进制的数组, 计算机能看懂,但是不方便我们程序员自己观看

//buf.toString([encoding], [start], [end])
console.log(buffer.toString());//如果没有参数, 将整个buffer进行转换 输出字符串

console.log(buffer.toString('utf8', 3)); //如果是两个参数, 则从第二个参数位置开始进行转换

console.log(buffer.toString('utf8', 3, 6)); //如果是三个参数, 则将第二三个参数长度之间的内容进行转换
```
- 4.4 slice方法：截取buffer中的指定长度
> function(start, end)
```js
buffer.slice(0,4);

// 例子:
var buffer = Buffer.from('小布丁');
console.log(buffer.slice().toString()); //如果没有指定参数则将整个字符串进行获取
console.log(buffer.slice(3).toString()); //如果是一个参数,则从第一个参数位置开始截取
console.log(buffer.slice(3, 6).toString()); //如果是两个参数,则截取的是两个参数之间的内容


//截取乱码问题
var StringDecoder  = require('string_decoder').StringDecoder;
var sd = new StringDecoder;
var buffer = Buffer.from('小布丁');
console.log(sd.write(buffer.slice(0,4)));
console.log(sd.write(buffer.slice(4)));

// 例子:
//截取乱码的问题
var bufferNew = buffer.slice(0, 4);

var StringDecoder = require('string_decoder').StringDecoder;
var sd = new StringDecoder;

console.log(sd.write(bufferNew));//stringDecoder只是解决了对buffer中乱码部分的截断输出, 但是对buffer本身没有任何影响(只是显示的时候没有乱码, 但是对buffer本身没有任何效果)
console.log(bufferNew);//buffer内容并没有改变

```

- 4.5 copy方法：将某个buffer内容复制到另一个buffer中
> sourceBuffer.copy(targetBuffer,targetstart,sourcestart,sourceend);
```js
//复制Buffer 把多个buffer拷贝到一个大buffer上

sourceBuffer.copy(targetBuffer,targetstart,sourcestart,sourceend);

//例子:
var buffer1 = new Buffer(6);
var buffer2 = new Buffer(12);

buffer1.write('小布丁');

//buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
buffer1.copy(buffer2); //一个参数, 直接将buffer1中的内容复制到buffer2中

buffer1.copy(buffer2, 0); //两个参数, 直接将buffer1中的内容复制到buffer2中

buffer1.copy(buffer2, 0, 0); //三个参数, 直接将buffer1中的内容复制到buffer2中

buffer1.copy(buffer2, 0, 3, 6);//四个参数, 直接将buffer1中的3到6的内容复制出来,放到buff2中

buffer1.copy(buffer2, 6, 3, 6);//四个参数, 直接将buffer1中的3到6的内容复制出来,放到buff2中6开始的位置中

console.log(buffer1.toString());
console.log(buffer2.toString());
```

- 4.6 concat方法
```js
Buffer.concat([buf1,buf2],length);
实现concat方法

例子:
var buffer1 = Buffer.from('小布丁');
var buffer2 = Buffer.from('the Coding js');


/**
 * 对象方法: 通过对象调用的方法就是对象方法
 * 类方法:通过类名调用的方法就是类方法
 * */

//类方法: Buffer.concat(list, [totalLength])
var buffer1 = Buffer.concat([buffer1, buffer2]); // 一个参数的时候, 将数组中的所有buffer都拼接到一起

var buffer2 = Buffer.concat([buffer1, buffer2], 100); //两个参数的时候, 将数组中的所有buffer都拼接到一起, 第二个参数是拼接后的总长度, 如果总长度小于数组中所有buffer总长度和则截断, 大于则乱码

console.log(buffer2.toString());

```
- 4.7 isBuffer：判断是否是buffer
```js
//判断是否是buffer

Buffer.isBuffer

//例子:
var buffer = Buffer.from(5);

buffer.write('abcde');

console.log(buffer.toString());
console.log(Buffer.isBuffer(buffer));  //判断buffer是否是buffer类型对象
console.log(Buffer.isBuffer([]));  //判断buffer是否是buffer类型对象
```
- 4.8 length：获取buffer的长度(字节长度)
```js
//获取字节长度(显示是字符串所代表buffer的长度)

Buffer.byteLength("小布丁");
buffer.length;


// 例子:
var buffer = new Buffer('小布丁真帅');

console.log(buffer.length);//获取buffer的字节长度

console.log(Buffer.byteLength('小布丁真帅'));//返回字符串真是的字节长度
```

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

## [base64图片](http://www.atool.org/img2base64.php)
## [base64编码](http://tool.chinaz.com/Tools/Base64.aspx)

- 6.base64的转换
算法核心:
    1: Base64编码要求把3个8位字节（3*8=24）转化为4个6位的字节（4*6=24），之后在6位的前面补两个0，形成8位一个字节的形式
    2: char base64=
       ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
       'Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f',
       'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
       'w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/',];
```js
例子:
var buffer = Buffer.from('小布丁');

//1: 得到十六进制的数
console.log(buffer);  //得到十六进制的数: e9 99 88


//2: 将十六进制转换成十进制
console.log(parseInt('e9', 16));
console.log(parseInt('99', 16));
console.log(parseInt('88', 16));

//3: 将十进制转换成二进制
console.log((233).toString(2));
console.log((153).toString(2));
console.log((136).toString(2));

//4: 将3个8位字节转换成4个6为字节, 之后在前面补两个0
//11101001 10011001 10001000


111 010 011 001 100 110 001 000 

00111010 00011001 00100110 00001000 


//00111010 00011001 00100110 00001000

//5: 将每8为对应的字符进行获取
var base64= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f',
        'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/',];

console.log(base64[parseInt('00111010', 2)]);
console.log(base64[parseInt('00011001', 2)]);
console.log(base64[parseInt('00100110', 2)]);
console.log(base64[parseInt('00001000', 2)]);

//6: 查找对应的base64解码
//6ZmI ==> 对应解码是 陈
```

> 练习：将刘进行base解码