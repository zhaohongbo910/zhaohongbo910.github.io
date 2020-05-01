---
title: JavaScript 常见的继承由来
date: 2017-06-24
permalink: /:year/:month/:day/:slug 
tags:
  - 面试
  - JavaScript
  - JS继承
categories:
  - 前端
autoGroup: javaScript
publish: false
---

# 在 JavaScript 中万物皆对象 -- 理解这句话

## 构造函数

::: tip
在 ES6 以前 构造函数是指那些可以同过 `new` 操作符来时创建一个对象的函数 比如 `Array()` `String()` </br>

在 ES6 类语法糖出现以后 构造函数指 **`class` 类** 中的定义的 `constructor()` 构造方法
:::

## 原型对象 - 是指构造函数上的 prototype 属性

## 实例对象 - 通过 `new` 构造函数（类）生成的对象

**三者的关系**
::: tip
每个构造函数都有一个原型对象`prototype`，原型对象都包含一个指向构造函数的指针 `constructor` ，而实例对象都包含一个指向原型对象的内部指针 `__propto__`
:::
**看图识字**:chestnut: :point_down:

<div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" id="SvgjsSvg1006" width="561" height="352" version="1.1"><defs id="SvgjsDefs1007"><marker id="SvgjsMarker1036" markerWidth="16" markerHeight="12" refX="16" refY="6" viewBox="0 0 16 12" orient="auto" markerUnits="userSpaceOnUse"><path id="SvgjsPath1037" d="M0,2 L14,6 L0,11 L0,2" fill="#323232" stroke="#323232" stroke-width="2"/></marker><marker id="SvgjsMarker1064" markerWidth="16" markerHeight="12" refX="16" refY="6" viewBox="0 0 16 12" orient="auto" markerUnits="userSpaceOnUse"><path id="SvgjsPath1065" d="M0,2 L14,6 L0,11 L0,2" fill="#8a8a8a" stroke="#8a8a8a" stroke-width="1"/></marker></defs><g id="SvgjsG1008" transform="translate(25,25)"><path id="SvgjsPath1009" d="M 0 0L 164 0L 164 75L 0 75Z" stroke="#323232" stroke-width="2" fill-opacity="1" fill="#ffffff"/><g id="SvgjsG1010"><text id="SvgjsText1011" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="97" fill="#323232" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="13px" weight="700" font-style="" y="27.55" transform="rotate(0)"><tspan id="SvgjsTspan1012" dy="16" x="82"><tspan id="SvgjsTspan1013" style="text-decoration:;">构造函数</tspan></tspan></text></g></g><g id="SvgjsG1014" transform="translate(189,35)"><path id="SvgjsPath1015" d="M 18 0Q 9 0 9 6L 9 24Q 9 30 0 30Q 9 30 9 36L 9 54Q 9 60 18 60" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1016" d="M 128 60Q 137 60 137 54L 137 36Q 137 30 146 30Q 137 30 137 24L 137 6Q 137 0 128 0" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1017" d="M 0 0L 146 0L 146 60L 0 60Z" stroke="none" fill="none"/><g id="SvgjsG1018"><text id="SvgjsText1019" font-family="微软雅黑" text-anchor="middle" font-size="14px" width="112" fill="#323232" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="14px" weight="700" font-style="" y="9.9" transform="rotate(0)"><tspan id="SvgjsTspan1020" dy="17" x="73"><tspan id="SvgjsTspan1021" style="text-decoration:;">     prototype      </tspan></tspan><tspan id="SvgjsTspan1022" dy="17" x="73"><tspan id="SvgjsTspan1023" style="text-decoration:;"> (原型对象)</tspan></tspan></text></g></g><g id="SvgjsG1024" transform="translate(339,42.5)"><path id="SvgjsPath1025" d="M 18 0Q 9 0 9 4.5L 9 18Q 9 22.5 0 22.5Q 9 22.5 9 27L 9 40.5Q 9 45 18 45" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1026" d="M 179 45Q 188 45 188 40.5L 188 27Q 188 22.5 197 22.5Q 188 22.5 188 18L 188 4.5Q 188 0 179 0" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1027" d="M 0 0L 197 0L 197 45L 0 45Z" stroke="none" fill="none"/><g id="SvgjsG1028"><text id="SvgjsText1029" font-family="微软雅黑" text-anchor="middle" font-size="14px" width="169" fill="#323232" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="14px" weight="700" font-style="" y="2.4" transform="rotate(0)"><tspan id="SvgjsTspan1030" dy="17" x="98.5"><tspan id="SvgjsTspan1031" style="text-decoration:;">          constructor            </tspan></tspan><tspan id="SvgjsTspan1032" dy="17" x="98.5"><tspan id="SvgjsTspan1033" style="text-decoration:;">  （指向构造函数的指针）</tspan></tspan></text></g></g><g id="SvgjsG1034"><path id="SvgjsPath1035" d="M107 100L107 181.5L107 181.5L107 263" stroke="#323232" stroke-width="2" fill="none" marker-end="url(#SvgjsMarker1036)"/></g><g id="SvgjsG1038" transform="translate(27.5,263)"><path id="SvgjsPath1039" d="M 0 4Q 0 0 4 0L 155 0Q 159 0 159 4L 159 60Q 159 64 155 64L 4 64Q 0 64 0 60Z" stroke="#323232" stroke-width="2" fill-opacity="1" fill="#ffffff"/><g id="SvgjsG1040"><text id="SvgjsText1041" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="99" fill="#323232" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="13px" weight="700" font-style="" y="22.05" transform="rotate(0)"><tspan id="SvgjsTspan1042" dy="16" x="79.5"><tspan id="SvgjsTspan1043" style="text-decoration:;"> 实例对象 </tspan></tspan></text></g></g><g id="SvgjsG1044" transform="translate(34,156)"><path id="SvgjsPath1045" d="M 0 0L 141 0L 141 71L 0 71Z" stroke="none" fill="none"/><g id="SvgjsG1046"><text id="SvgjsText1047" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="128" fill="#ff0000" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="13px" weight="700" font-style="" y="17.55" transform="rotate(0)"><tspan id="SvgjsTspan1048" dy="16" x="70.5"><tspan id="SvgjsTspan1049" style="text-decoration:;">通过 new     操作符生</tspan></tspan><tspan id="SvgjsTspan1050" dy="16" x="70.5"><tspan id="SvgjsTspan1051" style="text-decoration:;">成的            实例对象</tspan></tspan></text></g></g><g id="SvgjsG1052" transform="translate(193,266.5)"><path id="SvgjsPath1053" d="M 18 0Q 9 0 9 5.7L 9 22.8Q 9 28.5 0 28.5Q 9 28.5 9 34.2L 9 51.3Q 9 57 18 57" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1054" d="M 255 57Q 264 57 264 51.3L 264 34.2Q 264 28.5 273 28.5Q 264 28.5 264 22.8L 264 5.7Q 264 0 255 0" stroke="#323232" stroke-width="2" fill="none"/><path id="SvgjsPath1055" d="M 0 0L 273 0L 273 57L 0 57Z" stroke="none" fill="none"/><g id="SvgjsG1056"><text id="SvgjsText1057" font-family="微软雅黑" text-anchor="middle" font-size="14px" width="240" fill="#323232" font-weight="700" align="middle" anchor="middle" family="微软雅黑" size="14px" weight="700" font-style="" y="8.4" transform="rotate(0)"><tspan id="SvgjsTspan1058" dy="17" x="136.5"><tspan id="SvgjsTspan1059" style="text-decoration:;">                   __proto__                        </tspan></tspan><tspan id="SvgjsTspan1060" dy="17" x="136.5"><tspan id="SvgjsTspan1061" style="text-decoration:;">(指向构造函数原型对象的内部指针) </tspan></tspan></text></g></g><g id="SvgjsG1062"><path id="SvgjsPath1063" d="M466 295L496 295L496 122L267 122L267 92" stroke="#8a8a8a" stroke-width="1" fill="none" marker-end="url(#SvgjsMarker1064)"/></g></svg>
</div>

## 原型继承

::: warning
**子类型的原型 为父类型的一个实例对象** </br>
:::

```js
// 父类 Person 构造函数
function Person(name, age) {
  this.name = name; 
  this.age = age;
  this.setName = function() {
    console.log(this.name)
  };
}
// Person 的原型对象上添加方法
Person.prototype.setAge = function(age) {
  this.age = age;
};

// 子类的 Student 
function Student(name, age, price) {
  // 创建子类的过程中 调用 
  Person.call(this, name, age);
  this.price = price;
}
var s1 = new Student("Tom", 20, 15000);
console.log(s1);








//借用构造函数继承
function Person(name, age) {
  (this.name = name), (this.age = age);
}
Person.prototype.setAge = function() {
  console.log("111");
};
function Student(price) {
  this.price = price;
  this.setScore = function() {};
}
Student.prototype.sayHello = function() {};
Student.prototype = new Person();
Student.prototype.sayHello = function() {};
var s1 = new Student(15000);
var s2 = new Student(14000);
console.log(s1, s2);
s1.play.push(4);
console.log(s1.setAge, s2.setAge);
console.log(s1.__proto__ === s2.__proto__);
console.log(s1.__proto__.__proto__ === s2.__proto__.__proto__);
console.log(s1.__proto__.__proto__.__proto__ === Object.prototype);
```
