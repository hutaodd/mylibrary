---
created: 2024-12-14T16:42
updated: 2024-12-14T23:44
title: HEXO管理系统
---
# 同步
## 资源管理
- hexo根目录
	- F:\HEXO\mikufun
- hexo的assets目录
	- F:\HEXO\mikufun\themes\anzhiyu\source\assets
- hexo的_post目录
	- F:\HEXO\mikufun\source\_posts
- obsidan根目录
	- F:\OneDrive - MSFT\薛谔的obsidian库
- obsidian的assets目录
	- F:\OneDrive - MSFT\薛谔的obsidian库\assets
## 解决步骤
遍历obsidian根目录下的所有文章,查看他们的yaml front matter,把他们的title和tag属性全删掉,然后把文章的文件名当作title写进去,把文章所在文件夹的名字当作tag写入.
