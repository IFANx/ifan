# SpringBoot接口 - 如何对接口进行签名

https://pdai.tech/md/spring/springboot/springboot-x-interface-jiami.html

> 在以SpringBoot开发后台API接口时，会存在哪些接口不安全的因素呢？通常如何去解决的呢？本文主要介绍API**接口有不安全的因素**以及**常见的保证接口安全的方式**，重点**实践如何对接口进行签名**。

### API接口有哪些不安全的因素？

> 这里从体系角度，简单列举一些不安全的因素：

- 开发者访问开放接口
  - 是不是一个合法的开发者？
- 多客户端访问接口
  - 是不是一个合法的客户端？
- 用户访问接口
  - 是不是一个合法的用户?
  - 有没有权限访问接口？
- 接口传输
  - http明文传输数据？
- 其它方面
  - 接口重放，上文介绍的[接口幂等]()
  - 接口超时，加timestamp控制？
  - ...

## [#](#常见的保证接口安全的方式) 常见的保证接口安全的方式？

> 针对上述接口存在的不安全因素，这里向你展示一些典型的保障接口安全的方式。

### [#](#accesskey-secretkey) AccessKey&SecretKey

> 这种设计一般用在开发接口的安全，以确保是一个**合法的开发者**。

- AccessKey： 开发者唯一标识
- SecretKey: 开发者密钥

以阿里云相关产品为例

![img](/Users/kkxu/NodeProjects/ifan/ifan/images/springboot-api-sign-1.png)

### [#](#认证和授权) 认证和授权

> 从两个视角去看
>
> - 第一: **认证和授权**，认证是访问者的合法性，授权是访问者的权限分级；
> - 第二: 其中认证包括**对客户端的认证**以及**对用户的认证**；

- **对于客户端的认证**

典型的是AppKey&AppSecret，或者ClientId&ClientSecret等

比如oauth2协议的client cridential模式

```bash
https://api.xxxx.com/token?grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET
```

grant_type参数等于client_credentials表示client credentials方式，client_id是客户端id，client_secret是客户端密钥。

返回token后，通过token访问其它接口。

- **对于用户的认证和授权**

比如oauth2协议的授权码模式(authorization code)和密码模式(resource owner password credentials)

```bash
https://api.xxxx.com/token?grant_type=password&username=USERNAME&password=PASSWORD&client_id=CLIENT_ID&scope=read
```

grant_type参数等于password表示密码方式，client_id是客户端id，username是用户名，password是密码。

(PS：password模式只有在授权码模式(authorization code)不可用时才会采用，这里只是举个例子而已)

可选参数scope表示申请的权限范围。（相关开发框架可以参考spring security, Apache Shiro，[SA-Token在新窗口打开](https://sa-token.dev33.cn/doc/index.html)等）

### [#](#https) https

> 从接口传输安全的角度，防止接口数据明文传输， 具体可以看[这里]()

HTTP 有以下安全性问题:

- 使用明文进行通信，内容可能会被窃听；
- 不验证通信方的身份，通信方的身份有可能遭遇伪装；
- 无法证明报文的完整性，报文有可能遭篡改。

HTTPs 并不是新协议，而是让 HTTP 先和 SSL(Secure Sockets Layer)通信，再由 SSL 和 TCP 通信，也就是说 HTTPs 使用了隧道进行通信。

通过使用 SSL，HTTPs 具有了加密(防窃听)、认证(防伪装)和完整性保护(防篡改)。

![img](/images/pics/ssl-offloading.jpg)

### [#](#接口签名-加密) 接口签名（加密）

> 接口签名（加密），主要防止请求参数被篡改。特别是安全要求比较高的接口，比如支付领域的接口。

- **签名的主要流程**

首先我们需要分配给客户端一个私钥用于URL签名加密，一般的签名算法如下：

1、首先对请求参数按key进行字母排序放入有序集合中（其它参数请参看后续补充部分）；

2、对排序完的数组键值对用&进行连接，形成用于加密的参数字符串；

3、在加密的参数字符串前面或者后面加上私钥，然后用加密算法进行加密，得到sign，然后随着请求接口一起传给服务器。

例如： https://api.xxxx.com/token?key=value&timetamp=xxxx&sign=xxxx-xxx-xxx-xxxx

服务器端接收到请求后，用同样的算法获得服务器的sign，对比客户端的sign是否一致，如果一致请求有效；如果不一致返回指定的错误信息。

- **补充：对什么签名？**

1. 主要包括请求参数，这是最主要的部分，**签名的目的要防止参数被篡改，就要对可能被篡改的参数签名**；
2. 同时考虑到请求参数的来源可能是请求路径path中，请求header中，请求body中。
3. 如果对客户端分配了AppKey&AppSecret，也可加入签名计算；
4. 考虑到其它幂等，token失效等，也会将涉及的参数一并加入签名，比如timestamp，流水号nonce等（这些参数可能来源于header）

- **补充: 签名算法？**

一般涉及这块，主要包含三点：密钥，签名算法，签名规则

1. **密钥secret**： 前后端约定的secret，这里要注意前端可能无法妥善保存好secret，比如SPA单页应用；
2. **签名算法**：也不一定要是对称加密算法，对称是反过来解析sign，这里是用同样的算法和规则计算出sign，并对比前端传过来的sign是否一致。
3. **签名规则**：比如多次加盐加密等；

> PS：有读者会问，我们是可能从有些客户端获取密钥，算法和规则的（比如前端SPA单页应用生成的js中获取密钥，算法和规则），那么签名的意义在哪里？我认为签名是手段而不是目的，签名是加大攻击者攻击难度的一种手段，至少是可以抵挡大部分简单的攻击的，再加上其它防范方式（流水号，时间戳，token等)进一步提升攻击的难度而已。

- **补充：签名和加密是不是一回事？**

严格来说不是一回事：

1. **签名**是通过对参数按照指定的算法、规则计算出sign，最后前后端通过同样的算法计算出sign是否一致来防止参数篡改的，所以你可以看到参数是明文的，只是多加了一个计算出的sign。
2. **加密**是对请求的参数加密，后端进行解密；同时有些情况下，也会对返回的response进行加密，前端进行解密；这里存在加密和解密的过程，所以思路上必然是对称加密的形式+时间戳接口时效性等。

- **补充：签名放在哪里？**

签名可以放在请求参数中（path中，body中等），更为优雅的可以放在HEADER中，比如X-Sign（通常第三方的header参数以X-开头）

- **补充：大厂开放平台是怎么做的呢？哪些可以借鉴？**

以腾讯开放平台为例，请参考[腾讯开放平台第三方应用签名参数sig的说明在新窗口打开](https://wiki.open.qq.com/wiki/腾讯开放平台第三方应用签名参数sig的说明)

## 