---
cover: https://w.wallhaven.cc/full/2e/wallhaven-2elvkx.png
created: 2024-12-14T16:42
tag: HEXO管理系统
tags:
  - HEXO管理系统
title: HEXO管理系统
updated: 2024-12-30T23:33
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
遍历obsidian根目录下的所有markdown文章,查看他们的yaml front matter,把他们的title和tag属性全删掉,然后把文章的文件名当作title写进去,把文章所在文件夹的名字当作tag写入,如果文章在obsidan根目录,那就不用再需要写他们的tag,删掉title和tag后把文章的文件名当作title添加上就行

先把hexo的_post目录F:\HEXO\mikufun\source\_posts下的内容全删了,然后遍历obsidan根目录 F:\OneDrive - MSFT\薛谔的obsidian库下所有markdown文章,复制他们到hexo的_post目录 F:\HEXO\mikufun\source\_posts

复制assets目录

# 头图自动添加功能
## 获取wallhaven.cc的miku图链接

## 遍历obsidain下文章,如果文章没有cover,给文章添加cover,值为获取的miku图

# 主题颜色
主题颜色在F:\HEXO\mikufun\themes\anzhiyu\source\css\var.styl里--zhihuyu-them属性