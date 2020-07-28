---
title: MyPromise_UMD版本
date: 2018-02-22
tags:
 - UMD 
categories: 
 - 前端
sidebar: false
---

```js
(function (root,factory) {
    // / Node, CommonJS之类的
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory();
        if (v !== undefined) module.exports = v;
    }
    //ADM 模块
    else if (typeof define === "function" && define.amd) {
        define(factory);
    }else{
     // 浏览器全局变量(root 即 window)
        root.MyPromise  = factory();
    }
})(this,function () {
    if(typeof exports !== "object") exports = {}
    "use strict";
    // Object.defineProperty(exports, "__esModule", { value: true });
    var isFunction = function (fn) { return typeof fn === 'function'; };
    // 定义Promise的三种状态常量
    var PENDING = 'PENDING';
    var FULFILLED = 'FULFILLED';
    var REJECTED = 'REJECTED';
    var MyPromise = /** @class */ (function () {
        function MyPromise(handle) {
            if (!isFunction(handle)) {
                throw new Error('MyPromise must accept a function as parameter');
            }
            ;
            // 添加状态
            this._status = PENDING;
            // 添加状态
            this._value = undefined;
            // 添加成功回调的任务队列
            this._fulfilledQueues = [];
            // 添加失败回调任务队列
            this._fulfilledQueues = [];
            try {
                //执行传入的 handle 函数 ，并且改变this 指向
                handle(this._resolve.bind(this), this._reject.bind(this));
            }
            catch (error) {
                this._reject(error);
            }
        }
        //将状态 变成 成功 pending -- fulfilled
        MyPromise.prototype._resolve = function (val) {
            if (this._status !== PENDING)
                return;
            this._status = FULFILLED;
            this._value = val;
        };
        ;
        //将状态 变成 失败 pending -- reject
        MyPromise.prototype._reject = function (err) {
            if (this._status !== PENDING)
                return;
            this._status = REJECTED;
            this._value = err;
        };
        ;
        // then 方法
        MyPromise.prototype.then = function (onFulfilled, onRejected) {
            var _this = this;
            var _a = this, _status = _a._status, _value = _a._value;
            // 返回
            return new MyPromise(function (onFulfilledNext, onRejectedNext) {
                var fulfilled = function (value) {
                    try {
                        if (!isFunction(onFulfilled)) {
                            onFulfilledNext(value);
                        }
                        else {
                            var res = onFulfilled(value);
                            if (res instanceof MyPromise) {
                                //如果当前对象返回了 MyPromise 对象
                                res.then(onFulfilledNext, onRejectedNext);
                            }
                            else {
                                onFulfilledNext(res);
                            }
                        }
                    }
                    catch (error) {
                        onFulfilledNext(error);
                    }
                };
                var rejected = function (error) {
                    try {
                        if (!isFunction(onRejected)) {
                            onFulfilledNext(error);
                        }
                        else {
                            var res = onRejected(error);
                            if (res instanceof MyPromise) {
                                res.then(onFulfilledNext, onFulfilledNext);
                            }
                            else {
                                onFulfilledNext(res);
                            }
                        }
                    }
                    catch (error) {
                        onRejectedNext(error);
                    }
                };
                switch (_status) {
                    case PENDING:
                        _this._fulfilledQueues.push(onFulfilled);
                        _this._rejectedQueues.push(onRejected);
                        break;
                    case FULFILLED:
                        fulfilled(_value);
                        break;
                    case REJECTED:
                        rejected(_value);
                        break;
                }
            });
        };
        return MyPromise;
    }());
    
    return MyPromise;
});
```