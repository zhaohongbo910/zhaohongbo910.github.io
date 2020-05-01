---
title: JavaScript基础知识梳理  
date: 2017-05-01
permalink: /:year/:month/:day/:slug
tags:
 - 面试 
 - JavaScript
categories: 
 - 前端
# autoGroup: javaScript
---

## 1、javascript的typeof返回哪些数据类型
+ 考点：使用typeof检测数据类型

    | 类型 | 值|
    |----|----|
    |Undefined 	|"undefined"|
    |Null	| "object" |
    |Boolean|	"boolean"|
    |Number | "number"|
    |BigInt	 | "bigint"|
    |String |	"string"|
    |Symbol (ECMAScript 2015 新增)|	"symbol"|
    |宿主对象（由 JS 环境提供）|	取决于具体实现|
    |Function 对象 (按照 ECMA-262 规范实现 [[Call]])|	"function"|
    |其他任何对象	|"object"|

+ 扩展：如何检测数组类型？
```js
    Array.isArray(); 浏览器兼容性：IE9+
    toString.call([]);//”[object Array]”
    [] instanceof Array
    var arr=[];
    arr.constructor;//Array
```

## 2、例举3种强制类型转换和2种隐式类型转换?

+ 强制类型转换：自己通过函数来进行数据类型转换
    + 举例：（**parseInt,parseFloat,Number()**）
+ 隐式类型转换：**JS引擎自动帮我们转换的**
    + 举例：==、 console.log()、 alert() 、if() 、+-*/

    扩展：通过==比较两边的值是否相等的结果？
    1==’1’
    null==undefined

## 3、split() join() 的区别
+ split()将字符串按照指定的字符分割成一个数组，并返回
+ join()将数组用指定的字符连接成一个字符串，并返回

## 4、数组方法pop() push() unshift() shift()
[Js 数组方法]('./2017-05-05-数组的方法.md'),
+ 栈方法：
    + push()尾部添加，返回 数组长度
    + pop()尾部删除，返回 被删除的元素
+ 队列方法：
    + unshift()头部添加 ，返回 数组长度
    + shift()头部删除，返回被删除的元素

## 5、事件绑定和普通事件 有什么区别
+ 事件：事件是由浏览器动作（如浏览器载入文档onload）和用户动作（如点击onclick）触发所产生得人机交互瞬间。  
+ 普通事件：**给html元素添加一个特定的属性（比如：onclick）**
+ 事件绑定：js代码中通过标记(id tag class)获取元素，给元素添加特定的方法(比如onclick)
+ 事件流：描述事件从页面到接受处理的流程

**DOM事件流模型**
**事件冒泡**
由目标元素上所产生的动作为事件触发源，然后事件层层向其父代递交，直至到document节点，期间可能产生连锁的事件触发，如上述代码结果button->div->body->html->document。【微软提出】

**事件捕捉**
与上述完全相反document->html->body->div->button，下面直接代码演示。【网景提出】

::: tip
1、所有现代浏览器都支持事件冒泡，但在具体实现中略有差别：<br/>
    + IE5.5及更早版本中事件冒泡会跳过元素(从body直接跳到document)。<br/>
    + IE9、Firefox、Chrome、和Safari则将事件一直冒泡到window对象。<br/>
2、IE9、Firefox、Chrome、Opera、和Safari都支持事件捕获。尽管DOM标准要求事件应该从document对象开始传播，但这些浏览器都是从window对象开始捕获事件的。<br/>
3、由于老版本浏览器不支持，很少有人使用事件捕获。建议使用事件冒泡。<br/>
:::

**事件流的三个阶段** 
+ 事件捕捉阶段：由外部动作触发到传递到目标元素最近的父节点的过程，途中不会接受事件。

+ 处于目标元素阶段：从事件传入到目标元素之初，到未接收事件之末的过程。

+ 冒泡阶段：从事件接受处理触发之初，到事件递交document节点之末的过程，途中接受事件。

事件代理【利用事件冒泡:如果一个父节点内含有多个子节点，并且每个子节点都存在同一事件类型（如onclick）。我们可以为其父代设置一个事件处理器（onclick），来避免为其每个子代设置一个事件处理器，降低内存，提高性能。

**传统事件绑定和符合W3C标准的事件绑定有什么区别？**
**一级事件**
    div1.οnclick=function(){};
    1、如果说给同一个元素绑定了两次或者多次相同类型的事件，那么后面的绑定会覆盖前面的绑定
    2、不支持DOM事件流 事件捕获阶段目标元素阶段=>事件冒泡阶段
**二级事件**
    addEventListener
    1、如果说给同一个元素绑定了两次或者多次相同类型的事件，所有的绑定将会依次触发
    2、支持DOM事件流的
    3、进行事件绑定传参不需要on前端
    **true - 事件句柄在捕获阶段执行 , false- false- 默认。事件句柄在冒泡阶段执行**
    **event.stopPropagation()**
    addEventListener(“click”,function(){},false);//此时的事件就是在事件冒泡阶段执行

**ie9开始，ie11 edge：addEventListener**
+ ie9以前：attachEvent/detachEvent
    + 1、进行事件类型传参需要带上on前缀
    + 2、这种方式只支持事件冒泡，不支持事件捕获
    + 事件绑定是指把事件注册到具体的元素之上，普通事件指的是可以用来注册的事件

## 6、IE和DOM事件流的区别
+ IE9以前：attachEvent(“onclick”)、detachEvent(“onclick”)
+ IE9开始跟DOM事件流是一样的，都是addEventListener

**比较attachEvent和addEventListener：**
+ 1、**attachEvent只支持事件冒泡**，**addEventListener既支持事件冒泡，也支持事件捕获**
+ 2、参数：attachEvent事件类型需要on前缀 addEventListener事件类型不需要on前缀
+ 3、如果使用attachEvent对一个元素的目标阶段绑定了多次事件，那么会按照绑定顺序的相反顺序进行触发，如果使用addEventListener对一个元素的目标阶段绑定了多次事件，那么会按照绑定顺序进行触发

## 7、IE和标准下有哪些兼容性的写法
+ a、获取事件对象：var ev = ev || window.event 或者  var ev=ev?ev:window.evnet;
+ srcElement：IE9之前的浏览器用来获取事件目标元素
+ target：IE9+、ff、chrome用来获取事件的目标元素
+ b、获取事件目标元素：var target = ev.srcElement||ev.target

## 8、call和apply的区别
考点：call和apply的用法
**call和apply相同点：改变函数中this的指向**
不同点：函数参数的传递形式
**call将函数参数依次传入**
**apply将函数参数用一个数组的形式传入**
```js
//无参数调用：

function fn(){
    alert(this.name);
}
var p1={name:1};
fn.call(p1);
fn.apply(p1);

//有参数调用：
function fn2(name,age){
    this.name=name;
    this.age=age;
}
var p1={};
fn2.call(p1,"张三",20);
fn2.apply(p1,["张三",20]);
```
## [9、js中的继承]('./')

## 10、闭包是什么，有什么特性，对页面有什么影响
闭包就是能够读取其他函数内部变量的函数。-- 实现外部作用域访问内部作用域中变量的方法叫做闭包（closure）
闭包的缺点：
+ 1 更多的内存消耗
+ 2 性能问题（跨作用域访问）
+ 3 滥用闭包函数会造成内存泄露，因为闭包中引用到的包裹函数中定义的变量都永远不会被释放，所以我们应该在必要的时候，及时释放这个闭包函数

闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。
可以把闭包简单理解成 “定义在一个函数内部的函数”，闭包就是将函数内部和函数外部连接起来的一座桥梁。闭包有如下特性：
+ a. JavaScript允许你使用在当前函数以外定义的变量
+ b. 即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量
+ c. 闭包可以更新外部变量的值
+ d. 用闭包模拟私有方法
**由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题**

## 11、如何阻止事件冒泡和默认事件
**阻止事件冒泡：**
+ IE9+ FF Chrome：e. stopPropagation();
+ window.event.cancelBubble=true;//ie9之前

**默认行为：html标签所具有的默认行为，比如：**
+ a、点击a标签，就会默认跳转到指定的页面
+ b、点击submit按钮，就会自动提交表单
适用场景：
+ 1、异步操作
+ 2、提交表单之前对表单进行一些基本的验证，比如邮箱是否合法，用户名是不是满足指定的格式,为了不让a点击之后跳转，我们就要给他的点击事件进行阻止
+ 3、文本框获得焦点

**阻止默认行为：**
+ IE9之前：window.event.returnValue=false;
+ IE9+ FF Chrome： e.preventDefault();

## 12、javascript的本地对象，内置对象和宿主对象
+ 本地对象为Array RegExp等可以new实例化
+ 内置对象为global Math 等不可以实例化的
+ 宿主为浏览器自带的document,window 等

## 13、document load 和document ready的区别
+ **document.onload 是在结构和样式加载完才执行js**
+ document.ready原生中没有这个方法，jquery中有 $().ready(function)
+ DOMCententLoaded事件：页面的文档结构（DOM树）加载完之后就会触发
+ window.onload：不仅仅要在结构和样式加载完，还要执行完所有的外部样式、图片这些资源文件，全部加载完才会触发window.onload事件

## 14、”==”和“===”的不同
==：会自动转换类型
===：先判断左右两边的数据类型，如果数据类型不一致，直接返回false
之后才会进行两边值的判断
```js
    1==”1”
    null==undefined;//==true
```
## 15、javascript的同源策略
::: tip
一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合
主机名：localhost、www.baidu.com
协议：http https ftp
端口：一个网站对应着一个端口， http协议的默认端口：80
https协议的默认端口是443
同源策略带来的麻烦：ajax在不同域名下的请求无法实现，
如果说想要请求其他来源的js文件，或者json数据，那么可以通过jsonp来解决
::: 
## 16、[数组去重的方法]('./2017-10-09-数组去重.md')

## 17、JavaScript是一门什么样的语言，它有哪些特点？
弱类型、脚本语言、面向对象、
运行环境：JS引擎（v8(Chrome)/SpiderMonkey(FireFox)/JavaScriptCore(Safari)
/Chakra(IE)）
语言特性：
+ 1、面向对象：原型继承、构造函数、原型链
+ 2、动态语言：弱类型语言
```js
//动态语言的特性
var num=10;//num是一个数字类型
num="jim";//此时num又变成一个字符串类型

//我们把一个变量用来保存不同数据类型的语言称之为一个动态语言
//静态语言：c# java c c++ OC
//int a;
//静态语言在声明一个变量就已经确定了这个变量的数据类型，
//  而且在任何时候都不可以改变他的数据类型
```
## 18、JavaScript的数据类型都有什么？
基本数据类型：number、string、boolean、undefined、null,
复杂数据类型：Object(Array,Date,RegExp,Function)

## 19、undefined产生情况：
+ 1、一个变量定义了却没有被赋值
+ 2、想要获取一个对象上不存在的属性或者方法:
+ 3、一个数组中没有被赋值的元素
+ 4、调用函数，参数未传
扩展：not defined语法错误

## 20、怎样添加、移除、移动、复制、创建和查找节点（使用原生JS实现）
1）创建新节点
    createDocumentFragment() //创建一个DOM文档片段
    createElement() //创建一个具体的元素
    createTextNode() //创建一个文本节点
2）添加、移除、替换、插入
    appendChild() //追加
    removeChild() //移除
    replaceChild() //替换
    insertBefore() //插入
3）查找
    getElementsByTagName() //通过标签名称
    getElementsByName() //通过元素的Name属性的值
    getElementsByTagName() // 通过类名查找
    getElementById() //通过元素Id，唯一性

## 21、获取url 参数
答案：
```js
function serlize(url){
    var result={};
    //1、寻找？后面的字符串
    url=url.substr(url.indexOf("?")+1);
    //2、将字符串用&分隔
    var args=url.split("&");//[“a=1”,”b=2”]
    for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
    var item = arg.split('=');
        //3、对象的键=值
        result[item[0]]= item[1];
    }
    return result;
}
serlize('http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e');
```

## 22、正则表达式构造函数var reg=new RegExp(“xxx”)与正则表达字面量var reg=//有什么不同？匹配邮箱的正则表达式？
RegExp
答案：**当使用RegExp()构造函数的时候，不仅需要转义引号（即\”表示”）**，并且还需要双反斜杠（即\表示一个\）。使用正则表达字面量的效率更高。
邮箱的正则匹配：
var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

## 23、写一个function，清除字符串前后的空格。（兼容所有浏览器）
使用自带接口trim()，考虑兼容性(IE9以下浏览器不支持)：
考点：1、原型扩展 2、正则表达式 3、字符串的replace方法
```js
if(typeof String.prototype.trim !=”function”){
    String.prototype.trim=function(){
    return this.replace(/^\s+|\s+$/g,”“);
    }
}
var str=” hello “;
```
## 24、Javascript中callee和caller的作用？
+ arguments.callee：获得当前函数的引用
+ fn.caller是返回一个对函数的引用，该函数调用了当前函数；（被废弃）
+ callee是返回正在被执行的function函数，也就是所指定的function对象的正文。

## 25 JavaScript中遇到“null instanceof Object ”返回值为false的解释
::: tip
1、`null`表示为空的引用；`instanceof` 表示某个变量是否是某个对象的实例 ；`objec`t则是对象界里的老大，`undefined`和`null`比较特殊，虽然`null`的类型是`object`，但是null不具有任何对象的特性，就是说我们并不能执行 `null.toString()`、`null.constructor`等对象实例的默认调用。所以从这个意义上来说，`null`和`undefined`有最大的相似性。看看 `null == undefined `的结果(true)也就更加能说明这点。

不过相似归相似，还是有区别的，就是和数字运算时，10 + null结果为：10；10 + undefined结果为：NaN（非数字值）。故 null instanceof Object 判读为false。
pg：isNaN() 函数用于检查其参数是否是非数字值，参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。
2、typeof 返回一个表达式的数据类型的字符串，返回结果为javascript中的基本数据类型，包括：number、boolean、string、object、undefined、function等6种数据类型。
typeof null object
::: 

## 26、把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
如果说放在body的封闭之前，将会阻塞其他资源的加载
如果放在body封闭之后，不会影响body内元素的加载

## 27、iframe的优缺点？
优点：
+ 
+ 1、解决加载缓慢的第三方内容如图标和广告等的加载问题
+ 2、并行加载脚本
缺点：
+ 1、iframe会阻塞主页面的onload事件
+ 2、即时内容为空，加载也需要时间，因为需要http请求
 + 3、不便于SEO
+ 4、内外网页维护麻烦

## 28、请你谈谈Cookie的弊端？
什么是Cookie？Cookie是指某些网站为了辨别用户身份或进行session跟踪而储存在用户本地浏览器终端上的数据。一般来说，Cookie通过HTTP Headers从服务器端返回到浏览器上。首先，服务器端在响应中利用Set-Cookie header来创建一个Cookie ，然后，浏览器在它的请求中通过Cookie header包含这个已经创建的Cookie，并且把它返回至服务器，从而完成浏览器的验证。

Cookie的保存形式
IE 浏览器将站点的 Cookie 保存在文件名格式为 @.txt 的文件中，其中 是您的帐户名。例如，如果您的名称为 user，您访问的站点为 www.codetc.com，那么该站点的 Cookie 将保存在名为 user@codetc.com.txt 的文件中。（该文件名可能包含一个顺序的编号，如 user@codetc.com [1].txt。） Cookie 文本文件是与用户相关的，所以会按照帐户分别保存。

Cookie的限制
一个 Cookie 大约占用 50 个字符的基本空间开销（用于保存有效期信息等），再加上其中保存的值的长度，其总和接近 4K 的限制。大多数浏览器只允许每个站点保存 20 个 Cookie。

为什么选择把信息保存到cookie中
由于session在使用过程中会造成极大的网络负担，随之带来的就是性能问题，所认我们可以把session以Cookie的形式保存在客户端。当然有时候也是为了完成某些特定的功能而使用cookie，比如实现记住密码和自动登录。

优点：是极高的扩展性和可用性
通过良好的编程，控制保存在cookie中的session对象的大小。
通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：数量限制和安全问题
Cookie是有数量和长度限制的。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。
安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

缺点：
+ 1.Cookie数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。
+ 2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
+ 3.有些状态不可能保存在客户端。例如，
一、为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
二、比如用户密码输入错误超过3次，我们应该在后端数据库中保存错误数据

###  cookie、localStorage 以及 sessionStorage

|特性	       |        cookie                 |	localStorage	       | sessionStorage |	indexDB|
|-----------|-------------------------------|-----------------------|----------------|--------|
|数据生命周期 |	一般由服务器生成，可以设置过期时间, |	除非被清理，否则一直存在  |	页面关闭就清理    |	除非被清理，否则一直存在|
|数据存储大小 |	4K                            |	5M                    |	5M              |	无限|
|与服务端通信 |	每次都会携带在 header 中，对于请求性能影响 |	不参与         |	不参与          |	不参与|
| 作用       | 主要用来保存登陆信息，一般会存储一段表示用户信息的数据。| 用于永久存储信息| 存储临时性信息 | 永久性信息 |




## 29 、哪些操作会造成内存泄漏？
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
+ 1、setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
+ 2、闭包
+ 3、控制台日志
