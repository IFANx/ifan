https://javadoop.com/post/spring-aop-source

Spring AOP 的原理很简单，就是**动态代理**，它和 AspectJ 不一样，AspectJ 是直接修改掉你的字节码。

代理模式很简单，接口 + 真实实现类 + 代理类，其中 真实实现类 和 代理类 都要实现接口，实例化的时候要使用代理类。所以，Spring AOP 需要做的是生成这么一个代理类，然后**替换掉**真实实现类来对外提供服务。

替换的过程怎么理解呢？在 Spring IOC 容器中非常容易实现，就是在 getBean(…) 的时候返回的实际上是代理类的实例，而这个代理类我们自己没写代码，它是 Spring 采用 JDK Proxy 或 CGLIB 动态生成的。

> getBean(…) 方法用于查找或实例化容器中的 bean，这也是为什么 Spring AOP 只能作用于 Spring 容器中的 bean 的原因，对于不是使用 IOC 容器管理的对象，Spring AOP 是无能为力的。





## IOC 容器管理 AOP 实例

本节介绍 Spring AOP 是怎么作用于 IOC 容器中的 bean 的。

[Spring AOP 的使用介绍](https://javadoop.com/post/spring-aop-intro) 那篇文章已经介绍过 DefaultAdvisorAutoProxyCreator 类了，它能实现自动将所有的 advisor 生效。

我们来追踪下 DefaultAdvisorAutoProxyCreator 类，看看它是怎么一步步实现的动态代理。然后在这个基础上，我们再简单追踪下 @AspectJ 配置方式下的源码实现。

首先，先看下 DefaultAdvisorAutoProxyCreator 的继承结构：