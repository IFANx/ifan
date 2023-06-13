# SpringBoot集成Redis - 基于RedisTemplate+Lettuce数据操作

在SpringBoot 2.x版本中Redis默认客户端是Lettuce，本文主要介绍SpringBoot 和默认的Lettuce的整合案例。

### 什么是Lettuce?

> Lettuce 是一个可伸缩线程安全的 Redis 客户端。多个线程可以共享同一个 RedisConnection。它利用优秀 netty NIO 框架来高效地管理多个连接。[Github官网在新窗口打开](https://github.com/lettuce-io/lettuce-core)

Lettuce的特性：

- 支持 同步、异步、响应式 的方式
- 支持 Redis Sentinel
- 支持 Redis Cluster
- 支持 SSL 和 Unix Domain Socket 连接
- 支持 Streaming API
- 支持 CDI 和 Spring 的集成
- 支持 Command Interfaces
- 兼容 Java 8+ 以上版本

### [#](#为何springboot2-x中lettuce会成为默认的客户端) 为何SpringBoot2.x中Lettuce会成为默认的客户端？

> 除了上述特性的支持性之外，最为重要的是Lettuce中使用了Netty框架，使其具备线程共享和异步的支持性。

- **线程共享**

Jedis 是直连模式，在多个线程间共享一个 Jedis 实例时是线程不安全的，如果想要在多线程环境下使用 Jedis，需要使用连接池，每个线程都去拿自己的 Jedis 实例，当连接数量增多时，物理连接成本就较高了。

Lettuce 是基于 netty 的，连接实例可以在多个线程间共享，所以，一个多线程的应用可以使用一个连接实例，而不用担心并发线程的数量。

- **异步和反应式**

Lettuce 从一开始就按照非阻塞式 IO 进行设计，是一个纯异步客户端，对异步和反应式 API 的支持都很全面。

即使是同步命令，底层的通信过程仍然是异步模型，只是通过阻塞调用线程来模拟出同步效果而已。

------

### Lettuce的基本的API方式

依赖POM包

```xml
<dependency>
  <groupId>io.lettuce</groupId>
  <artifactId>lettuce-core</artifactId>
  <version>x.y.z.BUILD-SNAPSHOT</version>
</dependency>
```

- 基础用法

```java
RedisClient client = RedisClient.create("redis://localhost");
StatefulRedisConnection<String, String> connection = client.connect();
RedisStringCommands sync = connection.sync();
String value = sync.get("key");
```

- 异步方式

```java
StatefulRedisConnection<String, String> connection = client.connect();
RedisStringAsyncCommands<String, String> async = connection.async();
RedisFuture<String> set = async.set("key", "value")
RedisFuture<String> get = async.get("key")

async.awaitAll(set, get) == true

set.get() == "OK"
get.get() == "value"
```

- 响应式

```java
StatefulRedisConnection<String, String> connection = client.connect();
RedisStringReactiveCommands<String, String> reactive = connection.reactive();
Mono<String> set = reactive.set("key", "value");
Mono<String> get = reactive.get("key");

set.subscribe();

get.block() == "value"
```

------

