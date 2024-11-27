---
title: git泄露,log
date: 2024-11-12T13:12:51Z
lastmod: 2024-11-12T13:17:33Z
---

# git泄露,log

使用githack工具还原git库,git库里记录文件操作,可以查询信息

注意要使用python2 运行

```shell
python2 GitHack.py http://challenge-408f3b6ae078d0dc.sandbox.ctfhub.com:10800/.git/
```

​![image](assets/image-20241112131527-7l2nh1e.png)​

使用`git log`​显示信息

‍

​![image](assets/image-20241112131653-uwasz8c.png)​

使用`git diff <comment>`​查看操作信息

‍
