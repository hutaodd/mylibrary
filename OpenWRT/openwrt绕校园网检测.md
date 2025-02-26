---
created: 2025-02-26T11:59
updated: 2025-02-26T13:43
---
## 原理
使用openwrt配合插件设置,反ua检测,反ipid检测,反ttl检测,反flashcookie检测,反时间戳检测
## 使用插件
### 反ua检测
#### UA3F
> [GitHub](https://github.com/SunBK201/UA3F)
> [UA3F 与 Clash 从零开始的部署教程](https://sunbk201public.notion.site/UA3F-Clash-16d60a7b5f0e457a9ee97a3be7cbf557?pvs=4)
### 反ipid检测
#### rkp-ipid
> [GitHub](https://github.com/CHN-beta/rkp-ipid)

### 反ttl检测
#### Kmod-iptables-ipot
### 反flashcookie检测
#### 内置防火墙组件
### 反时间戳检测
#### 内置NTP服务器

小米路由器刷bread后台
https://www.cnblogs.com/travis-ge/articles/17740005.html
https://github.com/acecilia/OpenWRTInvasion
https://breed.hackpascal.net/

UA3F 与 Clash 从零开始的部署教程
https://sunbk201public.notion.site/UA3F-Clash-16d60a7b5f0e457a9ee97a3be7cbf557#a2c72a92b297442ca7cc114e7668a310

openwrt官网
https://openwrt.org/inbox/toh/xiaomi/xiaomi_mi_router_4a_gigabit_edition

 [openwrt.ai](https://openwrt.ai/)在线编译定制专属固件

https://openwrt.ai/?target=ramips%2Fmt7621&id=xiaomi_mi-router-4a-gigabit



|                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1<br><br>2<br><br>3<br><br>4<br><br>5<br><br>6<br><br>7<br><br>8<br><br>9<br><br>10<br><br>11 | `由于本小姐并没有参与改写源代码，只是把别人的拿来用，所以不会复制一份托管到平台。`<br><br>`在这只是根据GPL协议的要求，来公开自己使用过的代码`<br><br>`这里准备的源代码包含`<br><br>`https://github.com/Zxilly/UA2F`<br><br>`https://github.com/CHN-beta/rkp-ipid`<br><br>`https://github.com/jerrykuku/luci-theme-argon`<br><br>`https://github.com/jerrykuku/luci-app-argon-config`<br><br>`https://github.com/lucikap/luci-app-ua2f`<br><br>`https://github.com/linkease/istore`<br><br>`https://github.com/openwrt/openwrt` |


 luci-app-autotimeset luci-app-ttyd luci-app-argon-config kmod-rkp-ipid iptables-mod-filter iptables-mod-ipopt iptables-mod-u32
iptables-nft kmod-ipt-ipopt ipset iptables-mod-conntrack-extra