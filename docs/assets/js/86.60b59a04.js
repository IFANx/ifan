(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{358:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"编译mysql源码并执行-mac-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译mysql源码并执行-mac-version"}},[s._v("#")]),s._v(" 编译MySQL源码并执行-mac-version")]),s._v(" "),a("p",[s._v("在macOS上下载、编译和执行MySQL源代码需要以下步骤：")]),s._v(" "),a("ol",[a("li",[s._v("安装必要的软件包和依赖项")])]),s._v(" "),a("p",[s._v("在macOS上编译MySQL源代码需要一些软件包和依赖项，包括CMake、make、gcc、g++、bison等。您可以使用Homebrew包管理器来安装这些软件包和依赖项，使用以下命令：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install cmake make gcc bison\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("下载MySQL源代码")])]),s._v(" "),a("p",[s._v("您可以从MySQL官方网站上下载MySQL源代码，使用以下命令：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("下载MySQL源码\n地址：https://github.com/mysql/mysql-server\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("解压MySQL源代码")])]),s._v(" "),a("p",[s._v("使用以下命令解压MySQL源代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -zxvf mysql\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("配置和编译MySQL源代码")])]),s._v(" "),a("p",[s._v("进入解压后的MySQL源代码目录，使用以下命令进行配置和编译：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.cd mysql\n2.cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/usr/local/Cellar/boost/1.76.0_3  （/usr/local/Cellar/boost/1.76.0_3这个目录需要下载一个称为boost的文件，mysql会提供一个下载源，下载这个压缩文件并放置到/usr/local/Cellar/boost/目录下就可以了，我实际执行的语句为：\n第四步骤 第二个指令：cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/Users/kkxu/Downloads/mysqlboost/ -DFORCE_INSOURCE_BUILD=1）\n3.make\n4.make install（实际执行sudo make install）\n")])])]),a("p",[s._v("其中，"),a("code",[s._v("CMAKE_INSTALL_PREFIX")]),s._v("指定MySQL安装目录，"),a("code",[s._v("MYSQL_DATADIR")]),s._v("指定MySQL数据存储目录，"),a("code",[s._v("WITH_BOOST")]),s._v("指定Boost库的位置。请根据您的实际情况修改这些参数。")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("初始化MySQL数据库")])]),s._v(" "),a("p",[s._v("使用以下命令初始化MySQL数据库：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.cd /usr/local/mysql\nsudo cp -r /usr/local/mysql/data/ /Users/kkxu/Downloads/backup3/\nsudo rm -rf /usr/local/mysql/data\n2.sudo ./bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data （这里可能出现的一个情况是/usr/local/mysql/data里面原本存在数据，比如以前安装过mysql，这个就存在数据，需要删除里面的数据）\n\n")])])]),a("p",[s._v("其中，"),a("code",[s._v("--initialize")]),s._v("选项用于初始化MySQL数据库，"),a("code",[s._v("--user")]),s._v("选项指定MySQL运行用户，"),a("code",[s._v("--basedir")]),s._v("选项指定MySQL安装目录，"),a("code",[s._v("--datadir")]),s._v("选项指定MySQL数据存储目录。")]),s._v(" "),a("p",[s._v("这一步执行完毕后会提供一个随机密码，需要使用这个密码登录mysql")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://8.130.25.175:8080/img/image-20230620211150454.png",alt:"image-20230620211150454"}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("启动MySQL服务器")])]),s._v(" "),a("p",[s._v("使用以下命令启动MySQL服务器：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo ./bin/mysqld_safe --user=mysql &\n")])])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("##启动MySQL服务\nsudo /usr/local/MySQL/support-files/mysql.server start\n\n##停止MySQL服务\nsudo /usr/local/mysql/support-files/mysql.server stop\n\n##重启MySQL服务\nsudo /usr/local/mysql/support-files/mysql.server restart\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("连接到MySQL服务器")])]),s._v(" "),a("p",[s._v("使用以下命令连接到MySQL服务器：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql -uroot -p\n")])])]),a("p",[s._v("其中，"),a("code",[s._v("-uroot")]),s._v("选项指定连接MySQL服务器的用户名为root，"),a("code",[s._v("-p")]),s._v("选项表示需要输入密码。根据提示输入密码即可。")]),s._v(" "),a("p",[s._v("以上就是在macOS上下载、编译和执行MySQL源代码的详细步骤。请注意，在生产环境中需要采取更多的安全措施，并遵循MySQL的最佳实践。")]),s._v(" "),a("p",[s._v("8.使用上面的随机密码登录mysql之后，需要输入更新密码。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';\n")])])]),a("p",[s._v("9.新建schema")]),s._v(" "),a("p",[s._v("新建数据表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    c0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    c1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" tt_pk\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("10.使用查看插入执行函数名，文件，行是否修改")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SET PROFILING=1;\nSELECT * FROM qq.tt where c0=1;\nSHOW PROFILE SOURCE;\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-DCMAKE_BUILD_TYPE=Debug\n-DWITH_BOOST=/Users/kkxu/Downloads/mysqlboost/boost_1_77_0\n-DCMAKE_INSTALL_PREFIX=/Users/kkxuOpenSource/mysql-server/build \n#编译路径与安装路径需一致\n-DMYSQL_DATADIR=/Users/kkxu/OpenSource/mysql-server/build/data \n#数据库初始化路径\n-DSYSCONFDIR=/Users/kkxu/OpenSource/mysql-server/build\n-DMYSQL_UNIX_ADDR=/Users/kkxu/OpenSource/mysql-server/build/data/mysql.sock\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);