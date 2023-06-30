(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{305:function(t,v,_){"use strict";_.r(v);var a=_(14),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"springboot接口-如何实现接口限流之单实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#springboot接口-如何实现接口限流之单实例"}},[t._v("#")]),t._v(" SpringBoot接口 - 如何实现接口限流之单实例")]),t._v(" "),v("p",[t._v("https://pdai.tech/md/spring/springboot/springboot-x-interface-xianliu.html")]),t._v(" "),v("blockquote",[v("p",[t._v("在以SpringBoot开发Restful接口时，当流量超过服务极限能力时，系统可能会出现卡死、崩溃的情况，所以就有了降级和限流。在接口层如何做限流呢？ 本文主要回顾限流的知识点，并实践单实例限流的一种思路。")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"为什么要限流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要限流"}},[t._v("#")]),t._v(" 为什么要限流")]),t._v(" "),v("p",[t._v("每个系统都有服务的上线，所以当流量超过服务极限能力时，系统可能会出现卡死、崩溃的情况，所以就有了降级和限流。限流其实就是：当高并发或者瞬时高并发时，为了保证系统的稳定性、可用性，系统以牺牲部分请求为代价或者延迟处理请求为代价，保证系统整体服务可用。")]),t._v(" "),v("h3",{attrs:{id:"限流有哪些常见思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限流有哪些常见思路"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#%E9%99%90%E6%B5%81%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E6%80%9D%E8%B7%AF"}},[t._v("#")]),t._v(" 限流有哪些常见思路？")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("从算法上看")])])]),t._v(" "),v("p",[t._v("令牌桶(Token Bucket)、漏桶(leaky bucket)和计数器算法是最常用的三种限流的算法。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("单实例")])])]),t._v(" "),v("p",[t._v("应用级限流方式只是单应用内的请求限流，不能进行全局限流。")]),t._v(" "),v("ol",[v("li",[t._v("限流总资源数")]),t._v(" "),v("li",[t._v("限流总并发/连接/请求数")]),t._v(" "),v("li",[t._v("限流某个接口的总并发/请求数")]),t._v(" "),v("li",[t._v("限流某个接口的时间窗请求数")]),t._v(" "),v("li",[t._v("平滑限流某个接口的请求数")]),t._v(" "),v("li",[t._v("Guava RateLimiter")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("分布式")])])]),t._v(" "),v("p",[t._v("我们需要"),v("strong",[t._v("分布式限流")]),t._v("和"),v("strong",[t._v("接入层限流")]),t._v("来进行全局限流。")]),t._v(" "),v("ol",[v("li",[t._v("redis+lua实现中的lua脚本")]),t._v(" "),v("li",[t._v("使用Nginx+Lua实现的Lua脚本")]),t._v(" "),v("li",[t._v("使用 OpenResty 开源的限流方案")]),t._v(" "),v("li",[t._v("限流框架，比如Sentinel实现降级限流熔断")])]),t._v(" "),v("h2",{attrs:{id:"实现思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF"}},[t._v("#")]),t._v(" 实现思路")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("主要思路：AOP拦截自定义的RateLimit注解，在AOP中通过Guava RateLimiter; Guava RateLimiter提供了令牌桶算法实现：平滑突发限流(SmoothBursty)和平滑预热限流(SmoothWarmingUp)实现。")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);