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
                       {   title: "Java集合", path: "/Notes/JVM/Java集合" },
                       {   title: "JVM相关", path: "/Notes/JVM/JVM相关" },
                       {   title: "Java基础", path: "/Notes/JVM/Java基础" },
                ]
            },               {
                title: '操作系统',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "四、文件系统", path: "/Notes/操作系统/四、文件系统" },
                       {   title: "一、进程与线程", path: "/Notes/操作系统/一、进程与线程" },
                       {   title: "引论", path: "/Notes/操作系统/引论" },
                       {   title: "二、存储管理", path: "/Notes/操作系统/二、存储管理" },
                ]
            },               {
                title: 'Netty',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "2Netty 应用程序", path: "/Notes/Netty/2Netty 应用程序" },
                       {   title: "1.Netty的概念及体系结构", path: "/Notes/Netty/1.Netty的概念及体系结构" },
                ]
            },               {
                title: '计算机网络',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "TCP", path: "/Notes/计算机网络/TCP" },
                       {   title: "UDP", path: "/Notes/计算机网络/UDP" },
                       {   title: "应用层协议", path: "/Notes/计算机网络/应用层协议" },
                       {   title: "传输层协议", path: "/Notes/计算机网络/传输层协议" },
                       {   title: "链路层和局域网", path: "/Notes/计算机网络/链路层和局域网" },
                       {   title: "网络层协议-数据平面", path: "/Notes/计算机网络/网络层协议-数据平面" },
                       {   title: "网络层协议-控制平面", path: "/Notes/计算机网络/网络层协议-控制平面" },
                ]
            },               {
                title: 'Notes',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "图床", path: "/Notes/图床" },
                       {   title: "Abstract", path: "/Notes/Abstract" },
                       {   title: "Interface", path: "/Notes/Interface" },
                ]
            },        ]
    }
}

