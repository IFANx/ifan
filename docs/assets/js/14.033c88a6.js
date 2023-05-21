(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{286:function(t,v,_){"use strict";_.r(v);var a=_(14),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),v("h2",{attrs:{id:"可靠数据传输原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可靠数据传输原理"}},[t._v("#")]),t._v(" 可靠数据传输原理")]),t._v(" "),v("p",[t._v("为上层实体提供的服务抽象是: 数据可以通过一条可靠的信道进行传输。借助于可靠信道，传输数据比特就不会受到损坏 (由0变为1,或者相反)或丢失，而且所有数据都是按照其发送顺序进行交付。")]),t._v(" "),v("p",[t._v("实现这种服务抽象是可靠数据传输协议(reliable data transfer protocol)的责任。由于 可靠数据传输协议的下层协议也许是不可靠的，因此这是一项困难的任务。例如，TCP是 在不可靠的(IP)端到端网络层之上实现的可靠数据传输协议。")]),t._v(" "),v("h2",{attrs:{id:"自动重传请求-automatic-repeat-request-arq-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动重传请求-automatic-repeat-request-arq-协议"}},[t._v("#")]),t._v(" 自动重传请求(Automatic Repeat reQuest, ARQ)协议")]),t._v(" "),v("p",[t._v("ARQ协议中还需要另外三种协议功能来处理存在比特差错的情况:")]),t._v(" "),v("p",[v("strong",[t._v("差错检测。首先，需要一种机制以使接收方检测到何时出现了比特差错。")])]),t._v(" "),v("p",[v("strong",[t._v("接收方反馈。因为发送方和接收方通常在不同端系统上执行，可能相隔数千英里, 发送方要了解接收方情况(此时为分组是否被正确接收)的唯一途径就是让接收 方提供明确的反馈信息给发送方。")])]),t._v(" "),v("p",[v("strong",[t._v("重传。接收方收到有差错的分组时，发送方将重传该分组文。")])]),t._v(" "),v("h2",{attrs:{id:"回退n步-go・back・n-gbn-和选择重传-selective-repeat-sr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回退n步-go・back・n-gbn-和选择重传-selective-repeat-sr"}},[t._v("#")]),t._v(" "),v("strong",[t._v("回退N步 (Go・Back・N, GBN)和选择重传(Selective Repeat, SR)")])]),t._v(" "),v("p",[t._v("在回退N步 (GBN)协议中，允许发送方发送多个分组(当有多个分组可用时)而 不需等待确认，但它也受限于在流水线中未确认的分组数不能超过某个最大允许数/V。")]),t._v(" "),v("p",[t._v("图3・19显示了发送方看到的GBN协议的序号范围。如果我们将基序号(base)定义为最早未确认分组的序号，将下一个序号(nextseqnum)定义为最小的未使用序号(即下 一个待发分组的序号)，则可将序号范围分割成4 段。在 [0, base - 1 ]段内的序号对应 于已经发送并被确认的分组。 [base, nextseqnum - 1 ]段内对应已经发送但未被确认的分 组。[nextseqnum, base +/V - 1 ]段内的序号能用于那些要被立即发送的分组，如果有数 据来自上层的话。 【后，大于或等于base + N的序号是不能使用的，直到当前流水线中未被确认的分组(特别是序号为base的分组)已得到确认为止。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513154957579.png",alt:"image-20230513154957579"}})]),t._v(" "),v("p",[t._v("随着协议的运行，该窗口的序号空间向前滑动，N常被称为窗口长度，GBN协议也常被称为"),v("strong",[t._v("滑动窗口协议")]),t._v("。")]),t._v(" "),v("p",[t._v("在实践中，一个分组的序号承载在分组首部的一个固定长度的字段中。如果分组序号 字段的比特数是仁 则该序号范围是[0, 在一个有限的序号范围内，所有涉及序")]),t._v(" "),v("p",[t._v('号的运算必须使用模2"运算。')]),t._v(" "),v("p",[t._v("GBN协议潜在地允许发送方用多个分组“填充流水线”，因此避免了停 等协议中所提到的信道利用率问题。GBN本身也有一些情况存在着性能问题。尤其 是当窗口长度和带宽时延积都很大时，在流水线中会有很多分组更是如此。单个分组的差错就能够引起GBN重传大量分组，许多分组根本没有必要重传。随着信道差错率的增加, 流水线可能会被这些不必要重传的分组所充斥。")]),t._v(" "),v("p",[v("strong",[t._v("选择重传(SR)协议通过让发送方仅重传那些它怀疑在接收方出错(即 丢失或受损)的分组而避免了不必要的重传。")])]),t._v(" "),v("p",[t._v("这种个别的、按需的重传要求接收方逐个地 确认正确接收的分组。再次用窗口长度7V来限制流水线中未完成、未被确认的分组数。然而，与GBN不同的是，发送方已经收到了对窗口中某些分组的ACK。图3・23显示了 SR 发送方看到的序号空间。图3-24详细描述了 SR发送方所采取的动作。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513160145440.png",alt:"image-20230513160145440"}})]),t._v(" "),v("p",[t._v("SR接收方将确认一个正确接收的分组而不管其是否按序。失序的分组将被缓存直到所有丢失分组(即序号更小的分组)皆被收到为止，这时才可以将一批分组按序交付给上 层。")]),t._v(" "),v("p",[v("em",[v("em",[t._v("选择重传协议中，窗口长度必须小于等于序号空间大小的一半")]),t._v("，原因在于区分是新传输的分组还是崇川的分组")]),t._v("*")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513161238706.png",alt:"image-20230513161238706"}})]),t._v(" "),v("p",[v("strong",[t._v("TCP报文字段")])]),t._v(" "),v("p",[t._v("TCP头部20字节，UDP头部8字节")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513163133652.png",alt:"image-20230513163133652"}})]),t._v(" "),v("p",[t._v("序号和确认号")]),t._v(" "),v("p",[t._v("往返时间的估计与超时：它采用超时/重传机制来处理报文段的丢失问 题。尽管这在概念上简单，但是当在如TCP这样的实际协议中实现超时/重传机制时还是会 产生许多微妙的问题。也许最明显的一个问题就是超时间隔长度的设置。显然，超时间隔必 须大于该连接的往返时间(RTT), 即从一个报文段发出到它被确认的时间。否则会造成不必要的重传。但是这个时间间隔到底应该是多大呢?刚开始时应如何估计往返时间呢?是否 应该为所有未确认的报文段各设一个定时器")]),t._v(" "),v("p",[t._v("报文段的样本RTT (表示为SampleRTT)就 是从某报文段被发出(即交给IP) 到对该报文段的确认被收到之间的时间量。大多数TCP的实现仅在某个时刻做一次SampleRTT测量，而不是为每个发送的报文段测量一个SampleRTTo 这就是说，在任意时刻，仅为一个已发送的但目前尚未被确认的报文段估计SampleRTT,从而产生一个接近每个RTT的新SampleRTT值。")]),t._v(" "),v("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEstimatedRTT = (1 - a ) • EstimatedRTT + a • SampleRTT")]),t._v(" "),v("p",[t._v("EstimatedRTT的新值是由以前的Esti- matedRTT值与SampleRTT新值加权组合而成的。")]),t._v(" "),v("p",[t._v("设置和管理重传超时间隔")]),t._v(" "),v("p",[t._v("假设已经给岀了 EstimatedRTT值和DevRTT值，那么TCP超时间隔应该用什么值呢? 很明显，超时间隔应该大于等于EstimatedR^IT,否则，将造成不必要的重传。但是超时间 隔也不应该比EstimatedRTT大太多，否则当报文段丢失时，TCP不能很快地重传该报文段，导致数据传输时延大。因此要求将超时间隔设为EstimatedRTT加上一定余量")]),t._v(" "),v("p",[v("strong",[t._v("TCP连接建立的三次握手")])]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513165604804.png",alt:"image-20230513165604804"}})]),t._v(" "),v("p",[v("strong",[t._v("TCP连接断开")])]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513165713387.png",alt:"image-20230513165713387"}})]),t._v(" "),v("p",[v("strong",[t._v("SYN洪泛攻击")])]),t._v(" "),v("p",[t._v("我们在TCP三次握手的讨论中已经看到，服务器为了响应一个收到的SYN,分配并 初始化连接变量和缓存。然后服务器发送一个SYNACK进行响应，并等待来自客户的 ACK报文段。如果某客户不发送ACK来完成该三次握手的第三步，最终(通常在一分多钟之后)服务器将终止该半开连接并回收资源。")]),t._v(" "),v("p",[t._v("这种TCP连接管理协议为经典的DoS攻击即SYN洪泛攻击(SYN flood attack)提供了环境。在这种攻击中，攻击者发送大量的TCP SYN报文段，而不完成第三次握手 的步骤。随着这种SYN报文段纷至沓来，服务器不断为这些半开连接分配资源(但从未使用)，导致服务器的连接资源被消耗殆尽。这种SYN洪泛攻击是被记载的众多DoS攻 击中的第一种[CERTSYN 1996]。")]),t._v(" "),v("p",[t._v("应对方式SYN cookie：")]),t._v(" "),v("ul",[v("li",[t._v("当服务器接收到一个SYN报文段时，它并不知道该报文段是来自一个合法的用户，还是一个SYN洪泛攻击的一部分。因此服务器不会为该报文段生成一个半 开连接。相反，服务器生成一个初始TCP序列号，该序列号是SYN报文段的源和目的IP地址与端口号以及仅有该服务器知道的秘密数的一个复杂函数(散列 函数)。这种精心制作的初始序列号被称为“cookie”。服务器则发送具有这种 特殊初始序列号的SYNACK分组。重要的是，服务器并不记忆该cookie或任何对应于SYN的其他状态信息")]),t._v(" "),v("li",[t._v("如果客户是合法的，则它将返回一个ACK报文段。当服务器收到该ACK,需要验证该ACK是与前面发送的某些SYN相对应的。如果服务器没有维护有关SYN 报文段的记忆，这是怎样完成的呢?正如你可能猜测的那样，它是借助于cookie来做到的。前面讲过对于一个合法的ACK,在确认字段中的值等于在 SYNACK字段(此时为cookie值)中的值加1 (参见图3-39)o服务器则将使用在SYNACK报文段中的源和目的地IP地址与端口号(它们与初始的SYN中的 相同)以及秘密数运行相同的散列函数。如果该函数的结果加1与在客户的 SYNACK中的确认(cookie)值相同的话，服务器认为该ACK对应于较早的SYN报文段，因此它是合法的。服务器则生成一个具有套接字的全开的连接。")]),t._v(" "),v("li",[t._v("在另一方面，如果客户没有返回一个ACK报文段，则初始的SYN并没有对服务器产生危害，因为服务器没有为它分配任何资源。")])]),t._v(" "),v("p",[v("strong",[t._v("拥塞控制方法")]),t._v("：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("端到端拥寒控制。在端到端拥塞控制方法中，网络层没有为运输层拥塞控制提供显式支持。即使网络中存在拥塞，端系统也必须通过对网络行为的观察(如分组 丢失与时延)来推断之。TCP报文段的丢失(通过超时或3 次冗余确认而得知)被认为是网络拥塞的一个迹象，TCP 会相应地减小其窗口长度")])]),t._v(" "),v("li",[v("p",[t._v("网络辅助的拥塞控制。在网络辅助的拥塞控制中，路由器向发送方提供关于网络中拥塞状态的显式反馈信息。这种反馈可以简单地用一个比特来指示链路中的拥塞情况。")]),t._v(" "),v("p",[t._v("TCP使用的为端到端的拥塞控制")])])]),t._v(" "),v("p",[t._v("第一，一个TCP发送方如何限制它向其连接发送流量的速率呢？")]),t._v(" "),v("p",[t._v("第二，一个TCP发送方如何感知从它到目的地之间的 路径上存在拥塞呢?")]),t._v(" "),v("p",[t._v("第三，当发送方感知到端到端的拥塞时，采用何种算法来改变其发送速率呢?")]),t._v(" "),v("p",[v("strong",[t._v("TCP拥塞控制算法(TCP congestion control algorithm）")])]),t._v(" "),v("p",[t._v("该算法包括3个主要部分:1慢启动;2拥塞避免; 3快速恢复。慢启动和拥塞避免是TCP的强制部分，两者的差异在于对收到的ACK做出反应时增加cwnd长度的方式。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230513171837631.png",alt:"image-20230513171837631"}})])])}),[],!1,null,null,null);v.default=e.exports}}]);