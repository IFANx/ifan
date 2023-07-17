## AOP

https://javadoop.com/post/spring-aop-intro

AOP 要实现的是在我们原来写的代码的基础上，进行一定的包装，如在方法执行前、方法返回后、方法抛出异常后等地方进行一定的拦截处理或者叫增强处理。

AOP 的实现并不是因为 Java 提供了什么神奇的钩子，可以把方法的几个生命周期告诉我们，而是我们要实现一个代理，实际运行的实例其实是生成的代理类的实例。

- 如果你是 web 开发者，有些时候，你可能需要的是一个 **Filter 或一个 Interceptor**，而不一定是 AOP。

- Spring AOP 只能作用于 Spring 容器中的 Bean，它是使用纯粹的 Java 代码实现的，只能作用于 bean 的方法。
- Spring 提供了 AspectJ 的支持，后面我们会单独介绍怎么使用，一般来说我们用**纯的** Spring AOP 就够了。
- 很多人会对比 Spring AOP 和 AspectJ 的性能，Spring AOP 是基于代理实现的，在容器启动的时候需要生成代理实例，在方法调用上也会增加栈的深度，使得 Spring AOP 的性能不如 AspectJ 那么好。

# 一、@Pointcut

@Pointcut切点表达式非常丰富，可以将 **方法(method)、类(class)、接口(interface)、包(package)**  等作为切入点，非常灵活，常用的有@annotation、@within、execution等方式，由于篇幅原因，本文先只介绍`@annotation`方式。

## @annotation

@annotation方式是指：切入点 是指定作用于`方法上的注解`，即被Spring扫描到方法上带有该注解 就会执行切面通知。

```java
java
复制代码@Pointcut(value = "@annotation(com.tiangang.aop.MethodLog)")
public void pointCut() {

}

1234
```

案例给出的@Pointcut说明：
 **语法：@Pointcut(value = "@annotation(** `注解类名` **)")**



使用Piontcut可以在使用Before之类的时候更简短（不用每一个切面方法都写切面注解类的全限定名）

# 二、五种通知Advice

通过@Pointcut定义的切点，共有五种通知Advice方式：

| 注解           | 说明                                                 |
| -------------- | ---------------------------------------------------- |
| @Before        | 前置通知，在被切的方法执行前执行                     |
| @After         | 后置通知，在被切的方法执行后执行，比return更后       |
| @AfterRunning  | 返回通知，在被切的方法return后执行                   |
| @AfterThrowing | 异常通知，在被切的方法抛异常时执行                   |
| @Around        | 环绕通知，这是功能最强大的Advice，可以自定义执行顺序 |



## 1. @Before前置通知

**前置通知在被切的方法执行之前执行!**

```java
java
复制代码@Before("pointCut()")
public void before(JoinPoint joinPoint) throws NoSuchMethodException {
    printMethod(joinPoint, "[前置通知before]");
}

1234
```

**注解语法**： **@Before("** `切点方法名` **()")**

> 注：只有《切点方法名》是动态的，其它是**固定写法**.

**方法语法：** `public void 方法名(JoinPoint joinPoint)`

这里有个非常重要参数**JoinPoint**：连接点 。因为Spring**只支持`方法`类型**的连接点，所以在Spring中连接点指的就是被拦截到的`方法`. 里面有三个常用的方法：

- `getSignature()`获取签名：

  MethodSignature signature = (MethodSignature) joinPoint.getSignature();

  通过signature可以获取**名称** getName() 和 **参数类型** getParameterTypes()

- `getTarget()`获取目标类：
   Class<?> clazz = joinPoint.getTarget().getClass();

  如果被切的类 是 被别的切面切过的类，可以使用`AopUtils.getTargetClass`获取一个数组，再从数组中找你期望的类。

  ```ini
  ini
  复制代码import org.springframework.aop.support.AopUtils;
  Class<?>[] targets = AopUtils.getTargetClass(joinPoint.getTarget()).getInterfaces();
  
  12
  ```

- `getArgs()`获取入参值

  Object[] args = joinPoint.getArgs()

> 基于这3个方法，可以轻松打印：被切的类名、方法名、方法参数值、方法参数类型等，printMethod方法如下：

```ini
ini
复制代码private void printMethod(JoinPoint joinPoint, String name) throws NoSuchMethodException {
    MethodSignature signature = (MethodSignature) joinPoint.getSignature();
    Class<?> clazz = joinPoint.getTarget().getClass();
    Method method = clazz.getMethod(signature.getName(), signature.getParameterTypes());
    System.out.printf("[MethodLogAspect]切面 %s 打印 -> [className]:%s  ->  [methodName]:%s  ->  [methodArgs]:%s%n", name, clazz.getName(), method.getName(), Arrays.toString(joinPoint.getArgs()));
}

123456
```

调用测试类，输出结果如下：

```ini
ini
复制代码[MethodLogAspect]切面 [前置通知before] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
方法内打印: a=10  b=2 

12
```

## 2. @After后置通知

**后置通知在被切的方法执行之后执行，`无论被切方法是否异常都会执行!`**

```java
java
复制代码@After("pointCut()")
public void after(JoinPoint joinPoint) throws NoSuchMethodException {
    printMethod(joinPoint, "[后置通知after]");
}

1234
```

**注解语法**： **@After("** `切点方法名` **()")**

> 注：只有《切点方法名》是动态的，其它是**固定写法**.

**方法语法：** `public void 方法名(JoinPoint joinPoint)`

调用测试类，输出结果如下：

```ini
ini
复制代码[MethodLogAspect]切面 [前置通知after] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
方法内打印: a=10  b=2 
[MethodLogAspect]切面 [后置通知after] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]

123
```

## 3. @AfterRunning返回通知

**返回通知在被切的方法return后执行，带有返回值，`如果被切方法异常则不会执行!`**

这里多了一个参数`Object result`，注解上也多了一个参数：`returning`

```ini
ini
复制代码@AfterReturning(value = "pointCut()", returning = "result")
public void afterReturning(JoinPoint joinPoint, Object result) throws NoSuchMethodException {
    printMethod(joinPoint, "[返回通知afterReturning]");
    System.out.printf("[MethodLogAspect]切面 [返回通知afterReturning] 打印结果 -> result:%s%n", result);
}

12345
```

**注解语法**： **@AfterReturning(value = "** `切点方法名` **(), returning = "** `返回值参数名` **")**

> 注：只有《切点方法名》和 《返回值参数名》是动态的，其它是**固定写法**.

**方法语法：** `public void 方法名(JoinPoint joinPoint, Object result)`

调用测试类，输出结果如下：

```ini
ini
复制代码[MethodLogAspect]切面 [前置通知before] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
方法内打印: a=10  b=2 
[MethodLogAspect]切面 [返回通知afterReturning] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
[MethodLogAspect]切面 [返回通知afterReturning] 打印结果 -> result:5
[MethodLogAspect]切面 [后置通知after] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]

12345
```

## 4. @AfterThrowing异常通知

**异常通知只在被切方法异常时执行，否则不执行。**

这里多了一个参数`Exception e`，表示捕获所有异常，也可以设置为具体某一个异常，例如NullPointerException、RpcException等等。注解上也多了一个参数：`throwing`

```ini
ini
复制代码@AfterThrowing(value = "pointCut()", throwing = "e")
public void afterThrowing(JoinPoint joinPoint, Exception e) throws NoSuchMethodException {
    printMethod(joinPoint, "[异常通知afterThrowing]");
    System.out.printf("[MethodLogAspect]切面 [异常通知afterThrowing] 打印异常 -> Exception:%s%n", e);
}

12345
```

**注解语法**： **@AfterThrowing(value = "** `切点方法名` **(), throwing = "** `异常参数名` **")**

> 注：只有《切点方法名》和 《异常参数名》是动态的，其它是**固定写法**.

**方法语法：** `public void 方法名(JoinPoint joinPoint, Exception e)`

调用测试类，输出结果如下：

```ini
ini
复制代码[MethodLogAspect]切面 [前置通知before] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 0]
方法内打印: a=10  b=0 
[MethodLogAspect]切面 [异常通知afterThrowing] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 0]
[MethodLogAspect]切面 [异常通知afterThrowing] 打印异常 -> Exception:java.lang.ArithmeticException: / by zero
[MethodLogAspect]切面 [后置通知after] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 0]
2023-01-06 21:05:06.536 ERROR 15436 --- [nio-8080-exec-3] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is java.lang.ArithmeticException: / by zero] with root cause

123456
```

## 5. @Around环绕通知

环绕通知方法可以包含上面四种通知方法，是最全面最灵活的通知方法。

这里的参数类型和其它通知方法不同，从`JoinPoint `变为`ProceedingJoinPoint`。

```ini
ini
复制代码@Around("pointCut()")
public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
    printMethod(joinPoint, "[环绕通知around][proceed之前]");
    // 执行方法, 可以对joinPoint.proceed()加try catch处理异常
    Object result = joinPoint.proceed();
    System.out.printf("[MethodLogAspect]切面 [环绕通知around][proceed之后]打印 -> [result]:%s%n", result);
    return result;
}

12345678
```

**注解语法**： **@Around("** `切点方法名` **()")**

> 注：只有《切点方法名》是动态的，其它是**固定写法**.

**方法语法：** `public Object 方法名(ProceedingJoinPoint joinPoint) throws Throwable`

调用测试类，输出结果如下：

```ini
ini
复制代码[MethodLogAspect]切面 [环绕通知around][proceed之前] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
[MethodLogAspect]切面 [前置通知before] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
方法内打印: a=10  b=2 
[MethodLogAspect]切面 [返回通知afterReturning] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
[MethodLogAspect]切面 [返回通知afterReturning] 打印结果 -> result:5
[MethodLogAspect]切面 [后置通知after] 打印 -> [className]:com.tiangang.service.DemoService  ->  [methodName]:divide  ->  [methodArgs]:[10, 2]
[MethodLogAspect]切面 [环绕通知around][proceed之后]打印 -> [result]:5

1234567
```

------

# 总结

本文主要说明了，如何通过`@Aspect`定义一个切面类，并结合`打印Log案例`主要介绍了两大核心的用法：

- **@Pointcut**使用 **@annotation** 方式定义切入点
- **五种通知(Advice)注解用法**：@Before、@After、@AfterRunning、@AfterThrowing、@Around