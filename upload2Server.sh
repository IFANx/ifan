#!/usr/bin/expect
#filename scp.exp
spawn ./try.sh /Users/kkxu/NodeProjects/ifan/ifan/docs/* root@8.130.25.175:/usr/tomcat/tomcat8.5/webapps/ifan
expect "password:"
send "ROOTroot1@\n"
expect eof