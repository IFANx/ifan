(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{312:function(_,v,s){"use strict";s.r(v);var r=s(14),a=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"进程与线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[_._v("#")]),_._v(" 进程与线程")]),_._v(" "),v("p",[_._v("为了实现进程模型，操作系统维护着一张表格(一个结构数组)，即进程表(process table)。每个进 程占用一个进程表项。(有些作者称这些表项为进程控制块。)该表项包含了进程状态的重要信息，包括程序计数器、堆栈指针、内存分配状况、所打开文件的状态、账号和调度信息，以及其他在进程由运行态转换 到就绪态或阻塞态时必须保存的信息，从而保证该进程随后能再次启动，就像从未被中断过一样。")]),_._v(" "),v("p",[_._v("图2-4中展示了在一个典型系统中的关键字段。第一列中的字段与进程管理有关。其他两列分别与存储 管理和文件管理有关。应该注意到进程表中的字段是与系统密切相关的，不过该图给出了所需要信息的大致 介绍。")]),_._v(" "),v("p",[_._v("![image-20230513174553400](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513174553400.png)")]),_._v(" "),v("p",[v("strong",[_._v("多道程序设计")])]),_._v(" "),v("p",[_._v("![image-20230513183653102](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513183653102.png)")]),_._v(" "),v("p",[_._v("假设计算机有512MB内 存，操作系统占用128MB，每个用户程序也占用128MB。这些内存空间允许3个用户程序同时驻留在内存 中。若80%的时间用于I/O等待，则CPU的利用率(忽略操作系统开销)大约是1-0.83 ，即大约49%。在增加 512MB字节的内存后，可从3道程序设计提高到7道程序设计，因而CPU利用率提高到79%。换言之，第二个 512MB内存提高了30%的吞吐量。")]),_._v(" "),v("h2",{attrs:{id:"线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[_._v("#")]),_._v(" 线程")]),_._v(" "),v("h3",{attrs:{id:"线程的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程的使用"}},[_._v("#")]),_._v(" 线程的使用")]),_._v(" "),v("p",[_._v("为什么人们需要在一个进程中再有一类进程?有若干理由说明产生这些迷你进程(称为线程)的必要性。下面我们来讨论其中一些理由。人们需要多线程的主要原因是，在许多应用中同时发生着多种活动。其中某些活动随着时间的推移会被阻塞。通过将这些应用程序分解成可以准并行运行的多个顺序线程，程序设计模型会变得更简单。")]),_._v(" "),v("p",[_._v("准确地说，这正是之前关于进程模型的讨论。有了这样的抽象，我们才不必考虑中断、定时器和上下文切换，而只需考察并行进程。类似地，只是在有了多线程概念之后，我们才加入了一种新的元素:"),v("strong",[_._v("并行实体共享同一个地址空间和所有可用数据的能力")]),_._v("。对于某些应用而言，这种能力是必需的，而这正是多进程模型(它们具有不同地址空间)所无法表达的。")]),_._v(" "),v("p",[_._v("第二个关于需要多线程的理由是，由于"),v("strong",[_._v("线程比进程更轻量级")]),_._v("，所以它们比进程更容易(即更快)创建， 也更容易撤销。")]),_._v(" "),v("p",[_._v("线程给进程模型增加了一项内容，即在同一个进程环境中，允许彼此之间有较大独立性的多个线程执 行。在同一个进程中并行运行多个线程，是对在同一台计算机上并行运行多个进程的模拟。")]),_._v(" "),v("p",[v("strong",[_._v("传统进程（拥有自己的地址空间和控制线程）与多线程进程（一个进程带有三个可并行运行的控制线程）")])]),_._v(" "),v("p",[_._v("![image-20230513185303438](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513185303438.png)")]),_._v(" "),v("p",[_._v("当多线程进程在单CPU系统中运行时，线程轮流运行。在图2-1中，我们已经看到了进程的多道程序设 计是如何工作的。通过在多个进程之间来回切换，系统制造了不同的顺序进程并行运行的假象。多线程的工 作方式也是类似的。CPU在线程之间的快速切换，制造了线程并行运行的假象，好似它们在一个比实际CPU 慢一些的CPU上同时运行。在一个有三个计算密集型线程的进程中，线程以并行方式运行，每个线程在一个 CPU上得到了真实CPU速度的三分之一。")]),_._v(" "),v("h3",{attrs:{id:"在用户空间实现线程-在内核空间实现线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在用户空间实现线程-在内核空间实现线程"}},[_._v("#")]),_._v(" 在用户空间实现线程 & 在内核空间实现线程")]),_._v(" "),v("p",[_._v("第一种方法是把整个线程包放在用户空间中，内核对线程包一无所知。从内核角度考虑，就是按正常的方式管理，即单线程进程。这种方法第一个，也是最明显的优点是，用户级线程包可以在不支持线程的操作系统上实现。过去所有的操作系统都属于这个范围，即使现在也有一些操作系统还是不支持线程。通过这一方法，可以用函数库实现线程。")]),_._v(" "),v("p",[_._v("![image-20230513191108587](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513191108587.png)")]),_._v(" "),v("p",[v("strong",[_._v("内核态线程")])]),_._v(" "),v("p",[_._v("当某个线程希望创建一个新线 程或撤销一个已有线程时，它进行一个系统调用，这个系统调用通过对线程表的更新完成线程创建或撤销工 作。")]),_._v(" "),v("p",[_._v("内核的线程表保存了每个线程的寄存器、状态和其他信息。这些信息和在用户空间中(在运行时系统中)的线程是一样的，但是现在保存在内核中。这些信息是传统内核所维护的每个单线程进程信息(即进程状态)的子集。另外，内核还维护了传统的进程表，以便跟踪进程的状态。")]),_._v(" "),v("p",[v("strong",[_._v("用户态线程与内核态线程m：n复用")])]),_._v(" "),v("p",[_._v("采用这种方法，内核只识别内核级线程，并对其进行调度。其中一些内核级线程会被多个用户级线程多路复用。如同在没有多线程能力操作系统中某个进程中的用户级线程一样，可以创建、撤销和调度这些用户级线程。在这种模型中，每个内核级线程有一个可以轮流使用的用户级线程集合。")]),_._v(" "),v("p",[_._v("![image-20230513191829114](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513191829114.png)")]),_._v(" "),v("h3",{attrs:{id:"_2-3-进程间通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-进程间通信"}},[_._v("#")]),_._v(" 2.3 进程间通信")]),_._v(" "),v("p",[_._v("进程间通信(Inter Process Communication，IPC)问题")]),_._v(" "),v("p",[v("strong",[_._v("临界区")]),_._v("：实际上凡涉及共享内存、共享文件以及共享任何资源的情况都会引发与前面类似的 错误，要避免这种错误，关键是要找出某种途径来阻止多个进程同时读写共享的数据。换言之，我们需要的 是互斥(mutual exclusion)，即以某种手段确保当一个进程在使用一个共享变量或文件时，其他进程不能做 同样的操作。")]),_._v(" "),v("p",[v("strong",[_._v("忙等待的互斥：实现互斥的方式")]),_._v("：本节将讨论几种实现互斥的方案。在这些方案中，当一个进程在临界区中更新共享内存时，其他进程将")]),_._v(" "),v("p",[_._v("不会进入其临界区，也不会带来任何麻烦。")]),_._v(" "),v("p",[_._v("1.屏蔽中断：在单处理器系统中，最简单的方法是使每个进程在刚刚进入临界区后立即屏蔽所有中断，并在就要离开 之前再打开中断。")]),_._v(" "),v("p",[_._v("所以结论是:屏蔽中断对于操作系统本身而言是一项很有用的技术，但对于用户进程则不是一种合适的通用互斥机制。")]),_._v(" "),v("p",[_._v("2.锁变量：加锁")]),_._v(" "),v("p",[_._v("测试并加锁(Test and Set Lock)，它将一个内存字lock读到寄存器RX中，然后在该内存地址上存 一个非零值。读字和写字操作保证是不可分割的，即该指令结束之前其他处理器均不允许访问该内存字。执 行TSL指令的CPU将锁住内存总线，以禁止其他CPU在本指令结束之前访问内存。")]),_._v(" "),v("p",[_._v("信号量")]),_._v(" "),v("p",[_._v("条件变量")]),_._v(" "),v("p",[_._v("互斥量")]),_._v(" "),v("p",[_._v("管程：一个管程是一个由过程、 变量及数据结构等组成的一个集合，它们组成一个特殊的模块或软件包。进程可在任何需要的时候调用管程 中的过程，但它们不能在管程之外声明的过程中直接访问管程内的数据结构。")]),_._v(" "),v("p",[_._v("管程有一个很重要的特性，即任一时刻管程中只能有一个活跃进程，这一特性使管程能有效地完成互斥。管程是编程语言的组成部分，编译器知道它们的特殊性，因此可以采用与其他过程调用不同的方法来处理对管程的调用。典型的处理方法是，当一个进程调用管程过程时，该过程中的前几条指令将检查在管程中是否有其他的活跃进程。如果有，调用进程将被挂起，直到另一个进程离开管程将其唤醒。如果没有活跃进程在使用管程，则该调用进程可以进入。")]),_._v(" "),v("h3",{attrs:{id:"_2-4-调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-调度"}},[_._v("#")]),_._v(" 2.4 调度")]),_._v(" "),v("p",[_._v("调度算法在不同的环境")]),_._v(" "),v("ol",[v("li",[_._v("批处理-非抢占")]),_._v(" "),v("li",[_._v("交互式-抢占")]),_._v(" "),v("li",[_._v("实时")])]),_._v(" "),v("p",[_._v("![image-20230513215540640](/Users/kkxu/NodeProjects/ifan/ifan/images/:Users:kkxu:Library:Application Support:typora-user-images:image-20230513215540640.png)")]),_._v(" "),v("p",[v("strong",[_._v("批处理系统中的调度：")])]),_._v(" "),v("p",[_._v("1.先来先服务：在所有调度算法中，最简单的是非抢占式的先来先服务(first-come first-severd)算法。使用该算法，进 程按照它们请求CPU的顺序使用CPU。基本上，有一个就绪进程的单一队列。早上，当第一个作业从外部进 入系统，就立即开始并允许运行它所期望的时间。不会中断该作业，因为它需要很长的时间运行。当其他作 业进入时，它们就被安排到队列的尾部。当正在运行的进程被阻塞时，队列中的第一个进程就接着运行。在 被阻塞的进程变为就绪时，就像一个新来到的作业一样，排到队列的末尾。")]),_._v(" "),v("p",[_._v("2.最短作业优先：有必要指出，只有在所有的作业都可同时运行的情形下，最短作业优先算法才是最优化的。")]),_._v(" "),v("p",[_._v("3.最短剩余时间优先：最短作业优先的抢占式版本是最短剩余时间优先(shortest remaining time next)算法。使用这个算法， 调度程序总是选择剩余运行时间最短的那个进程运行。再次提醒，有关的运行时间必须提前掌握。当一个新 的作业到达时，其整个时间同当前进程的剩余时间做比较。如果新的进程比当前运行进程需要更少的时间， 当前进程就被挂起，而运行新的进程。这种方式可以使新的短作业获得良好的服务。")]),_._v(" "),v("p",[v("strong",[_._v("交互式系统中的调度")]),_._v("：")]),_._v(" "),v("p",[_._v("1.轮转调度：一种最古老、最简单、最公平且使用最广的算法是轮转调度(round robin)。每个进程被分配一个时间 段，称为时间片(quantum)，即允许该进程在该时间段中运行。如果在时间片结束时该进程还在运行，则 将剥夺CPU并分配给另一个进程。如果该进程在时间片结束前阻塞或结束，则CPU立即进行切换。时间片设得太短会导致过多的进程切换，降低了CPU效率;而设得太长又可能引起 对短的交互请求的响应时间变长。")]),_._v(" "),v("p",[_._v("2.优先级调度")]),_._v(" "),v("p",[_._v("3.多级队列")]),_._v(" "),v("p",[_._v("4.最短进程优先")]),_._v(" "),v("p",[v("strong",[_._v("实时系统中的调度")]),_._v("：")]),_._v(" "),v("p",[_._v("实时系统通常可以分为硬实时(hard real time)和软实时(soft real time)，前者的含义是必须满足绝对 的截止时间，后者的含义是虽然不希望偶尔错失截止时间，但是可以容忍。")]),_._v(" "),v("p",[v("strong",[_._v("经典进程间通信问题")]),_._v("：")]),_._v(" "),v("p",[_._v("哲学家就餐问题：")]),_._v(" "),v("p",[_._v("读着写者问题：")])])}),[],!1,null,null,null);v.default=a.exports}}]);