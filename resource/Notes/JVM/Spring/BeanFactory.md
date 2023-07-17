## BeanFactory 简介

https://javadoop.com/post/spring-ioc

BeanFactory，从名字上也很好理解，生产 bean 的工厂，它负责生产和管理各个 bean 实例。

初学者可别以为我之前说那么多和 BeanFactory 无关，前面说的 ApplicationContext 其实就是一个 BeanFactory。我们来看下和 BeanFactory 接口相关的主要的继承结构：

我们先来一个简单的例子来看看怎么实例化 ApplicationContext。

首先，定义一个接口：

```java
public interface MessageService {
    String getMessage();
}
```

定义接口实现类：

```java
public class MessageServiceImpl implements MessageService {

    public String getMessage() {
        return "hello world";
    }
}
```

接下来，我们在 **resources** 目录新建一个配置文件，文件名随意，通常叫 application.xml 或 application-xxx.xml 就可以了：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns="http://www.springframework.org/schema/beans"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd" default-autowire="byName">

    <bean id="messageService" class="com.javadoop.example.MessageServiceImpl"/>
</beans>
```

这样，我们就可以跑起来了：

```java
public class App {
    public static void main(String[] args) {
        // 用我们的配置文件来启动一个 ApplicationContext
        ApplicationContext context = new ClassPathXmlApplicationContext("classpath:application.xml");

        System.out.println("context 启动成功");

        // 从 context 中取出我们的 Bean，而不是用 new MessageServiceImpl() 这种方式
        MessageService messageService = context.getBean(MessageService.class);
        // 这句将输出: hello world
        System.out.println(messageService.getMessage());
    }
}
```

以上例子很简单，不过也够引出本文的主题了，就是怎么样通过配置文件来启动 Spring 的 ApplicationContext ？也就是我们今天要分析的 IOC 的核心了。ApplicationContext 启动过程中，会负责创建实例 Bean，往各个 Bean 中注入依赖等。



## 启动过程分析