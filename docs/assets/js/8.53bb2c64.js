(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{284:function(t,a,v){"use strict";v.r(a);var s=v(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"juc汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#juc汇总"}},[t._v("#")]),t._v(" JUC汇总")]),t._v(" "),a("h2",{attrs:{id:"synchronized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[t._v("#")]),t._v(" synchronized")]),t._v(" "),a("p",[t._v("详解 https://pdai.tech/md/java/thread/java-thread-x-key-synchronized.html")]),t._v(" "),a("h3",{attrs:{id:"可重入原理-加锁次数计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重入原理-加锁次数计数器"}},[t._v("#")]),t._v(" 可重入原理：加锁次数计数器")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("什么是可重入？可重入锁")]),t._v("？")])]),t._v(" "),a("p",[a("strong",[t._v("可重入")]),t._v("：（来源于维基百科）若一个程序或子程序可以“在任意时刻被中断然后操作系统调度执行另外一段代码，这段代码又调用了该子程序不会出错”，则称其为可重入（reentrant或re-entrant）的。即当该子程序正在运行时，执行线程可以再次进入并执行它，仍然获得符合设计时预期的结果。与多线程并发执行的线程安全不同，可重入强调对单个线程执行时重新进入同一个子程序仍然是安全的。")]),t._v(" "),a("p",[a("strong",[t._v("可重入锁")]),t._v("：又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提锁对象得是同一个对象或者class），不会因为之前已经获取过还没释放而阻塞。")]),t._v(" "),a("ul",[a("li",[t._v("执行monitorenter获取锁\n"),a("ul",[a("li",[t._v("（monitor计数器=0，可获取锁）")]),t._v(" "),a("li",[t._v("执行method1()方法，monitor计数器+1 -> 1 （获取到锁）")]),t._v(" "),a("li",[t._v("执行method2()方法，monitor计数器+1 -> 2")]),t._v(" "),a("li",[t._v("执行method3()方法，monitor计数器+1 -> 3")])])]),t._v(" "),a("li",[t._v("执行monitorexit命令\n"),a("ul",[a("li",[t._v("method3()方法执行完，monitor计数器-1 -> 2")]),t._v(" "),a("li",[t._v("method2()方法执行完，monitor计数器-1 -> 1")]),t._v(" "),a("li",[t._v("method2()方法执行完，monitor计数器-1 -> 0 （释放了锁）")]),t._v(" "),a("li",[t._v("（monitor计数器=0，锁被释放了）")])])])]),t._v(" "),a("p",[t._v("这就是Synchronized的重入性，即在"),a("strong",[t._v("同一锁程")]),t._v("中，每个对象拥有一个monitor计数器，当线程获取该对象锁后，monitor计数器就会加一，释放锁后就会将monitor计数器减一，线程不需要再次获取同一把锁。")]),t._v(" "),a("h3",{attrs:{id:"自旋锁与自适应自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁与自适应自旋锁"}},[t._v("#")]),t._v(" 自旋锁与自适应自旋锁")]),t._v(" "),a("h4",{attrs:{id:"自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E8%87%AA%E6%97%8B%E9%94%81"}},[t._v("#")]),t._v(" 自旋锁")]),t._v(" "),a("blockquote",[a("p",[t._v("引入背景：大家都知道，在没有加入锁优化时，Synchronized是一个非常“胖大”的家伙。在多线程竞争锁时，当一个线程获取锁时，它会阻塞所有正在竞争的线程，这样对性能带来了极大的影响。在挂起线程和恢复线程的操作都需要转入内核态中完成，这些操作对系统的并发性能带来了很大的压力。同时HotSpot团队注意到在很多情况下，共享数据的锁定状态只会持续很短的一段时间，为了这段时间去挂起和回复阻塞线程并不值得。在如今多处理器环境下，完全可以让另一个没有获取到锁的线程在门外等待一会(自旋)，但不放弃CPU的执行时间。等待持有锁的线程是否很快就会释放锁。为了让线程等待，我们只需要让线程执行一个忙循环(自旋)，这便是自旋锁由来的原因。")])]),t._v(" "),a("p",[t._v("自旋锁早在JDK1.4 中就引入了，只是当时默认时关闭的。在JDK 1.6后默认为开启状态。自旋锁本质上与阻塞并不相同，先不考虑其对多处理器的要求，如果锁占用的时间非常的短，那么自旋锁的性能会非常的好，相反，其会带来更多的性能开销(因为在线程自旋时，始终会占用CPU的时间片，如果锁占用的时间太长，那么自旋的线程会白白消耗掉CPU资源)。因此自旋等待的时间必须要有一定的限度，如果自旋超过了限定的次数仍然没有成功获取到锁，就应该使用传统的方式去挂起线程了，在JDK定义中，自旋锁默认的自旋次数为10次，用户可以使用参数"),a("code",[t._v("-XX:PreBlockSpin")]),t._v("来更改。")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"自适应自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应自旋锁"}},[t._v("#")]),t._v(" 自适应自旋锁")]),t._v(" "),a("p",[t._v("在JDK 1.6中引入了自适应自旋锁。这就意味着自旋的时间不再固定了，而是由前一次在同一个锁上的自旋 时间及锁的拥有者的状态来决定的。如果在同一个锁对象上，自旋等待刚刚成功获取过锁，并且持有锁的线程正在运行中，那么JVM会认为该锁自旋获取到锁的可能性很大，会自动增加等待时间。比如增加到100此循环。相反，如果对于某个锁，自旋很少成功获取锁。那再以后要获取这个锁时将可能省略掉自旋过程，以避免浪费处理器资源。有了自适应自旋，JVM对程序的锁的状态预测会越来越准确，JVM也会越来越聪明。")]),t._v(" "),a("h4",{attrs:{id:"偏向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[t._v("#")]),t._v(" 偏向锁")]),t._v(" "),a("blockquote",[a("p",[t._v("引入背景：在大多实际环境下，锁不仅不存在多线程竞争，而且总是由同一个线程多次获取，那么在同一个线程反复获取所释放锁中，其中并还没有锁的竞争，那么这样看上去，多次的获取锁和释放锁带来了很多不必要的性能开销和上下文切换。")])]),t._v(" "),a("p",[t._v("为了解决这一问题，HotSpot的作者在Java SE 1.6 中对Synchronized进行了优化，引入了偏向锁。当一个线程访问同步块并获取锁时，会在对象头和栈帧中的锁记录里存储锁偏向的线程ID，以后该线程在进入和退出同步块时不需要进行CAS操作来加锁和解锁。只需要简单的测试一下对象头的"),a("code",[t._v("Mark Word")]),t._v("里是否存储着指向当前线程的偏向锁。如果成功，表示线程已经获取到了锁。")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"偏向锁的撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁的撤销"}},[t._v("#")]),t._v(" 偏向锁的撤销")]),t._v(" "),a("p",[t._v("偏向锁使用了一种等待竞争出现才会释放锁的机制。所以当其他线程尝试获取偏向锁时，持有偏向锁的线程才会释放锁。但是偏向锁的撤销需要等到全局安全点(就是当前线程没有正在执行的字节码)。它会首先暂停拥有偏向锁的线程，然后检查持有偏向锁的线程是否活着。如果线程不处于活动状态，直接将对象头设置为无锁状态。如果线程活着，JVM会遍历栈帧中的锁记录，栈帧中的锁记录和对象头要么偏向于其他线程，要么恢复到无锁状态或者标记对象不适合作为偏向锁。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"锁的优缺点对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁的优缺点对比"}},[t._v("#")]),t._v(" 锁的优缺点对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("锁")]),t._v(" "),a("th",[t._v("优点")]),t._v(" "),a("th",[t._v("缺点")]),t._v(" "),a("th",[t._v("使用场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("偏向锁")]),t._v(" "),a("td",[t._v("加锁和解锁不需要CAS操作，没有额外的性能消耗，和执行非同步方法相比仅存在纳秒级的差距")]),t._v(" "),a("td",[t._v("如果线程间存在锁竞争，会带来额外的锁撤销的消耗")]),t._v(" "),a("td",[t._v("适用于只有一个线程访问同步块的场景")])]),t._v(" "),a("tr",[a("td",[t._v("轻量级锁")]),t._v(" "),a("td",[t._v("竞争的线程不会阻塞，提高了响应速度")]),t._v(" "),a("td",[t._v("如线程始终得不到锁竞争的线程，使用自旋会消耗CPU性能")]),t._v(" "),a("td",[t._v("追求响应时间，同步块执行速度非常快")])]),t._v(" "),a("tr",[a("td",[t._v("重量级锁")]),t._v(" "),a("td",[t._v("线程竞争不适用自旋，不会消耗CPU")]),t._v(" "),a("td",[t._v("线程阻塞，响应时间缓慢，在多线程下，频繁的获取释放锁，会带来巨大的性能消耗")]),t._v(" "),a("td",[t._v("追求吞吐量，同步块执行速度较长")])])])]),t._v(" "),a("h3",{attrs:{id:"synchronized与lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized与lock"}},[t._v("#")]),t._v(" Synchronized与Lock")]),t._v(" "),a("h3",{attrs:{id:"synchronized的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized的缺陷"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#synchronized%E7%9A%84%E7%BC%BA%E9%99%B7"}},[t._v("#")]),t._v(" synchronized的缺陷")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("效率低")]),t._v("：锁的释放情况少，只有代码执行完毕或者异常结束才会释放锁；试图获取锁的时候不能设定超时，不能中断一个正在使用锁的线程，相对而言，Lock可以中断和设置超时")]),t._v(" "),a("li",[a("code",[t._v("不够灵活")]),t._v("：加锁和释放的时机单一，每个锁仅有一个单一的条件(某个对象)，相对而言，读写锁更加灵活")]),t._v(" "),a("li",[a("code",[t._v("无法知道是否成功获得锁")]),t._v("，相对而言，Lock可以拿到状态，如果成功获取锁，....，如果获取失败，.....")])]),t._v(" "),a("h3",{attrs:{id:"lock解决相应问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock解决相应问题"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#lock%E8%A7%A3%E5%86%B3%E7%9B%B8%E5%BA%94%E9%97%AE%E9%A2%98"}},[t._v("#")]),t._v(" Lock解决相应问题")]),t._v(" "),a("p",[t._v("Lock类这里不做过多解释，主要看里面的4个方法:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lock()")]),t._v(": 加锁")]),t._v(" "),a("li",[a("code",[t._v("unlock()")]),t._v(": 解锁")]),t._v(" "),a("li",[a("code",[t._v("tryLock()")]),t._v(": 尝试获取锁，返回一个boolean值")]),t._v(" "),a("li",[a("code",[t._v("tryLock(long,TimeUtil)")]),t._v(": 尝试获取锁，可以设置超时")])]),t._v(" "),a("p",[t._v("Synchronized加锁只与一个条件(是否获取锁)相关联，不灵活，后来"),a("code",[t._v("Condition与Lock的结合")]),t._v("解决了这个问题。")]),t._v(" "),a("p",[t._v("多线程竞争一个锁时，其余未得到锁的线程只能不停的尝试获得锁，而不能中断。高并发的情况下会导致性能下降。ReentrantLock的lockInterruptibly()方法可以优先考虑响应中断。 一个线程等待时间过长，它可以中断自己，然后ReentrantLock响应这个中断，不再让这个线程继续等待。有了这个机制，使用ReentrantLock时就不会像synchronized那样产生死锁了。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("ReentrantLock")]),t._v("为常用类，它是一个可重入的互斥锁 Lock，它具有与使用 synchronized 方法和语句所访问的隐式监视器锁相同的一些基本行为和语义，但功能更强大。详细分析请看: "),a("a",{attrs:{href:""}},[t._v("JUC锁: ReentrantLock详解")])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("synchronized是公平锁吗？")])])]),t._v(" "),a("p",[t._v("synchronized实际上是非公平的，新来的线程有可能立即获得监视器，而在等待区中等候已久的线程可能再次等待，这样有利于提高性能，但是也可能会导致饥饿现象。")]),t._v(" "),a("h2",{attrs:{id:"java-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-lock"}},[t._v("#")]),t._v(" Java Lock")]),t._v(" "),a("p",[t._v("https://pdai.tech/md/java/thread/java-thread-x-lock-all.html")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/java-lock-1.png",alt:"java-lock-1"}})]),t._v(" "),a("p",[t._v("Java中，synchronized关键字和Lock的实现类都是悲观锁。")]),t._v(" "),a("p",[t._v("根据从上面的概念描述我们可以发现：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("悲观锁适合写操作多的场景")]),t._v("，先加锁可以保证写操作时数据正确。")]),t._v(" "),a("li",[a("strong",[t._v("乐观锁适合读操作多的场景")]),t._v("，不加锁的特点能够使其读操作的性能大幅提升。")])]),t._v(" "),a("p",[a("strong",[t._v("公平锁 VS 非公平锁")])]),t._v(" "),a("p",[t._v("公平锁是指多个线程按照申请锁的顺序来获取锁，线程直接进入队列中排队，队列中的第一个线程才能获得锁。公平锁的优点是等待锁的线程不会饿死。缺点是整体吞吐效率相对非公平锁要低，等待队列中除第一个线程以外的所有线程都会阻塞，CPU唤醒阻塞线程的开销比非公平锁大。")]),t._v(" "),a("p",[t._v("非公平锁是多个线程加锁时直接尝试获取锁，获取不到才会到等待队列的队尾等待。但如果此时锁刚好可用，那么这个线程可以无需阻塞直接获取到锁，所以非公平锁有可能出现后申请锁的线程先获取锁的场景。非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。")]),t._v(" "),a("p",[t._v("可重入锁 VS 非可重入锁")]),t._v(" "),a("p",[t._v("可重入锁又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提锁对象得是同一个对象或者class），不会因为之前已经获取过还没释放而阻塞。Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"方法1执行..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doOthers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doOthers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"方法2执行..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在上面的代码中，类中的两个方法都是被内置锁synchronized修饰的，doSomething()方法中调用doOthers()方法。因为内置锁是可重入的，所以同一个线程在调用doOthers()时可以直接获得当前对象的锁，进入doOthers()进行操作。")]),t._v(" "),a("p",[t._v("如果是一个不可重入锁，那么当前线程在调用doOthers()之前需要将执行doSomething()时获取当前对象的锁释放掉，实际上该对象锁已被当前线程所持有，且无法释放。所以此时会出现死锁。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("我们说过ReentrantLock和synchronized都是重入锁，那么我们通过重入锁ReentrantLock以及非可重入锁NonReentrantLock的源码来对比分析一下为什么非可重入锁在重复调用同步资源时会出现死锁。")]),t._v(" "),a("p",[t._v("首先ReentrantLock和NonReentrantLock都继承父类AQS，其父类AQS中维护了一个同步状态status来计数重入次数，status初始值为0。")]),t._v(" "),a("p",[t._v("当线程尝试获取锁时，可重入锁先尝试获取并更新status值，如果status == 0表示没有其他线程在执行同步代码，则把status置为1，当前线程开始执行。如果status != 0，则判断当前线程是否是获取到这个锁的线程，如果是的话执行status+1，且当前线程可以再次获取锁。而非可重入锁是直接去获取并尝试更新当前status的值，如果status != 0的话会导致其获取锁失败，当前线程阻塞。")]),t._v(" "),a("p",[t._v("释放锁时，可重入锁同样先获取当前status的值，在当前线程是持有锁的线程的前提下。如果status-1 == 0，则表示当前线程所有重复获取锁的操作都已经执行完毕，然后该线程才会真正释放锁。而非可重入锁则是在确定当前线程是持有锁的线程之后，直接将status置为0，将锁释放。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/java-lock-14.png",alt:"java-lock-14"}})]),t._v(" "),a("h2",{attrs:{id:"关键字-volatile详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字-volatile详解"}},[t._v("#")]),t._v(" 关键字: volatile详解")]),t._v(" "),a("p",[t._v("https://pdai.tech/md/java/thread/java-thread-x-key-volatile.html")]),t._v(" "),a("p",[t._v("volatile的作用详解")]),t._v(" "),a("p",[t._v("防重排序、实现可见性")]),t._v(" "),a("p",[t._v("共享的long和double变量的为什么要用volatile?")]),t._v(" "),a("p",[t._v("因为long和double两种数据类型的操作可分为高32位和低32位两部分，因此普通的long或double类型读/写可能不是原子的。因此，鼓励大家将共享的long和double变量设置为volatile类型，这样能保证任何情况下对long和double的单次读/写操作都具有原子性。")]),t._v(" "),a("p",[t._v("目前各种平台下的商用虚拟机都选择把 64 位数据的读写操作作为原子操作来对待，因此我们在编写代码时一般不把long 和 double 变量专门声明为 volatile多数情况下也是不会错的。")]),t._v(" "),a("h3",{attrs:{id:"volatile-可见性实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-可见性实现"}},[t._v("#")]),t._v(" volatile 可见性实现")]),t._v(" "),a("blockquote",[a("p",[t._v("volatile 变量的内存可见性是基于内存屏障(Memory Barrier)实现:")])]),t._v(" "),a("p",[t._v("内存屏障，又称内存栅栏，是一个 CPU 指令。")]),t._v(" "),a("p",[t._v("在程序运行时，为了提高执行性能，编译器和处理器会对指令进行重排序，JMM 为了保证在不同的编译器和 CPU 上有相同的结果，通过插入特定类型的内存屏障来禁止+ 特定类型的编译器重排序和处理器重排序，插入一条内存屏障会告诉编译器和 CPU：不管什么指令都不能和这条 Memory Barrier 指令重排序。")]),t._v(" "),a("p",[t._v("缓存一致性协议(MESI) modified，exclusive，shared，invalid")]),t._v(" "),a("p",[t._v("volatile 的功能还不足以实现计数器。因为 ++x 实际上是三种操作(读、添加、存储)的简单组合，如果多个线程凑巧试图同时对 volatile 计数器执行增量操作，那么它的更新值有可能会丢失。 如果读操作远远超过写操作，可以结合使用内部锁和 volatile 变量来减少公共代码路径的开销。 安全的计数器使用 synchronized 确保增量操作是原子的，并使用 volatile 保证当前结果的可见性。如果更新不频繁的话，该方法可实现更好的性能，因为读路径的开销仅仅涉及 volatile 读操作，这通常要优于一个无竞争的锁获取的开销。")]),t._v(" "),a("h2",{attrs:{id:"juc原子类-cas-unsafe和原子类详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#juc原子类-cas-unsafe和原子类详解"}},[t._v("#")]),t._v(" JUC原子类: CAS, Unsafe和原子类详解")]),t._v(" "),a("p",[t._v("https://pdai.tech/md/java/thread/java-thread-x-juc-AtomicInteger.html")]),t._v(" "),a("p",[t._v("CAS")]),t._v(" "),a("p",[t._v("前面我们说到，线程安全的实现方法包含:")]),t._v(" "),a("ul",[a("li",[t._v("互斥同步: synchronized 和 ReentrantLock")]),t._v(" "),a("li",[t._v("非阻塞同步: CAS, AtomicXXXX")]),t._v(" "),a("li",[t._v("无同步方案: 栈封闭，Thread Local，可重入代码")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("CAS的全称为Compare-And-Swap，直译就是对比交换。是一条CPU的原子指令，其作用是让CPU先进行比较两个值是否相等，然后原子地更新某个位置的值，经过调查发现，其实现方式是基于硬件平台的汇编指令，就是说CAS是靠硬件实现的，JVM只是封装了汇编调用，那些AtomicInteger类便是使用了这些封装后的接口。   简单解释：CAS操作需要输入两个数值，一个旧值(期望操作前的值)和一个新值，在操作期间先比较下在旧值有没有发生变化，如果没有发生变化，才交换成新值，发生了变化则不交换。")]),t._v(" "),a("p",[t._v("CAS操作是原子性的，所以多线程并发使用CAS更新数据时，可以不使用锁。JDK中大量使用了CAS来更新数据而防止加锁(synchronized 重量级锁)来保持原子更新。")]),t._v(" "),a("p",[t._v("CAS 问题")]),t._v(" "),a("p",[t._v("CAS 方式为乐观锁，synchronized 为悲观锁。因此使用 CAS 解决并发问题通常情况下性能更优。")]),t._v(" "),a("h3",{attrs:{id:"unsafe类详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsafe类详解"}},[t._v("#")]),t._v(" UnSafe类详解")]),t._v(" "),a("blockquote",[a("p",[t._v("上文我们了解到Java原子类是通过UnSafe类实现的，这节主要分析下UnSafe类。UnSafe类在J.U.C中CAS操作有很广泛的应用。")])]),t._v(" "),a("p",[t._v("Unsafe是位于sun.misc包下的一个类，主要提供一些用于执行低级别、不安全操作的方法，如直接访问系统内存资源、自主管理内存资源等，这些方法在提升Java运行效率、增强Java语言底层资源操作能力方面起到了很大的作用。但由于Unsafe类使Java语言拥有了类似C语言指针一样操作内存空间的能力，这无疑也增加了程序发生相关指针问题的风险。在程序中过度、不正确使用Unsafe类会使得程序出错的概率变大，使得Java这种安全的语言变得不再“安全”，因此对Unsafe的使用一定要慎重。")]),t._v(" "),a("p",[t._v("这个类尽管里面的方法都是 public 的，但是并没有办法使用它们，JDK API 文档也没有提供任何关于这个类的方法的解释。总而言之，对于 Unsafe 类的使用都是受限制的，只有授信的代码才能获得该类的实例，当然 JDK 库里面的类是可以随意使用的。")]),t._v(" "),a("p",[t._v("先来看下这张图，对UnSafe类总体功能：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/java-thread-x-atomicinteger-unsafe.png",alt:"java-thread-x-atomicinteger-unsafe"}})]),t._v(" "),a("p",[t._v("原子基本数据类型使用的是Unsafe类的方法来保障原子性。")]),t._v(" "),a("h2",{attrs:{id:"juc锁-locksupport详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#juc锁-locksupport详解"}},[t._v("#")]),t._v(" JUC锁: LockSupport详解")]),t._v(" "),a("p",[t._v("https://pdai.tech/md/java/thread/java-thread-x-lock-LockSupport.html")]),t._v(" "),a("h3",{attrs:{id:"thread-sleep-和object-wait-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-sleep-和object-wait-的区别"}},[t._v("#")]),t._v(" Thread.sleep()和Object.wait()的区别")]),t._v(" "),a("p",[t._v("首先，我们先来看看Thread.sleep()和Object.wait()的区别")]),t._v(" "),a("ul",[a("li",[t._v("Thread.sleep()不会释放占有的锁，Object.wait()会释放占有的锁；")]),t._v(" "),a("li",[t._v("Thread.sleep()必须传入时间，Object.wait()可传可不传，不传表示一直阻塞下去；")]),t._v(" "),a("li",[t._v("Thread.sleep()到时间了会自动唤醒，然后继续执行；")]),t._v(" "),a("li",[t._v("Object.wait()不带时间的，需要另一个线程使用Object.notify()唤醒；")]),t._v(" "),a("li",[t._v("Object.wait()带时间的，假如没有被notify，到时间了会自动唤醒，这时又分好两种情况，一是立即获取到了锁，线程自然会继续执行；二是没有立即获取锁，线程进入同步队列等待获取锁；")])]),t._v(" "),a("p",[t._v("其实，他们俩最大的区别就是Thread.sleep()不会释放锁资源，Object.wait()会释放锁资源。")])])}),[],!1,null,null,null);a.default=e.exports}}]);