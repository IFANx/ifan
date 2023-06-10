# SpringBoot接口 - 如何统一接口封装

## RESTful API接口?

- **什么是 REST**？

Representational State Transfer，翻译是“表现层状态转化”。可以总结为一句话：**REST 是所有 Web 应用都应该遵守的架构设计指导原则**。

面向资源是 REST 最明显的特征，对于同一个资源的一组不同的操作。资源是服务器上一个可命名的抽象概念，资源是以名词为核心来组织的，首先关注的是名词。REST 要求，必须通过统一的接口来对资源执行各种操作。对于每个资源只能执行一组有限的操作。

- **什么是 RESTful API**？

**符合 REST 设计标准的 API**，即 RESTful API。REST 架构设计，遵循的各项标准和准则，就是 HTTP 协议的表现，换句话说，HTTP 协议就是属于 REST 架构的设计模式。比如，无状态，请求-响应。

------

## 为什么要统一封装接口

> 现在大多数项目采用前后分离的模式进行开发，统一返回方便前端进行开发和封装，以及出现时给出响应编码和信息。

以查询某个用户接口而言，如果没有封装, 返回结果如下

```json
{
  "userId": 1,
  "userName": "赵一"
}
```

如果封装了，返回正常的结果如下：

```json
{
  "timestamp": 11111111111,
  "status": 200,
  "message": "success",
  "data": {
    "userId": 1,
    "userName": "赵一"
  }
}
```

异常返回结果如下：

```json
{
  "timestamp": 11111111111,
  "status": 10001,
  "message": "User not exist",
  "data": null
}
```

------



# 参数进行校验

## 什么是不优雅的参数校验

后端对前端传过来的参数也是需要进行校验的，如果在controller中直接校验需要用大量的if else做判断

以添加用户的接口为例，需要对前端传过来的参数进行校验， 如下的校验就是不优雅的：

```java
@RestController
@RequestMapping("/user")
public class UserController {

    @PostMapping("add")
    public ResponseEntity<String> add(User user) {
        if(user.getName()==null) {
            return ResponseResult.fail("user name should not be empty");
        } else if(user.getName().length()<5 || user.getName().length()>50){
            return ResponseResult.fail("user name length should between 5-50");
        }
        if(user.getAge()< 1 || user.getAge()> 150) {
            return ResponseResult.fail("invalid age");
        }
        // ...
        return ResponseEntity.ok("success");
    }
}
```

针对这个普遍的问题，Java开发者在Java API规范 (JSR303) 定义了Bean校验的标准**validation-api**，但没有提供实现。

**hibernate validation是对这个规范的实现**，并增加了校验注解如@Email、@Length等。

**Spring Validation是对hibernate validation的二次封装**，用于支持spring mvc参数自动校验。

接下来，我们以springboot项目为例，介绍Spring Validation的使用。

## 实现案例

> 本例子采用 spring validation 对参数绑定进行校验，主要给你提供参数校验的思路。针对接口统一的错误信息（比如绑定参数检查的错误）封装请看[SpringBoot接口 - 如何统一异常处理]()。

