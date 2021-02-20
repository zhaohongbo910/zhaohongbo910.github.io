---
title: 文件操作模块
date: 2018-05-29
---

# fs核心模块
> Node.js的文件系统的Api,同步方法和异步方法同时出现

## 读取文件
- 异步读取 readFile
```js
var fs = require('fs');

//异步读取文件内容(第二个参数不写默认读取的内容是buffer类型)
fs.readFile('./file/data.txt', 'utf8', function (err, data) {
    if (err){ //如果读取文件失败
        console.log(err);
    } else { //读取文件成功
        console.log(data);
    }
});
```
- 同步读取 readFileSync
```js
var fs = require('fs');
//fs.readFileSync(filename, [options])
//作用: 同步读取文件的操作
//参数一是文件名, 参数而是编码格式: 如果是utf8则读取的内容是字符串, 不写默认是buffer
var dataBuffer = fs.readFileSync('./file/data.txt');
var dataStr = fs.readFileSync('./file/data.txt', 'utf8');

//fs.readFileSync(filename, [options])
console.log(dataBuffer);
console.log(dataStr);
```

## 写文件
- 异步写入 writeFile
```js
var fs = require('fs');

//fs.writeFile(filename, data, [options], callback)
//异步向文件写入内容
fs.writeFile('./file/data.txt', '大家好, 我叫陈超', 'utf8', function (err) {
    if (!err){
         fs.readFile('./file/data.txt', 'utf8', function (err, data) {
             if (!err){
                 console.log(data);
             }
         })
    }
});
```

- 同步写入 writeFileSync
```js
var fs = require('fs');

//fs.writeFile(filename, data, [options], callback)
//异步向文件写入内容
fs.writeFile('./file/data.txt', '大家好, 我叫陈超', {flag: 'w', encoding:'utf8'}, function (err) {
    if (!err){
         fs.readFile('./file/data.txt', {flag: 'r', encoding:'utf8'}, function (err, data) {
             if (!err){
                 console.log(data);
             }
         })
    }
});
```

- 练习: 拷贝文件, 将data.txt文件中的内容拷贝出来写到info.txt文件中, 用同步和异步两种方式实现
> 同步
```js
var fs = require('fs');

var conFile = fs.readFileSync('../file/data.txt', 'utf8');

fs.writeFileSync('../file/write.txt', conFile, 'utf8');
```
> 同步
```js
var fs = require('fs');

fs.readFile('../file/data.txt', 'utf8', function (err, confile) {
    if (!err){
         fs.writeFile('../file/write.txt', confile, 'utf8', function (err) {
             if (!err){
                 console.log('写入内容成功');
             } else {
                 console.log('写入内容失败');
             }
         })
    } else {
        console.log('读取内容失败');
    }
});
```

> 练习：appendFileSync和appendFile是将内容同步和异步的追加到文件的末尾，尝试将data.txt文件内容追加到info.txt末尾
- 同步追加 appendFileSync
```js
var fs = require('fs');

var data = fs.readFileSync('./file/data.txt', {encoding: 'utf8', flag: 'r'});
console.log(data);

//同步的方式将data内容追加到文件的末尾
fs.appendFileSync('./file/info.txt', data, {encoding: 'utf8', flag: 'a'});
```

- 异步追加 appendFile
```js
var fs = require('fs');

fs.readFile('./file/data.txt', {encoding: 'utf8', flag: 'r'}, function (err, data) {
    if (!err){
        //异步的方式将data内容追加到文件的末尾
        fs.appendFile('./file/info.txt', data, {encoding: 'utf8', flag: 'a'}, function (err) {
            if (err){
                console.log(err);
            }
        });
    }
});
```



- 关于读文件和写文件中的flag的说明:
```js
flag	说明
r	读取文件。如果文件不存在时抛出异常
r+	读取并写入。如果文件不存在时抛出异常
rs	以同步方式读取文件并通知操作系统忽略本地文件系统缓存。如果文件不存在时抛出异常
w	写入文件。如果文件不存在时则创建该文件。如果文件已存在则清空文件内容
w+	读取并写入文件。如果文件不存在时则创建该文件。如果文件已存在则清空文件内容
wx	作用与”w”类似。但是以排他方式打开文件
wx+	作用与”w+”类似。但是以排他方式打开文件
a	以追加方式写入文件。如果文件不存在时则创建该文件
a+	读取并以追加方式写入文件。如果文件不存在时则创建该文件
ax	作用与”a”类似。但是以排他方式打开文件
ax+	作用与”a+”类似。但是以排他方式打开文件

注意: 切记 r w a三个
```

- 练习: 追加文件,  将data.txt文件中的内容拷贝出来追加到info.txt文件中, 用同步和异步两种方式实现

- 练习: 合并文件, 将数组中所有的文件读取出来,全部写入到一个新的文件中


## 目录操作
- 创建目录
    - 同步: fs.mkdirSync('a/b/c/d');
    - 异步: fs.mkdir('a/b/c/d');
```js
var fs = require('fs');

//同步创建文件夹, 要求父级目录必须存在否则创建失败
fs.mkdirSync('./file/fileNew');

//异步创建文件夹, 要求父级目录必须存在, 否则创建失败
fs.mkdir('./file/fileNew/fileNewNew', function (err) {
    if (err){
        console.log(err);
    }
});
```

- 判断一个文件是否存在
    - 同步: existsSync
    - 同步: exists
```js
var fs = require('fs');

//同步判断某个目录或者文件是否存在
var exist = fs.existsSync('./file/fileNew');
console.log(exist);

//异步判断某个目录或者文件是否存在
fs.exists('./file/fileNew', function(exist){
    console.log(exist);
});
```

- 读取目录下所有的文件
fs.readdirSync();
```js
var fs = require('fs');

//异步读取目录下所有的文件=>只能读取一层
var ary = fs.readdirSync('./file');

//同步读取目录下所有的文件=>只能读取一层
fs.readdir('./file', function (err, ary) {
    console.log(ary);
});

console.log(ary);
```

- 查看文件目录信息
fs.statSync('./e/'+item);
```js
var fs = require('fs');

//同步获取文件的信息
var fileInfo = fs.statSync('./file');

//同步获取文件的信息
fs.stat('./file/data.txt', function (err, infoFile) {
    console.log(infoFile);
    //通过isDirectory()能够判断当前路径下的文件是否是文件
    console.log(infoFile.isFile());
});

//通过isDirectory()能够判断当前路径下的文件是否是目录
console.log(fileInfo.isDirectory());

```

> 编写一个方法，将某个目录下的所有文件内容读取出来(只要文件)，集体追加到另一个文件的末尾

```js
function myReadFile(dirPath, filePath){
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dirPath, function (err, ary) {
        if (!err){
            ary.forEach(function (file, index) {
                fs.stat(path.join(dirPath, file), function (err, fileInfo) { //切记获取文件信息的时候路径需要进行拼接(目录路径+文件名)
                    if (!err){
                        if (fileInfo.isFile()){ //如果是文件
                            fs.readFile(path.join(dirPath, file), 'utf8', function (err, confile) {
                                if (!err){
                                    fs.appendFile(filePath, confile, 'utf8', function (err) {
                                        if (err){
                                            console.log('追加文件内容失败:'+path.join(dirPath, file));
                                        }
                                    })
                                } else {
                                    console.log('读取文件内容失败:'+path.join(dirPath, file));
                                }
                            })
                        }
                    } else {
                        console.log('获取文件详细信息失败');
                    }
                });
            })
        } else {
            console.log('读取目录信息失败');
        }
    });
}

myReadFile('../', 'info.txt');
```
