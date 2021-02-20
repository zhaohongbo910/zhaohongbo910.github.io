let fs = require("fs");
const { get } = require("http");
let path = require("path")
let root = path.dirname(__dirname)
let baseName = path.basename(root)
let book = root.replace(baseName, 'book')

function getFile(dir) {
    let fileList = []
    let files = fs.readdirSync(`${book}${path.sep}${dir}`)
    files.forEach((item) => {
        let f = item.replace(".md", "")
        if (f == 'README') {
            fileList.unshift("")
        } else {
            fileList.push(f)
        }
    })
    return fileList
}

let NodeList = getFile("Node")

module.exports = {
    type: 'blog',
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: 'Category', // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: 'Tag' // 默认 “标签”
        }
    },
    nav: [{
        text: 'Home',
        link: '/',
        icon: 'reco-home'
    },
    {
        text: 'Timeline',
        link: '/timeline/',
        icon: 'reco-date'
    },
    {
        text: "Book",
        icon: "reco-message",
        items: [{
            "text": "JavaScript",
            "link": "/book/JavaScript/"
        },
        {
            "text": "Node",
            "link": "/book/Node/"
        },
        {
            "text": "Vue",
            "link": "/book/Vue/"
        }
        ]
    },
    {
        text: 'GitHub',
        link: 'https://github.com/zhaohongbo910',
        icon: 'reco-github'
    }
    ],
    sidebar: {
        "/book/Node/": [
            {
                title: 'Node学习',
                collapsable: true, // 不可折叠
                children: NodeList,
            }
        ],
        // "/docs/Node/":[],
        // "/docs/Vue/":[]
    },
    // 自动形成侧边导航
    // sidebar: 'auto',
    logo: '/head.jpg',
    authorAvatar: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean

    gitHub: '',
    // 作者
    author: '小布丁',
    // 备案号
    record: `京ICP备20008274号`,
    // 项目开始时间
    startYear: '2017',

}