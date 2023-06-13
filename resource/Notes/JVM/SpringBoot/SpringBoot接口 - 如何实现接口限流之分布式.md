# SpringBoot接口 - 如何实现接口限流之分布式

> 上文中介绍了单实例下如何在业务接口层做限流，本文主要介绍分布式场景下限流的方案，以及什么样的分布式场景下需要在业务层加限流而不是接入层; 并且结合[开源的ratelimiter-spring-boot-starter在新窗口打开](https://gitee.com/kailing/ratelimiter-spring-boot-starter)为例，作者是kailing， 学习**思路+代码封装+starter封装**。

------

## 准备知识点

> 上文我们提到了分布式限流的思路：

我们需要**分布式限流**和**接入层限流**来进行全局限流。

1. redis+lua实现中的lua脚本
2. 使用Nginx+Lua实现的Lua脚本
3. 使用 OpenResty 开源的限流方案
4. 限流框架，比如Sentinel实现降级限流熔断

## [#](#实现思路之redis-lua封装) 实现思路之redis+lua封装

> redis+lua是代码层实现较为常见的方案，网上有很多的封装， 我这里找一个给你分享下。以[gitee开源的ratelimiter-spring-boot-starter在新窗口打开](https://gitee.com/kailing/ratelimiter-spring-boot-starter)为例，作者是kailing， 值得初学者学习**思路+代码封装+starter封装**：

### [#](#使用场景-为什么有些分布式场景下-还会在代码层进行控制限流) 使用场景：为什么有些分布式场景下，还会在代码层进行控制限流？

基于 redis 的偏业务应用的分布式限流组件，使得项目拥有分布式限流能力变得很简单。限流的场景有很多，常说的限流一般指网关限流，控制好洪峰流量，以免打垮后方应用。这里突出`偏业务应用的分布式限流`的原因，是因为区别于网关限流，业务侧限流可以轻松根据业务性质做到细粒度的流量控制。比如如下场景，

- 案例一：

有一个公开的 openApi 接口， openApi 会给接入方派发一个 appId，此时，如果需要根据各个接入方的 appId 限流，网关限流就不好做了，只能在业务侧实现

- 案例二：

公司内部的短信接口，内部对接了多个第三方的短信通道，每个短信通道对流量的控制都不尽相同，假设有的第三方根据手机号和短信模板组合限流，网关限流就更不好做了

让我们看下，作者kailing是如何封装实现ratelimiter-spring-boot-starter的。

### [#](#源代码的要点) 源代码的要点

- **Redis 客户端采用redisson，AOP拦截方式**

