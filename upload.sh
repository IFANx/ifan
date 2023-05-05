#!/usr/bin/expect
#filename scp.exp
spawn ./try.sh /Users/kkxu/NodeProjects/ifan/ifan/images/* root@8.130.25.175:/home/xukang/images
expect "password:"
send "ROOTroot1@\n"
expect eof

## 删除本机存储的图片副本
exec ./clean.sh
