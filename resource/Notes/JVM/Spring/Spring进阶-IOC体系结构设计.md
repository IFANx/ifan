# Spring进阶- Spring IOC实现原理详解之IOC体系结构设计

https://pdai.tech/md/spring/spring-x-framework-ioc-source-1.html

在设计时，首先需要考虑的是IOC容器的功能（输入和输出), 承接前面的文章，我们初步的画出IOC容器的整体功能。

![spring-framework-ioc-source-7](http://8.130.25.175:8080/img/spring-framework-ioc-source-7.png)

在此基础上，我们初步的去思考，如果作为一个IOC容器的设计者，主体上应该包含哪几个部分：

- 加载Bean的配置（比如xml配置） 
  - 比如不同类型资源的加载，解析成生成统一Bean的定义
- 根据Bean的定义加载生成Bean的实例，并放置在Bean容器中 
  - 比如Bean的依赖注入，Bean的嵌套，Bean存放（缓存）等
- 除了基础Bean外，还有常规针对企业级业务的特别Bean 
  - 比如国际化Message，事件Event等生成特殊的类结构去支撑
- 对容器中的Bean提供统一的管理和调用 
  - 比如用工厂模式管理，提供方法根据名字/类的类型等从容器中获取Bean

------

Bean 的解析过程非常复杂，功能被分的很细，因为这里需要被扩展的地方很多，必须保证有足够的灵活性，以应对可能的变化。Bean 的解析主要就是对 Spring 配置文件的解析。

BeanDefinitionHolder 这是BeanDefination的包装类，用来存储BeanDefinition，name以及aliases等



### ApplicationContext：IOC接口设计和实现

> IoC容器的接口类是ApplicationContext，很显然它必然继承BeanFactory对Bean规范（最基本的ioc容器的实现）进行定义。而ApplicationContext表示的是应用的上下文，除了对Bean的管理外，还至少应该包含了
>
> - **访问资源**： 对不同方式的Bean配置（即资源）进行加载。(实现ResourcePatternResolver接口)
> - **国际化**: 支持信息源，可以实现国际化。（实现MessageSource接口）
> - **应用事件**: 支持应用事件。(实现ApplicationEventPublisher接口)

------



#### ApplicationContext接口的实现

在考虑ApplicationContext接口的实现时，关键的点在于，不同Bean的配置方式（比如xml,groovy,annotation等）有着不同的资源加载方式，这便衍生除了众多ApplicationContext的实现类。

------





# Spring IOC实现原理详解之IOC初始化流程

https://pdai.tech/md/spring/spring-x-framework-ioc-source-2.html

我们看了IOC设计要点和设计结构；紧接着这篇，我们可以看下源码的实现了：Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的

------

### 初始化的主体流程

Spring IoC容器对Bean定义资源的载入是从refresh()函数开始的，refresh()是一个模板方法，refresh()方法的作用是：在创建IoC容器前，如果已经有容器存在，则需要把已有的容器销毁和关闭，以保证在refresh之后使用的是新建立起来的IoC容器。refresh的作用类似于对IoC容器的重启，在新建立好的容器中对容器进行初始化，对Bean定义资源进行载入。

------

#### DefaultListableBeanFactory向IoC容器注册解析后的BeanDefinition

IOC容器本质上就是一个beanDefinitionMap， 注册即将BeanDefinition put到map中

------

## 总结

现在通过上面的代码，总结一下IOC容器初始化的基本步骤：

![spring-framework-ioc-source-9](http://8.130.25.175:8080/img/spring-framework-ioc-source-9.png)

- 初始化的入口在容器实现中的 refresh()调用来完成
- 对 bean 定义载入 IOC 容器使用的方法是 loadBeanDefinition,其中的大致过程如下：
  - 通过 ResourceLoader 来完成资源文件位置的定位，DefaultResourceLoader 是默认的实现，同时上下文本身就给出了 ResourceLoader 的实现，可以从类路径，文件系统, URL 等方式来定为资源位置。如果是 XmlBeanFactory作为 IOC 容器，那么需要为它指定 bean 定义的资源，也就是说 bean 定义文件时通过抽象成 Resource 来被 IOC 容器处理的
  - 通过 BeanDefinitionReader来完成定义信息的解析和 Bean 信息的注册, 往往使用的是XmlBeanDefinitionReader 来解析 bean 的 xml 定义文件 - 实际的处理过程是委托给 BeanDefinitionParserDelegate 来完成的，从而得到 bean 的定义信息，这些信息在 Spring 中使用 BeanDefinition 对象来表示 - 这个名字可以让我们想到loadBeanDefinition,RegisterBeanDefinition 这些相关的方法 - 他们都是为处理 BeanDefinitin 服务的
  - 容器解析得到 BeanDefinition 以后，需要把它在 IOC 容器中注册，这由 IOC 实现 BeanDefinitionRegistry 接口来实现。注册过程就是在 IOC 容器内部维护的一个HashMap 来保存得到的 BeanDefinition 的过程。这个 HashMap 是 IoC 容器持有 bean 信息的场所，以后对 bean 的操作都是围绕这个HashMap 来实现的.
- 然后我们就可以通过 BeanFactory 和 ApplicationContext 来享受到 Spring IOC 的服务了,在使用 IOC 容器的时候，我们注意到除了少量粘合代码，绝大多数以正确 IoC 风格编写的应用程序代码完全不用关心如何到达工厂，因为容器将把这些对象与容器管理的其他对象钩在一起。基本的策略是把工厂放到已知的地方，最好是放在对预期使用的上下文有意义的地方，以及代码将实际需要访问工厂的地方。 Spring 本身提供了对声明式载入 web 应用程序用法的应用程序上下文,并将其存储在ServletContext 中的框架实现。





# Spring进阶- Spring IOC实现原理详解之Bean实例化(生命周期,循环依赖等)

https://pdai.tech/md/spring/spring-x-framework-ioc-source-3.html

上文，我们看了IOC设计要点和设计结构；以及Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的；**容器中存放的是Bean的定义即BeanDefinition放到beanDefinitionMap中，本质上是一个`ConcurrentHashMap<String, Object>`；并且BeanDefinition接口中包含了这个类的Class信息以及是否是单例等**。那么如何从BeanDefinition中实例化Bean对象呢，这是本文主要研究的内容？

------

本文主要研究如何从IOC容器已有的BeanDefinition信息，实例化出Bean对象；这里还会包括三块重点内容：

- BeanFactory中getBean的主体思路
- Spring如何解决循环依赖问题
- Spring中Bean的生命周期

------

![spring-framework-ioc-source-9](http://8.130.25.175:8080/img/spring-framework-ioc-source-74.png)



## BeanFactory中getBean的主体思路

> 上文中我们知道BeanFactory定义了Bean容器的规范，其中包含根据bean的名字, Class类型和参数等来得到bean实例。

```java
// 根据bean的名字和Class类型等来得到bean实例    
Object getBean(String name) throws BeansException;    
Object getBean(String name, Class requiredType) throws BeansException;    
Object getBean(String name, Object... args) throws BeansException;
<T> T getBean(Class<T> requiredType) throws BeansException;
<T> T getBean(Class<T> requiredType, Object... args) throws BeansException;
```

### [#](#初步的思考) 初步的思考

上文我们已经分析了IoC初始化的流程，最终的将Bean的定义即BeanDefinition放到beanDefinitionMap中，本质上是一个`ConcurrentHashMap<String, Object>`；并且BeanDefinition接口中包含了这个类的Class信息以及是否是单例等；

![spring-framework-ioc-source-9](http://8.130.25.175:8080/img/spring-framework-ioc-source-100.png)

这样我们初步有了实现`Object getBean(String name)`这个方法的思路：

- **从beanDefinitionMap通过beanName获得BeanDefinition**

- **从BeanDefinition中获得beanClassName**

- **通过反射初始化beanClassName的实例instance** 

  - **构造函数从BeanDefinition的getConstructorArgumentValues()方法获取**
  - **属性值从BeanDefinition的getPropertyValues()方法获取**

- **返回beanName的实例instance**

  

**通过反射初始化实例**



**由于BeanDefinition还有单例的信息，如果是无参构造函数的实例还可以放在一个缓存中，这样下次获取这个单例的实例时只需要从缓存中获取，如果获取不到再通过上述步骤获取。**单例模式只有一个类的实例，非单例模式可能有多个对象

（PS：如上只是我们初步的思路，而Spring还需要考虑各种设计上的问题，比如beanDefinition中其它定义，循环依赖等；所以我们来看下Spring是如何是如何实现的）

- 解析bean的真正name，如果bean是工厂类，name前缀会加&，需要去掉
- 无参单例先从缓存中尝试获取
- 如果bean实例还在创建中，则直接抛出异常
- 如果bean definition 存在于父的bean工厂中，委派给父Bean工厂获取
- 标记这个beanName的实例正在创建
- 确保它的依赖也被初始化
- 真正创建 
  - 单例时
  - 原型时
  - 根据bean的scope创建



## 重点：Spring如何解决循环依赖问题

> 首先我们需要说明，Spring只是解决了单例模式下属性依赖的循环问题；Spring为了解决单例的循环依赖问题，使用了三级缓存。

### [#](#spring单例模式下的属性依赖) Spring单例模式下的属性依赖

先来看下这三级缓存

```java
/** Cache of singleton objects: bean name --> bean instance */
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<String, Object>(256);
 
/** Cache of early singleton objects: bean name --> bean instance */
private final Map<String, Object> earlySingletonObjects = new HashMap<String, Object>(16);

/** Cache of singleton factories: bean name --> ObjectFactory */
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<String, ObjectFactory<?>>(16);
```

- **第一层缓存（singletonObjects）**：单例对象缓存池，已经实例化并且属性赋值，这里的对象是**成熟对象**；
- **第二层缓存（earlySingletonObjects）**：单例对象缓存池，已经实例化但尚未属性赋值，这里的对象是**半成品对象**；
- **第三层缓存（singletonFactories）**: 单例工厂的缓存

如下是获取单例中

```java
protected Object getSingleton(String beanName, boolean allowEarlyReference) {
  // Spring首先从singletonObjects（一级缓存）中尝试获取
  Object singletonObject = this.singletonObjects.get(beanName);
  // 若是获取不到而且对象在建立中，则尝试从earlySingletonObjects(二级缓存)中获取
  if (singletonObject == null && isSingletonCurrentlyInCreation(beanName)) {
    synchronized (this.singletonObjects) {
        singletonObject = this.earlySingletonObjects.get(beanName);
        if (singletonObject == null && allowEarlyReference) {
          ObjectFactory<?> singletonFactory = this.singletonFactories.get(beanName);
          if (singletonFactory != null) {
            //若是仍是获取不到而且容许从singletonFactories经过getObject获取，则经过singletonFactory.getObject()(三级缓存)获取
              singletonObject = singletonFactory.getObject();
              //若是获取到了则将singletonObject放入到earlySingletonObjects,也就是将三级缓存提高到二级缓存中
              this.earlySingletonObjects.put(beanName, singletonObject);
              this.singletonFactories.remove(beanName);
          }
        }
    }
  }
  return (singletonObject != NULL_OBJECT ? singletonObject : null);
}
```

补充一些方法和参数

- `isSingletonCurrentlyInCreation()`：判断当前单例bean是否正在建立中，也就是没有初始化完成(好比A的构造器依赖了B对象因此得先去建立B对象， 或则在A的populateBean过程当中依赖了B对象，得先去建立B对象，这时的A就是处于建立中的状态。)
- `allowEarlyReference` ：是否容许从singletonFactories中经过getObject拿到对象

分析getSingleton()的整个过程，Spring首先从一级缓存singletonObjects中获取。若是获取不到，而且对象正在建立中，就再从二级缓存earlySingletonObjects中获取。若是仍是获取不到且容许singletonFactories经过getObject()获取，就从三级缓存singletonFactory.getObject()(三级缓存)获取，若是获取到了则从三级缓存移动到了二级缓存。

从上面三级缓存的分析，咱们能够知道，Spring解决循环依赖的诀窍就在于singletonFactories这个三级cache。这个cache的类型是ObjectFactory，定义以下：

```java
public interface ObjectFactory<T> {
    T getObject() throws BeansException;
}
```

在bean建立过程当中，有两处比较重要的匿名内部类实现了该接口。一处是Spring利用其建立bean的时候，另外一处就是:

```java
addSingletonFactory(beanName, new ObjectFactory<Object>() {
   @Override   public Object getObject() throws BeansException {
      return getEarlyBeanReference(beanName, mbd, bean);
   }});
```

此处就是解决循环依赖的关键，这段代码发生在createBeanInstance以后，也就是说单例对象此时已经被建立出来的。这个对象已经被生产出来了，虽然还不完美（尚未进行初始化的第二步和第三步），可是已经能被人认出来了（根据对象引用能定位到堆中的对象），因此Spring此时将这个对象提早曝光出来让你们认识，让你们使用。

好比“A对象setter依赖B对象，B对象setter依赖A对象”，A首先完成了初始化的第一步，而且将本身提早曝光到singletonFactories中，此时进行初始化的第二步，发现本身依赖对象B，此时就尝试去get(B)，发现B尚未被create，因此走create流程，B在初始化第一步的时候发现本身依赖了对象A，因而尝试get(A)，尝试一级缓存singletonObjects(确定没有，由于A还没初始化彻底)，尝试二级缓存earlySingletonObjects（也没有），尝试三级缓存singletonFactories，因为A经过ObjectFactory将本身提早曝光了，因此B可以经过ObjectFactory.getObject拿到A对象(半成品)，B拿到A对象后顺利完成了初始化阶段一、二、三，彻底初始化以后将本身放入到一级缓存singletonObjects中。此时返回A中，A此时能拿到B的对象顺利完成本身的初始化阶段二、三，最终A也完成了初始化，进去了一级缓存singletonObjects中，并且更加幸运的是，因为B拿到了A的对象引用，因此B如今hold住的A对象完成了初始化。

**单例模式中实例是放在缓存中的，三级缓存中可以放置不完整的实例，只是一个占用位置的实例对象，可以使用缓存机制来解决循环依赖问题。多例模式没有使用缓存，即不可以用缓存来解决循环依赖问题。**

### Spring为何不能解决非单例属性之外的循环依赖？

> 通过以下几个问题，辅助我们进一步理解。

#### [#](#spring为什么不能解决构造器的循环依赖) Spring为什么不能解决构造器的循环依赖？

构造器注入形成的循环依赖： 也就是beanB需要在beanA的构造函数中完成初始化，beanA也需要在beanB的构造函数中完成初始化，这种情况的结果就是两个bean都不能完成初始化，循环依赖难以解决。

Spring解决循环依赖主要是依赖三级缓存，但是的**在调用构造方法之前还未将其放入三级缓存之中**，因此后续的依赖调用构造方法的时候并不能从三级缓存中获取到依赖的Bean，因此不能解决。

#### [#](#spring为什么不能解决prototype作用域循环依赖) Spring为什么不能解决prototype作用域循环依赖？

这种循环依赖同样无法解决，因为spring不会缓存‘prototype’作用域的bean，而spring中循环依赖的解决正是通过缓存来实现的。

#### [#](#spring为什么不能解决多例的循环依赖) Spring为什么不能解决多例的循环依赖？

多实例Bean是每次调用一次getBean都会执行一次构造方法并且给属性赋值，根本没有三级缓存，因此不能解决循环依赖。



### 那么其它循环依赖如何解决？

> 那么实际开发中，类似的依赖是如何解决？

- **生成代理对象产生的循环依赖**

这类循环依赖问题解决方法很多，主要有：

1. 使用@Lazy注解，延迟加载
2. 使用@DependsOn注解，指定加载先后关系
3. 修改文件名称，改变循环依赖类的加载顺序

- **使用@DependsOn产生的循环依赖**

这类循环依赖问题要找到@DependsOn注解循环依赖的地方，迫使它不循环依赖就可以解决问题。

- **多例循环依赖**

这类循环依赖问题可以通过把bean改成单例的解决。

- **构造器循环依赖**

这类循环依赖问题可以通过使用@Lazy注解解决。





## 重点：Spring中Bean的生命周期

> Spring 只帮我们管理**单例模式 Bean 的完整生命周期**，对于 prototype 的 bean ，Spring 在创建好交给使用者之后则不会再管理后续的生命周期。

Spring 容器可以管理 singleton 作用域 Bean 的生命周期，在此作用域下，Spring 能够精确地知道该 Bean 何时被创建，何时初始化完成，以及何时被销毁。

而对于 prototype 作用域的 Bean，Spring 只负责创建，当容器创建了 Bean 的实例后，Bean 的实例就交给客户端代码管理，Spring 容器将不再跟踪其生命周期。每次客户端请求 prototype 作用域的 Bean 时，Spring 容器都会创建一个新的实例，并且不会管那些被配置成 prototype 作用域的 Bean 的生命周期。

了解 Spring 生命周期的意义就在于，**可以利用 Bean 在其存活期间的指定时刻完成一些相关操作**。这种时刻可能有很多，但一般情况下，会在 Bean 被初始化后和被销毁前执行一些相关操作。





### [#](#spring-bean生命周期流程) Spring Bean生命周期流程

> 在 Spring 中，Bean 的生命周期是一个很复杂的执行过程，我们可以利用 Spring 提供的方法定制 Bean 的创建过程。

**Spring 容器中 Bean 的生命周期流程**

![spring-framework-ioc-source-9](http://8.130.25.175:8080/img/spring-framework-ioc-source-102.png)

- 如果 BeanFactoryPostProcessor 和 Bean 关联, 则调用postProcessBeanFactory方法.(即首**先尝试从Bean工厂中获取Bean**)

- 如果 InstantiationAwareBeanPostProcessor 和 Bean 关联，则调用postProcessBeforeInstantiation方法

- 根据配置情况调用 Bean 构造方法**实例化 Bean**。

- 利用依赖注入完成 Bean 中所有**属性值的配置注入**。

- 如果 InstantiationAwareBeanPostProcessor 和 Bean 关联，则调用postProcessAfterInstantiation方法和postProcessProperties

- 调用xxxAware接口

   (上图只是给了几个例子) 

  - 第一类Aware接口
    - 如果 Bean 实现了 BeanNameAware 接口，则 Spring 调用 Bean 的 setBeanName() 方法传入当前 Bean 的 id 值。
    - 如果 Bean 实现了 BeanClassLoaderAware 接口，则 Spring 调用 setBeanClassLoader() 方法传入classLoader的引用。
    - 如果 Bean 实现了 BeanFactoryAware 接口，则 Spring 调用 setBeanFactory() 方法传入当前工厂实例的引用。
  - 第二类Aware接口
    - 如果 Bean 实现了 EnvironmentAware 接口，则 Spring 调用 setEnvironment() 方法传入当前 Environment 实例的引用。
    - 如果 Bean 实现了 EmbeddedValueResolverAware 接口，则 Spring 调用 setEmbeddedValueResolver() 方法传入当前 StringValueResolver 实例的引用。
    - 如果 Bean 实现了 ApplicationContextAware 接口，则 Spring 调用 setApplicationContext() 方法传入当前 ApplicationContext 实例的引用。
    - ...

- 如果 BeanPostProcessor 和 Bean 关联，则 Spring 将调用该接口的预初始化方法 postProcessBeforeInitialzation() 对 Bean 进行加工操作，此处非常重要，Spring 的 AOP 就是利用它实现的。

- 如果 Bean 实现了 InitializingBean 接口，则 Spring 将调用 afterPropertiesSet() 方法。(或者有执行@PostConstruct注解的方法)

- 如果在配置文件中通过 **init-method** 属性指定了初始化方法，则调用该初始化方法。

- 如果 BeanPostProcessor 和 Bean 关联，则 Spring 将调用该接口的初始化方法 postProcessAfterInitialization()。此时，Bean 已经可以被应用系统使用了。

- 如果在 `<bean>` 中指定了该 Bean 的作用范围为 scope="singleton"，则将该 Bean 放入 Spring IoC 的缓存池中，将触发 Spring 对该 Bean 的生命周期管理；如果在 `<bean>` 中指定了该 Bean 的作用范围为 scope="prototype"，则将该 Bean 交给调用者，调用者管理该 Bean 的生命周期，Spring 不再管理该 Bean。

- 如果 Bean 实现了 DisposableBean 接口，则 Spring 会调用 destory() 方法将 Spring 中的 Bean 销毁；(或者有执行@PreDestroy注解的方法)

- 如果在配置文件中通过 **destory-method** 属性指定了 Bean 的销毁方法，则 Spring 将调用该方法对 Bean 进行销毁。

**Bean的完整生命周期经历了各种方法调用，这些方法可以划分为以下几类**：(结合上图，需要有如下顶层思维)

- **Bean自身的方法**： 这个包括了Bean本身调用的方法和通过配置文件中`<bean>`的init-method和destroy-method指定的方法
- **Bean级生命周期接口方法**： 这个包括了BeanNameAware、BeanFactoryAware、ApplicationContextAware；当然也包括InitializingBean和DiposableBean这些接口的方法（可以被@PostConstruct和@PreDestroy注解替代)
- **容器级生命周期接口方法**： 这个包括了InstantiationAwareBeanPostProcessor 和 BeanPostProcessor 这两个接口实现，一般称它们的实现类为“后处理器”。
- **工厂后处理器接口方法**： 这个包括了AspectJWeavingEnabler, ConfigurationClassPostProcessor, CustomAutowireConfigurer等等非常有用的工厂后处理器接口的方法。工厂后处理器也是容器级的。在应用上下文装配配置文件之后立即调用。

### Spring Bean生命周期案例

> 我们通过一个例子来验证上面的整个流程

定义Bean（这里是User）, 并让它实现BeanNameAware,BeanFactoryAware,ApplicationContextAware接口和InitializingBean,DisposableBean接口：

```java
package tech.pdai.springframework.entity;

import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * @author pdai
 */
@Slf4j
@ToString
public class User implements BeanFactoryAware, BeanNameAware, ApplicationContextAware,
        InitializingBean, DisposableBean {
    /**
     * user's name.
     */
    private String name;

    /**
     * user's age.
     */
    private int age;

    /**
     * bean factory.
     */
    private BeanFactory beanFactory;

    /**
     * application context.
     */
    private ApplicationContext applicationContext;

    /**
     * bean name.
     */
    private String beanName;

    public User() {
        log.info("execute User#new User()");
    }

    public void setName(String name) {
        log.info("execute User#setName({})", name);
        this.name = name;
    }

    public void setAge(int age) {
        log.info("execute User#setAge({})", age);
        this.age = age;
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        log.info("execute BeanFactoryAware#setBeanFactory");
        this.beanFactory = beanFactory;
    }

    @Override
    public void setBeanName(String s) {
        log.info("execute BeanNameAware#setBeanName");
        this.beanName = s;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        log.info("execute ApplicationContextAware#setApplicationContext");
        this.applicationContext = applicationContext;
    }

    @Override
    public void destroy() throws Exception {
        log.info("execute DisposableBean#destroy");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        log.info("execute InitializingBean#afterPropertiesSet");
    }


    public void doInit() {
        log.info("execute User#doInit");
    }

    public void doDestroy() {
        log.info("execute User#doDestroy");
    }

}
```

定义BeanFactoryPostProcessor的实现类

```java
/**
 * @author pdai
 */
@Slf4j
@Component
public class MyBeanFactoryPostProcessor implements BeanFactoryPostProcessor {

    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {
        log.info("execute BeanFactoryPostProcessor#postProcessBeanFactory");
    }
}
```

定义InstantiationAwareBeanPostProcessor的实现类

```java
/**
 * @author pdai
 */
@Slf4j
@Component
public class MyInstantiationAwareBeanPostProcessor implements InstantiationAwareBeanPostProcessor {
    @Override
    public Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {
        log.info("execute InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation for {}", beanName);
        return InstantiationAwareBeanPostProcessor.super.postProcessBeforeInstantiation(beanClass, beanName);
    }

    @Override
    public boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {
        log.info("execute InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation for {}", beanName);
        return InstantiationAwareBeanPostProcessor.super.postProcessAfterInstantiation(bean, beanName);
    }

    @Override
    public PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName) throws BeansException {
        log.info("execute InstantiationAwareBeanPostProcessor#postProcessProperties for {}", beanName);
        return InstantiationAwareBeanPostProcessor.super.postProcessProperties(pvs, bean, beanName);
    }
}
```

定义BeanPostProcessor的实现类

```java
/**
 * @author pdai
 */
@Slf4j
@Component
public class MyBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        log.info("execute BeanPostProcessor#postProcessBeforeInitialization for {}", beanName);
        return BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        log.info("execute BeanPostProcessor#postProcessAfterInitialization for {}", beanName);
        return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
    }
}
```

通过Java配置方式初始化Bean

```java
/**
 * @author pdai
 */
@Configuration
public class BeansConfig {

    @Bean(name = "user", initMethod = "doInit", destroyMethod = "doDestroy")
    public User create() {
        User user = new User();
        user.setName("pdai");
        user.setAge(18);
        return user;
    }
}
```

测试的主方法

```java
/**
 * Cglib proxy demo.
 *
 * @author pdai
 */
@Slf4j
public class App {

    /**
     * main interface.
     *
     * @param args args
     */
    public static void main(String[] args) {
        log.info("Init application context");
        // create and configure beans
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(
                "tech.pdai.springframework");

        // retrieve configured instance
        User user = (User) context.getBean("user");

        // print info from beans
        log.info(user.toString());

        log.info("Shutdown application context");
        context.registerShutdownHook();
    }
}
```

输出结果（剔除无关输出）：

```java
12:44:42.547 [main] INFO tech.pdai.springframework.App - Init application context
...
12:44:43.134 [main] INFO tech.pdai.springframework.processor.MyBeanFactoryPostProcessor - execute BeanFactoryPostProcessor#postProcessBeanFactory
...
12:44:43.216 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'user'
12:44:43.216 [main] INFO tech.pdai.springframework.processor.MyInstantiationAwareBeanPostProcessor - execute InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation for user
12:44:43.236 [main] INFO tech.pdai.springframework.entity.User - execute User#new User()
12:44:43.237 [main] INFO tech.pdai.springframework.entity.User - execute User#setName(pdai)
12:44:43.237 [main] INFO tech.pdai.springframework.entity.User - execute User#setAge(18)
12:44:43.237 [main] INFO tech.pdai.springframework.processor.MyInstantiationAwareBeanPostProcessor - execute InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation for user
12:44:43.237 [main] INFO tech.pdai.springframework.processor.MyInstantiationAwareBeanPostProcessor - execute InstantiationAwareBeanPostProcessor#postProcessProperties for user
12:44:43.242 [main] INFO tech.pdai.springframework.entity.User - execute BeanNameAware#setBeanName
12:44:43.242 [main] INFO tech.pdai.springframework.entity.User - execute BeanFactoryAware#setBeanFactory
12:44:43.242 [main] INFO tech.pdai.springframework.entity.User - execute ApplicationContextAware#setApplicationContext
12:44:43.242 [main] INFO tech.pdai.springframework.processor.MyBeanPostProcessor - execute BeanPostProcessor#postProcessBeforeInitialization for user
12:44:43.242 [main] INFO tech.pdai.springframework.entity.User - execute InitializingBean#afterPropertiesSet
12:44:43.243 [main] INFO tech.pdai.springframework.entity.User - execute User#doInit
12:44:43.243 [main] INFO tech.pdai.springframework.processor.MyBeanPostProcessor - execute BeanPostProcessor#postProcessAfterInitialization for user
12:44:43.270 [main] INFO tech.pdai.springframework.App - User(name=pdai, age=18)
12:44:43.270 [main] INFO tech.pdai.springframework.App - Shutdown application context
12:44:43.276 [SpringContextShutdownHook] INFO tech.pdai.springframework.entity.User - execute DisposableBean#destroy
12:44:43.276 [SpringContextShutdownHook] INFO tech.pdai.springframework.entity.User - execute User#doDestroy
```

由此可见Spring定义了一系列Bean生命周期的预定义操作。















