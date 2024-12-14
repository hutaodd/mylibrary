---
created: 2024-12-12T01:44
tag: golang入门到精通
title: Golang安装
updated: 2024-12-15T00:54
---

开启go modules,命令行执行以下命令：
`go env -w GO111MODULE=on`
设置国内代理,命令行执行以下命令:
`go env -w GOPROXY=https://proxy.golang.com.cn,https://goproxy.cn,direct`
查看go环境信息,命令行执行:
`go env`