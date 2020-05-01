// const fs  = require('fs');
// const path = require('path');


// const officalPlugins = fs
//   .readdirSync(path.resolve('docs/plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()


// function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
//   return [
//     {
//       title: pluginTitle,
//       collapsable: true,
//       children: [
//         ['', pluginIntro],
//         'using-a-plugin',
//         'writing-a-plugin',
//         'life-cycle',
//         'option-api',
//         'context-api'
//       ]
//     },
//     {
//       title: officialPluginTitle,
//       collapsable: true,
//       children: officalPlugins
//     }
//   ]
// }


// module.exports =  [
//   {
//     title: 'Plugin',   // 必要的
//     path: '/plugin',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//     collapsable: false, // 可选的, 默认值是 true,
//     sidebarDepth: 5,    // 可选的, 默认值是 1
//     children:getPluginSidebar('插件', '介绍', '官方插件')
//   }
// ]

module.exports = []