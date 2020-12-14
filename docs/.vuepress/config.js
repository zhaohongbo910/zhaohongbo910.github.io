const themeConfig = require('./config/themeReco')
const importCodePlugins = require('./plugins/index');

const fs = require('fs');

module.exports = {
    title: "小布丁",
    description: '秋天到了，夏天的不甘该通通放下了。',
    dest: 'dist/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    theme: 'reco',
    themeConfig,
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            fs.writeFileSync('./md.json', JSON.stringify(md))
                // console.log("md", md)

            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },
    plugins: [
        '@vuepress/medium-zoom',
        'flowchart',
        '@vuepress-reco/extract-code',
    ]

}