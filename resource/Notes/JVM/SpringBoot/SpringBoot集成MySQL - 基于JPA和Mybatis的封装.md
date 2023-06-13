# SpringBoot集成MySQL - 基于JPA的封装

https://pdai.tech/md/spring/springboot/springboot-x-mysql-jpa.html

> 在实际开发中，最为常见的是基于数据库的CRUD封装等，比如SpringBoot集成MySQL数据库，常用的方式有JPA和MyBatis； 本文主要介绍基于JPA方式的基础封装思路。

------

# SpringBoot集成MySQL - MyBatis XML方式

https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html

### 什么是MyBatis？

> MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。

MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。

- mybatis是一个优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。
- mybatis通过xml或注解的方式将要执行的各种statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。

**MyBatis的主要设计目**的就是让我们对执行SQL语句时对输入输出的数据管理更加方便，所以方便地写出SQL和方便地获取SQL的执行结果才是MyBatis的核心竞争力。

**Mybatis的功能架构分为三层**：

- **API接口层**：提供给外部使用的接口API，开发人员通过这些本地API来操纵数据库。接口层一接收到调用请求就会调用数据处理层来完成具体的数据处理。
- **数据处理层**：负责具体的SQL查找、SQL解析、SQL执行和执行结果映射处理等。它主要的目的是根据调用的请求完成一次数据库操作。
- **基础支撑层**：负责最基础的功能支撑，包括连接管理、事务管理、配置加载和缓存处理，这些都是共用的东西，将他们抽取出来作为最基础的组件。为上层的数据处理层提供最基础的支撑。

------

### 为什么说MyBatis是半自动ORM？

> 为什么说MyBatis是半自动ORM？

- **什么是ORM**？

JDBC，ORM知识点可以参考[SpringBoot入门 - 添加内存数据库H2]()

- **什么是全自动ORM**？

ORM框架可以根据对象关系模型直接获取，查询关联对象或者关联集合对象，简单而言使用全自动的ORM框架查询时可以不再写SQL。典型的框架如Hibernate； 因为Spring-data-jpa很多代码也是Hibernate团队贡献的，所以spring-data-jpa也是全自动ORM框架。

- **MyBatis是半自动ORM**？

Mybatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动ORM 映射工具。

（PS: 正是由于MyBatis是半自动框架，基于MyBatis技术栈的框架开始考虑兼容MyBatis开发框架的基础上提供自动化的能力，比如MyBatis-plus等框架）

### [#](#mybatis栈技术演进)

------

著作权归@pdai所有 原文链接：https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html