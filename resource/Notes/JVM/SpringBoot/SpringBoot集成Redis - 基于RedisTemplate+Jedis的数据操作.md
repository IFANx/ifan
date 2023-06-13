# SpringBoot集成Redis - 基于RedisTemplate+Jedis的数据操作

> Redis是最常用的KV数据库，Spring 通过模板方式（RedisTemplate）提供了对Redis的数据查询和操作功能。本文主要介绍基于RedisTemplate + Jedis方式对Redis进行查询和操作的案例。

------

https://pdai.tech/md/spring/springboot/springboot-x-redis-jedis.html

### Redis基础和5种基础数据类型

> Redis 相关的知识体系，请参考 [Redis知识体系]()

首先对redis来说，所有的key（键）都是字符串。我们在谈基础数据结构时，讨论的是存储值的数据类型，主要包括常见的5种数据类型，分别是：String、List、Set、Zset、Hash。

![img](/images/db/redis/db-redis-ds-1.jpeg)

| 结构类型         | 结构存储的值                               | 结构的读写能力                                               |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------ |
| **String字符串** | 可以是字符串、整数或浮点数                 | 对整个字符串或字符串的一部分进行操作；对整数或浮点数进行自增或自减操作； |
| **List列表**     | 一个链表，链表上的每个节点都包含一个字符串 | 对链表的两端进行push和pop操作，读取单个或多个元素；根据值查找或删除元素； |
| **Set集合**      | 包含字符串的无序集合                       | 字符串的集合，包含基础的方法有看是否存在添加、获取、删除；还包含计算交集、并集、差集等 |
| **Hash散列**     | 包含键值对的无序散列表                     | 包含方法有添加、获取、删除单个元素                           |
| **Zset有序集合** | 和散列一样，用于存储键值对                 | 字符串成员与浮点数分数之间的有序映射；元素的排列顺序由分数的大小决定；包含方法有添加、获取、删除单个元素以及根据分值范围或成员来获取元素 |

### [#](#什么是jedis) 什么是Jedis

Jedis是Redis的Java客户端，在SpringBoot 1.x版本中也是默认的客户端。在SpringBoot 2.x版本中默认客户端是Luttuce。

### [#](#spring中的template和redistemplate) Spring中的Template和RedisTemplate

> Spring 通过模板方式（RedisTemplate）提供了对Redis的数据查询和操作功能。

**什么是模板模式**？

模板方法模式(Template pattern): 在一个方法中定义一个算法的骨架, 而将一些步骤延迟到子类中. 模板方法使得子类可以在不改变算法结构的情况下, 重新定义算法中的某些步骤。

![img](/images/pics/c3c1c0e8-3a78-4426-961f-b46dd0879dd8.png)

**Spring中有哪些模板模式的设计**？

比如：jdbcTemplate, mongodbTemplate, elasticsearchTemplate...等等

**RedisTemplate对于Redis5种基础类型的操作**？

```java
redisTemplate.opsForValue(); // 操作字符串
redisTemplate.opsForHash(); // 操作hash
redisTemplate.opsForList(); // 操作list
redisTemplate.opsForSet(); // 操作set
redisTemplate.opsForZSet(); // 操作zset
```

**对HyperLogLogs（基数统计）类型的操作**?

相关内容请[参考: Redis特殊数据类型 HyperLogLogs]()

```java
redisTemplate.opsForHyperLogLog();
```

**对geospatial (地理位置)类型的操作**?

相关内容请[参考: Redis特殊数据类型 geospatial]()

```java
redisTemplate.opsForGeo();
```

**对于BitMap的操作**？也是在opsForValue()方法返回类型ValueOperations中

相关内容请[参考: Redis特殊数据类型 BitMap]()

```java
Boolean setBit(K key, long offset, boolean value);
Boolean getBit(K key, long offset);
```

**对于Stream的操作**？

相关内容请[参考: Redis Stream 详解]()

```java
redisTemplate.opsForStream();
```

### Spring中的Template和RedisTemplate

> Spring 通过模板方式（RedisTemplate）提供了对Redis的数据查询和操作功能。

**什么是模板模式**？

模板方法模式(Template pattern): 在一个方法中定义一个算法的骨架, 而将一些步骤延迟到子类中. 模板方法使得子类可以在不改变算法结构的情况下, 重新定义算法中的某些步骤。

![img](/images/pics/c3c1c0e8-3a78-4426-961f-b46dd0879dd8.png)

**Spring中有哪些模板模式的设计**？

比如：jdbcTemplate, mongodbTemplate, elasticsearchTemplate...等等

**RedisTemplate对于Redis5种基础类型的操作**？

```java
redisTemplate.opsForValue(); // 操作字符串
redisTemplate.opsForHash(); // 操作hash
redisTemplate.opsForList(); // 操作list
redisTemplate.opsForSet(); // 操作set
redisTemplate.opsForZSet(); // 操作zset
```

**对HyperLogLogs（基数统计）类型的操作**?

------

