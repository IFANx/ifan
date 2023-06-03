(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(a,t,s){"use strict";s.r(t);var e=s(14),_=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[a._v("#")]),a._v(" 文件系统")]),a._v(" "),t("h2",{attrs:{id:"_1-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件"}},[a._v("#")]),a._v(" 1.文件")]),a._v(" "),t("h3",{attrs:{id:"_1-1文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1文件命名"}},[a._v("#")]),a._v(" 1.1文件命名")]),a._v(" "),t("p",[a._v("文件是一种抽象机制，它提供了一种在磁盘上保留信息而且方便以后读取的方法。这种方法可以使用户不用了解存储信息的方法、位置和实际磁盘工作方式等有关细节。")]),a._v(" "),t("p",[a._v("许多操作系统支持文件名用圆点隔开分为两部分，如文件名prog.c。圆点后面的部分称为文件扩展名 (file extension)，文件扩展名通常表示文件的一些信息，如MS-DOS中，文件名由1至8个字符以及1至3个 字符的可选扩展名组成。在UNIX里，如果有扩展名，则扩展名长度完全由用户决定，一个文件甚至可以包 含两个或更多的扩展名。如homepage.html.zip，这里.html表明HTML格式的一个Web页面，.zip表示该文件 (homepage.html)已经采用zip程序压缩过。")]),a._v(" "),t("h3",{attrs:{id:"_1-2文件存取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2文件存取"}},[a._v("#")]),a._v(" 1.2文件存取")]),a._v(" "),t("p",[a._v("早期操作系统只有一种文件存取方式:顺序存取(sequential access)。进程在这些系统中可从头顺序读 取文件的全部字节或记录，但不能跳过某一些内容，也不能不按顺序读取。")]),a._v(" "),t("p",[a._v("以任何次序读取其中字节或记录的文件称作随机存取文件(random access file)。")]),a._v(" "),t("p",[a._v("有两种方法可以指示从何处开始读取文件。一种是每次read操作都给出开始读文件的位置。另一种是用 一个特殊的seek寻找操作设置当前位置，在seek操作后，从这个当前位置顺序地开始读文件。UNIX和Windows使 用的是后一种方法。")]),a._v(" "),t("h3",{attrs:{id:"_1-3文件属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3文件属性"}},[a._v("#")]),a._v(" 1.3文件属性")]),a._v(" "),t("p",[a._v("文件都有文件名和数据。另外，所有的操作系统还会保存其他与文件相关的信息，如文件创建的日期和 时间、文件大小等。这些附加信息称为文件属性(attribute)，有些人称之为元数据(metadata)")]),a._v(" "),t("p",[t("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230602211301989.png",alt:"image-20230602211301989"}})]),a._v(" "),t("h2",{attrs:{id:"_2-目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录"}},[a._v("#")]),a._v(" 2.目录")]),a._v(" "),t("p",[a._v("文件系统通常提供目录或文件夹用于记录文件，在很多系统中目录本身也是文件。本节讨论目录、目录的组成、目录的特性和可以对目录进行的操作。")]),a._v(" "),t("h3",{attrs:{id:"_2-1一级目录系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1一级目录系统"}},[a._v("#")]),a._v(" 2.1一级目录系统")]),a._v(" "),t("p",[a._v("目录系统的最简单形式是在一个目录中包含所有的文件。这有时称为根目录，但是由于只有一个目录， 所以其名称并不重要。")]),a._v(" "),t("h3",{attrs:{id:"_2-2层次目录系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2层次目录系统"}},[a._v("#")]),a._v(" 2.2层次目录系统")]),a._v(" "),t("p",[a._v("用户可以创建任意数量的子目录，这种能力为用户组织其工作提供了强大的结构化工具。因此，几乎所有现代文件系统都是用这个方式组织的。")]),a._v(" "),t("h2",{attrs:{id:"_3-文件系统的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-文件系统的实现"}},[a._v("#")]),a._v(" 3.文件系统的实现")]),a._v(" "),t("p",[a._v("文件和目录是怎样存储的、磁盘空间是怎样管理的以及怎样使系统有效而可靠地工作等")]),a._v(" "),t("h3",{attrs:{id:"_3-1文件系统布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1文件系统布局"}},[a._v("#")]),a._v(" 3.1文件系统布局")]),a._v(" "),t("p",[a._v("文件系统存放在磁盘上。多数磁盘划分为一个或多个分区，每个分区中有一个独立的文件系统。磁盘的 0号扇区称为"),t("strong",[a._v("主引导记录")]),a._v("(Master Boot Record，MBR)，用来引导计算机。在MBR的结尾是分区表。该表给 出了每个分区的起始和结束地址。")]),a._v(" "),t("h3",{attrs:{id:"_3-2-文件的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-文件的实现"}},[a._v("#")]),a._v(" 3.2 文件的实现")]),a._v(" "),t("p",[a._v("文件存储的实现的关键问题是记录各个文件分别用到哪些磁盘块。")]),a._v(" "),t("p",[a._v("1."),t("strong",[a._v("连续分配")])]),a._v(" "),t("p",[a._v("最简单的分配方案是把每个文件作为一连串连续数据块存储在磁盘上。所以，在块大小为1KB的磁盘上，50KB的文件要分配50个连续的块。对于块大小为2KB的磁盘，将分配25个连续的块。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("连续磁盘空间分配方案有两大优势。首先，实现简单，记录每个文件用到的磁盘块简化为只需记住两个\n数字即可:第一块的磁盘地址和文件的块数。给定了第一块的编号，一个简单的加法就可以找到任何其他块\n的编号。\n其次，读操作性能较好，因为在单个操作中就可以从磁盘上读出整个文件。\n")])])]),t("p",[a._v("2."),t("strong",[a._v("链表分配")])]),a._v(" "),t("p",[a._v("存储文件的第二种方法是为每个文件构造磁盘块链表，如图4-11所示。每个块的第一个字作为指向下一 块的指针，块的其他部分存放数据。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("与连续分配方案不同，这一方法可以充分利用每个磁盘块。不会因为磁盘碎片(除了最后一块中的内部\n碎片)而浪费存储空间。同样，在目录项中，只需要存放第一块的磁盘地址，文件的其他块就可以从这个首\n块地址查找到。\n另一方面，在链表分配方案中，尽管顺序读文件非常方便，但是随机存取却相当缓慢。要获得块n，操 作系统每一次都必须从头开始，并且要先读前面的n-1块。显然，进行如此多的读操作太慢了。\n")])])]),t("p",[a._v("3."),t("strong",[a._v("在内存中采用表的链表分配")])]),a._v(" "),t("p",[a._v("如果取出每个磁盘块的指针字，把它放在内存的一个表中，就可以解决上述链表的两个不足。图4-12表 示了图4-11所示例子的内存中表的内容。这两个图中有两个文件，文件A依次使用了磁盘块4、7、2、10和 12，文件B依次使用了磁盘块6、3、11和14。利用图4-12中的表，可以从第4块开始，顺着链走到最后，找到 文件A的全部磁盘块。同样，从第6块开始，顺着链走到最后，也能够找出文件B的全部磁盘块。这两个链都 以一个不属于有效磁盘编号的特殊标记(如-1)结束。内存中的这样一个表格称为"),t("strong",[a._v("文件分配表(File Allocation Table，FAT)。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230602212454397.png",alt:"image-20230602212454397"}})]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("按这类方式组织，整个块都可以存放数据。进而，随机存取也容易得多。虽然仍要顺着链在文件中查找给定的偏移量，但是整个链表都存放在内存中，所以不需要任何磁盘引用。与前面的方法相同，不管文件有多大，在目录项中只需记录一个整数(起始块号)，按照它就可以找到文件的全部块。\n")])])]),t("p",[a._v("共享文件：")]),a._v(" "),t("p",[a._v("文件系统本身是一个 有向无环图(Directed Acyclic Graph，DAG)而不是一棵树。符号连接。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230602214008021.png",alt:"image-20230602214008021"}})]),a._v(" "),t("h3",{attrs:{id:"_3-3-虚拟文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-虚拟文件系统"}},[a._v("#")]),a._v(" 3.3 虚拟文件系统")]),a._v(" "),t("p",[a._v("所有现代的UNIX系统做了一个很认真的尝试，即将多种文件系统整合到一个统一的结构 中。一个Linux系统可以用ext2作为根文件系统，ext3分区装载在/home下，另一块采用ReiserFS文件系统的硬 盘装载在/home下，以及一个ISO 9660的CD-ROM临时装载在/mnt下。从用户的观点来看，那只有一个文件 系统层级。它们事实上是多种(不相容的)文件系统，对于用户和进程是不可见的。")]),a._v(" "),t("p",[a._v("绝大多数UNIX操作系统都使用虚拟文件系统(Virtual File System，VFS)概念尝试将多种文件 系统统一成一个有序的框架。关键的思想就是抽象出所有文件系统都共有的部分，并且将这部分代码放在单 独的一层，该层调用底层的实际文件系统来具体管理数据。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/Users/kkxu/NodeProjects/ifan/ifan/images/image-20230602214509878.png",alt:"image-20230602214509878"}})]),a._v(" "),t("p",[a._v("所有和文件相关的系统调用在最初的处理上都指向虚拟文件系统。这些来自用户进程的调用，都是标准 的POSIX系统调用，比如open、read write和lseek等。因此，虚拟文件系统对用户进程有一个“更高层”接口， 它就是著名的POSIX接口。")]),a._v(" "),t("p",[a._v("VFS也有一个对于实际文件系统的“更低层”接口，就是在图4-18中被标记为VFS接口的部分。这个接口 包含许多功能调用，这样VFS可以使每一个文件系统完成任务。因此，当创造一个新的文件系统和VFS一起 工作时，新文件系统的设计者就必须确定它提供VFS所需要的功能调用。关于这个功能的一个明显的例子就 是从磁盘中读某个特定的块，把它放在文件系统的高速缓冲中，并且返回指向它的指针。因此，VFS有两个不同的接口:上层给用户进程的接口和下层给实际文件系统的接口。")]),a._v(" "),t("h2",{attrs:{id:"文件系统优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件系统优化"}},[a._v("#")]),a._v(" 文件系统优化")]),a._v(" "),t("p",[t("strong",[a._v("数据块")])]),a._v(" "),t("p",[a._v("磁盘以及文件读取以数据块为单位（数据块大小与存储利用率，存取时间效率相关）")]),a._v(" "),t("p",[t("strong",[a._v("记录空闲快")])]),a._v(" "),t("p",[a._v("空闲链表法和位图法")]),a._v(" "),t("p",[a._v("磁盘块链表，每个块中包含尽可能多的空闲磁盘块号。")]),a._v(" "),t("p",[a._v("n个块的磁盘需要n位位图。在位图中，空闲块用1表示， 已分配块用0表示(或者反之)。对于500GB磁盘的例子，需要488×106 位表示，即需要60 000个1KB块存 储。很明显，位图方法所需空间较少，因为每块只用一个二进制位标识，相反在链表方法中，每一块要用到 32位。只有在磁盘快满时(即几乎没有空闲块时)链表方案需要的块才比位图少。")])])}),[],!1,null,null,null);t.default=_.exports}}]);