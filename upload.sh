#！/bin/bash
if [ `ls /Users/kkxu/NodeProjects/ifan/ifan/images/ | wc | awk '{print $1}'` -gt 0 ]
then
     for f in `ls /Users/kkxu/NodeProjects/ifan/ifan/images/`
     do
        expect -c "
        spawn scp -r /Users/kkxu/NodeProjects/ifan/ifan/images/$f root@8.130.25.175:/home/xukang/images
        expect {
            \"*password\" {set timeout 300; send \"ROOTroot1@\r\"}
        }
        expect eof"
     done
     echo "图片上传成功至服务器8.130.25.175:/home/xukang/images目录"
else
        echo "没有文件"
fi

## 删除本机存储的图片副本
rm -rf /Users/kkxu/NodeProjects/ifan/ifan/images/*
