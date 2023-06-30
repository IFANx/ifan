## WebSocket

https://appmaster.io/zh/blog/shi-yao-shi-websocketsyi-ji-ru-he-chuang-jian-ta-men

https://www.zhihu.com/question/20215561

https://juejin.cn/post/6844903968766853127  这个代码可用

各种协议被用来从客户端向服务器传输数据，反之亦然。它们的规则在相关标准中有所描述。在这篇文章中，我们将讨论一种数据传输协议--WebSocket。

## 什么是WebSocket协议？

WebSocket是一种先进的技术，用于在客户端和服务器（浏览器和服务器）之间建立连接，并使它们之间能够实时通信。WebSocket的主要区别在于，它允许你接收数据，而不必像HTTP中那样单独发送请求。连接建立后，数据会自己来，而不需要发送请求。这是在聊天或股票报告中使用WebSocket协议的优势，因为你需要接收不断更新的信息。该协议可以同时接收和发送信息，允许全双工双向通信，从而实现更快的信息交换。

### WebSockets是如何工作的？

客户端和服务器之间的连接保持开放，直到它被其中一方终止或被超时关闭。它们执行握手以在客户端和服务器之间建立连接。已建立的连接保持开放，并使用同一通道进行通信，直到连接在客户端或服务器端终止。消息是双向交换的。WebSocket允许你对传输的数据进行加密。为此，在WSS协议上使用了一个插件，它在发送方一侧对数据进行编码，在接收方一侧对数据进行解码。对于任何中间人，信息仍然是加密的。没有加密，数据就会成为威胁的目标。

### 何时使用WebSocket？

当您需要实时数据更新和向客户端发送消息的能力时，WebSocket协议是理想的选择。以下是网络套接字的一些更广泛的用例：

- 交换平台；
- 游戏应用；
- 聊天机器人；
- 推送通知；
- 社交网络；
- 聊天应用；
- IoT应用。

## 为什么考虑使用WebSocket协议？

WebSocket通过在服务器和客户端之间提供连接来提供实时更新。Web套接字与HTML5兼容，并提供对旧版HTML的后向兼容性。因此，它们受到所有现代网络浏览器的支持--Google Chrome、Mozilla Firefox、Safari和其他。它也是跨平台兼容的。安卓、iOS、网络应用和桌面应用。





作者：Ovear
链接：https://www.zhihu.com/question/20215561/answer/40316953
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



**二、Websocket是什么样的协议，具体有什么优点**

首先，Websocket是一个**持久化**的协议，相对于HTTP这种**非持久**的协议来说。

简单的举个例子吧，用目前应用比较广泛的PHP生命周期来解释。

\1) HTTP的生命周期通过Request来界定，也就是一个Request 一个Response，那么**在**HTTP1.0**中**，这次HTTP请求就结束了。

在HTTP1.1中进行了改进，使得有一个keep-alive，也就是说，在一个HTTP连接中，可以发送多个Request，接收多个Response。

但是请记住 Request = Response ， 在HTTP中永远是这样，也就是说一个request只能有一个response。而且这个[response](https://www.zhihu.com/search?q=response&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A40316953})也是**被动**的，不能主动发起。

**教练，你BB了这么多，跟Websocket有什么关系呢？**

_(:з」∠)_好吧，我正准备说Websocket呢。。

首先Websocket是基于HTTP协议的，或者说**借用**了HTTP的协议来完成一部分握手。

在握手阶段是一样的

-------以下涉及专业技术内容，不想看的可以跳过lol:，或者只看加黑内容--------

首先我们来看个典型的Websocket握手（借用Wikipedia的。。）

```text
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

熟悉HTTP的童鞋可能发现了，这段类似HTTP协议的握手请求中，多了几个东西。

我会顺便讲解下作用。

```text
Upgrade: websocket
Connection: Upgrade
```

这个就是Websocket的核心了，告诉Apache、Nginx等服务器：**注意啦，窝发起的是Websocket协议，快点帮我找到对应的助理处理~不是那个老土的HTTP。**

```text
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

首先，Sec-WebSocket-Key 是一个Base64 encode的值，这个是浏览器随机生成的，告诉服务器：**泥煤，不要忽悠窝，我要验证尼是不是真的是Websocket助理。**

然后，Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同URL下，不同的服务所需要的协议。简单理解：**今晚我要服务A，别搞错啦~**

最后，Sec-WebSocket-Version 是告诉服务器所使用的Websocket Draft（协议版本），在最初的时候，Websocket协议还在 Draft 阶段，各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么Firefox和Chrome用的不是一个版本之类的，当初Websocket协议太多可是一个大难题。。不过现在还好，已经定下来啦~大家都使用的一个东西~ 脱水：**服务员，我要的是13岁的噢→_→**

然后服务器会返回下列东西，表示已经接受到请求， 成功建立Websocket啦！

```text
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

这里开始就是HTTP最后负责的区域了，告诉客户，我已经成功切换协议啦~

```text
Upgrade: websocket
Connection: Upgrade
```

依然是固定的，告诉客户端即将升级的是Websocket协议，而不是mozillasocket，lurnarsocket或者[shitsocket](https://www.zhihu.com/search?q=shitsocket&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A40316953})。

然后，Sec-WebSocket-Accept 这个则是经过服务器确认，并且加密过后的 Sec-WebSocket-Key。服务器：**好啦好啦，知道啦，给你看我的ID CARD来证明行了吧。。**

后面的，Sec-WebSocket-Protocol 则是表示最终使用的协议。

至此，HTTP已经完成它所有工作了，接下来就是完全按照Websocket协议进行了。

具体的协议就不在这阐述了。





## 什么是WebSocket?

WebSocket 协议是基于 TCP 的一种新的网络协议。它实现了浏览器与服务器全双工 (full-duplex) 通信—允许服务器主动发送信息给客户端。



![socket1](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/17/16dd8d0e7fb9979a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



## 为什么需要WebSocket?

大家都知道以前客户端想知道服务端的处理进度，要不停地使用 Ajax 进行轮询，让浏览器隔个几秒就向服务器发一次请求，这对服务器压力较大。另外一种轮询就是采用 long poll 的方式，这就跟打电话差不多，没收到消息就一直不挂电话，也就是说，客户端发起连接后，如果没消息，就一直不返回 response 给客户端，连接阶段一直是阻塞的。

而 WebSocket 解决了 HTTP 的这几个难题。当服务器完成协议升级后（ HTTP -> WebSocket ），服务端可以主动推送信息给客户端，解决了轮询造成的同步延迟问题。由于 WebSocket 只需要一次 HTTP 握手，服务端就能一直与客户端保持通信，直到关闭连接，这样就解决了服务器需要反复解析 HTTP 协议，减少了资源的开销。



![websockets](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/17/16dd8d1183bc66ac~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



现在通过 SpringBoot 集成 WebSocket 来实现前后端通信。

## 