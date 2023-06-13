(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{312:function(t,v,_){"use strict";_.r(v);var a=_(14),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"springboot集成mysql-mybatis-plus基于字段隔离的多租户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成mysql-mybatis-plus基于字段隔离的多租户"}},[t._v("#")]),t._v(" SpringBoot集成MySQL - MyBatis-Plus基于字段隔离的多租户")]),t._v(" "),v("p",[t._v("https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-plus-multi-tenant.html")]),t._v(" "),v("blockquote",[v("p",[t._v("本文主要介绍 MyBatis-Plus的基于字段隔离的多租户实现，以及MyBatis-Plus的基于字段的隔离方式实践和原理。")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"什么是多租户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是多租户"}},[t._v("#")]),t._v(" 什么是多租户？")]),t._v(" "),v("blockquote",[v("p",[t._v("如下解释来源于百度百科")])]),t._v(" "),v("p",[t._v("多租户技术（英语：multi-tenancy technology）或称多重租赁技术，是一种软件架构技术，它是在探讨与实现如何于多用户的环境下共用相同的系统或程序组件，并且仍可确保各用户间数据的隔离性。")]),t._v(" "),v("p",[t._v("多租户简单来说是指一个单独的实例可以为多个组织服务。多租户技术为共用的数据中心内如何以单一系统架构与服务提供多数客户端相同甚至可定制化的服务，并且仍然可以保障客户的数据隔离。一个支持多租户技术的系统需要在设计上对它的数据和配置进行虚拟分区，从而使系统的每个租户或称组织都能够使用一个单独的系统实例，并且每个租户都可以根据自己的需求对租用的系统实例进行个性化配置。")]),t._v(" "),v("p",[t._v("多租户技术可以实现多个租户之间共享系统实例，同时又可以实现租户的系统实例的个性化定制。通过使用多租户技术可以保证系统共性的部分被共享，个性的部分被单独隔离。通过在多个租户之间的资源复用，运营管理维护资源，有效节省开发应用的成本。而且，在租户之间共享应用程序的单个实例，可以实现当应用程序升级时，所有租户可以同时升级。同时，因为多个租户共享一份系统的核心代码，因此当系统升级时，只需要升级相同的核心代码即可。")]),t._v(" "),v("h3",{attrs:{id:"多租户在数据存储上有哪些实现方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多租户在数据存储上有哪些实现方式"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#%E5%A4%9A%E7%A7%9F%E6%88%B7%E5%9C%A8%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E4%B8%8A%E6%9C%89%E5%93%AA%E4%BA%9B%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F"}},[t._v("#")]),t._v(" 多租户在数据存储上有哪些实现方式？")]),t._v(" "),v("blockquote",[v("p",[t._v("如下解释来源于百度百科")])]),t._v(" "),v("p",[t._v("多租户在数据存储上存在三种主要的方案，分别是")]),t._v(" "),v("h4",{attrs:{id:"db隔离-独立数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#db隔离-独立数据库"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#db%E9%9A%94%E7%A6%BB-%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E5%BA%93"}},[t._v("#")]),t._v(" DB隔离：独立数据库")]),t._v(" "),v("p",[t._v("这是第一种方案，即"),v("strong",[t._v("一个租户一个数据库")]),t._v("，这种方案的用户数据隔离级别最高，安全性最好，但成本也高。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("优点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("为不同的租户提供独立的数据库，有助于简化数据模型的扩展设计，满足不同租户的独特需求；")]),t._v(" "),v("li",[t._v("如果出现故障，恢复数据比较简单。")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("缺点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("增大了数据库的安装数量，随之带来维护成本和购置成本的增加。")]),t._v(" "),v("li",[t._v("这种方案与传统的一个客户、一套数据、一套部署类似，差别只在于软件统一部署在运营商那里。如果面对的是银行、医院等需要非常高数据隔离级别的租户，可以选择这种模式，提高租用的定价。如果定价较低，产品走低价路线，这种方案一般对运营商来说是无法承受的。")])]),t._v(" "),v("h4",{attrs:{id:"schema隔离-共享数据库-隔离数据架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#schema隔离-共享数据库-隔离数据架构"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#schema%E9%9A%94%E7%A6%BB-%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE%E5%BA%93-%E9%9A%94%E7%A6%BB%E6%95%B0%E6%8D%AE%E6%9E%B6%E6%9E%84"}},[t._v("#")]),t._v(" Schema隔离：共享数据库，隔离数据架构")]),t._v(" "),v("p",[t._v("这是第二种方案，即多个或所有租户共享Database，但"),v("strong",[t._v("一个租户（Tenant）一个Schema")]),t._v("。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("优点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("为安全性要求较高的租户提供了一定程度的逻辑数据隔离，并不是完全隔离；每个数据库可以支持更多的租户数量。")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("缺点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("如果出现故障，数据恢复比较困难，因为恢复数据库将牵扯到其他租户的数据；")]),t._v(" "),v("li",[t._v("如果需要跨租户统计数据，存在一定困难。")])]),t._v(" "),v("h4",{attrs:{id:"字段隔离-共享数据库-共享数据架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字段隔离-共享数据库-共享数据架构"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#%E5%AD%97%E6%AE%B5%E9%9A%94%E7%A6%BB-%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE%E5%BA%93-%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE%E6%9E%B6%E6%9E%84"}},[t._v("#")]),t._v(" 字段隔离：共享数据库，共享数据架构")]),t._v(" "),v("p",[t._v("这是第三种方案，即租户共享同一个Database、同一个Schema，但在表中"),v("strong",[t._v("通过TenantID区分租户的数据")]),t._v("。这是共享程度最高、隔离级别最低的模式。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("优点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("三种方案比较，第三种方案的维护和购置成本最低，允许每个数据库支持的租户数量最多。")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("缺点")]),t._v("：")])]),t._v(" "),v("ol",[v("li",[t._v("隔离级别最低，安全性最低，需要在设计开发时加大对安全的开发量；")]),t._v(" "),v("li",[t._v("数据备份和恢复最困难，需要逐表逐条备份和还原。")]),t._v(" "),v("li",[t._v("如果希望以最少的服务器为最多的租户提供服务，并且租户接受以牺牲隔离级别换取降低成本，这种方案最适合。")])]),t._v(" "),v("hr"),t._v(" "),v("h1",{attrs:{id:"springboot集成shardingjdbc-sharding-jdbc简介和基于mybatis的单库分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成shardingjdbc-sharding-jdbc简介和基于mybatis的单库分表"}},[t._v("#")]),t._v(" SpringBoot集成ShardingJDBC - Sharding-JDBC简介和基于MyBatis的单库分表")])])}),[],!1,null,null,null);v.default=s.exports}}]);