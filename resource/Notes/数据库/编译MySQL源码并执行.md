## 编译MySQL源码并执行-mac-version



在macOS上下载、编译和执行MySQL源代码需要以下步骤：

1. 安装必要的软件包和依赖项

在macOS上编译MySQL源代码需要一些软件包和依赖项，包括CMake、make、gcc、g++、bison等。您可以使用Homebrew包管理器来安装这些软件包和依赖项，使用以下命令：

```
brew install cmake make gcc bison
```

2. 下载MySQL源代码

您可以从MySQL官方网站上下载MySQL源代码，使用以下命令：

```
下载MySQL源码
地址：https://github.com/mysql/mysql-server
```

3. 解压MySQL源代码

使用以下命令解压MySQL源代码：

```
tar -zxvf mysql
```

4. 配置和编译MySQL源代码

进入解压后的MySQL源代码目录，使用以下命令进行配置和编译：

```
1.cd mysql
2.cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/usr/local/Cellar/boost/1.76.0_3  （/usr/local/Cellar/boost/1.76.0_3这个目录需要下载一个称为boost的文件，mysql会提供一个下载源，下载这个压缩文件并放置到/usr/local/Cellar/boost/目录下就可以了，我实际执行的语句为：
cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=/usr/local/Cellar/boost/1.76.0_3 -DFORCE_INSOURCE_BUILD=1 -DDOWNLOAD_BOOST=1 -DWITH_BOOST=/Users/kkxu/Downloads/）
3.make
4.make install
```

其中，`CMAKE_INSTALL_PREFIX`指定MySQL安装目录，`MYSQL_DATADIR`指定MySQL数据存储目录，`WITH_BOOST`指定Boost库的位置。请根据您的实际情况修改这些参数。

5. 初始化MySQL数据库

使用以下命令初始化MySQL数据库：

```
1.cd /usr/local/mysql
2.sudo ./bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data （这里可能出现的一个情况是/usr/local/mysql/data里面原本存在数据，比如以前安装过mysql，这个就存在数据，需要删除里面的数据）
```

其中，`--initialize`选项用于初始化MySQL数据库，`--user`选项指定MySQL运行用户，`--basedir`选项指定MySQL安装目录，`--datadir`选项指定MySQL数据存储目录。

这一步执行完毕后会提供一个随机密码，需要使用这个密码登录mysql

![image-20230620211150454](http://8.130.25.175:8080/img/image-20230620211150454.png)

6. 启动MySQL服务器

使用以下命令启动MySQL服务器：

```
sudo ./bin/mysqld_safe --user=mysql &
```

7. 连接到MySQL服务器

使用以下命令连接到MySQL服务器：

```
mysql -uroot -p
```

其中，`-uroot`选项指定连接MySQL服务器的用户名为root，`-p`选项表示需要输入密码。根据提示输入密码即可。

以上就是在macOS上下载、编译和执行MySQL源代码的详细步骤。请注意，在生产环境中需要采取更多的安全措施，并遵循MySQL的最佳实践。