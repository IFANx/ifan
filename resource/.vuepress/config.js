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
                title: 'construction3',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/construction/construction3/Blog2" },
                       {   title: "Blog1", path: "/construction/construction3/Blog1" },
                ]
            },               {
                title: 'construction',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/construction/Blog2" },
                       {   title: "Blog1", path: "/construction/Blog1" },
                ]
            },               {
                title: 'construction2',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Blog2", path: "/construction/construction2/Blog2" },
                       {   title: "Blog1", path: "/construction/construction2/Blog1" },
                ]
            },        ]
    }
}

