---
cover: https://w.wallhaven.cc/full/g7/wallhaven-g7l9dl.png
created: 2024-11-27T22:18
date: 2024-11-12 02:37:43+00:00
lastmod: 2024-11-12 13:12:49+00:00
tag: web渗透
tags:
  - web渗透
title: DS_Store
updated: 2024-12-30T23:33
---



# DS_Store

## 存放

默认情况下，Mac OS X的[Finder](https://zh.wikipedia.org/wiki/Finder "Finder")程序会在进行存取的每个目录下创建.DS\_Store文件，甚至是在远程系统上的目录（例如通过[SMB](https://zh.wikipedia.org/wiki/%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A8%8A%E6%81%AF%E5%8D%80%E5%A1%8A "服务器讯息区块")连接或者[苹果文件协议](https://zh.wikipedia.org/wiki/%E8%8B%B9%E6%9E%9C%E6%96%87%E4%BB%B6%E5%8D%8F%E8%AE%AE)连接来共享的目录），并且甚至如果用户仅仅通过移动该目录的Finder窗口自定义了其显示。 这与既存的在先前版本的Finder中为了同样目的所使用的方式的系统形成了对比，先前的只会放置一些不可见文件于卷的根目录下（甚至在外部[文件系统](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F "文件系统")上），并总是将整个驱动器的所有目录的设置与元数据存储在这类文件的单一集合中。

## 禁用或启用自动生成

可通过Terminal输入以下命令来禁止或恢复在网络文件夹上自动生成.DS\_Store：

* 禁止.DS\_store生成：

​`defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE`​

* 恢复.DS\_store生成：

​`defaults delete com.apple.desktopservices DSDontWriteNetworkStores`​

可通过Terminal输入以下命令来禁止或恢复在移动设备自动生成.DS\_Store：

* 禁止.DS\_store生成：

​`defaults write com.apple.desktopservices DSDontWriteUSBStores -bool TRUE`​

* 恢复.DS\_store生成：

​`defaults delete com.apple.desktopservices DSDontWriteUSBStores`​

​![image](assets/image-20241112030137-b64jqpm.png)​

使用cat命令读取

‍
