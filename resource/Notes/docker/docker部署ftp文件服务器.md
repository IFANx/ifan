# Docker创建FTP服务器

现在账户密码均为root，挂在目录为/opt/vsftpd/file

https://blog.csdn.net/qq_25955145/article/details/123923695

Docker创建FTP服务器
一.创建命令如下
docker run -d -p  21:21 -p  20:20 -p 21100-21110:21100-21110 -v /opt/vsftpd/file:/home/vsftpd -e FTP_USER=root -e FTP_PASS=root   -e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 -e PASV_ADDRESS=8.130.25.175 -e PASV_ENABLE=YES --name ftp -- --privileged=true fauria/vsftpd
1
二.命令含义
参数	含义
-d	后台启动容器
-p 20:20	将外部的20端口映射到内部的20端口
-p 21:21	将外部的21端口映射到内部的21端口
-p 21100-21110:21100-21110	将外部的 21100-21110端口映射到内部的21100-21110端口
-v /opt/vsftpd/file:/home/vsftpd	将本地磁盘的 /opt/vsftpd/file路径映射到内部的/home/vsftpd路径
-e FTP_USER=admin	ftp的主用户
-e FTP_PASS=1234	ftp主用户的密码
-e PASV_MIN_PORT=21100	最小被动端口
-e PASV_MAX_PORT=21110	最大被动端口
-e PASV_ADDRESS=10.73.139.201	指定本机的ip
-e PASV_ENABLE=YES	启动被动模式
–name ftp	取一个名字，之后可以用(docker stop 名字 )来停止容器
–restart=always	开机自启动
–privileged=true	容器内用户获取root权限
fauria/vsftpd	仓库的镜像
三.客户端连接
1.客户端可以直接安装filezilla进行连接
如果你的客户端连接不上，你需要用telnet命令来看下

telnet  10.73.139.201 21
1
如果报错，那可能是防火墙没有打通

2.如果是mac用户，也可以用终端的ftp命令进行连接
ftp 10.73.139.201
1
输入账号admin，密码1234

然后ls命令，如果报错

500 Illegal PORT command.
500 Unknown command.
425 Use PORT or PASV first.
1
2
3
可以在ftp下执行以下命令

pass
1
输出

Passive mode on
1
这个时候，就可以正常的ls了

四.创建新用户
1.尝试进入容器内部进行交互
docker exec -i -t ftp bash
1
参数	含义
-i	连接容器的STDIN和容器外的STDIN
-t	告诉 docker 内部的主进程它的输入是终端设备
ftp	指定要进入的容器的名字（这个是在创建的时候使用–name指定的）
bash	使用bash作为终端
2.给新的用户创建文件夹
新用户：张三
文件夹：zhangsan
mkdir /home/vsftpd/zhangsan
1
注意：该命令在容器内执行

3.将账号密码信息写入文件
echo -e "zhangsan\n123456" >> /etc/vsftpd/virtual_users.txt
1
注意：该命令在容器内执行

4.使用脚本读取刚刚写入的文件
/usr/bin/db_load -T -t hash -f /etc/vsftpd/virtual_users.txt /etc/vsftpd/virtual_users.db
1
注意：该命令在容器内执行

5.退出容器
exit
1
注意：该命令在容器内执行

6.重启ftp
docker restart ftp
1
此时，下面的账号密码就可以登录ftp

属性	值
账号	zhangsan
密码	123456
————————————————