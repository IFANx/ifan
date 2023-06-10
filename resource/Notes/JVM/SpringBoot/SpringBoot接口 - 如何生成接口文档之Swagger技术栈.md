# SpringBoot接口 - 如何生成接口文档之Swagger技术栈

https://pdai.tech/md/spring/springboot/springboot-x-interface-doc.html

**SpringBoot开发Restful接口，有什么API规范吗？如何快速生成API文档呢？Swagger 是一个用于生成、描述和调用 RESTful 接口的 Web 服务。通俗的来讲，Swagger 就是将项目中所有（想要暴露的）接口展现在页面上，并且可以进行接口调用和测试的服务。本文主要介绍OpenAPI规范，以及Swagger技术栈基于OpenAPI规范的集成方案。**

------

### 什么是Swagger？

Swagger 是一个用于生成、描述和调用 RESTful 接口的 Web 服务。通俗的来讲，Swagger 就是将项目中所有（想要暴露的）接口展现在页面上，并且可以进行接口调用和测试的服务。

从上述 Swagger 定义我们不难看出 Swagger 有以下 3 个重要的作用：

- 将项目中所有的接口展现在页面上，这样后端程序员就不需要专门为前端使用者编写专门的接口文档；
- 当接口更新之后，只需要修改代码中的 Swagger 描述就可以实时生成新的接口文档了，从而规避了接口文档老旧不能使用的问题；
- 通过 Swagger 页面，我们可以直接进行接口调用，降低了项目开发阶段的调试成本。

------

### Swagger和SpringFox有啥关系？

Swagger 可以看作是一个遵循了 OpenAPI 规范的一项技术，而 springfox 则是这项技术的具体实现。 就好比 Spring 中的 IOC 和 DI 的关系 一样，前者是思想，而后者是实现。

### 