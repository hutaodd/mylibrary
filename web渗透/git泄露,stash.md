---
title: git泄露,stash
date: 2024-11-12T13:18:10Z
lastmod: 2024-11-12T13:18:37Z
---

# git泄露,stash

* stash是git的一个操作命令
* git stash list 查看隐藏的记录
* git stash pop 恢复隐藏的内容，同时删除隐藏记录
* git stash apply 恢复隐藏的内容，但不会删除隐藏记录
* 使用stash pop/apply可以选择恢复哪条记录，如恢复stash@{1}记录,则使用git stash pop stash@{1}或者git stash apply stash@{1}
