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
                title: 'OS',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/Notes/OS/Blog2" },
                ]
            },               {
                title: 'CodeMoreCherishMore',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "cherish", path: "/Notes/CodeMoreCherishMore/cherish" },
                ]
            },               {
                title: 'CN',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "TCP", path: "/Notes/CN/TCP" },
                       {   title: "UDP", path: "/Notes/CN/UDP" },
                       {   title: "应用层协议", path: "/Notes/CN/应用层协议" },
                ]
            },               {
                title: 'Notes',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Abstract", path: "/Notes/Abstract" },
                       {   title: "Interface", path: "/Notes/Interface" },
                ]
            },        ]
    }
}

