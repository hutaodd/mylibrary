---
title: DS_Store
date: 2024-11-12T02:37:43Z
lastmod: 2024-11-12T13:12:49Z
---

# DS_Store

 **.DS_Store** (英文全称 **Desktop Services Store**)<sup>[[1]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-arnostore-1)</sup> 是一种由[苹果公司](https://zh.wikipedia.org/wiki/%E8%8B%B9%E6%9E%9C%E5%85%AC%E5%8F%B8 "苹果公司")的 [Mac OS X](https://zh.wikipedia.org/wiki/Mac_OS_X "Mac OS X") [操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F "操作系统")所创造的[隐藏文件](https://zh.wikipedia.org/wiki/%E9%9A%B1%E8%97%8F%E6%AA%94%E6%A1%88%E6%88%96%E9%9A%B1%E8%97%8F%E7%9B%AE%E9%8C%84 "隐藏档案或隐藏目录")，目的在于存贮[目录](https://zh.wikipedia.org/wiki/%E7%9B%AE%E5%BD%95_(%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F) "目录 (文件系统)")的自定义属性，例如文件们的[图标](https://zh.wikipedia.org/wiki/%E5%9C%96%E6%A8%99 "图标")位置或者是背景色的选择。<sup>[[2]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-2)</sup>该文件由 [Finder](https://zh.wikipedia.org/wiki/Finder "Finder") 创建并维护，类似于 [Microsoft Windows](https://zh.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") 中的 [desktop.ini](https://zh.wikipedia.org/w/index.php?title=INI_%E6%96%87%E4%BB%B6&action=edit&redlink=1 "INI 文件（页面不存在）") 文件。

## 目的

尽管这些文件本来是为[Finder](https://zh.wikipedia.org/wiki/Finder "Finder")所使用，但它们被设想作为一种更通用的有关显示设置的[元数据](https://zh.wikipedia.org/wiki/%E5%85%83%E6%95%B0%E6%8D%AE "元数据")存储，诸如图标位置和视图设置。<sup>[[1]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-arnostore-1)</sup> 例如，在[Mac OS X 10.4 &quot;Tiger&quot;](https://zh.wikipedia.org/wiki/Mac_OS_X_v10.4 "Mac OS X v10.4")中.DS\_Store包含了一目录的所有文件的[Spotlight](https://zh.wikipedia.org/wiki/Spotlight "Spotlight")注释。然而，在[Mac OS X 10.5 &quot;Leopard&quot;](https://zh.wikipedia.org/wiki/Mac_OS_X_v10.5 "Mac OS X v10.5")中这种方式又被更改了，注释（现称为关键字）被改成存储在了[扩展文件属性](https://zh.wikipedia.org/wiki/%E6%89%A9%E5%B1%95%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7 "扩展文件属性")中。<sup>[[来源请求]](https://zh.wikipedia.org/wiki/Wikipedia:%E5%88%97%E6%98%8E%E6%9D%A5%E6%BA%90 "Wikipedia:列明来源")</sup>

## 存放

默认情况下，Mac OS X的[Finder](https://zh.wikipedia.org/wiki/Finder "Finder")程序会在进行存取的每个目录下创建.DS\_Store文件，甚至是在远程系统上的目录（例如通过[SMB](https://zh.wikipedia.org/wiki/%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A8%8A%E6%81%AF%E5%8D%80%E5%A1%8A "服务器讯息区块")连接或者[苹果文件协议](https://zh.wikipedia.org/wiki/%E8%8B%B9%E6%9E%9C%E6%96%87%E4%BB%B6%E5%8D%8F%E8%AE%AE)连接来共享的目录），并且甚至如果用户仅仅通过移动该目录的Finder窗口自定义了其显示。<sup>[[3]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-3)</sup> 这与既存的在先前版本的Finder中为了同样目的所使用的方式的系统形成了对比，先前的只会放置一些不可见文件于卷的根目录下（甚至在外部[文件系统](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F "文件系统")上），并总是将整个驱动器的所有目录的设置与元数据存储在这类文件的单一集合中。

在[Mac OS X 10.5 &quot;Leopard&quot;](https://zh.wikipedia.org/wiki/Mac_OS_X_v10.5 "Mac OS X v10.5")发布前，.DS\_Store文件在[Windows](https://zh.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows")的文件系统上是可见的。<sup>[[4]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-4)</sup>

在收到用户们对远程系统上.DS\_Store文件会自动创建的投诉之后，苹果公司在其技术支持站点发表了一篇文章，详细讲述了如何禁止远程.DS\_Store文件利用网络连接进行的创建。<sup>[[5]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-5)</sup> 然而，这一操作指南并不适用于本地驱动器，包括[USB](https://zh.wikipedia.org/wiki/USB "USB")​[闪存盘](https://zh.wikipedia.org/wiki/%E9%97%AA%E5%AD%98%E7%9B%98 "闪存盘").

## 禁用或启用自动生成

可通过Terminal输入以下命令来禁止或恢复在网络文件夹上自动生成.DS\_Store：

* 禁止.DS\_store生成：

​`defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE`​

* 恢复.DS\_store生成：

​`defaults delete com.apple.desktopservices DSDontWriteNetworkStores`​

可通过Terminal输入以下命令来禁止或恢复在移动设备自动生成.DS\_Store<sup>[[6]](https://zh.wikipedia.org/wiki/.DS_Store#cite_note-6)</sup>：

* 禁止.DS\_store生成：

​`defaults write com.apple.desktopservices DSDontWriteUSBStores -bool TRUE`​

* 恢复.DS\_store生成：

​`defaults delete com.apple.desktopservices DSDontWriteUSBStores`​

​![image](assets/image-20241112030137-b64jqpm.png)​

使用cat命令读取

‍
