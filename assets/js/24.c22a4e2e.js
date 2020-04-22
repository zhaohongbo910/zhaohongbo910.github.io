(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{495:function(v,_,s){"use strict";s.r(_);var t=s(2),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"一、减少请求资源大小或者次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、减少请求资源大小或者次数"}},[v._v("#")]),v._v(" 一、减少请求资源大小或者次数")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("1、尽量和并和压缩css和js文件。（将css文件和并为一个。将js合并为一个）\n　　原因：主要是为了减少http请求次数以及减少请求资源的大小\n　　打包工具：\n　　webpack\n　　gulp\n　　grunt")])]),v._v(" "),s("li",[s("p",[v._v("2、尽量所使用的字体图标或者SVG图标来代替传统png图\n　　因为字体图标或者SVG是矢量图，代码编写出来的，方大不会变形，而且渲染速度快")])]),v._v(" "),s("li",[s("p",[v._v("3、采用图片的懒加载（延迟加载）目的为了，减少页面第一次加载过程中http的请求次数\n　　 具体步骤：\n　　　　1、页面开始加载时不去发送http请求，而是放置一张占位图\n　　　　2、当页面加载完时，并且图片在可视区域再去请求加载图片信息")])]),v._v(" "),s("li",[s("p",[v._v("4、能用css做的效果，不要用js做，能用原生js做的，不要轻易去使用第三方插件。避免引入第三方大量的库。而自己却只是用里面的一个小功能")])]),v._v(" "),s("li",[s("p",[v._v("5、使用雪碧图或者是说图片精灵，把所有相对较小的资源图片，绘制在一张大图上，只需要将大图下载下来，然后利用，图片定位来讲小图展现在页面中（background-position:百分比，数值）")])]),v._v(" "),s("li",[s("p",[v._v("6、减少对cookie的使用（最主要的就是减少本地cookie存储内容的大小），因为客户端操作cookie的时候，这些信息总是在客户端和服务端传递。如果上设置不当，每次发送一个请求将会携带cookie")])]),v._v(" "),s("li",[s("p",[v._v("7、前端与后端进行数据交互时，对于多项数据尽可能基于json格式来进行传送。相对于使用xml来说传输有这个优势\n　 目的：是数据处理方便，资源偏小")])]),v._v(" "),s("li",[s("p",[v._v("8、前端与后端协商，合理使用keep-alive")])]),v._v(" "),s("li",[s("p",[v._v("9、前端与服务器协商，使用响应资源的压缩")])]),v._v(" "),s("li",[s("p",[v._v("10、避免使用iframe 不仅不好管控样式，而且相当于在本页面又嵌套其他页面，消耗性能会更大。因为还回去加载这个嵌套页面的资源")])]),v._v(" "),s("li",[s("p",[v._v("11、在基于ajax的get请求进行数据交互的时候，根据需求可以让其产生缓存（注意:这个\n缓存不是我们常看到的304状态码，去浏览器本地取数据），这样在下一次从相同地址获取是数据\n时，取得就是上一次缓存的数据。（注意：很少使用，一般都会清空。根据需求来做）")])])]),v._v(" "),s("h2",{attrs:{id:"二、代码优化相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、代码优化相关"}},[v._v("#")]),v._v(" 二、代码优化相关")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("1、在js中尽量减少闭包的使用 > 原因：使用闭包后，闭包所在的上下文不会被释放")])]),v._v(" "),s("li",[s("p",[v._v("2、减少对DOM操作，主要是减少DOM的重绘与回流（重排）\n　　关于重排（回流）的分离读写：如果需要设置多个样式，把设置样式全放在一起设置，不要一条一条的设置。使用文档碎片或者字符串拼接做数据绑定（DOM的动态创建）")])]),v._v(" "),s("li",[s("p",[v._v('3、在js中避免嵌套循环和"死循环"(一旦遇到死循环，浏览器就会直接卡掉)')])]),v._v(" "),s("li",[s("p",[v._v("4、把css放在body上，把js放在body下面 让其先加载css（注意：这里关于优化没有多大关系）")])]),v._v(" "),s("li",[s("p",[v._v("5、减少css表达式的使用")])]),v._v(" "),s("li",[s("p",[v._v("6、css选择器解析规则所示从右往左解析的。减少元素标签作为对后一个选择对象")])]),v._v(" "),s("li",[s("p",[v._v("7、尽量将一个动画元素单独设置为一个图层（避免重绘或者回流的大小）注意：图层不要过多设置，否则不但效果没有达到反而更差了")])]),v._v(" "),s("li",[s("p",[v._v("8、在js封装过程中，尽量做到低耦合高内聚。减少页面的冗余代码")])]),v._v(" "),s("li",[s("p",[v._v("9、css中设置定位后，最好使用z-index改变盒子的层级，让盒子不在相同的平面上")])]),v._v(" "),s("li",[s("p",[v._v("10、css导入的时候尽量减少@import导入式，因为@import是同步操作，只有把对应的样式导入后，才会继续向下加兹安，而link是异步的操作")])]),v._v(" "),s("li",[s("p",[v._v("11、使用window.requestAnimationFrame(js的帧动画)代替传统的定时器动画，如果想使用每隔一段时间执行动画，应该避免使用setInterval，尽量使用setTimeout代替setInterval定时器。因为setInterval定时器存在弊端：可能造成两个动画间隔时间缩短")])]),v._v(" "),s("li",[s("p",[v._v("12、尽量减少使用递归。避免死递归 解决：建议使用尾递归")])]),v._v(" "),s("li",[s("p",[v._v("13、基于script标签下载js文件时，可以使用defer或者async来异步加载")])]),v._v(" "),s("li",[s("p",[v._v("14、在事件绑定中，尽可能使用事件委托，减少循环给DOM元素绑定事件处理函数。")])]),v._v(" "),s("li",[s("p",[v._v("5、在js封装过程中，尽量做到低耦合高内聚。减少页面的冗余代码")])]),v._v(" "),s("li",[s("p",[v._v("16、减少Flash的使用")])])]),v._v(" "),s("h2",{attrs:{id:"三、存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、存储"}},[v._v("#")]),v._v(" 三、存储")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("1、结合后端，利用浏览器的缓存技术，做一些缓存（让后端返回304，告诉浏览器去本地拉取数据）。（注意：也有弊端）可以让一些不太会改变的静态资源做缓存。比如：一些图片，js，cs")])]),v._v(" "),s("li",[s("p",[v._v("2、利用h5的新特性（localStorage、sessionStorage）做一些简单数据的存储，避免向后台请求数据或者说在离线状态下做一些数据展示。")])])]),v._v(" "),s("h2",{attrs:{id:"四、其他优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、其他优化"}},[v._v("#")]),v._v(" 四、其他优化")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("1、避免使用iframe不仅不好管控样式，而且相当于在本页面又嵌套其他页面，消耗性能会更大。因为还回去加载这个嵌套页面的资源")])]),v._v(" "),s("li",[s("p",[v._v("2、页面中的是数据获取采用异步编程和延迟分批加载，使用异步加载是数据主要是为了避免浏览器失去响应。如果你使用同步，加载数据很大并且很慢\n　　那么，页面会在一段时间内处于阻塞状态。目的：为了解决请求数据不耽搁渲染，提高页面的\n　　渲染效率。解决方法：需要动态绑定的是数据区域先隐藏，等数据返回并且绑定后在让其显示\n　　延迟分批加载类似图片懒加载。减少第一次页面加载时候的http请求次数")])]),v._v(" "),s("li",[s("p",[v._v("3、页面中出现音视频标签，我们不让页面加载的时候去加载这些资源（否则第一次加载会很慢）\n　　解决方法：只需要将音视频的preload=none即可。\n　　目的：为了等待页面加载完成时，并且音视频要播放的时候去加兹安音视频资源")])]),v._v(" "),s("li",[s("p",[v._v("4、尽量将一个动画元素单独设置为一个图层（避免重绘或者回流的大小）\n　　注意：图层不要过多设置，否则不但效果没有达到反而更差了")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);