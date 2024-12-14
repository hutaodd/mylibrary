---
created: 2024-12-14T16:42
updated: 2024-12-14T23:16
title: HEXO管理系统
---
# 同步
## 资源管理
- hexo根目录
	- F:\HEXO\mikufun\themes\anzhiyu\source\assets
- obsidan根目录
	- 
## 解决步骤
1. 获取obsidian库的路径,和assets资源文件夹的路径
2. 获取hexo网站的根目录,和主题目录下的source文件夹路径
3. 修改笔记
	1. 遍历obsidian下的笔记,把笔记的名字作为title属性的文章名
		 - 如果已经是了就不改了
	2. 给笔记加tag,
		- 如果在哪个文件夹下就加哪个tag
		- 如果已经有了就不加了
4. 把obsidian下的assets目录覆盖资源保存路径下的assets文件夹
	- 如果没有目录就是复制到那个目录下
同步hexo d