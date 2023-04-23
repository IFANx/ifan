module.exports = {
    title: 'Ifan的个人技术博客',
    description: '办法总比问题多',
    base: '/ifan',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Ifan的博客',
                items: [
                    { text: 'Github', link: 'https://github.com/IFANx' },
                    { text: 'Gitee', link: 'https://gitee.com/IFANx' }
                ]
            }
        ],
        sidebar:[
            {
                title: "博客搭建",
                path: "/construction/Blog1",
                collapsable: false, // 不折叠
                children: [
                    { title: "博客 01", path: "/construction/Blog1" },
                    {title: "博客 02", path: "/construction/Blog2" },
                ],
            }
        ]
    }
}

