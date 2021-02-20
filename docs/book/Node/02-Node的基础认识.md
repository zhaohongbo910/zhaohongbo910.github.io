---
title: -Node的基础认识
date: 2018-05-29
---

### 什么是Node.js
> 什么是js?
- js是一门运行在客户端(浏览器)的轻量级的脚本编程语言
> 思考: 如何在浏览器中运行js代码??
- 首先创建html文件, 需要在html中使用script标签引入js代码, 在浏览器中运行html文件, 并在浏览器中渲染所有的html/css/js代码
- 现在js不仅可以在浏览器中运行还可以在node中运行
> 什么是node?
- node是一个环境不是编程语言, 就像浏览器环境一样, 提供了一种可以直接运行js代码的环境, 我一般会把node环境安装在服务器端, 而浏览器是安装在客户端, 这样我们就可以在服务器端使用js编写程序了, 也就是说js不仅仅可以编写前客户端的语言还可以编写服务器的语言....


### node和浏览器的区别
- 浏览器安装在客户端的, 为了保护客户端的安全, 基本上不会提供js代码操作客户端磁盘上的文件功能, node是安装服务端的, node提供了一系列js代码操作服务器磁盘上的文件功能(比如:客户端访问index.html文件, 服务器需要通过fs模块读取index.html文件代码发送给客户端)
- node采用的是谷歌的v8引擎来解析js代码的, 浏览器渲染引擎根据浏览器的不同也是有所差异的
- 浏览器中的全局js对象是window, 而node环境下的全局对象是global
- node环境下给js提供了很多新的模块和方法(http, fs, url, express....)

### node环境下运行js程序
> 练习: 编写一段js代码, 实现任意多个数求和
```js
function sum(){
    var total = 0;
    for (var i=0; i<arguments.length; i++){
        var cur = Number(arguments[i]);
        if (!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
```
> 前提是在webstorm中绑定node环境 / vscode 中安装 .run 插件  右击当前窗口 `run`  
- webstorm中右键执行: 如果在webstorm中已经注入node环境后, 直接在js文件中右键'run xxx.js'在node环境中直接执行即可
> 前提是安装了node全局命令
- webstorm中命令行执行: 打开webstorm中的terminal命令行, 直接输入node xxx.js命令即可
- 终端命令行执行: 找到js文件所在的目录, shift+右键->在此处打开命令行窗口->执行node xxx.js命令即可

## http请求和响应报文

### 练习: 绘制服务器和客户端数据请求模型

### http事务
- 事务: 一件完整的事情称之为事务
- http事务: 一个完整的客户端和服务端数据交互(http事务: request+response)

### http报文
> 客户端传递给服务器的内容, 和服务器返回给客户端的内容都是http报文
> http报文的组成
- 起始行: 请求起始行, 响应起始行
- 首部: 请求首部, 响应首部, 通用首部, 自定义首部
- 主体: 请求主体, 响应主体

### 如何在控制台下查看报文
> 运行静态资源文件处理项目, 在谷歌控制台的network下查看

> 通用首部
```
eneral: ->通用首部
Request URL:http://localhost:8080/index.html (请求url)
Request Method:GET  (请求方式: get, post, delete, put, header, option)
Status Code:200 OK  (状态码)
Remote Address:[::1]:8080  (ip地址和端口号)
```
> 请求头
```
Request Headers -> 请求头
请求起始行:
GET /index.html HTTP/1.1 (请求起始行： get(请求方式) /index.html(请求路径) http/1.1(http版本号)
请求首部:
Host: localhost:8080
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding: gzip, deflate, sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: Hm_lvt_e134fee1edb436d9a4b58261f92fdeb8=1476863452; Hm_lvt_403e4ac6a63f15f75c5b6fca09baaca4=1476863452
```

> 响应头
```
Response Headers: -> 响应头
响应起始行:
HTTP/1.1 200 OK (HTTP/1.1: http版本, 200: http响应状态码, OK: 状态吗的说明)
响应首部: 服务器传递给客户端的一些信息可以放在响应首部中, 客户端可以在响应首部中获取到相关信息
content-type: text/HTML;charset=utf8(告诉客户端mime类型, 客户端解析当前文件方式)
Date: Thu, 20 Oct 2016 06:58:25 GMT(服务器响应时间, 格林尼治时间+8是北京时间)
Connection: keep-alive
Transfer-Encoding: chunked
```
> 响应主体
```
Response: ->响应主体, 服务器传递给客户端的数据内容都是在响应主体中, 客户端可以在响应的主体中获取到这些内容(服务器设置 客户端获取)
```

> 请求主体
```
Request Payload: ->请求主体, 如何客户端通过post方式请求的时候, 可以通过请求体向服务器发送信息
```

### http请求方式
> 客户端向服务器发送请求的时候可以通过以下几种方式, 既可以向服务器传递数据也可以从服务器获取数据, 从本质意义上下面的请求方式是没有区别的, 但是开发人员有自己的约定和规范
- get: 一般应用于从服务器获取数据(向服务器传递的数据少, 获取服务器的信息多, 最常用的就是get请求, 一般通过url传参数方式传参)
- post: 一般应用于向服务器传递数据(向服务器传递的数据多, 获取服务器的数据少, 一般通过请求体的方式进行传参)->一般用于向服务器添加数据信息
- delete: 一般应用于删除服务器的指定信息(和get一致)
- put: 一般用于更新服务器的指定信息(和post一致)
- head: 一般用于获取响应头信息, 不获取响应体

> 总结:get和delete相似, post和put相似

### get和post请求方式的比较
- 1: 大小问题: get请求传参有大小限制, post理论上没有大小限制
> 原因: get请求是通过url进行传参的, 而每个浏览器对url的长度有 限制(谷歌8kb ie 2kb), 如果url过长, 浏览器会自动截取; post通过请求体传递参数, 理论上没有大小, 但是一般要求不要超过2mb
- 2: 缓存问题: get请求会出现缓存, post没有缓存问题
> 浏览器有记录, 如果两次get请求的地址一样, 会进行缓存处理, 第二次请求获取的内容和第一次一样, 但是一旦信息修改, 读取到的还是旧的信息, 所以不建议有缓存, 使用在url后面增加随机数, 保证每次请求的url地址信息不同, 防止get请求的缓存问题
- 3: 安全问题: get相对不安全, post相对安全
> get传参数通过url, post传参通过请求体, 安全是相对的, 没有绝对的安全, 因为url和请求体都能够获取

### http状态码
![http状态吗]()
> 状态码分类:
- 1xx: 1开头表示消息, 这类开头的状态码, 代表请求已经被接收,需要继续处理
- 2xx: 2开头表示成功, 这一类型的状态码，代表请求已成功被服务器接收、理解、并接受
- 3xx: 3开头表示重定向, 这类状态码代表需要客户端采取进一步的操作才能完成请求。
- 4xx: 4开头表示请求(客户端)错误, 这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。
- 5xx: 5开头表示服务器错误, 这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。

> 常见的状态码
- 200: 成功(2开头的都是表示请求成功了)
- 301: 永久重定向(http://www.360buy.com/)
- 302: 临时重定向(服务器负载均衡)
- 304: 客户端请求服务器返回的是缓存信息
- 400: 客户端传递给服务器的参数出现错误
- 401: 无权限访问
- 404: 访问地址不存在
- 500: 未知的服务器错误
- 503: 服务器超负荷