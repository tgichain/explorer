# explorer

TGIC新版本浏览器，只需要web环境就可以搭建，请放在根目录使用

windows可以直接在IIS中使用

节点安装区块链浏览器步骤 linux 为例：

1.安装nginx或其他

2.配置 nginx.conf


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

# 如何配置自己节点的区块链浏览器让它显示中文？

修改js/username.js
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

钱包地址对应自己希望显示的中文名字
