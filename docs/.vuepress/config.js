module.exports = {
    title: '林山博客',
    description: '欢迎来到林山的技术博客',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks:false,
        nav: [
            { text: '主页', link: '/' },
            {
                text: '技术文档',
                items: [
                    {
                        text: 'java技术栈',
                        items: [
                            { text: 'java语言的起源', link: '/pages/java/java1' },
                            { text: 'java基本语法', link: '/pages/java/java2' },
                            { text: 'java高级', link: '/pages/java/java3' },
                        ]
                    },
                    {
                        text: 'js技术栈',
                        items: [
                            { text: 'js简介', link: '/pages/js/js1' },
                            { text: 'js用法', link: '/pages/js/js2' },
                            { text: 'js数据类型', link: '/pages/js/js3' },
                        ]
                    },
                    {
                        text: 'linux技术栈',
                        items: [
                            { text: 'Linux简介', link: '/pages/linux/linux1' },
                            { text: 'Linux系统目录结构', link: '/pages/linux/linux2' },
                            { text: 'Linux yum命令', link: '/pages/linux/linux3' },
                        ]
                    },
                    {
                        text: 'springBoot技术栈',
                        items: [
                            { text: 'spring简介', link: '/pages/springboot/spring1' },
                            { text: 'spring快速入门', link: '/pages/springboot/spring2' },
                            { text: 'spring日志', link: '/pages/springboot/spring3' },
                        ]
                    },
                    {
                        text: 'vue技术栈',
                        items: [
                            { text: 'vue简介', link: '/pages/vue/vue1' },
                            { text: 'vue模板语法', link: '/pages/vue/vue2' },
                            { text: 'vue事件处理', link: '/pages/vue/vue3' },
                        ]
                    },
                    {
                        text: '随想录',
                        link: '/pages/world/'
                    },
                ]
            },
            {
                text: '常用连接',
                items: [
                    {
                        text: '谷歌',
                        link: 'https://google.com'
                    },
                    {
                        text: '菜鸟教程',
                        link: 'https://www.runoob.com/'
                    },
                    {
                        text: 'Flink',
                        link: 'https://flink.apache.org/'
                    },
                    {
                        text: 'hadoop',
                        link: 'https://hadoop.apache.org/'
                    },
                ],

            },
        ],
        sidebar: [
            ['','主页'],
            '/pages/',
            {
                title: 'java技术栈',   // 必要的
                path: '/pages/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                children: [
                    ['/pages/java/java1','java语言的起源'],
                    ['/pages/java/java2','java基本语法'],
                    ['/pages/java/java3','java高级'],
                ]
            },
            {
                title: 'js技术栈',
                path: '/pages/js/',
                collapsable: true,
                children: [
                    ['/pages/js/js1','js简介'],
                    ['/pages/js/js2','js用法'],
                    ['/pages/js/js3','js数据类型'],
                ]
            },
            {
                title: 'linux技术栈',
                path: '/pages/linux/',
                collapsable: true,
                children: [
                    ['/pages/linux/linux1','Linux简介'],
                    ['/pages/linux/linux2','Linux系统目录结构'],
                    ['/pages/linux/linux3','Linux yum命令'],
                ]
            },
            {
                title: 'springBoot技术栈',
                path: '/pages/springboot/',
                collapsable: true,
                children: [
                    ['/pages/springboot/spring1','spring简介'],
                    ['/pages/springboot/spring2','spring快速入门'],
                    ['/pages/springboot/spring3','spring日志'],
                ]
            },
            {
                title: 'vue技术栈',
                path: '/pages/vue/',
                collapsable: true,
                children: [
                    ['/pages/vue/vue1','vue简介'],
                    ['/pages/vue/vue2','vue模板语法'],
                    ['/pages/vue/vue3','vue事件处理'],
                ]
            },
            {
                title: '随想录',
                path: '/pages/world/',
                collapsable: true,
                children: [
                    ['/pages/world/world1','基尼系数'],
                    ['/pages/world/world2','恩格尔系数'],
                    ['/pages/world/world3','GDP'],
                ]
            },
        ]
    }
}
