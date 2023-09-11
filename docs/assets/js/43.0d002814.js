(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{318:function(t,s,a){"use strict";a.r(s);var i=a(14),v=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot集成mysql-基于jpa的封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成mysql-基于jpa的封装"}},[t._v("#")]),t._v(" SpringBoot集成MySQL - 基于JPA的封装")]),t._v(" "),s("p",[t._v("https://pdai.tech/md/spring/springboot/springboot-x-mysql-jpa.html")]),t._v(" "),s("blockquote",[s("p",[t._v("在实际开发中，最为常见的是基于数据库的CRUD封装等，比如SpringBoot集成MySQL数据库，常用的方式有JPA和MyBatis； 本文主要介绍基于JPA方式的基础封装思路。")])]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"springboot集成mysql-mybatis-xml方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成mysql-mybatis-xml方式"}},[t._v("#")]),t._v(" SpringBoot集成MySQL - MyBatis XML方式")]),t._v(" "),s("p",[t._v("https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html")]),t._v(" "),s("h3",{attrs:{id:"什么是mybatis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是mybatis"}},[t._v("#")]),t._v(" 什么是MyBatis？")]),t._v(" "),s("blockquote",[s("p",[t._v("MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。")])]),t._v(" "),s("p",[t._v("MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。")]),t._v(" "),s("ul",[s("li",[t._v("mybatis是一个优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。")]),t._v(" "),s("li",[t._v("mybatis通过xml或注解的方式将要执行的各种statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。")])]),t._v(" "),s("p",[s("strong",[t._v("MyBatis的主要设计目")]),t._v("的就是让我们对执行SQL语句时对输入输出的数据管理更加方便，所以方便地写出SQL和方便地获取SQL的执行结果才是MyBatis的核心竞争力。")]),t._v(" "),s("p",[s("strong",[t._v("Mybatis的功能架构分为三层")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("API接口层")]),t._v("：提供给外部使用的接口API，开发人员通过这些本地API来操纵数据库。接口层一接收到调用请求就会调用数据处理层来完成具体的数据处理。")]),t._v(" "),s("li",[s("strong",[t._v("数据处理层")]),t._v("：负责具体的SQL查找、SQL解析、SQL执行和执行结果映射处理等。它主要的目的是根据调用的请求完成一次数据库操作。")]),t._v(" "),s("li",[s("strong",[t._v("基础支撑层")]),t._v("：负责最基础的功能支撑，包括连接管理、事务管理、配置加载和缓存处理，这些都是共用的东西，将他们抽取出来作为最基础的组件。为上层的数据处理层提供最基础的支撑。")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"为什么说mybatis是半自动orm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么说mybatis是半自动orm"}},[t._v("#")]),t._v(" 为什么说MyBatis是半自动ORM？")]),t._v(" "),s("blockquote",[s("p",[t._v("为什么说MyBatis是半自动ORM？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("什么是ORM")]),t._v("？")])]),t._v(" "),s("p",[t._v("JDBC，ORM知识点可以参考"),s("a",{attrs:{href:""}},[t._v("SpringBoot入门 - 添加内存数据库H2")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("什么是全自动ORM")]),t._v("？")])]),t._v(" "),s("p",[t._v("ORM框架可以根据对象关系模型直接获取，查询关联对象或者关联集合对象，简单而言使用全自动的ORM框架查询时可以不再写SQL。典型的框架如Hibernate； 因为Spring-data-jpa很多代码也是Hibernate团队贡献的，所以spring-data-jpa也是全自动ORM框架。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("MyBatis是半自动ORM")]),t._v("？")])]),t._v(" "),s("p",[t._v("Mybatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动ORM 映射工具。")]),t._v(" "),s("p",[t._v("（PS: 正是由于MyBatis是半自动框架，基于MyBatis技术栈的框架开始考虑兼容MyBatis开发框架的基础上提供自动化的能力，比如MyBatis-plus等框架）")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"#mybatis%E6%A0%88%E6%8A%80%E6%9C%AF%E6%BC%94%E8%BF%9B"}},[t._v("#")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("著作权归@pdai所有 原文链接：https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html")])])}),[],!1,null,null,null);s.default=v.exports}}]);