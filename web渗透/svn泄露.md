---
cover: https://w.wallhaven.cc/full/mp/wallhaven-mpv5vm.png
created: 2024-11-27T22:18
date: 2024-11-12 13:38:54+00:00
lastmod: 2024-11-12 13:59:43+00:00
tag: web渗透
title: svn泄露
updated: 2024-12-30T23:33
---



# svn泄露

*SVN是源代码本本管理软件。使用SVN管理本地代码过程中，会生成一个名为.svn的隐藏文件夹，其中包含重要的源码信息。网站管理员在发布代码时，没有使用导出功能，直接进行复制粘贴。*   
漏洞例子：`xxxx/.svn/entries`​

使用[dvcs-ripper](https://github.com/kost/dvcs-ripper)

[kost/dvcs-ripper：Rip Web 可访问（分布式）版本控制系统：SVN/GIT/HG... --- kost/dvcs-ripper: Rip web accessible (distributed) version control systems: SVN/GIT/HG...](https://github.com/kost/dvcs-ripper)

Rip Web 可访问（分布式）版本控制系统：SVN、GIT、Mercurial/hg、bzr、...

即使目录浏览关闭，它也可以翻录存储库。

确保将自己置于要下载/克隆存储库的空目录中。

​`sudo apt-get install perl libio-socket-ssl-perl libdbd-sqlite3-perl libclass-dbi-perl libio-all-lwp-perl`​

安装依赖

​`git clone https://github.com/kost/dvcs-ripper.git`​下载仓库

进入文件夹使用ripper

​`./rip-svn.pl -u http://challenge-8efe9a7f8fc2b4e1.sandbox.ctfhub.com:10800/.svn/`​

‍
