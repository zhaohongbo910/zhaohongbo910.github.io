(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{643:function(e,v,_){"use strict";_.r(v);var t=_(2),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器页面加载和渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器页面加载和渲染过程"}},[e._v("#")]),e._v(" 浏览器页面加载和渲染过程")]),e._v(" "),_("h2",{attrs:{id:"加载页面和渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加载页面和渲染过程"}},[e._v("#")]),e._v(" 加载页面和渲染过程")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("DNS")]),e._v("服务器解析域名的"),_("code",[e._v("IP")]),e._v("地址")]),e._v(" "),_("li",[e._v("建立"),_("code",[e._v("TCP")]),e._v(" 握手连接")]),e._v(" "),_("li",[e._v("用"),_("code",[e._v("IP")]),e._v("指向的服务器发送"),_("code",[e._v("HTTP")]),e._v("请求")]),e._v(" "),_("li",[e._v("服务器收到、处理并返回"),_("code",[e._v("HTTP")]),e._v("请求")]),e._v(" "),_("li",[e._v("浏览器获取返回内容")])]),e._v(" "),_("h2",{attrs:{id:"浏览器如何渲染网页-浏览器渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何渲染网页-浏览器渲染过程"}},[e._v("#")]),e._v(" 浏览器如何渲染网页 ("),_("strong",[e._v("浏览器渲染过程")]),e._v(")")]),e._v(" "),_("p",[e._v("要了解浏览器渲染页面的过程，首先得知道一个名词——关键渲染路径。关键渲染路径是指浏览器从最初接收请求来的HTML、CSS、javascript等资源，然后解析、构建树、渲染布局、绘制，最后呈现给用户能看到的界面这整个过程。\n用户看到页面实际上可以分为两个阶段：页面内容加载完成和页面资源加载完成，分别对应于"),_("code",[e._v("DOMContentLoaded")]),e._v("和"),_("code",[e._v("Load")]),e._v("。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("DOMContentLoaded")]),e._v("事件触发时，仅当DOM加载完成，不包括样式表，图片等")]),e._v(" "),_("li",[_("code",[e._v("load")]),e._v("事件触发时，页面上所有的DOM，样式表，脚本，图片都已加载完成")])]),e._v(" "),_("p",[e._v("浏览器渲染的过程主要包括以下五步：")]),e._v(" "),_("ol",[_("li",[_("strong",[e._v("浏览器将获取的HTML文档解析成DOM树。")])]),e._v(" "),_("li",[_("strong",[e._v("处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。")])]),e._v(" "),_("li",[_("strong",[e._v("将DOM和CSSOM合并为渲染树("),_("code",[e._v("rendering tree")]),e._v(")，代表一系列将被渲染的对象。")])]),e._v(" "),_("li",[_("strong",[e._v("渲染树的每个元素包含的内容都是计算过的，它被称之为布局"),_("code",[e._v("layout")]),e._v("。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。")])]),e._v(" "),_("li",[_("strong",[e._v("将渲染树的各个节点绘制到屏幕上，这一步被称为绘制"),_("code",[e._v("painting")]),e._v("。")])])]),e._v(" "),_("p",[e._v("需要注意的是，以上五个步骤并不一定一次性顺序完成，比如DOM或CSSOM被修改时，亦或是哪个过程会重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染。而在实际情况中，JavaScript和CSS的某些操作往往会多次修改DOM或者CSSOM。\n"),_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/webp/1024167/1604387787178-71931117-7399-4376-bf14-49a56fc88cd2.webp#align=left&display=inline&height=289&margin=%5Bobject%20Object%5D&originHeight=289&originWidth=624&size=0&status=done&style=none&width=624",alt:""}}),e._v("\nwebkit渲染引擎流程")]),e._v(" "),_("h2",{attrs:{id:"浏览器渲染网页的具体流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染网页的具体流程"}},[e._v("#")]),e._v(" 浏览器渲染网页的具体流程")]),e._v(" "),_("h4",{attrs:{id:"构建dom树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建dom树"}},[e._v("#")]),e._v(" 构建DOM树")]),e._v(" "),_("p",[e._v("当浏览器接收到服务器响应来的HTML文档后，会遍历文档节点，生成DOM树。\n需要注意以下几点：")]),e._v(" "),_("ul",[_("li",[e._v("DOM树在构建的过程中可能会被CSS和JS的加载而执行阻塞")]),e._v(" "),_("li",[_("code",[e._v("display:none")]),e._v("的元素也会在DOM树中")]),e._v(" "),_("li",[e._v("注释也会在DOM树中")]),e._v(" "),_("li",[_("code",[e._v("script")]),e._v("标签会在DOM树中")])]),e._v(" "),_("p",[e._v("无论是DOM还是CSSOM，都是要经过"),_("code",[e._v("Bytes→characters→tokens→nodes→object model")]),e._v("这个过程。\n"),_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/webp/1024167/1604387798693-0b85c81b-4b62-4a63-b212-4f1b8c317075.webp#align=left&display=inline&height=443&margin=%5Bobject%20Object%5D&originHeight=443&originWidth=800&size=0&status=done&style=none&width=800",alt:""}})]),e._v(" "),_("p",[e._v("当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。")]),e._v(" "),_("h4",{attrs:{id:"构建cssom规则树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建cssom规则树"}},[e._v("#")]),e._v(" 构建CSSOM规则树/")]),e._v(" "),_("p",[e._v("浏览器解析CSS文件并生成CSSOM，每个CSS文件都被分析成一个StyleSheet对象，每个对象都包含CSS规则。CSS规则对象包含对应于CSS语法的选择器和声明对象以及其他对象。\n浏览器的渲染引擎是从上往下进行解析的。\n当渲染引擎遇到 "),_("code",[e._v("<style>")]),e._v(" 节点的时候，会立马暂停解析html, 转而解析CSS规则，一旦CSS规则解析完成，渲染引擎会继续解析html\n当渲染引擎遇到 "),_("code",[e._v("<link>")]),e._v(" 节点的时候，浏览器的网络组件会发起对 style 文件的请求，同时渲染引擎不会暂停，而是继续往下解析。等到 style 文件从服务器传输到浏览器的时候，渲染引擎立马暂停解析html, 转而解析CSS规则，一旦CSS规则解析完成，渲染引擎会继续解析html。")]),e._v(" "),_("p",[e._v("在这个过程需要注意的是：")]),e._v(" "),_("ul",[_("li",[e._v("CSS解析可以与DOM解析同时进行。")]),e._v(" "),_("li",[e._v("CSS解析与"),_("code",[e._v("script")]),e._v("的执行互斥。")]),e._v(" "),_("li",[e._v("在Webkit内核中进行了"),_("code",[e._v("script")]),e._v("执行优化，只有在JS访问CSS时才会发生互斥。")])]),e._v(" "),_("h4",{attrs:{id:"css会阻塞dom解析吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css会阻塞dom解析吗"}},[e._v("#")]),e._v(" CSS会阻塞DOM解析吗？")]),e._v(" "),_("p",[e._v("对于一个HTML文档来说，"),_("strong",[e._v("不管是内联还是外链的css，都会阻碍后续的dom渲染")]),e._v("，"),_("strong",[e._v("但是不会阻碍后续dom的解析")]),e._v(" 当css文件放在中时，虽然css解析也会阻塞后续dom的渲染，但是在解析css的同时也在解析dom，所以等到css解析完毕就会逐步的渲染页面了")]),e._v(" "),_("h4",{attrs:{id:"构建渲染树-render-tree"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树-render-tree"}},[e._v("#")]),e._v(" 构建渲染树（Render Tree）")]),e._v(" "),_("p",[e._v("通过DOM树和CSS规则树，浏览器就可以通过它两构建渲染树了。浏览器会先从DOM树的根节点开始遍历每个可见节点，然后对每个可见节点找到适配的CSS样式规则并应用。\n有以下几点需要注意：")]),e._v(" "),_("ul",[_("li",[e._v("Render Tree和DOM Tree不完全对应")]),e._v(" "),_("li",[_("code",[e._v("display: none")]),e._v("的元素不在Render Tree中")]),e._v(" "),_("li",[_("code",[e._v("visibility: hidden")]),e._v("的元素在Render Tree中")]),e._v(" "),_("li",[e._v("DOM 树与 HTML 标签一一对应，包括 head 和隐藏元素")]),e._v(" "),_("li",[e._v("渲染树不包括 head 和隐藏元素，大段文本的每一个行都是独立节点，每一个节点都有对应的 css 属性")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/webp/1024167/1604387815305-29c7ecce-036c-4ab1-80f3-18ebe14de411.webp#align=left&display=inline&height=415&margin=%5Bobject%20Object%5D&originHeight=415&originWidth=711&size=0&status=done&style=none&width=711",alt:""}}),e._v("\n渲染树生成后，还是没有办法渲染到屏幕上，渲染到屏幕需要得到各个节点的位置信息，这就需要布局（Layout）的处理了。")]),e._v(" "),_("h4",{attrs:{id:"渲染树布局-layout-of-the-render-tree"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染树布局-layout-of-the-render-tree"}},[e._v("#")]),e._v(" 渲染树布局(layout of the render tree)")]),e._v(" "),_("p",[e._v("布局阶段会从渲染树的根节点开始遍历，由于渲染树的每个节点都是一个Render Object对象，包含宽高，位置，背景色等样式信息。所以浏览器就可以通过这些样式信息来确定每个节点对象在页面上的确切大小和位置，布局阶段的输出就是我们常说的盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小。需要注意的是：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("float")]),e._v("元素，"),_("code",[e._v("absoulte")]),e._v("元素，"),_("code",[e._v("fixed")]),e._v("元素会发生位置偏移。")]),e._v(" "),_("li",[e._v("我们常说的脱离文档流，其实就是脱离Render Tree。")])]),e._v(" "),_("h4",{attrs:{id:"渲染树绘制-painting-the-render-tree"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染树绘制-painting-the-render-tree"}},[e._v("#")]),e._v(" 渲染树绘制（Painting the render tree）")]),e._v(" "),_("p",[e._v("在绘制阶段，浏览器会遍历渲染树，调用渲染器的"),_("code",[e._v("paint()")]),e._v("方法在屏幕上显示其内容。渲染树的绘制工作是由浏览器的UI后端组件完成的。")]),e._v(" "),_("h2",{attrs:{id:"浏览器渲染网页的那些事儿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染网页的那些事儿"}},[e._v("#")]),e._v(" 浏览器渲染网页的那些事儿")]),e._v(" "),_("h4",{attrs:{id:"浏览器主要组件结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器主要组件结构"}},[e._v("#")]),e._v(" 浏览器主要组件结构")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/webp/1024167/1604387823070-2d020260-7bd2-4e30-af89-75c057ad1335.webp#align=left&display=inline&height=271&margin=%5Bobject%20Object%5D&originHeight=271&originWidth=400&size=0&status=done&style=none&width=400",alt:""}}),e._v("\n浏览器主要组件\n渲染引擎主要有两个：webkit和Gecko\nFirefox使用Geoko，Mozilla自主研发的渲染引擎。Safari和Chrome都使用webkit。Webkit是一款开源渲染引擎，它本来是为linux平台研发的，后来由Apple移植到Mac及Windows上。\n虽然主流浏览器渲染过程叫法有区别，但是主要流程还是相同的。")]),e._v(" "),_("h4",{attrs:{id:"渲染阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染阻塞"}},[e._v("#")]),e._v(" 渲染阻塞")]),e._v(" "),_("p",[e._v("JS可以操作DOM来修改DOM结构，可以操作CSSOM来修改节点样式，这就导致了浏览器在遇到"),_("code",[e._v("<script>")]),e._v("标签时，DOM构建将暂停，直至脚本完成执行，然后继续构建DOM。如果脚本是外部的，会等待脚本下载完毕，再继续解析文档。现在可以在"),_("code",[e._v("script")]),e._v("标签上增加属性"),_("code",[e._v("defer")]),e._v("或者"),_("code",[e._v("async")]),e._v("。脚本解析会将脚本中改变DOM和CSS的地方分别解析出来，追加到DOM树和CSSOM规则树上。\n每次去执行JavaScript脚本都会严重地阻塞DOM树的构建，如果JavaScript脚本还操作了CSSOM，而正好这个CSSOM还没有下载和构建，浏览器甚至会延迟脚本执行和构建DOM，直至完成其CSSOM的下载和构建。所以，"),_("code",[e._v("script")]),e._v("标签的位置很重要。\nJS阻塞了构建DOM树，也阻塞了其后的构建CSSOM规则树，整个解析进程必须等待JS的执行完成才能够继续，这就是所谓的JS阻塞页面。\n由于CSSOM负责存储渲染信息，浏览器就必须保证在合成渲染树之前，CSSOM是完备的，这种完备是指所有的CSS（内联、内部和外部）都已经下载完，并解析完，只有CSSOM和DOM的解析完全结束，浏览器才会进入下一步的渲染，这就是CSS阻塞渲染。\nCSS阻塞渲染意味着，在CSSOM完备前，页面将一直处理白屏状态，这就是为什么样式放在"),_("code",[e._v("head")]),e._v("中，仅仅是为了更快的解析CSS，保证更快的首次渲染。\n需要注意的是，即便你没有给页面任何的样式声明，CSSOM依然会生成，默认生成的CSSOM自带浏览器默认样式。\n当解析HTML的时候，会把新来的元素插入DOM树里面，同时去查找CSS，然后把对应的样式规则应用到元素上，查找样式表是按照从右到左的顺序去匹配的。\n例如："),_("code",[e._v("div p {font-size: 16px}")]),e._v("，会先寻找所有"),_("code",[e._v("p")]),e._v("标签并判断它的父标签是否为"),_("code",[e._v("div")]),e._v("之后才会决定要不要采用这个样式进行渲染）。\n所以，我们平时写CSS时，尽量用"),_("code",[e._v("id")]),e._v("和"),_("code",[e._v("class")]),e._v("，千万不要过渡层叠。")]),e._v(" "),_("h4",{attrs:{id:"回流和重绘-reflow和repaint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘-reflow和repaint"}},[e._v("#")]),e._v(" 回流和重绘（reflow和repaint）")]),e._v(" "),_("p",[e._v("我们都知道HTML默认是流式布局的，但CSS和JS会打破这种布局，改变DOM的外观样式以及大小和位置。因此我们就需要知道两个概念："),_("code",[e._v("replaint")]),e._v("和"),_("code",[e._v("reflow")]),e._v("。")]),e._v(" "),_("h5",{attrs:{id:"reflow-回流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reflow-回流"}},[e._v("#")]),e._v(" reflow（回流）")]),e._v(" "),_("p",[e._v("当浏览器发现布局发生了变化，这个时候就需要倒回去重新渲染，这个回退的过程叫"),_("code",[e._v("reflow")]),e._v("。"),_("code",[e._v("reflow")]),e._v("会从"),_("code",[e._v("html")]),e._v("这个"),_("code",[e._v("root frame")]),e._v("开始递归往下，依次计算所有的结点几何尺寸和位置，以确认是渲染树的一部分发生变化还是整个渲染树。"),_("code",[e._v("reflow")]),e._v("几乎是无法避免的，因为只要用户进行交互操作，就势必会发生页面的一部分的重新渲染，且通常我们也无法预估浏览器到底会"),_("code",[e._v("reflow")]),e._v("哪一部分的代码，因为他们会相互影响。")]),e._v(" "),_("h5",{attrs:{id:"repaint-重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#repaint-重绘"}},[e._v("#")]),e._v(" repaint（重绘）")]),e._v(" "),_("p",[_("code",[e._v("repaint")]),e._v("则是当我们改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸和位置没有发生改变。\n需要注意的是，"),_("code",[e._v("display:none")]),e._v("会触发"),_("code",[e._v("reflow")]),e._v("，而"),_("code",[e._v("visibility: hidden")]),e._v("属性则并不算是不可见属性，它的语义是隐藏元素，但元素仍然占据着布局空间，它会被渲染成一个空框。所以"),_("code",[e._v("visibility:hidden")]),e._v("只会触发"),_("code",[e._v("repaint")]),e._v("，因为没有发生位置变化。\n另外有些情况下，比如修改了元素的样式，浏览器并不会立刻"),_("code",[e._v("reflow")]),e._v("或"),_("code",[e._v("repaint")]),e._v("一次，而是会把这样的操作积攒一批，然后做一次"),_("code",[e._v("reflow")]),e._v("，这又叫异步"),_("code",[e._v("reflow")]),e._v("或增量异步"),_("code",[e._v("reflow")]),e._v("。但是在有些情况下，比如"),_("code",[e._v("resize")]),e._v("窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行"),_("code",[e._v("reflow")]),e._v("。")]),e._v(" "),_("h5",{attrs:{id:"引起reflow"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引起reflow"}},[e._v("#")]),e._v(" 引起reflow")]),e._v(" "),_("p",[e._v("现代浏览器会对回流做优化，它会等到足够数量的变化发生，再做一次批处理回流。")]),e._v(" "),_("ul",[_("li",[e._v("页面第一次渲染（初始化）")]),e._v(" "),_("li",[e._v("DOM树变化（如：增删节点）")]),e._v(" "),_("li",[e._v("Render树变化（如："),_("code",[e._v("padding")]),e._v("改变）")]),e._v(" "),_("li",[e._v("浏览器窗口"),_("code",[e._v("resize")])]),e._v(" "),_("li",[e._v("获取元素的某些属性")])]),e._v(" "),_("p",[e._v("浏览器为了获得正确的值也会提前触发回流，这样就使得浏览器的优化失效了，这些属性包括"),_("code",[e._v("offsetLeft、offsetTop、offsetWidth、offsetHeight、 scrollTop/Left/Width/Height、clientTop/Left/Width/Height")]),e._v("、调用了"),_("code",[e._v("getComputedStyle()")]),e._v("。")]),e._v(" "),_("h5",{attrs:{id:"引起repaint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引起repaint"}},[e._v("#")]),e._v(" 引起repaint")]),e._v(" "),_("p",[_("code",[e._v("reflow")]),e._v("回流必定引起"),_("code",[e._v("repaint")]),e._v("重绘，重绘可以单独触发。\n背景色、颜色、字体改变（注意：字体大小发生变化时，会触发回流）")]),e._v(" "),_("h5",{attrs:{id:"减少reflow、repaint触发次数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少reflow、repaint触发次数"}},[e._v("#")]),e._v(" 减少reflow、repaint触发次数")]),e._v(" "),_("ul",[_("li",[e._v("用"),_("code",[e._v("transform")]),e._v("做形变和位移可以减少"),_("code",[e._v("reflow")])]),e._v(" "),_("li",[e._v("避免逐个修改节点样式，尽量一次性修改")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("DocumentFragment")]),e._v("将需要多次修改的DOM元素缓存，最后一次性"),_("code",[e._v("append")]),e._v("到真实DOM中渲染")]),e._v(" "),_("li",[e._v("可以将需要多次修改的DOM元素设置"),_("code",[e._v("display:none")]),e._v("，操作完再显示。（因为隐藏元素不在"),_("code",[e._v("render")]),e._v("树内，因此修改隐藏元素不会触发回流重绘）")]),e._v(" "),_("li",[e._v("避免多次读取某些属性")]),e._v(" "),_("li",[e._v("通过绝对位移将复杂的节点元素脱离文档流，形成新的Render Layer，降低回流成本")])]),e._v(" "),_("h2",{attrs:{id:"几条关于优化渲染效率的建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几条关于优化渲染效率的建议"}},[e._v("#")]),e._v(" 几条关于优化渲染效率的建议")]),e._v(" "),_("p",[e._v("结合上文有以下几点可以优化渲染效率。")]),e._v(" "),_("ul",[_("li",[e._v("合法地去书写HTML和CSS ，且不要忘了文档编码类型。")]),e._v(" "),_("li",[e._v("样式文件应当在"),_("code",[e._v("head")]),e._v("标签中，而脚本文件在"),_("code",[e._v("body")]),e._v("结束前，这样可以防止阻塞的方式。")]),e._v(" "),_("li",[e._v("简化并优化CSS选择器，尽量将嵌套层减少到最小。")]),e._v(" "),_("li",[e._v("DOM 的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。")]),e._v(" "),_("li",[e._v("如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。")]),e._v(" "),_("li",[e._v("不要一条条地改变样式，而要通过改变"),_("code",[e._v("class")]),e._v("，或者"),_("code",[e._v("csstext")]),e._v("属性，一次性地改变样式。")]),e._v(" "),_("li",[e._v("尽量用"),_("code",[e._v("transform")]),e._v("来做形变和位移")]),e._v(" "),_("li",[e._v("尽量使用离线DOM，而不是真实的网页DOM，来改变元素样式。比如，操作"),_("code",[e._v("Document Fragment")]),e._v("对象，完成后再把这个对象加入DOM。再比如，使用"),_("code",[e._v("cloneNode()")]),e._v("方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。")]),e._v(" "),_("li",[e._v("先将元素设为"),_("code",[e._v("display: none")]),e._v("（需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。")]),e._v(" "),_("li",[_("code",[e._v("position")]),e._v("属性为"),_("code",[e._v("absolute")]),e._v("或"),_("code",[e._v("fixed")]),e._v("的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。")]),e._v(" "),_("li",[e._v("只在必要的时候，才将元素的"),_("code",[e._v("display")]),e._v("属性为可见，因为不可见的元素不影响重排和重绘。另外，"),_("code",[e._v("visibility : hidden")]),e._v("的元素只对重绘有影响，不影响重排。")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("window.requestAnimationFrame()")]),e._v("、"),_("code",[e._v("window.requestIdleCallback()")]),e._v("这两个方法调节重新渲染。")])]),e._v(" "),_("h3",{attrs:{id:"requestidlecallback-是检测浏览器空闲来执行任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback-是检测浏览器空闲来执行任务"}},[e._v("#")]),e._v(" "),_("code",[e._v("requestIdleCallback")]),e._v(" 是检测浏览器空闲来执行任务")]),e._v(" "),_("p",[_("code",[e._v("requestAnimationFrame")]),e._v("的回调会在每一帧确定执行，属于高优先级任务，而"),_("code",[e._v("requestIdleCallback")]),e._v("的回调则不一定，属于低优先级任务。 我们所看到的网页，都是浏览器一帧一帧绘制出来的，通常认为FPS为60的时候是比较流畅的，而FPS为个位数的时候就属于用户可以感知到的卡顿了\n"),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestIdleCallback"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);