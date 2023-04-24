module.exports = {
    title: 'Notes',
    description: '办法总比问题多',
    base: '/ifan/',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'what?',
                items: [
                    {text: 'Github', link: 'https://github.com/IFANx'},
                    {text: 'Gitee', link: 'https://gitee.com/IFANx'}
                ]
            }
        ],
        sidebar: [
            {
                title: '语言基础',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                    {   title: "java反射机制01", path: "/construction/Blog1" },
                            {title: "Java反射机制02", path: "/construction/Blog2" },
                ]
            },
            // {
            //     title: '开发框架',
            //     sidebarDepth: 2, // 这里对侧边栏目录显示的标题级别深度起作用
            //     collapsable: true,
            //     children: [
            //         {title: 'vue', path: 'framework/vue'},
            //         {title: 'vue-cli', path: 'framework/vue-cli'},
            //         {title: 'vue-router', path: 'framework/vue-router'},
            //         {title: 'vue-vuex', path: 'framework/vue-vuex'},
            //     ]
            // },
        ]
    }
}

