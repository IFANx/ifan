(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{328:function(t,a,s){"use strict";s.r(a);var v=s(14),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"存储管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储管理"}},[t._v("#")]),t._v(" 存储管理")]),t._v(" "),a("h2",{attrs:{id:"分层存储体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分层存储体系"}},[t._v("#")]),t._v(" 分层存储体系")]),t._v(" "),a("p",[t._v("外存-内存-缓存-cpu寄存器")]),t._v(" "),a("h2",{attrs:{id:"地址空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址空间"}},[t._v("#")]),t._v(" 地址空间")]),t._v(" "),a("p",[a("strong",[t._v("基址寄存器与界址寄存器")]),t._v("：")]),t._v(" "),a("p",[t._v("当使用基址寄存器和 界限寄存器时，程序装载到内存中连续的空闲位置且装载期间无须重定位，基址寄存器和界限寄存器可用于为每个进程提供一个独立的地址空间")]),t._v(" "),a("p",[a("strong",[t._v("交换技术")]),t._v("：有两种处理内存超载的通用方法。最简单的策略是交换(swapping)技术，即把一个进程完整调入内 存，使该进程运行一段时间，然后把它存回磁盘。空闲进程主要存储在磁盘上，所以当它们不运行时就不会 占用内存(尽管它们的一些进程会周期性地被唤醒以完成相关工作，然后就又进入睡眠状态)。另一种策略 是虚拟内存(virtual memory)，该策略甚至能使程序在只有一部分被调入内存的情况下运行。")]),t._v(" "),a("p",[a("strong",[t._v("虚拟内存")]),t._v("的基本思想是:每个程序拥有自己的地址空间，这个空间被分割成多个块，每一块称作一页或页面(page)。每一页有连续的地址范围。这些页被映射到物理内存，但并不是所有的页都必须在内存中才能运行程序。当程序引用到一部 分在物理内存中的地址空间时，由硬件立刻执行必要的映射。当程序引用到一部分不在物理内存中的地址空 间时，由操作系统负责将缺失的部分装入物理内存并重新执行失败的指令。")]),t._v(" "),a("p",[a("strong",[t._v("空闲内存管理")])]),t._v(" "),a("ol",[a("li",[t._v("使用位图的存储管理")]),t._v(" "),a("li",[t._v("空闲链表")])]),t._v(" "),a("p",[a("strong",[t._v("内存管理")])]),t._v(" "),a("p",[t._v("分页-分段-段页式")]),t._v(" "),a("p",[t._v("由程序产生的这些地址称为虚拟地址(virtual address)，它们构成了一个虚拟地址空间(virtual address space)。在没有虚拟内存的计算机上，系统直接将虚拟地址送到内存总线上，读写操作使用具有同样地址 的物理内存字;而在使用虚拟内存的情况下，虚拟地址不是被直接送到内存总线上，而是被送到内存管理单 元(Memory Management Unit，MMU)，MMU把虚拟地址映射为物理内存地址。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230521171455061.png",alt:"image-20230521171455061"}})]),t._v(" "),a("p",[a("strong",[t._v("页表")]),t._v("：虚拟地址被分成虚拟页号(高位部 分)和偏移量(低位部分)两部分。")]),t._v(" "),a("p",[t._v("对于16位地址和4KB的页面大小，高4位可以指定16个虚拟页面 中的一页，而低12位接着确定了所选页面中的字节偏移量(0~4095)。")]),t._v(" "),a("p",[t._v("虚拟页号可用做页表的索引，以找到该虚拟页面对应的页表项。由页表项可以找到页框号(如果有的话)。然后把页框号拼接到偏移量的高位端，以替换掉虚拟页号，形成送往内存的物理地址。页表的目的是把虚拟页面映射为页框。从数学角度说，页表是一个函数，它的参数是虚拟页号，结果是物理页框号。通过这个函数可以把虚拟地址中的虚拟页面域替换成页框域，从而形成物理地址。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230521172135920.png",alt:"image-20230521172135920"}})]),t._v(" "),a("p",[t._v("**分页机制中，页表存储在内存中，cpu多次访问内存会造成速度下降，于是产生快表TLB，转换检测缓冲区(Translation Lookaside Buffer，TLB)，有时又称为相联存储器 (associate memory)，TLB中的表项是页表中的一小部分。**TLB不再内存中，而在MMU内存管理单元中，CPU级。")]),t._v(" "),a("p",[a("strong",[t._v("针对大内存的页表：多级页表")])]),t._v(" "),a("p",[t._v("抖动：进程运行所需的内存大小大于分配的内存大小，页面频繁换入换出的情况")])])}),[],!1,null,null,null);a.default=r.exports}}]);