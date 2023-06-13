(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{305:function(t,r,e){"use strict";e.r(r);var a=e(14),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"springboot接口-如何实现接口限流之分布式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springboot接口-如何实现接口限流之分布式"}},[t._v("#")]),t._v(" SpringBoot接口 - 如何实现接口限流之分布式")]),t._v(" "),r("blockquote",[r("p",[t._v("上文中介绍了单实例下如何在业务接口层做限流，本文主要介绍分布式场景下限流的方案，以及什么样的分布式场景下需要在业务层加限流而不是接入层; 并且结合"),r("a",{attrs:{href:"https://gitee.com/kailing/ratelimiter-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源的ratelimiter-spring-boot-starter在新窗口打开"),r("OutboundLink")],1),t._v("为例，作者是kailing， 学习"),r("strong",[t._v("思路+代码封装+starter封装")]),t._v("。")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"准备知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备知识点"}},[t._v("#")]),t._v(" 准备知识点")]),t._v(" "),r("blockquote",[r("p",[t._v("上文我们提到了分布式限流的思路：")])]),t._v(" "),r("p",[t._v("我们需要"),r("strong",[t._v("分布式限流")]),t._v("和"),r("strong",[t._v("接入层限流")]),t._v("来进行全局限流。")]),t._v(" "),r("ol",[r("li",[t._v("redis+lua实现中的lua脚本")]),t._v(" "),r("li",[t._v("使用Nginx+Lua实现的Lua脚本")]),t._v(" "),r("li",[t._v("使用 OpenResty 开源的限流方案")]),t._v(" "),r("li",[t._v("限流框架，比如Sentinel实现降级限流熔断")])]),t._v(" "),r("h2",{attrs:{id:"实现思路之redis-lua封装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现思路之redis-lua封装"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF%E4%B9%8Bredis-lua%E5%B0%81%E8%A3%85"}},[t._v("#")]),t._v(" 实现思路之redis+lua封装")]),t._v(" "),r("blockquote",[r("p",[t._v("redis+lua是代码层实现较为常见的方案，网上有很多的封装， 我这里找一个给你分享下。以"),r("a",{attrs:{href:"https://gitee.com/kailing/ratelimiter-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee开源的ratelimiter-spring-boot-starter在新窗口打开"),r("OutboundLink")],1),t._v("为例，作者是kailing， 值得初学者学习"),r("strong",[t._v("思路+代码封装+starter封装")]),t._v("：")])]),t._v(" "),r("h3",{attrs:{id:"使用场景-为什么有些分布式场景下-还会在代码层进行控制限流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-为什么有些分布式场景下-还会在代码层进行控制限流"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF-%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E5%88%86%E5%B8%83%E5%BC%8F%E5%9C%BA%E6%99%AF%E4%B8%8B-%E8%BF%98%E4%BC%9A%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E8%BF%9B%E8%A1%8C%E6%8E%A7%E5%88%B6%E9%99%90%E6%B5%81"}},[t._v("#")]),t._v(" 使用场景：为什么有些分布式场景下，还会在代码层进行控制限流？")]),t._v(" "),r("p",[t._v("基于 redis 的偏业务应用的分布式限流组件，使得项目拥有分布式限流能力变得很简单。限流的场景有很多，常说的限流一般指网关限流，控制好洪峰流量，以免打垮后方应用。这里突出"),r("code",[t._v("偏业务应用的分布式限流")]),t._v("的原因，是因为区别于网关限流，业务侧限流可以轻松根据业务性质做到细粒度的流量控制。比如如下场景，")]),t._v(" "),r("ul",[r("li",[t._v("案例一：")])]),t._v(" "),r("p",[t._v("有一个公开的 openApi 接口， openApi 会给接入方派发一个 appId，此时，如果需要根据各个接入方的 appId 限流，网关限流就不好做了，只能在业务侧实现")]),t._v(" "),r("ul",[r("li",[t._v("案例二：")])]),t._v(" "),r("p",[t._v("公司内部的短信接口，内部对接了多个第三方的短信通道，每个短信通道对流量的控制都不尽相同，假设有的第三方根据手机号和短信模板组合限流，网关限流就更不好做了")]),t._v(" "),r("p",[t._v("让我们看下，作者kailing是如何封装实现ratelimiter-spring-boot-starter的。")]),t._v(" "),r("h3",{attrs:{id:"源代码的要点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源代码的要点"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"#%E6%BA%90%E4%BB%A3%E7%A0%81%E7%9A%84%E8%A6%81%E7%82%B9"}},[t._v("#")]),t._v(" 源代码的要点")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Redis 客户端采用redisson，AOP拦截方式")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);