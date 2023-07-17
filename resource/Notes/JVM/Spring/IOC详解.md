**IOC 总体来说有两处地方最重要，一个是创建 Bean 容器，一个是初始化 Bean**

第一步是根据XML等信息，解析XML中的bean，生成BeanDifintion，并将BeanName和BeanDifintion注册到一个beanDefinitionMap中。

先初始化或实例化所有的单例模式bean（初始化或预初始化代表这个阶段）



**populateBean**:bean 属性注入

```java
到这步的时候，bean 实例化完成（通过工厂方法或构造方法），但是还没开始属性设值.
  通过名字找到所有属性值，如果是 bean 依赖，先初始化依赖的 bean。记录依赖关系
```



##### initializeBean

属性注入完成后，这一步其实就是处理各种回调





### 配置是否允许 Bean 覆盖、是否允许循环依赖

我们说过，默认情况下，allowBeanDefinitionOverriding 属性为 null。如果在同一配置文件中 Bean id 或 name 重复了，会抛错，但是如果不是同一配置文件中，会发生覆盖。

可是有些时候我们希望在系统启动的过程中就严格杜绝发生 Bean 覆盖，因为万一出现这种情况，会增加我们排查问题的成本。

循环依赖说的是 A 依赖 B，而 B 又依赖 A。或者是 A 依赖 B，B 依赖 C，而 C 却依赖 A。默认 allowCircularReferences 也是 null。

它们两个属性是一起出现的，必然可以在同一个地方一起进行配置。

添加这两个属性的作者 Juergen Hoeller 在这个 [jira](https://jira.spring.io/browse/SPR-4374) 的讨论中说明了怎么配置这两个属性。





