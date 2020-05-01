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