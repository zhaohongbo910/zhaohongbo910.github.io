## 什么是session
> session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上

> 客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了

## cookie与session区别
- 1: cookie数据存放在客户的浏览器上，session数据放在服务器上。
- 2: cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗 考虑到安全应当使用session
- 3: session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面,应当使用COOKIE
- 4: 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie
> 将登陆信息等重要信息存放为session、其他信息如果需要保留，可以放在cookie中

## session实现
- 1: 在服务器端生成全局唯一标识符session_id
- 2: 在服务器内存里开辟此session_id对应的数据存储空间
- 3: 将session_id作为全局唯一标示符通过cookie发送给客户端
- 4: 以后客户端再次访问服务器时会把session_id通过请求头中的cookie发送给服务器
- 5: 服务器再通过session_id把此标识符在服务器端的数据取出
```
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
//存放会话数据 key卡号 value就是卡号对应的数据对象
var sessions = {};
//与客户端约定的会话ID
var SESSION_KEY = 'session.id'
//当用户访问根目录的时候 执行对应的回调函数
app.get('/',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
   // 1. 先取出cookie中的sessionId 卡号
    var sessionId = req.cookies[SESSION_KEY];
    // 如果有卡号的，也就是有ID的话 老顾客
    if(sessionId){
        //取出此卡号对应的信息，余额
        var sessionObj = sessions[sessionId];
        if(sessionObj){
            //扣掉10块钱
            sessionObj.balance = sessionObj.balance -10;
            res.send('欢迎你老顾客，你卡上还剩'+sessionObj.balance);
        }else{
            genId(res);
        }
    //如果没有的话就是新顾客
    }else{
        genId(res);
    }
    function genId(res){
        //由店家生成一个唯一的卡号
        var id = Date.now()+''+Math.random();
        //要在店家的小本上记录一下此卡号对应的余额
        sessions[id] = {balance:100};
        //把这个卡发给顾客带回家
        res.cookie(SESSION_KEY,id);
        //告诉 用户送他一张卡
        res.send('欢迎你新顾客，送你一张价值100元的剪发卡');
    }
});

app.listen(9090);
```
## session中间件
```
$ npm install express-session
```
参数	描述
<!-- ![session中间件](img/session1.png) -->

## sesssion实现访问次数的纪录
```
var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({
    secret: 'come', //加密，防止串改
    resave: true,  //重新保存 每次客户端请求服务器都会重新保存一下session
    saveUninitialized: true //保存未初始化的session
}));

/**
 * 当使用ession中间件之后，会在req.session的js对象
 * 就是这个客户端在服务器对应的数据对象
 * */
app.get('/visit', function (req, res) {
    var count = req.session.count;
    if (count){
        count++
    } else {
        count = 1;
    }
    req.session.count = count;
    res.send(`欢迎您第${count}次访问`);
});

app.listen(9999);
```

## session实现权限
> 服务端
```
var express = require('express'); //注入express模块
var session = require('express-session'); //session的相关操作
var path = require('path'); //路径相关操作
var bodyParser = require('body-parser'); //post请求体的获取操作
var app = express();

//设置模版引擎
app.set('views', path.resolve('views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//设置session
app.use(session({
    secret: 'come',
    resave: true,
    saveUninitialized: true
}));

//使用bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * 设置user中间件，放访问user页面的时候，首先判断session是否存在并且session中的user是否登陆，如果登陆了才能进入user页面，没有的话返回首页
 * */
app.use('/user', function (req, res, next) {
    var session = req.session;
    if (session && session.user){
        next();
    } else {
        res.redirect('/');
    }
});


//首页
app.get('/', function (req, res) {
    res.render('index', {title: '首页'});
});

//登陆页
app.get('/login', function (req, res) {
    res.render('login', {title: '登陆页'});
});

//登陆页用户提交用户名密码请求处理
app.post('/login', function (req, res) {
    var body = req.body; //获取请求体中的用户名和密码
    req.session.user = body; //将用户信息保存到session中
    res.redirect('/user'); //重定向到user页面
});

//用户页，取出 session用户登陆信息进行渲染
app.get('/user', function (req, res) {
    res.render('user', {title: '用户页', user: req.session.user});
});

app.listen(7777);

```
> views模版
- index.html页面
```
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title><%=title%></title>
 </head>
 <body>
     <p>当前是<%=title%></p>
     <a href="/login">点击跳转到登陆页</a>
     <a href="/user">点击跳转到用户页</a>
 </body>
 </html>
```
- login.html页面
```
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title><%=title%></title>
 </head>
 <body>
     <p>当前是<%=title%></p>
     <form action="/login" method="post">
         <label for="username">用户名</label>
         <input type="text" id="username" name="username">

         <br>

         <label for="password">用户名</label>
         <input type="password" id="password" name="password">

         <br>
         <input type="submit">
     </form>
 </body>
 </html>
```
- user.html页面
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%=title%></title>
</head>
<body>
    <p>当前是<%=title%></p>
    用户名: <p><%=user.username%></p>
    密码: <p><%=user.password%></p>
</body>
</html>
```

## 存储到mongodb数据库
> session数据都是存储在内存当中的，当进程退出后，session数据就会丢失 我们可以把session存储到mongodb数据库当中

```
$ npm install connect-mongo
```
```
var MongoStore = require('connect-mongo')(session);
//解析 cookie 请求头中的cookie转成对象 req.cookies
app.use(cookieParser());
// req.session
app.use(session({
  secret:'zfpx',//加密cookie的密钥
  resave:true,//重新保存
  saveUninitialized:true,//保存未初始化的session
  store:new MongoStore({// 指定会话的数据库存储位置
    url:'mongodb://123.57.143.189:27017/baizhinodejs'
  })
}));
```