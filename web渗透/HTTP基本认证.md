---
cover: https://w.wallhaven.cc/full/42/wallhaven-425gy4.jpg
created: 2024-11-27T22:18
date: 2024-11-12 01:35:58+00:00
lastmod: 2024-11-12 01:40:38+00:00
tag: web渗透
tags:
  - web渗透
title: HTTP基本认证
updated: 2024-12-30T23:33
---



# HTTP基本认证

#### 3.客户端请求（有认证信息）

用户名“Aladdin”，密码 “open sesame”

```
GET /private/index.html HTTP/1.0
Host: localhost
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

[HTTP基本认证 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81)

根据http基本认证的原理,用户名密码写在Authorization里,用burp撞库就行

根据返回值可以确定使用了什么加密方法

​![image](assets/image-20241112014013-zaj2znh.png)​

​![image](assets/image-20241112013659-0o5lcuj.png)​

​![image](assets/image-20241112013632-zq86wxd.png)​
