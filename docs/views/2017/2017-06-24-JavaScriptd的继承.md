---
title: JavaScriptd的继承
date: 2017-06-24
permalink: /:year/:month/:day/:slug
tags:
  - 面试
  - JavaScript
categories:
  - 前端
autoGroup: javaScript
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

## 一、原型继承

::: warning
**子类的原型 为父类的一个实例对象** </br>
`Son.prototype = new Father()`
:::

```js
//借用构造函数继承
function Father(name, age) {
  this.name = name;
  this.age = age;
}
Father.prototype.setAge = function(age) {
  this.age = age;
};

function Son(bloodType) {
  this.bloodType = bloodType;
}

// 这里 子类原型对象 赋值为 父类是的实例
Son.prototype = new Father();

// 如果需要给子类添加方法 需要这里添加
Son.prototype.sayHello = function() {};
var s1 = new Son("A");
var s2 = new Son("B");
console.log(s1, s2);
```

:::tip
这种方式实现的本质是通过将子类的原型指向了父类的实例，所以子类的实例就可以通过`__proto__` 访问到`Son.prototype` 也就是 `Father` 的实例，**这样就可以访问到父类的私有方法**，然后再通过 `__proto__` 指向父类的 `prototype` 就可以获得到父类原型上的方法。**于是做到了将父类的私有、公有方法和属性都当做子类的公有属性**
:::

- 特点：
  - 父类新增原型方法/原型属性，子类都能访问到
  - 简单，易于实现
- 缺点：
  - 无法实现多继承
  - 来自原型对象的所有属性被所有实例共享
  - 创建子类实例时，无法向父类构造函数传参
  - 要想为子类新增属性和方法，必须要在 `Son.prototype = new Father()` 之后执行，不能放到构造器中

## 二 、借用构造函数继承

::: warning
**这种方式关键在于:在子类构造函数中通过 call() 调用父类构造函数**
:::

```js
function Father(name, age) {
  this.name = name;
  this.age = age;
  this.setName = function() {};
}

Father.prototype.setAge = function() {};

function Son(name, age, bloodType) {
  Father.call(this, name, age); // 相当于: this.Father(name, age) this.name = name  this.age = age
  this.bloodType = bloodType;
}
var s1 = new Son("Bo", 20, "A");
```

:::tip
这种方式只是实现部分的继承，如果父类的原型还有方法和属性，子类是拿不到这些方法和属性的。
`console.log(s1.setAge())//Uncaught TypeError: s1.setAge is not a function`
:::

- 特点：
  - 解决了原型链继承中子类实例共享父类引用属性的问题
  - 创建子类实例时，可以向父类传递参数
  - 可以实现多继承(call 多个父类对象)
- 缺点：
  - 实例并不是父类的实例，只是子类的实例
  - 只能继承父类的实例属性和方法，不能继承原型属性和方法
  - 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

## 三、原型链+借用构造函数的组合继承

::: warning
**这种方式关键在于:通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用**
:::

```js
function Father(name, age) {
  (this.name = name), (this.age = age), (this.setAge = function() {});
}

Father.prototype.setAge = function() {
  console.log("setAge");
};

function Son(name, age, bloodType) {
  Father.call(this, name, age); // 1  这里调用了 父类的构造函数
  this.bloodType = bloodType;
  this.setBloodType = function() {};
}

Son.prototype = new Fahter(); // 2 这里也调用了 父类的构造函数
Son.prototype.constructor = Son; //组合继承也是需要修复构造函数指向的

Son.prototype.sayHello = function() {};

var s1 = new Son("Tom", 20, "A+");
var s2 = new Son("Jack", 22, "AB");

console.log(s1.constructor); //Son
```

::: tip
**这种方式融合原型链继承和构造函数的优点**，是 JavaScript 中最常用的继承模式。不过也存在缺点就 是无论在什么情况下，都会调用两次构造函数：一次是在创建子类型
原型的时候，另一次是在子类型构造函数的内部，子类型最终会包含父类型对象的全部实例属性，但我们不得不在调用子类构造函数
时重写这些属性。
:::

- 优点： - 可以继承实例属性/方法，也可以继承原型属性/方法 - 不存在引用属性共享问题 - 可传参 - 函数可复用
- 缺点： - 调用了两次父类构造函数，生成了两份实例

## 四: 组合继承优化方式一

::: warning
**这种方式通过父类原型和子类原型指向同一对象,子类可以继承到父类的公有方法当做自己的公有方法，而且不会初始化两次实例方法/属性，避免的组合继承的缺点。**
`Son.prototype = Father.prototype`
:::

```js
function Father(name, age) {
  this.name = name;
  this.age = age;
  this.setAge = function() {};
}
Father.prototype.setAge = function() {
  console.log("setAge");
};

function Son(name, age, price) {
  Father.call(this, name, age); // 调用父类继承 属性
  this.bloodType = price;
  this.setBloodType = function() {};
}

Son.prototype = Father.prototype; //  继承方法
Son.prototype.sayHello = function() {}; // 子类的方法
var s1 = new Son("Tom", 20, "B+");
console.log(s1);
```

:::tip
但这种方式没办法辨别是对象是子类还是父类实例化
`console.log(s1 instanceof Son, s1 instanceof Father)//true true`
`console.log(s1.constructor)//Father`
:::

- 优点： - 不会初始化两次实例方法/属性，避免的组合继承的缺点
- 缺点： - 没办法辨别是实例是子类还是父类创造的，子类和父类的构造函数指向是同一个

## 五: 组合继承优化方式二

::: warning
**借助原型可以基于已有的对象来创建对象， Object.create() 来创建以 A 对象为原型，生成了 B 对象。B 继承了 A 的所有属性和方法。**
`Son.prototype = Object.create(Father.prototype)`
:::

```js
function Father(name, age) {
  this.name = name;
  this.age = age;
  this.setAge = function() {};
}
Father.prototype.setAge = function() {
  console.log("setAge");
};

function Son(name, age, price) {
  Father.call(this, name, age); // 调用父类继承 属性
  this.bloodType = price;
  this.setBloodType = function() {};
}

Son.prototype = Object.create(Father.prototype); //  这里继承
Son.prototype.constructor = Son; // 更改构造函数指向
Son.prototype.sayHello = function() {}; // 子类的方法
var s1 = new Son("Tom", 20, "B+");
console.log(s1);
```

## 六、ES6 中 class 的继承

::: warning
ES6 中引入了 `class` 关键字，`class` 可以通过`extends`关键字实现继承，还可以通过`static`关键字定义类的静态方法,这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Father.apply(this)）
ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。
需要注意的是，class 关键字只是原型的语法糖，JavaScript 继承仍然是基于原型实现的。
:::

```js
 class Father {
 //调用类的构造方法
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	//定义一般的方法
	showName() {
		console.log("调用父类的方法")
		console.log(this.name, this.age);
	}
 }
 let p1 = new Father('JB', 39)
 console.log(p1)
 //定义一个子类
 class Son extends Father {
	constructor(name, age, bloodType) {
		super(name, age)//通过super调用父类的构造方法
		this.bloodType = bloodType
	}

	showName() {//在子类自身定义方法
		console.log("调用子类的方法")
		console.log(this.name, this.age, this.salary);
	}
 }
 let s1 = new Father('KK', 18, "A")
```
+ 优点：
	- 语法简单易懂,操作更方便
+ 缺点：
	- 并不是所有的浏览器都支持class关键字

<a href='https://es6.ruanyifeng.com/#docs/class-extends'>[ES6 Class 继承]</a>