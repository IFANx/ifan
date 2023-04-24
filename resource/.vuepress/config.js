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
                title: 'JVM',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "java的反射机制", path: "/Notes/JVM/java的反射机制" },
                ]
            },               {
                title: '操作系统',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/Notes/操作系统/Blog2" },
                ]
            },               {
                title: '计算机网络',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/Notes/计算机网络/Blog2" },
                       {   title: "Blog1", path: "/Notes/计算机网络/Blog1" },
                ]
            },               {
                title: 'Notes',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/Notes/Blog2" },
                       {   title: "Blog1", path: "/Notes/Blog1" },
                ]
            },        ]
    }
}

