(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{297:function(t,a,v){"use strict";v.r(a);var s=v(14),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网络层协议-数据平面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络层协议-数据平面"}},[t._v("#")]),t._v(" 网络层协议-数据平面")]),t._v(" "),a("h2",{attrs:{id:"转发和路由选择-数据平面和控制平面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转发和路由选择-数据平面和控制平面"}},[t._v("#")]),t._v(" 转发和路由选择：数据平面和控制平面")]),t._v(" "),a("p",[a("strong",[t._v("转发和路由")])]),t._v(" "),a("p",[t._v("转发：是指将分组从一个输入链路接口转移到 适当的输出链路接口的路由器本地动作。转发发生的时间尺度很短(通常为几纳秒)，因 此通常用硬件来实现。")]),t._v(" "),a("p",[t._v("路由选择(routing)：是指确定分组从源到目的地所采取的端到端路 径的网络范围处理过程。路由选择发生的时间尺度长得多(通常为几秒)，因此通常用软 件来实现。")]),t._v(" "),a("h2",{attrs:{id:"路由器工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由器工作原理"}},[t._v("#")]),t._v(" 路由器工作原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521145900179.png",alt:"image-20230521145900179"}})]),t._v(" "),a("p",[t._v("输入端口。输入端口(input port)执行几项重要功能。它在路由器中执行终结入物 理链路的物理层功能，这显示在图4・4 中输入端口部分最左侧的方框与输出端口部 分最右侧的方框中。")]),t._v(" "),a("p",[t._v("交换结构。交换结构将路由器的输入端口连接到它的输岀端口。这种交换结构完全包含在路由器之中，即它是一个网络路由器中的网络!")]),t._v(" "),a("p",[t._v("输出端口。输出端口存储从交换结构接收的分组，并通过执行必要的链路层和物理层功能在输出链路上传输这些分组。当一条链路是双向的时(即承载两个方向的流量)，输出端口通常与该链路的输入端口成对出现在同一线路卡上。")]),t._v(" "),a("p",[t._v("路由选择处理器。路由选择处理器执行控制平面功能。在传统的路由器中，它执行路由选择协议(我们将在5. 3节和5. 4节学习)，维护路由选择表与关联链路状态 信息，并为该路由器计算转发表。")]),t._v(" "),a("h2",{attrs:{id:"路由器转发策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由器转发策略"}},[t._v("#")]),t._v(" 路由器转发策略")]),t._v(" "),a("p",[a("strong",[t._v("基于目的地的转发")])]),t._v(" "),a("p",[t._v("输入端口处理和基于目的地转发：转发表是由路由选择处理 器计算和更新的(使用路由选择协议与其他网络路由器中的路由选择处理器进行交 互)，或者转发表接收来自远程SDN控制器的内容。")]),t._v(" "),a("p",[a("strong",[t._v("最长前缀匹配规则")]),t._v(" ：IP地址前缀匹配：通过匹配IP地址前缀，选择对应的转发端口")]),t._v(" "),a("p",[a("strong",[t._v("通用转发")])]),t._v(" "),a("h2",{attrs:{id:"路由器交换策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由器交换策略"}},[t._v("#")]),t._v(" 路由器交换策略")]),t._v(" "),a("p",[t._v("交换结构位于一台路由器的核心部位, 因为正是通过这种交换结构, 分组才能实际地 从一个输入端口交换(即转发)到一个输出端口中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521151005805.png",alt:"image-20230521151005805"}})]),t._v(" "),a("ol",[a("li",[t._v("经内存交换。最简单、最早的路由器是传统的计算机，在输入端口与输出端口之 间的交换是在CPU (路由选择处理器)的直接控制下完成的。")]),t._v(" "),a("li",[t._v("经总线交换。在这种方法中，输入端口经一根共享总线将分组直接传送到输出端口，不需要路由选择处理器的干预。")]),t._v(" "),a("li",[t._v("经互联网络交换。克服单一、共享式总线带宽限制的一种方法是，使用一个更复杂的互联网络，例如过去在多处理器计算机体系结构中用来互联多个处理器的网 络。纵横式交换机就是一种由2/V条总线组成的互联网络，它连接/V个输入端口 与N个输岀端口，如图4・6所示。每条垂直的总线在交叉点与每条水平的总线交叉, 交叉点通过交换结构控制器(其逻辑是交换结构自身的一部分)能够在任何 时候开启和闭合。当某分组到达端口A,需要转发到端口Y时，交换机控制器闭 合总线A和Y交叉部位的交叉点，然后端口 A在其总线上发送该分组，该分组仅由总线Y接收。注意到来自端口B的一个分组在同一时间能够转发到端口X,因 为 A 到 Y 和 B 到 X 的分组使用不同的输入和输岀总线。")])]),t._v(" "),a("p",[t._v("因为随着这些队列的增长，路由器的缓存空间最终将会耗尽，并且当无内存可用于存储到达的分组时将会出现"),a("strong",[t._v("丢包(packet loss)")])]),t._v(" "),a("p",[a("strong",[t._v("头部阻塞HOL问题")]),t._v("：一个例子，其中在输入队列前端的两个分组(带深色阴影)要发往同一个右上角输出端口。假定该交换结构决 定发送左上角队列前端的分组。在这种 情况下，左下角队列中的深色阴影分组 必须等待。但不仅该分组要等待，左下角队列中排在该分组后面的浅色阴影分 组也要等待，即使右中侧输出端口(浅 色阴影分组的目的地)中无竞争。这种 现象叫作输入排队交换机中的线路前部 (Head-Of-the-Line, HOL)阻塞，即在一 个输入队列中排队的分组必须等待通过交换结构发送(即使输出端口是空闲 的)，因为它被位于线路前部的另一个分 组所阻塞。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521152219627.png",alt:"image-20230521152219627"}})]),t._v(" "),a("h2",{attrs:{id:"网际协议ipv4-ipv6及寻址等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网际协议ipv4-ipv6及寻址等"}},[t._v("#")]),t._v(" 网际协议IPv4，IPv6及寻址等")]),t._v(" "),a("h3",{attrs:{id:"ipv4数据报格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipv4数据报格式"}},[t._v("#")]),t._v(" IPv4数据报格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521152842179.png",alt:"image-20230521152842179"}})]),t._v(" "),a("p",[t._v("注意到一个IP数据报有总长为20字节的首部(假设无选项)。如果数据报承载一个TCP报文段，则每个(无分片的)数据报共承载了总长40字节的首部(20字节的IP首 部加上20字节的TCP首部)以及应用层报文。")]),t._v(" "),a("p",[a("strong",[t._v("MTU最大传输单元")]),t._v("：一个链路层帧能 承载的最大数据量叫作最大传送单元(Maximum Transmission Unit, MTU) 。")]),t._v(" "),a("p",[t._v("IP数据包长度大于MTU时需要分片，IPv4的设计者将标识、标志和片偏移字段放在IP数据报 首部中。当生成一个数据报时，发送主机在为该数据报设置源和目的地址的同时贴上标识号。发送主机通常将它发送的每个数据报的标识号加1。当某路由器需要对一个数据报分 片时，形成的每个数据报(即片)具有初始数据报的源地址、目的地址与标识号。当目的 地从同一发送主机收到一系列数据报时，它能够检查数据报的标识号以确定哪些数据报实 际上是同一较大数据报的片。由于IP是一种不可靠的服务，一个或多个片可能永远到达 不了目的地。因为这种原因，为了让目的主机绝对地相信它已收到了初始数据报的最后一 个片，最后一个片的标志比特被设为0,而所有其他片的标志比特被设为1。另外，为了 让目的主机确定是否丢失了一个片(且能按正确的顺序重新组装片)，使用偏移字段指定该片应放在初始IP数据报的哪个位置。")]),t._v(" "),a("h3",{attrs:{id:"子网、子网掩码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子网、子网掩码"}},[t._v("#")]),t._v(" 子网、子网掩码")]),t._v(" "),a("p",[t._v("对于一个路由器和主机的通用互联系统，我们能够使用下列有效方法定义系统中的子网:")]),t._v(" "),a("p",[t._v("为了确定子网，分开主机和路由器的每个接口，产生几个隔离的网络岛，使 用接口端接这些隔离的网络的端点。这些隔离的网络中的每一个都叫作一个子网")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521153722210.png",alt:"image-20230521153722210"}})]),t._v(" "),a("p",[t._v("因特网的地址分配策略被称为"),a("strong",[t._v("无类别域间路由选择(Classless Inlerdomain Routing, :CIDR)")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("网络前缀表示子网号")])]),t._v(" "),a("h3",{attrs:{id:"路由聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由聚合"}},[t._v("#")]),t._v(" 路由聚合")]),t._v(" "),a("p",[t._v("该ISP (我们称之为Fly- By­Night-ISP) 向外界通告，它应该发送所有地址的前20比特与200. 23. 16. 0/20相符的数据报。外界的其他部分不需要知道在地址块200. 23. 16. 0/20内实际上还存在8个其他 组织，其中每个组织有自己的子网°这种使用单个网络前缀通告多个网络的能力通常称为地址聚合(address aggregation),也称为路由聚合(route aggregation)或路由摘要 (route summarization)。层次路由需要选择"),a("strong",[t._v("最长前缀匹配规则")]),t._v("来进行子网选择。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521154046295.png",alt:"image-20230521154046295"}})]),t._v(" "),a("h3",{attrs:{id:"分类编址-a-b-c-d-四类网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类编址-a-b-c-d-四类网络"}},[t._v("#")]),t._v(" 分类编址（A，B，C, D）四类网络")]),t._v(" "),a("p",[t._v("在CIDR被采用之前，IP地址的网络部分被限制为长度为8、16或24比特，这是一种 称为分类编址(classful addressing)的编址方案，这是因为具有8、16和24比特子网地址 的子网分别被称为A、B和C类网络。")]),t._v(" "),a("p",[a("strong",[t._v("特殊IP地址")]),t._v("：广播地址：255.255.255.255")]),t._v(" "),a("p",[a("strong",[t._v("DHCP协议（动态主机配置协议）")]),t._v("（C-S协议）DHCP服务器")]),t._v(" "),a("p",[t._v("某组织一旦获得了一块地址，它就可为本组织内的主机与路由器接口逐个分配IP地 址。系统管理员通常手工配置路由器中的【P地址(常常在远程通过网络管理工具进行配置)。主机地址也能手动配置，但是这项任务目前更多的是使用动态主机配置协议(Dy・ namic Host Configuration, DHCP) [RFC 2131]来完成。DHCP 允许主机自动获取(被分配)一个IP地址。网络管理员能够配置DHCP,以使某给定主机每次与网络连接时能得到 一个相同的IP地址，或者某主机将被分配一个临时的IP地址(tempomry IP address),每 次与网络连接时该地址也许是不同的。除了主机IP地址分配外，DHCP还允许一台主机得 知其他信息，例如它的子网掩码、它的第一跳路由器地址(常称为默认网关)与它的本地 DNS服务器的地址。")]),t._v(" "),a("p",[a("strong",[t._v("客户机通过DHCP协议获取动态IP的四个步骤")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("DHCP服务器发现")]),t._v("。一台新到达的主机的首要任务是发现一个要与其交互的DHCP服务器。这可通过使用DHCP发现报文(DHCP discover message)来完成，客户在 UDP分组中向端口 67发送该发现报文。广播地址255.255.255.255")]),t._v(" "),a("li",[t._v("DHCP服务器提供。DHCP服务器收到一个DHCP发现报文时，用 DHCP提供报 文(DHCP offer message)向客户做出响应，该报文向该子网的所有节点广播，仍 然使用IP广播地址255. 255. 255. 255 (你也许要思考一下这个服务器为何也必须 采用广播)。因为在子网中可能存在几个DHCP服务器，该客户也许会发现它处于能在几个提供者之间进行选择的优越位置。每台服务器提供的报文包含有收到的 发现报文的事务ID、向客户推荐的IP地址、网络掩码以及IP地址租用期(ad­ dress lease time) , 即IP地址有效的时间量。服务器租用期通常设置为几小时或几 天 [Droms 2002 ] 。")]),t._v(" "),a("li",[t._v("DHCP请求。新到达的客户从一个或多个服务器提供中选择一个，并向选中的服 务器提供用DHCP请求报文(DHCP request mess昭e)进行响应，回显配置的 参数。")]),t._v(" "),a("li",[t._v("DHCP ACKO 服务器用 DHCP ACK 报文(DHCP ACK message)寸DHCP 请求报文 进行响应，证实所要求的参数。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521154829669.png",alt:"image-20230521154829669"}})]),t._v(" "),a("h3",{attrs:{id:"网络地址转换nat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络地址转换nat"}},[t._v("#")]),t._v(" 网络地址转换NAT")]),t._v(" "),a("p",[a("strong",[t._v("私有地址与公有地址（全球可接入IP）之间的相互转换")]),t._v("（使用NAT地址转换表）广域网IP：port == 局域网 IP：port")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521155356604.png",alt:"image-20230521155356604"}})]),t._v(" "),a("h3",{attrs:{id:"ipv6数据报格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipv6数据报格式"}},[t._v("#")]),t._v(" "),a("strong",[t._v("IPv6数据报格式")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230521155905932.png",alt:"image-20230521155905932"}})]),t._v(" "),a("p",[t._v("扩大的地址容量。IPv6将 IP地址长度从32比特增加到128比特。这就确保32比特 版本流量类型 流标签目的地址(128比特) 全世界将不会用尽IP地址。")]),t._v(" "),a("p",[a("strong",[t._v("IPV6相对于IPV4，中间路由器不在具有分片的性质")])]),t._v(" "),a("p",[t._v("IPv6不允许在中间路由器上进行分片与重新组装。这种操作只能在源与目的地执行。如果路由器收到的IPv6数据报因太大而不能转发到出链路上 的话，则路由器只需丢掉该数据报，并向发送方发回一个“分组太大”的ICMP差错报文即可(见5.6节)。于是发送方能够使用较小长度的IP数据报重发数据。 分片与重新组装是一个耗时的操作，将该功能从路由器中删除并放到端系统中,大大加快了网络中的IP转发速度。")])])}),[],!1,null,null,null);a.default=_.exports}}]);