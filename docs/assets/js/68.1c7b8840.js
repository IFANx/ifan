(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{339:function(a,t,s){"use strict";s.r(t);var r=s(14),_=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"mysql分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql分库分表"}},[a._v("#")]),a._v(" MySQL分库分表")]),a._v(" "),t("h2",{attrs:{id:"水平切分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平切分"}},[a._v("#")]),a._v(" 水平切分")]),a._v(" "),t("p",[a._v("水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。")]),a._v(" "),t("p",[a._v("当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓存单个数据库的压力。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/mysql/63c2909f-0c5f-496f-9fe5-ee9176b31aba.jpg",alt:"img"}})]),a._v(" "),t("h2",{attrs:{id:"垂直切分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直切分"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#%E5%9E%82%E7%9B%B4%E5%88%87%E5%88%86"}},[a._v("#")]),a._v(" 垂直切分")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/mysql/e130e5b8-b19a-4f1e-b860-223040525cf6.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。")]),a._v(" "),t("p",[a._v("在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。")]),a._v(" "),t("h2",{attrs:{id:"sharding-策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharding-策略"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#sharding-%E7%AD%96%E7%95%A5"}},[a._v("#")]),a._v(" Sharding 策略")]),a._v(" "),t("ul",[t("li",[a._v("哈希取模: hash(key) % NUM_DB")]),a._v(" "),t("li",[a._v("范围: 可以是 ID 范围也可以是时间范围")]),a._v(" "),t("li",[a._v("映射表: 使用单独的一个数据库来存储映射关系")])]),a._v(" "),t("h2",{attrs:{id:"sharding-存在的问题及解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharding-存在的问题及解决方案"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#sharding-%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88"}},[a._v("#")]),a._v(" Sharding 存在的问题及解决方案")]),a._v(" "),t("h3",{attrs:{id:"_1-事务问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务问题"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#_1-%E4%BA%8B%E5%8A%A1%E9%97%AE%E9%A2%98"}},[a._v("#")]),a._v(" 1. 事务问题")]),a._v(" "),t("p",[a._v("使用分布式事务来解决，比如 XA 接口。")]),a._v(" "),t("h3",{attrs:{id:"_2-链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-链接"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#_2-%E9%93%BE%E6%8E%A5"}},[a._v("#")]),a._v(" 2. 链接")]),a._v(" "),t("p",[a._v("可以将原来的 JOIN 分解成多个单表查询，然后在用户程序中进行 JOIN。")]),a._v(" "),t("h3",{attrs:{id:"_3-id-唯一性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-id-唯一性"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#_3-id-%E5%94%AF%E4%B8%80%E6%80%A7"}},[a._v("#")]),a._v(" 3. ID 唯一性")]),a._v(" "),t("ul",[t("li",[a._v("使用全局唯一 ID: GUID")]),a._v(" "),t("li",[a._v("为每个分片指定一个 ID 范围")]),a._v(" "),t("li",[a._v("分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)")])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("著作权归@pdai所有 原文链接：https://pdai.tech/md/db/sql-mysql/sql-mysql-devide.html")])])}),[],!1,null,null,null);t.default=_.exports}}]);