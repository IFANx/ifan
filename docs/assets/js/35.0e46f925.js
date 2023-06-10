(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(t,a,e){"use strict";e.r(a);var v=e(14),n=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"netty-的概念及体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-的概念及体系结构"}},[t._v("#")]),t._v(" Netty 的概念及体系结构")]),t._v(" "),a("p",[a("strong",[t._v("异步和事件驱动")])]),t._v(" "),a("p",[t._v("Netty 是一款用于"),a("strong",[t._v("创建高性能网络应用程序的高级框架")]),t._v("- Java网络编程")]),t._v(" "),a("p",[t._v("Netty 是一款异步的事件驱动的网络应用程序框架，支持快速地开发可维护的高性能的面向协议的服务器 和客户端。")]),t._v(" "),a("ul",[a("li",[t._v("关注点分离——业务和网络逻辑解耦;")]),t._v(" "),a("li",[t._v("模块化和可复用性;")]),t._v(" "),a("li",[t._v("可测试性作为首要的要求。")])]),t._v(" "),a("p",[a("strong",[t._v("最早期的 Java API(java.net)只支持由本地系统套接字库提供的所谓的阻塞函数。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230531212954563.png",alt:"image-20230531212954563"}})]),t._v(" "),a("h2",{attrs:{id:"java-nio-non-blocked非阻塞io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-nio-non-blocked非阻塞io"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Java NIO")]),t._v("（Non-blocked非阻塞IO）")]),t._v(" "),a("p",[t._v("除了代码清单 1-1 中代码底层的阻塞系统调用之外，本地套接字库很早就提供了非阻塞调用，")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230531213456707.png",alt:"image-20230531213456707"}})]),t._v(" "),a("p",[t._v("异步和可伸缩性之间的联系又是什么呢?")]),t._v(" "),a("ul",[a("li",[t._v("非阻塞网络调用使得我们可以不必等待一个操作的完成。完全异步的 I/O 正是基于这个特性构建的，并且更进一步:异步方法会立即返回，并且在它完成时，会直接或者在稍后的某个时间点通知用户。")]),t._v(" "),a("li",[t._v("选择器使得我们能够通过较少的线程便可监视许多连接上的事件。")])]),t._v(" "),a("h2",{attrs:{id:"netty-核心组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-核心组件"}},[t._v("#")]),t._v(" Netty 核心组件")]),t._v(" "),a("p",[t._v("在本节中我将要讨论 Netty 的主要构件块:")]),t._v(" "),a("ul",[a("li",[t._v("Channel;")]),t._v(" "),a("li",[t._v("回调;")]),t._v(" "),a("li",[t._v("Future;")]),t._v(" "),a("li",[t._v("事件和 ChannelHandler。")])]),t._v(" "),a("h3",{attrs:{id:"channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" Channel")]),t._v(" "),a("p",[t._v("Channel 是 Java NIO 的一个基本构造。 它代表一个到实体(如一个硬件设备、一个文件、一个网络套接字或者一个能够执")]),t._v(" "),a("p",[t._v("行一个或者多个不同的I/O操作的程序组件)的开放连接，如读操作和写操作 1。 目前，可以把 Channel 看作是传入(入站)或者传出(出站)数据的载体。因此，它可以被打开或者被关闭，连接或者断开连接。")]),t._v(" "),a("h3",{attrs:{id:"回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调"}},[t._v("#")]),t._v(" 回调")]),t._v(" "),a("p",[t._v("一个回调其实就是一个方法，一个指向已经被提供给另外一个方法的方法的引用。这使得后 者 2可以在适当的时候调用前者。回调在广泛的编程场景中都有应用，而且也是在操作完成后通 知相关方最常见的方式之一。")]),t._v(" "),a("h3",{attrs:{id:"future"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future"}},[t._v("#")]),t._v(" Future")]),t._v(" "),a("p",[t._v("Future 提供了另一种在操作完成时通知应用程序的方式。这个对象可以看作是一个异步操 作的结果的占位符;它将在未来的某个时刻完成，并提供对其结果的访问。")]),t._v(" "),a("p",[t._v("JDK 预置了 interface java.util.concurrent.Future，但是其所提供的实现，只 允许手动检查对应的操作是否已经完成，或者一直阻塞直到它完成。这是非常繁琐的，所以 Netty 提供了它自己的实现——ChannelFuture，用于在执行异步操作的时候使用。")]),t._v(" "),a("p",[t._v("ChannelFuture提供了几种额外的方法，这些方法使得我们能够注册一个或者多个 ChannelFutureListener实例。监听器的回调方法operationComplete()，将会在对应的 操作完成时被调用 1。然后监听器可以判断该操作是成功地完成了还是出错了。如果是后者，我 们可以检索产生的Throwable。简而 言之 ，由ChannelFutureListener提供的通知机制消除 了手动检查对应的操作是否完成的必要。")]),t._v(" "),a("p",[t._v("connect()方法将会直接返回，而不会阻塞，该调用将会在后台完成。"),a("strong",[t._v("这究竟什么时候会发生 则取决于若干的因素，但这个关注点已经从代码中抽象出来了。因为线程不用阻塞以等待对应的 操作完成，所以它可以同时做其他的工作，从而更加有效地利用资源。")])]),t._v(" "),a("h3",{attrs:{id:"事件和-channelhandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件和-channelhandler"}},[t._v("#")]),t._v(" 事件和 ChannelHandler")]),t._v(" "),a("p",[t._v("Netty 异步模型的底层机制，包括 回调、Future 以及它们的结合使用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);