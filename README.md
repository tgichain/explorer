# TGIC区块浏览器（社区版）

TGIC区块浏览器，只需要web环境就可以部署搭建。



## 部署方法

### IIS

直接放入网站根目录即可。

### Apache

`httpd-vhost.conf`配置说明

```ini
# 你的端口
<VirtualHost *:80> 
	 # 你的域名
　　ServerName www.test1.com 
　　# 存放的目录
　　DocumentRoot /www/test1/
　　# 存放的目录
　　<Directory "/www/test1">
 　　　　Options Indexes FollowSymLinks
　　　　 AllowOverride None
　　　　 Order allow,deny
　　 　　Allow From All
 　 </Directory>
</VirtualHost>
```



### Nginx

`nginx.conf` 配置说明

```ini
server {

  listen       80;
  server_name  1.1.1.1;    #这里输入您的IP或域名
  root /home/www;         #这里文件存放的目录
  charset utf-8;

  #access_log  logs/host.access.log  main;

  location / {
  	index  index.html index.htm;
  }
}
```



## FAQ

### 如何修改节点地址？

修改`js/app.js`
```
const server_url = "http://49.4.10.4:4100/"
```
直接把这行代码中的IP和端口修改成自己节点的IP和端口

### 如何修改钱包地址为中文？

修改`js/username.js`
```
const username = {

    'MGmTbvos2VSQAecLraMW3WR1rLncbuk1aJ': 'TGIC',
    'MKkKysXYEuUEWA3UctCREERjrz1r2cwBiS': '欢乐彩票',
    'MC7kMPonnqTQrojbZw5WdhFUhmj5iUVQu3': '欢乐4+1',
    'MTMijUsYGUmCGGqwfhHyZF73jXX7rK5BgC': '团队',
    'M7uLG9s12buf8bRGST7xS94gHmLxhZWbjz': 'bitker交易所',
    'MJg82TKjDEHEujfmt5yzNuSF3C5MEY1jF2': 'MXC交易所',
    'MUAs7MGArEvYHHnNpLSddnvgzYGd8XG3UD': 'Bitz交易所',
    'MBYLq5mfZgSw6hjrvLZPU2Ur6z99Lpnpps': 'CEO交易所',
    'MMZdwvwTyzBRYd3ZsvL8rgngUAdXwogEWU': '数字资产托管',
    'MBmMXdGyVcDSh7TcwgVJAHA1iKXa56RHa8': '数字资产交换',
    'MBZknz7dA6Q1o6BdQ4So6YByNWRjet34ZS': '基金会'
}
```
