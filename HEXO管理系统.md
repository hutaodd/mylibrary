---
created: 2024-12-14T16:42
updated: 2024-12-14T16:58
title: HEXO管理系统
---
## 资源管理
- 资源保存路径
	- F:\HEXO\mikufun\themes\anzhiyu\source\assets
- 资源默认路径
	- assets/Pasted%20image%2020241214164718.png
- 需要的路径
	- assets/Pasted%20image%2020241214163105.png
解决步骤
1. 获取obsidian库的路径,和assets资源文件夹的路径
2. 获取hexo网站的根目录,和主题目录下的source文件夹路径
3. 修改笔记
	1. 遍历obsidian下的笔记,把笔记的名字作为title属性的文章名
	2. 给笔记加tag,在哪个文件加