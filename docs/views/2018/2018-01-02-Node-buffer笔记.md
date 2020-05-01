---
title: Node Buffer
date: 2018-01-02
permalink: /:year/:month/:day/:slug
tags:
 - Node 
categories: 
 - Node
sidebar: false
publish: true
---

> buffer的来龙去脉 </br> ddsdsd

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
- 缓冲区Buffer是暂时存放输入输出数据的一段内存。
- JS语言没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
- NodeJS提供了一个Buffer对象来提供对二进制数据的操作, 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
- Buffer好比由一个多位字节元素组成的数组，可以有效的在javascript中表示二进制数据
- **Buffer对象类似于数组，它的元素为16进制的两位数，即0到255的数值**

```js
    let buffer = Buffer.from('小布丁','uft-8')
    // buffer <Buffer e5 b0 8f e5 b8 83 e4 b8 81>
```
- 不同编码的字符串占用的元素个数各不相同，上面代码中的中文字在UTF-8编码下占用3个元素，字母和半角标点符号占用1个元素。












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

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend



:trophy: **参考**
#### []()