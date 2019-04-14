# explorer

TGIC新版本浏览器，只需要web环境就可以搭建，请放在根目录使用

节点安装区块链浏览器步骤

1.安装nginx或其他

2.配置 nginx.con


3.完成

nginx.conf 配置说明


server {

        listen       8080;
        server_name  这里输入您的IP;
        root /home/www;         这里是写你文件存放的目录
        charset utf-8;

        #access_log  logs/host.access.log  main;

        location / {
            index  index.html index.htm;
          }
         }

# 如何打造自己的节点的区块链浏览器？

修改js/app.js
```
const server_url = "http://49.4.10.4:4100/"
```
直接把这行代码中的IP和端口修改成自己节点的IP和端口
