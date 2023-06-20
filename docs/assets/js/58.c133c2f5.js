(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{328:function(a,s,t){"use strict";t.r(s);var l=t(14),e=Object(l.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"编译mysql源码并执行-mac-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译mysql源码并执行-mac-version"}},[a._v("#")]),a._v(" 编译MySQL源码并执行-mac-version")]),a._v(" "),s("p",[a._v("在macOS上下载、编译和执行MySQL源代码需要以下步骤：")]),a._v(" "),s("ol",[s("li",[a._v("安装必要的软件包和依赖项")])]),a._v(" "),s("p",[a._v("在macOS上编译MySQL源代码需要一些软件包和依赖项，包括CMake、make、gcc、g++、bison等。您可以使用Homebrew包管理器来安装这些软件包和依赖项，使用以下命令：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install cmake make gcc bison\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("下载MySQL源代码")])]),a._v(" "),s("p",[a._v("您可以从MySQL官方网站上下载MySQL源代码，使用以下命令：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("下载MySQL源码\n地址：https://github.com/mysql/mysql-server\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("解压MySQL源代码")])]),a._v(" "),s("p",[a._v("使用以下命令解压MySQL源代码：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar -zxvf mysql\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("配置和编译MySQL源代码")])]),a._v(" "),s("p",[a._v("进入解压后的MySQL源代码目录，使用以下命令进行配置和编译：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1.cd mysql\n2.cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/usr/local/Cellar/boost/1.76.0_3  （/usr/local/Cellar/boost/1.76.0_3这个目录需要下载一个称为boost的文件，mysql会提供一个下载源，下载这个压缩文件并放置到/usr/local/Cellar/boost/目录下就可以了，我实际执行的语句为：\ncmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/usr/local/Cellar/boost/1.76.0_3 -DFORCE_INSOURCE_BUILD=1 -DDOWNLOAD_BOOST=1 -DWITH_BOOST=/Users/kkxu/Downloads/）\n3.make\n4.make install\n")])])]),s("p",[a._v("其中，"),s("code",[a._v("CMAKE_INSTALL_PREFIX")]),a._v("指定MySQL安装目录，"),s("code",[a._v("MYSQL_DATADIR")]),a._v("指定MySQL数据存储目录，"),s("code",[a._v("WITH_BOOST")]),a._v("指定Boost库的位置。请根据您的实际情况修改这些参数。")]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[a._v("初始化MySQL数据库")])]),a._v(" "),s("p",[a._v("使用以下命令初始化MySQL数据库：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1.cd /usr/local/mysql\n2.sudo ./bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data （这里可能出现的一个情况是/usr/local/mysql/data里面原本存在数据，比如以前安装过mysql，这个就存在数据，需要删除里面的数据）\n")])])]),s("p",[a._v("其中，"),s("code",[a._v("--initialize")]),a._v("选项用于初始化MySQL数据库，"),s("code",[a._v("--user")]),a._v("选项指定MySQL运行用户，"),s("code",[a._v("--basedir")]),a._v("选项指定MySQL安装目录，"),s("code",[a._v("--datadir")]),a._v("选项指定MySQL数据存储目录。")]),a._v(" "),s("p",[a._v("这一步执行完毕后会提供一个随机密码，需要使用这个密码登录mysql")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230620211150454.png",alt:"image-20230620211150454"}})]),a._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[a._v("启动MySQL服务器")])]),a._v(" "),s("p",[a._v("使用以下命令启动MySQL服务器：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo ./bin/mysqld_safe --user=mysql &\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("连接到MySQL服务器")])]),a._v(" "),s("p",[a._v("使用以下命令连接到MySQL服务器：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -uroot -p\n")])])]),s("p",[a._v("其中，"),s("code",[a._v("-uroot")]),a._v("选项指定连接MySQL服务器的用户名为root，"),s("code",[a._v("-p")]),a._v("选项表示需要输入密码。根据提示输入密码即可。")]),a._v(" "),s("p",[a._v("以上就是在macOS上下载、编译和执行MySQL源代码的详细步骤。请注意，在生产环境中需要采取更多的安全措施，并遵循MySQL的最佳实践。")])])}),[],!1,null,null,null);s.default=e.exports}}]);