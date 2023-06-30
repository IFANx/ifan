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
                       {   title: "Java常用机制-SPI机制", path: "/Notes/JVM/Java常用机制-SPI机制" },
                       {   title: "JVM相关", path: "/Notes/JVM/JVM相关" },
                       {   title: "Java基础", path: "/Notes/JVM/Java基础" },
                       {   title: "JUC", path: "/Notes/JVM/JUC" },
                       {   title: "Java注解", path: "/Notes/JVM/Java注解" },
                ]
            },               {
                title: 'Maven',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Maven自定义依赖并推送到远程仓库", path: "/Notes/Maven/Maven自定义依赖并推送到远程仓库" },
                       {   title: "使用Nexus在云服务器搭建Maven私服", path: "/Notes/Maven/使用Nexus在云服务器搭建Maven私服" },
                ]
            },               {
                title: 'Redis',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "缓存一执行问题", path: "/Notes/数据库/Redis/缓存一执行问题" },
                ]
            },               {
                title: 'SpringBoot',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Untitled 1", path: "/Notes/JVM/SpringBoot/Untitled 1" },
                       {   title: "SpringBoot接口 - 如何实现接口限流之分布式", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何实现接口限流之分布式" },
                       {   title: "SpringBoot接口 - 如何对接口进行签名", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何对接口进行签名" },
                       {   title: "SpringBoot集成MySQL - 基于JPA和Mybatis的封装", path: "/Notes/JVM/SpringBoot/SpringBoot集成MySQL - 基于JPA和Mybatis的封装" },
                       {   title: "SpringBoot集成MySQL - MyBatis-Plus基于字段隔离的多租户", path: "/Notes/JVM/SpringBoot/SpringBoot集成MySQL - MyBatis-Plus基于字段隔离的多租户" },
                       {   title: "SpringBoot常用注解", path: "/Notes/JVM/SpringBoot/SpringBoot常用注解" },
                       {   title: "SpringBoot", path: "/Notes/JVM/SpringBoot/SpringBoot" },
                       {   title: "SpringBoot接口 - 如何统一接口封装", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何统一接口封装" },
                       {   title: "SpringBoot应用部署 - 使用Docker Compose对容器编排管理", path: "/Notes/JVM/SpringBoot/SpringBoot应用部署 - 使用Docker Compose对容器编排管理" },
                       {   title: "SpringBoot入门-配置热部署devtools", path: "/Notes/JVM/SpringBoot/SpringBoot入门-配置热部署devtools" },
                       {   title: "SpringBoot接口 - 如何提供多个版本接口", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何提供多个版本接口" },
                       {   title: "SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)", path: "/Notes/JVM/SpringBoot/SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)" },
                       {   title: "SpringBoot集成Redis - Redis分布式锁的实现之Jedis(setNXPX+Lua)", path: "/Notes/JVM/SpringBoot/SpringBoot集成Redis - Redis分布式锁的实现之Jedis(setNXPX+Lua)" },
                       {   title: "SpringBoot集成文件-基础的文件上传和下载", path: "/Notes/JVM/SpringBoot/SpringBoot集成文件-基础的文件上传和下载" },
                       {   title: "Springboot集成WebSocket", path: "/Notes/JVM/SpringBoot/Springboot集成WebSocket" },
                       {   title: "SpringBoot接口 - 如何访问外部接口", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何访问外部接口" },
                       {   title: "SpringBoot接口 - 如何保证接口幂等", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何保证接口幂等" },
                       {   title: "SpringBoot接口 - 如何实现接口限流之单实例", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何实现接口限流之单实例" },
                       {   title: "SpringBoot集成Redis - 基于RedisTemplate+Jedis的数据操作", path: "/Notes/JVM/SpringBoot/SpringBoot集成Redis - 基于RedisTemplate+Jedis的数据操作" },
                       {   title: "SpringBoot集成MySQL - 基于JPA的封装", path: "/Notes/JVM/SpringBoot/SpringBoot集成MySQL - 基于JPA的封装" },
                       {   title: "SpringBoot应用部署 - 打包成jar部署", path: "/Notes/JVM/SpringBoot/SpringBoot应用部署 - 打包成jar部署" },
                       {   title: "SpringBoot接口 - 如何生成接口文档之Swagger技术栈", path: "/Notes/JVM/SpringBoot/SpringBoot接口 - 如何生成接口文档之Swagger技术栈" },
                       {   title: "SpringBoot集成Redis - 基于RedisTemplate+Lettuce数据操作", path: "/Notes/JVM/SpringBoot/SpringBoot集成Redis - 基于RedisTemplate+Lettuce数据操作" },
                ]
            },               {
                title: 'Spring',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Spring框架知识体系", path: "/Notes/JVM/Spring/Spring框架知识体系" },
                       {   title: "Spring进阶-IOC体系结构设计", path: "/Notes/JVM/Spring/Spring进阶-IOC体系结构设计" },
                       {   title: "Spring进阶-Spring AOP实现原理之AOP切面实现", path: "/Notes/JVM/Spring/Spring进阶-Spring AOP实现原理之AOP切面实现" },
                       {   title: "Spring基础 - SpringMVC请求流程和案例", path: "/Notes/JVM/Spring/Spring基础 - SpringMVC请求流程和案例" },
                       {   title: "Spring基础 - Spring核心之控制反转(IOC)", path: "/Notes/JVM/Spring/Spring基础 - Spring核心之控制反转(IOC)" },
                       {   title: "Spring基础 - Spring核心之面向切面编程(AOP)", path: "/Notes/JVM/Spring/Spring基础 - Spring核心之面向切面编程(AOP)" },
                ]
            },               {
                title: '数据结构',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "红黑树", path: "/Notes/数据结构/红黑树" },
                ]
            },               {
                title: '计算机网络',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "TCP", path: "/Notes/计算机网络/TCP" },
                       {   title: "UDP", path: "/Notes/计算机网络/UDP" },
                       {   title: "应用层协议", path: "/Notes/计算机网络/应用层协议" },
                       {   title: "HTTP详解", path: "/Notes/计算机网络/HTTP详解" },
                       {   title: "传输层协议", path: "/Notes/计算机网络/传输层协议" },
                       {   title: "RPC", path: "/Notes/计算机网络/RPC" },
                       {   title: "链路层和局域网", path: "/Notes/计算机网络/链路层和局域网" },
                       {   title: "网络层协议-数据平面", path: "/Notes/计算机网络/网络层协议-数据平面" },
                       {   title: "网络层协议-控制平面", path: "/Notes/计算机网络/网络层协议-控制平面" },
                ]
            },               {
                title: 'Docker',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "docker部署ftp文件服务器", path: "/Notes/Docker/docker部署ftp文件服务器" },
                ]
            },               {
                title: 'MySQL',
                sidebarDepth: 3,
                collapsable: true,
                children: [
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
                title: 'JUC',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "ReentrantLock", path: "/Notes/JVM/JUC/ReentrantLock" },
                       {   title: "AQS详解", path: "/Notes/JVM/JUC/AQS详解" },
                       {   title: "并发编程", path: "/Notes/JVM/JUC/并发编程" },
                ]
            },               {
                title: 'Java IO',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "Java IO分类", path: "/Notes/JVM/Java IO/Java IO分类" },
                       {   title: "Java IO知识体系", path: "/Notes/JVM/Java IO/Java IO知识体系" },
                ]
            },               {
                title: '基础和原理',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "记录", path: "/Notes/数据库/基础和原理/记录" },
                       {   title: "SQL-DB", path: "/Notes/数据库/基础和原理/SQL-DB" },
                ]
            },               {
                title: '数据库',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "编译MySQL源码并执行", path: "/Notes/数据库/编译MySQL源码并执行" },
                ]
            },               {
                title: 'Notes',
                sidebarDepth: 3,
                collapsable: true,
                children: [
                       {   title: "图床", path: "/Notes/图床" },
                ]
            },        ]
    }
}

